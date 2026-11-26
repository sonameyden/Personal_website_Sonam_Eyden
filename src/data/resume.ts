// Single source of content for the site. Every fact here comes from
// resume-source/MASTER_FACTS.md (its "Decisions" section overrides the CVs).
// Never add the phone number.

export type Track = 'research' | 'engineering';

export const person = {
  name: 'Sonam Eyden',
  role: 'AI engineer & researcher',
  place: 'Bhutan',
  thesis:
    'I build AI systems for real problems in Bhutan, from Dzongkha mental-health support to river-basin models, and I measure whether they work.',
  email: 'sonameyden2005@gmail.com',
  github: 'https://github.com/sonameyden',
  linkedin: 'https://www.linkedin.com/in/sonam-eyden-3a1117300',
};

export interface Work {
  slug: string;
  title: string;
  track: Track;
  context: string;
  period: string;
  summary: string;
  result: { value: string; label: string };
  stack: string[];
  points: string[];
  links?: { label: string; href: string }[];
  note?: string;
}

export const work: Work[] = [
  {
    slug: 'calibration-co-pilot',
    title: 'LLM-guided calibration co-pilot',
    track: 'research',
    context: 'DHI-DRIVE research, then independent',
    period: 'Dec 2025 – present',
    summary:
      'Hydrological model calibration for the Punatsangchu basin, guided by LLM expert agents and Bayesian optimisation.',
    result: { value: '0.747 → 0.861', label: 'calibration NSE after fixing model set-up' },
    stack: ['Python', 'RS Minerve', 'Bayesian optimisation', 'Contextual bandits', 'spotpy'],
    points: [
      'Rebuilt the Punatsangchu Basin GSM-SOCONT model in RS Minerve and validated it against observed discharge at two gauges, with Python and VBScript tools to run simulations and parse results.',
      'Found model set-up errors (cold-start states, a missing high-elevation rainfall correction), raising calibration NSE from 0.747 to 0.861 before any optimisation; confirmed the Python NSE matches RS Minerve’s to four decimals.',
      'Built the co-pilot: LLM expert agents (diagnostician, process experts, critic), a contextual-bandit proposer selector and trust-region Bayesian optimisation with an LLM prior, plus physical-plausibility rules and logged, resumable runs.',
      'Preliminary, hourly model, 100-simulation budget: calibration NSE 0.90 and 0.92 at Wangdi and Toritor over two seeds, against 0.88 and 0.90 for SCE-UA (one seed so far), with no hard plausibility violations. Validation is mixed; DDS and more seeds are in progress.',
    ],
    note: 'Results are preliminary and the comparison is still running.',
  },
  {
    slug: 'toursync',
    title: 'Bhutan TourSync',
    track: 'engineering',
    context: 'AI Engineer, Omdena Top Talent',
    period: 'Oct – Nov 2026',
    summary:
      'Took a challenge prototype to a production-ready government tourism platform as primary developer (501 of 523 commits).',
    result: { value: '62 s → <0.7 s', label: 'slowest pages, after removing redundant queries' },
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'AWS', 'Playwright'],
    points: [
      '165 API endpoints, 46 database migrations, 7 background workers, 9 user roles and 1,500+ automated tests.',
      '7 LLM features with structured outputs, behind a 138-case evaluation framework with a 100% grounding release gate; a contract test blocks personal data from every model input.',
      'Document pipelines with on-server Tesseract OCR: passport machine-readable-zone reading with check-digit validation, and payment-receipt checks against the ledger.',
      'Cut the slowest pages from 62 s to under 0.7 s (1,227 → 42 queries on one page) and proved unchanged output by diffing 83 API responses; traced a 5 s connection delay to IPv6-first name lookup (now about 50 ms).',
      'Prepared the AWS release (container build, encrypted S3 storage, post-deploy smoke check, runbook) and ran a 105-check QA walkthrough before handover.',
    ],
  },
  {
    slug: 'drukserenity',
    title: 'DrukSerenity',
    track: 'engineering',
    context: 'LLM / AI Engineer, Omdena Top Talent · published',
    period: 'Jan – Mar 2026',
    summary:
      'A culturally aware multi-agent system for mental-health support in Bhutan, with Dzongkha retrieval and a self-correcting guardrail.',
    result: { value: '100%', label: 'crisis precision on 542 synthetic test messages' },
    stack: ['Python', 'FastAPI', 'OpenAI SDK', 'FAISS', 'PostgreSQL', 'SSE'],
    points: [
      'An orchestrator delegates each message to 6 specialist agents (emotion, crisis, RAG, resource, conversational, guardrail), running independent agents in parallel and routing crises straight to an emergency path.',
      'RAG over 977 Dzongkha proverbs and 22 policy and clinical documents (~330K words), reaching 0.94 RAG fidelity.',
      'A guardrail agent checks every reply for diagnosis, boundary, harm and privacy violations and rewrites unsafe ones (96.3% accuracy).',
      'Evaluated on 542 synthetic messages with per-agent tracing, rule checks and two LLM judges: 100% crisis precision, 92.2% crisis F1, 83.8% functional accuracy.',
      'Informal usability pilot with 20 Bhutanese users (3.80 / 5 overall experience).',
    ],
    links: [{ label: 'Paper (doi:10.17102/zmv9.i1.013)', href: 'https://doi.org/10.17102/zmv9.i1.013' }],
  },
  {
    slug: 'document-intake-agent',
    title: 'Document Intake Agent',
    track: 'engineering',
    context: 'Personal project',
    period: 'Nov 2026',
    summary:
      'A multi-agent workflow that reads invoices and receipts, including phone photos, and validates them against an ERP API.',
    result: { value: '0 / 60', label: 'false accepts on 60 test documents' },
    stack: ['Python', 'Google ADK', 'Gemini API', 'FastAPI'],
    points: [
      'Extractor, validator (with ERP tools) and reviewer agents, plus a code guardrail: 60 / 60 fields and decisions correct, 0 false accepts, 28 tests.',
      'Built the evaluation harness (accuracy, false accepts, latency, tokens) and used it to catch the reviewer accepting a closed-PO invoice, now blocked by the guardrail.',
      'Measured 36% extra input tokens from over-shared context.',
    ],
    links: [{ label: 'Code on GitHub', href: 'https://github.com/sonameyden/doc-intake-agent' }],
  },
];

