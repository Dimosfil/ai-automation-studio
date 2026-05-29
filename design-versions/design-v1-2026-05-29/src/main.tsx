import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Code2,
  Database,
  Github,
  Mail,
  MapPin,
  Network,
  ServerCog,
  Sparkles,
  Workflow,
} from 'lucide-react';
import './styles.css';

const metrics = [
  ['AI-first', 'автоматизация разработки'],
  ['14 лет', 'инженерной базы C# / .NET / Unity'],
  ['LLM tools', 'агенты, память, контекст'],
  ['MVP -> production', 'от прототипа до рабочего процесса'],
];

const services = [
  {
    icon: BrainCircuit,
    title: 'LLM-инструменты и агенты',
    text: 'Проектируем AI-помощников, рабочие инструкции, память проекта, контекстные пайплайны и безопасные agent workflows.',
  },
  {
    icon: Workflow,
    title: 'Автоматизация dev-процессов',
    text: 'Убираем повторяемую ручную работу: анализ кода, подготовка задач, документация, проверки, сбор контекста и отчётность.',
  },
  {
    icon: Code2,
    title: 'Инженерные MVP',
    text: 'Собираем прикладные сервисы, Telegram-боты, CLI, dashboard-инструменты, API-интеграции и внутренние платформы.',
  },
];

const projects = [
  {
    label: '01',
    title: 'AI-first engineering platform',
    text: 'Система работы с AI-агентами: инструкции, проектная память, задачи, сессии, контекст и повторяемые правила разработки.',
    stack: ['LLM Agents', 'Python', 'Node.js', 'OpenAI API'],
  },
  {
    label: '02',
    title: 'Token & context analytics',
    text: 'Инструменты анализа токенов, стоимости контекста и оптимизации LLM-запросов для более дешёвых и быстрых рабочих циклов.',
    stack: ['Token analysis', 'CLI', 'Automation'],
  },
  {
    label: '03',
    title: 'Business automation bots',
    text: 'Шаблоны и прикладные Telegram-боты с готовой архитектурой, интеграциями, обработкой данных и быстрым запуском.',
    stack: ['Telegram Bot API', 'Python', 'Integrations'],
  },
  {
    label: '04',
    title: 'Engineering systems',
    text: 'Production-база из Unity/.NET/backend, WMS-симуляторов, AR/WebRTC и клиент-серверных систем помогает строить AI не в вакууме.',
    stack: ['C#', '.NET', 'Unity', 'REST API'],
  },
];

const process = [
  ['01', 'Разбор процесса', 'Находим повторяемые действия, узкие места, источники контекста и риски автоматизации.'],
  ['02', 'MVP-инструмент', 'Собираем рабочий прототип: агент, CLI, бот, сервис, pipeline или внутренний интерфейс.'],
  ['03', 'Встраивание', 'Подключаем к реальным файлам, задачам, API, правилам команды и ежедневному рабочему циклу.'],
  ['04', 'Усиление', 'Измеряем пользу, улучшаем prompts, инструкции, память, безопасность и стоимость запросов.'],
];

const skills = [
  'OpenAI API',
  'LLM/AI Agents',
  'Prompt Engineering',
  'Project Memory',
  'Python',
  'Node.js',
  'TypeScript',
  'Telegram Bot API',
  'CLI tools',
  'C#',
  '.NET',
  'ASP.NET Core',
  'Unity',
  'REST API',
  'Docker',
  'Git',
];

function App() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav" aria-label="Основная навигация">
          <a className="brand" href="#top">
            AS
          </a>
          <div className="nav__links">
            <a href="#services">Услуги</a>
            <a href="#work">Кейсы</a>
            <a href="#contact">Заявка</a>
          </div>
        </nav>

        <div className="hero__layout">
          <div className="hero__content">
            <div className="eyebrow">
              <Sparkles size={16} />
              AI Automation Studio
            </div>
            <h1>Студия AI-автоматизации для инженерных команд и внутренних продуктов.</h1>
            <p className="lead">
              Проектируем LLM-агентов, developer tools, Telegram-ботов, CLI-сервисы и
              внутренние платформы, которые снимают рутину с разработки, поддержки,
              аналитики и рабочих процессов.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="mailto:dimosfil@gmail.com">
                <Mail size={18} />
                Обсудить проект
              </a>
              <a className="button button--ghost" href="https://github.com/Dimosfil" target="_blank" rel="noreferrer">
                <Github size={18} />
                Engineering base
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <img src="/assets/ai-developer-hero-light.png" alt="" />
            <div className="hero__note hero__note--top">
              <span>studio focus</span>
              <strong>LLM automation</strong>
            </div>
            <div className="hero__note hero__note--bottom">
              <span>delivery</span>
              <strong>tools that ship</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics" aria-label="Ключевые показатели">
        {metrics.map(([value, label]) => (
          <div className="metric" key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section manifesto">
        <p className="section__kicker">Positioning</p>
        <h2>
          Не внедряем AI ради витрины. Собираем инструменты, которые входят в реальный
          рабочий день команды.
        </h2>
        <p>
          AI Automation Studio помогает превращать хаотичные эксперименты с LLM в
          управляемые процессы: с контекстом, правилами, памятью, интеграциями,
          измеримой пользой и понятной ответственностью.
        </p>
      </section>

      <section className="section focus" id="services">
        {services.map((item) => {
          const Icon = item.icon;
          return (
            <article className="focus__item" key={item.title}>
              <span className="icon">
                <Icon size={24} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </section>

      <section className="section work" id="work">
        <div className="section__head">
          <p className="section__kicker">Studio cases</p>
          <h2>Направления, из которых растёт продуктовая экспертиза студии</h2>
        </div>
        <div className="work__grid">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <span>{project.label}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="tags">
                {project.stack.map((tag) => (
                  <em key={tag}>{tag}</em>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience" id="process">
        <div className="section__head">
          <p className="section__kicker">Process</p>
          <h2>Как студия превращает идею автоматизации в рабочий инструмент</h2>
        </div>
        <div className="timeline">
          {process.map(([step, title, text]) => (
            <article className="timeline__item" key={`${step}-${title}`}>
              <time>{step}</time>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section stack">
        <div className="stack__visual" aria-hidden="true">
          <Bot />
          <Network />
          <ServerCog />
          <Database />
        </div>
        <div>
          <p className="section__kicker">Capabilities</p>
          <h2>AI-автоматизация на инженерной базе, а не на наборе одноразовых промптов.</h2>
          <div className="skillset">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="section__kicker">Start</p>
          <h2>Опишите процесс, который хочется автоматизировать. Мы найдём первый рабочий MVP.</h2>
          <p>AI Automation Studio. Воронеж, Россия. Удалённая работа с командами и проектами.</p>
        </div>
        <div className="contact__actions">
          <a className="button button--primary" href="mailto:dimosfil@gmail.com">
            <Mail size={18} />
            dimosfil@gmail.com
          </a>
          <a className="button button--ghost" href="https://github.com/Dimosfil" target="_blank" rel="noreferrer">
            <Github size={18} />
            github.com/Dimosfil
          </a>
          <span className="location">
            <MapPin size={18} />
            Воронеж
          </span>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
