# Pending Tasks

Use this file for active project-wide plans and multi-step work.

Keep entries concise and task-relevant. Do not store full diffs, large logs,
generated outputs, secrets, credentials, or private production data.

## Status Markers

- `[ ]` not started
- `[~]` in progress
- `[x]` done
- `[!]` blocked or needs attention

## Tasks

### FTP Deploy Config

Goal: Configure FTP deployment and upload the current production build.

Planned changes:

- [x] Create a local ignored FTP config in `tools/deploy/ftp.local.json`.
- [x] Upload the fresh `dist` build to the configured remote path.

Verification:

- [x] Confirm the FTP upload completes without errors.
- [x] Confirm `https://unity-constructor.site/` returns the current built asset names.

### Remove Background Grid

Goal: Remove the visible grid pattern from the active landing-page background.

Planned changes:

- [x] Replace the body grid background with a plain paper background.
- [x] Run the production build.

### Restore Design Version 1

Goal: Restore the active landing page to the first saved design version.

Planned changes:

- [x] Copy the saved v1 source, styles, and assets back into the active app.
- [x] Run the production build.

### Platformer Design Version

Goal: Create the third landing-page design version with a colorful classic platformer feel.

Planned changes:

- [x] Update the active landing-page CSS with sky, blocks, coins, pipes, and stage-like composition.
- [x] Save the resulting design as `design-v3-platformer-2026-05-29`.

Verification:

- [x] Run the production build.
- [x] Confirm the new version snapshot files exist.

### Pixel Style Design Version

Goal: Turn the current landing page into the next pixel-style design version.

Planned changes:

- [x] Update the active landing-page CSS to use pixel-style shapes, shadows, texture, and typography cues.
- [x] Save the resulting design as `design-v2-pixel-2026-05-29`.

Verification:

- [x] Run the production build.
- [x] Confirm the new version snapshot files exist.

### Save Current Design Version

Goal: Preserve the current AI Automation Studio landing-page design as a reusable version snapshot.

Planned changes:

- [x] Create a dated design-version folder with the current React source, CSS, and visual assets.
- [x] Add a short version note describing the saved design state and source paths.

Verification:

- [x] Confirm the snapshot files exist.

### Site Text Mojibake Cleanup

Goal: Restore readable Russian copy in the React landing page.

Planned changes:

- [x] Replace mojibake strings in `src/main.tsx` with intended Russian text.
- [x] Recheck metadata and accessibility labels for the same encoding issue.
- [x] Upload the rebuilt `dist` output to `www/unity-constructor.site/`.

Risks or dependencies:

- [ ] Recover intended wording from source history or rewrite carefully if no clean source exists.

Verification:

- [x] Run `npm run build`.
- [x] Verify deployed JS contains readable Russian text and no sampled mojibake.

### TODO Task Name

Goal: TODO

Planned changes:

- [ ] TODO

Execution order:

- [ ] TODO

Risks or dependencies:

- [ ] TODO

Verification:

- [ ] TODO