export interface Role {
  title: string;
  org: string;
  period: string;
  track: Track;
  line: string;
  /** Still going on. */
  current?: boolean;
  /** Slug of the work page that covers this role. */
  work?: string;
}

// Ongoing roles first, then by end date, newest first.
export const experience: Role[] = [
  { title: 'Research Intern, then Independent Researcher', org: 'DHI-DRIVE · AI for Hydrological Modelling', period: 'Dec 2025 – present', track: 'research', line: 'LLM-guided calibration of the Punatsangchu basin model; internship Dec 2025 – Feb 2026, independent since.', current: true, work: 'calibration-co-pilot' },
  { title: 'AI Engineer (contract, full-time)', org: 'Omdena Top Talent · Bhutan TourSync', period: 'Oct – Nov 2026', track: 'engineering', line: 'Primary developer of a production-ready government tourism platform.', work: 'toursync' },
  { title: 'Full-Stack Engineer', org: 'Omdena · Smart Tourism Agentic AI Challenge', period: 'Aug 2026', track: 'engineering', line: 'Agentic AI workflows connected to backend services; the work that became TourSync.' },
  { title: 'QA Engineer, Data Systems (contract, part-time)', org: 'Omdena Top Talent · GovTech Bhutan Data Lakehouse', period: 'Feb – Jun 2026', track: 'engineering', line: 'Validated Bronze, Silver and Gold layers of a Spark lakehouse with Airflow ETL and Debezium CDC.' },
  { title: 'Full-Stack Engineer', org: 'Omdena · Druk Climate Guard', period: 'Apr – May 2026', track: 'engineering', line: 'Climate-risk dashboards combining ECMWF forecasts and GLOF predictions for farmers, hydropower operators and disaster managers.' },
  { title: 'LLM / AI Engineer (contract, part-time)', org: 'Omdena Top Talent · DrukSerenity', period: 'Jan – Mar 2026', track: 'engineering', line: 'Multi-agent mental-health support system; published in Zorig Melong.', work: 'drukserenity' },
  { title: 'ML Engineer', org: 'Omdena AI Innovation Challenge · Climate Change Bhutan', period: 'Oct – Nov 2025', track: 'research', line: 'Classified high-risk glacial lake outburst floods across 676 lakes with XGBoost: 91.2% accuracy, 0.90 precision.' },
];

