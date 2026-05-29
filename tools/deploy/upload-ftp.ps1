param(
  [string]$ConfigPath = (Join-Path $PSScriptRoot "ftp.local.json")
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath $ConfigPath)) {
  throw "FTP config not found: $ConfigPath"
}

$config = Get-Content -Raw -LiteralPath $ConfigPath | ConvertFrom-Json
$password = [Environment]::GetEnvironmentVariable($config.passwordEnv)

if ([string]::IsNullOrWhiteSpace($password)) {
  throw "Password environment variable is not set: $($config.passwordEnv)"
}

if ($config.protocol -ne "ftp") {
  throw "Only FTP protocol is supported by this script."
}

$localRoot = (Resolve-Path -LiteralPath $config.localPath).Path
$localRootWithSeparator = $localRoot.TrimEnd("\", "/") + [System.IO.Path]::DirectorySeparatorChar
$remoteRoot = [string]$config.remotePath
$remoteRoot = $remoteRoot.Trim("/")
$credential = [System.Net.NetworkCredential]::new($config.username, $password)

function New-FtpRequest {
  param(
    [string]$Uri,
    [string]$Method
  )

  $request = [System.Net.FtpWebRequest]::Create($Uri)
  $request.Credentials = $credential
  $request.Method = $Method
  $request.UseBinary = $true
  $request.UsePassive = $true
  $request.KeepAlive = $false
  return $request
}

function Invoke-FtpNoBody {
  param(
    [string]$Uri,
    [string]$Method
  )

  $request = New-FtpRequest -Uri $Uri -Method $Method
  try {
    $response = $request.GetResponse()
    $response.Close()
    return $true
  } catch [System.Net.WebException] {
    if ($_.Exception.Response) {
      $_.Exception.Response.Close()
    }
    return $false
  }
}

function Ensure-RemoteDirectory {
  param([string]$RelativeDirectory)

  $current = $remoteRoot
  foreach ($part in ($RelativeDirectory -split "[\\/]+" | Where-Object { $_ })) {
    $current = "$current/$part"
    [void](Invoke-FtpNoBody `
      -Uri "ftp://$($config.host):$($config.port)/$current" `
      -Method ([System.Net.WebRequestMethods+Ftp]::MakeDirectory))
  }
}

$files = Get-ChildItem -LiteralPath $localRoot -Recurse -File

foreach ($file in $files) {
  $relativePath = $file.FullName.Substring($localRootWithSeparator.Length).Replace("\", "/")
  $relativeDirectory = Split-Path -Path $relativePath -Parent

  if (-not [string]::IsNullOrWhiteSpace($relativeDirectory)) {
    Ensure-RemoteDirectory -RelativeDirectory $relativeDirectory
  }

  $uri = "ftp://$($config.host):$($config.port)/$remoteRoot/$relativePath"
  $request = New-FtpRequest -Uri $uri -Method ([System.Net.WebRequestMethods+Ftp]::UploadFile)
  $bytes = [System.IO.File]::ReadAllBytes($file.FullName)
  $request.ContentLength = $bytes.Length

  $stream = $request.GetRequestStream()
  try {
    $stream.Write($bytes, 0, $bytes.Length)
  } finally {
    $stream.Close()
  }

  $response = $request.GetResponse()
  $response.Close()
}

Write-Output "Uploaded $($files.Count) file(s) to $($config.host):/$remoteRoot/"