export const publications: { title: string; venue: string; also: string; href?: string; code?: string }[] = [
  {
    title: 'DrukSerenity: A Culturally-Aware Multi-Agent Chatbot Framework for Mental Health Support in Bhutan',
    venue: 'Zorig Melong: A Technical Journal of Science, Engineering and Technology, vol. 9, no. 1, pp. 152–164, 2026 · sole author',
    also: 'Presented at ICSciEnTec 2026, IEEE R10 Bhutan Subsection',
    href: 'https://doi.org/10.17102/zmv9.i1.013',
  },
  {
    title: 'A Hybrid Transformer-Based Approach for Classifying Clinically Actionable Genetic Mutations in Cancer',
    venue: 'ICSciEnTec 2025, IEEE R10 Bhutan Subsection, April 2025 · presentation',
    also: 'GPT text augmentation, BioBERT embeddings and XGBoost: 0.8485 weighted F1 on 3,221 MSKCC samples',
    code: 'https://github.com/sonameyden/Genetics_mutation_classification',
  },
];

export const moreProjects = [
  { title: 'AURA', line: 'Kotlin Android app ported to React Native for Android, iOS and web, on one Cloudflare Workers backend with Supabase.', year: '2026', href: 'https://github.com/sonameyden/Project_2_AURA' },
  { title: 'CyberWatchdog', line: 'Hackathon security agent (team of 2): detects SSH brute-force attacks and contains threats. I built the backend.', year: '2026' },
  { title: 'SaniGuard', line: 'IoT monitoring for public toilets: smoke, gas and hygiene sensors over MQTT to live dashboards.', year: '2026', href: 'https://github.com/sonameyden/Smart-Public-Toilet-Smoke-and-Hygiene-Notification-System' },
];

export const skills = [
  { group: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Java', 'Kotlin'] },
  { group: 'AI and ML', items: ['Multi-agent systems', 'RAG and FAISS', 'LLM evaluation', 'Google ADK', 'PyTorch', 'Transformers', 'XGBoost', 'scikit-learn', 'Bayesian optimisation'] },
  { group: 'Engineering', items: ['FastAPI', 'React', 'React Native', 'PostgreSQL', 'Docker', 'AWS', 'GitHub Actions', 'pytest', 'Playwright'] },
  { group: 'Data and systems', items: ['Spark', 'Airflow', 'Kafka', 'Debezium', 'MinIO', 'MQTT', 'Linux (Ubuntu Server)'] },
  { group: 'Science tools', items: ['RS Minerve (GSM-SOCONT)', 'spotpy (SCE-UA, DDS)', 'Tesseract OCR'] },
];

export const education = {
  school: 'College of Science and Technology, Royal University of Bhutan',
  degree: 'Bachelor of Engineering in Information Technology',
  period: '2024 – 2028 (expected)',
  note: 'Third year, full-time. Coursework in AI, machine learning, statistics, algorithms, databases, networks and Linux system administration.',
};

// Calibration results for the research figure. All values from the CV.
export const calibration = {
  setup: { before: 0.747, after: 0.861, gauge: 'Wangdi' },
  preliminary: [
    { gauge: 'Wangdi', copilot: 0.9, sceua: 0.88 },
    { gauge: 'Toritor', copilot: 0.92, sceua: 0.9 },
  ],
};

// Diagrams on the work pages. Every label comes from MASTER_FACTS.md (or the
// project's own public README description).
export type Tone = 'plain' | 'aqua' | 'blue' | 'violet';
export interface FlowNode {
  title: string;
  note?: string;
  tone?: Tone;
}
export interface FlowStage {
  label: string;
  nodes: FlowNode[];
}
export interface BeforeAfterRow {
  label: string;
  before: number;
  after: number;
  beforeText: string;
  afterText: string;
}
export type Diagram =
  | { kind: 'flow'; label: string; caption: string; stages: FlowStage[] }
  | { kind: 'bars'; caption: string; rows: BeforeAfterRow[] };

export const diagrams: Record<string, Diagram> = {
  'calibration-co-pilot': {
    kind: 'flow',
    label: 'How one calibration step runs',
    caption:
      'How one calibration step runs. Steps repeat within a fixed simulation budget (100 simulations in the preliminary hourly runs), and every run is logged so it can be resumed.',
    stages: [
      { label: 'Propose', nodes: [{ title: 'LLM expert agents', note: 'diagnostician, process experts, critic', tone: 'violet' }] },
      { label: 'Select', nodes: [{ title: 'Contextual bandit', note: 'chooses which expert proposes next', tone: 'violet' }] },
      { label: 'Optimise', nodes: [{ title: 'Trust-region Bayesian optimisation', note: 'with an LLM prior', tone: 'violet' }] },
      { label: 'Simulate', nodes: [{ title: 'RS Minerve', note: 'GSM-SOCONT, Punatsangchu basin' }] },
      {
        label: 'Check',
        nodes: [
          { title: 'Plausibility rules', note: 'physical limits on every proposal', tone: 'aqua' },
          { title: 'Prediction check', note: 'each LLM prediction against the simulation' },
        ],
      },
    ],
  },
  toursync: {
    kind: 'bars',
    caption:
      'Before and after the performance work on TourSync. Redundant queries were removed with batched loaders, and unchanged output was proved by diffing 83 API responses.',
    rows: [
      { label: 'Slowest pages', before: 62, after: 0.7, beforeText: '62 s', afterText: '< 0.7 s' },
      { label: 'Database queries on one page', before: 1227, after: 42, beforeText: '1,227', afterText: '42' },
      { label: 'Opening a new database connection', before: 5000, after: 50, beforeText: '5 s', afterText: '≈ 50 ms' },
    ],
  },
  drukserenity: {
    kind: 'flow',
    label: 'How DrukSerenity handles a message',
    caption:
      'How a message moves through DrukSerenity. Independent specialists run in parallel; a crisis goes straight to an emergency path; the guardrail checks every reply before it is sent. Evaluated on 542 synthetic messages: 100% crisis precision.',
    stages: [
      { label: 'In', nodes: [{ title: 'Message', note: 'Dzongkha or English' }] },
      { label: 'Route', nodes: [{ title: 'Orchestrator', note: 'crisis → emergency path', tone: 'aqua' }] },
      {
        label: 'Specialists, in parallel',
        nodes: [
          { title: 'Emotion', tone: 'blue' },
          { title: 'Crisis', tone: 'blue' },
          { title: 'RAG', note: '977 proverbs, 22 documents', tone: 'blue' },
          { title: 'Resource', tone: 'blue' },
          { title: 'Conversational', tone: 'blue' },
        ],
      },
      { label: 'Check', nodes: [{ title: 'Guardrail agent', note: 'diagnosis, boundary, harm, privacy; rewrites unsafe replies', tone: 'aqua' }] },
      { label: 'Out', nodes: [{ title: 'Reply', note: 'streamed over SSE' }] },
    ],
  },
  'document-intake-agent': {
    kind: 'flow',
    label: 'How the Document Intake Agent processes a document',
    caption:
      'The Google ADK workflow on Gemini. On 60 test documents: 60 / 60 fields and decisions correct, 0 false accepts.',
    stages: [
      { label: 'In', nodes: [{ title: 'Invoice or receipt', note: 'PDF, scan or phone photo' }] },
      { label: 'Extract', nodes: [{ title: 'Extractor agent', tone: 'blue' }] },
      { label: 'Validate', nodes: [{ title: 'Validator agent', note: 'checks the ERP API through tools', tone: 'blue' }] },
      {
        label: 'Review',
        nodes: [
          { title: 'Reviewer agent', tone: 'blue' },
          { title: 'Code guardrail', note: 'blocks closed-PO invoices', tone: 'aqua' },
        ],
      },
      { label: 'Decide', nodes: [{ title: 'Accept', tone: 'aqua' }, { title: 'Route to a person' }] },
    ],
  },
};
