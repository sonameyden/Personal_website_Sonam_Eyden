# Sonam Eyden: master fact sheet for the website

Merged on 26 Nov 2026 from the CVs in `cvs/`. The newest and most complete
source is `Sonam_Eyden_CV_IIT_Research_Internship` (25 Nov 2026); details it
leaves out were taken from the other versions and are marked with their source.
Where the CVs disagreed, the owner's decisions are listed under "Decisions"
at the end; they override every CV.

## Contact

- Email: sonameyden2005@gmail.com
- Phone: not published on the website (owner's decision)
- LinkedIn: linkedin.com/in/sonam-eyden-3a1117300
- GitHub: github.com/sonameyden
- Location: Bhutan

## Education

- **College of Science and Technology, Royal University of Bhutan**, 2024 – 2028 (expected)
  Bachelor of Engineering in Information Technology, full-time, 3rd year
- Coursework: Artificial Intelligence, Machine Learning, Statistics & Probability,
  Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks,
  Software Engineering, Linux System Administration, Mobile Application Development
- Linux system administration (ITM302): Ubuntu Server with SSH key auth,
  firewalld (nftables), bind9 DNS (forward and reverse zones), Apache virtual
  hosts, netplan, SGID group permissions; studied DNSSEC and DNS over TLS.
  *(Google SWE Shanghai CV)*

## Research interests

LLM- and agent-guided optimisation of scientific models; multi-agent systems
and NLP for low-resource languages; machine learning for climate and
hydrological hazards. Longer statements: `research/Research_interest_writeup.pdf`
(hydrological calibration with domain knowledge; RL and reasoning in LLM agents).

## Research experience

### Research Intern, then Independent Researcher | DHI-DRIVE: AI for Hydrological Modelling | Dec 2025 – Present
Internship at Druk Holding & Investments (DRIVE division, Dept. of Innovation
and Technology), 18 Dec 2025 – 6 Feb 2026, then continued independently.
- Rebuilt the Punatsangchu Basin GSM-SOCONT model in RS Minerve, validated
  against observed discharge at two gauges; Python and VBScript tools to run
  simulations (with warm-up) and parse DSX output.
- Found model-setup errors (cold-start states, missing high-elevation rainfall
  correction): calibration NSE 0.747 → 0.861 before any optimisation; Python
  NSE matches RS Minerve's to four decimals.
- LLM-guided calibration co-pilot: LLM expert agents (diagnostician, process
  experts, critic), contextual-bandit proposer selector, trust-region Bayesian
  optimisation with an LLM prior, physical-plausibility rules, checks of each
  LLM prediction against the simulation, logged and resumable runs.
- **Preliminary** results (hourly model, 100-simulation budget): calibration
  NSE 0.90 and 0.92 at Wangdi and Toritor over two seeds vs 0.88 and 0.90 for
  SCE-UA (one seed so far); no hard plausibility violations; validation mixed
  (better at Wangdi, lower at Toritor). DDS and more seeds in progress.
- Used real NCHM meteorological data. Detailed write-ups in `research/`.

### ML Engineer | Omdena AI Innovation Challenge: Climate Change Bhutan | Oct – Nov 2025
- Classified high-risk glacial lake outburst floods (GLOFs) across 676 glacier
  lakes with XGBoost and engineered cryosphere hazard features: 91.2% accuracy,
  0.90 precision; composite risk score from glacier-volume estimates and
  weighted hazard indicators.

## Publications and talks

- **S. Eyden (sole author)**, "DrukSerenity: A Culturally-Aware Multi-Agent
  Chatbot Framework for Mental Health Support in Bhutan," *Zorig Melong: A
  Technical Journal of Science, Engineering and Technology*, vol. 9, no. 1,
  pp. 152–164, 2026. doi:10.17102/zmv9.i1.013
  Presented at ICSciEnTec 2026 (IEEE R10 Bhutan Subsection), 28–30 Apr 2026, Thimphu.
  Certificate: `certificates/ICSciEnTec2026_presentation_certificate.jpg`
- "A Hybrid Transformer-Based Approach for Classifying Clinically
  Actionable Genetic Mutations in Cancer," presented at ICSciEnTec 2025
  (IEEE R10 Bhutan Subsection), 28–30 Apr 2025, Thimphu; not published.
  GPT text augmentation, BioBERT embeddings and XGBoost: 0.8485 weighted F1
  (cross-validated) on 3,221 MSKCC samples.
  Certificate: `certificates/ICSciEnTec2025_presentation_certificate.jpg`

## Engineering experience

### AI Engineer (Contract, Full-time) | Omdena Top Talent: Bhutan TourSync | 12 Oct – 23 Nov 2026 (completed)
Python, FastAPI, PostgreSQL, SQLAlchemy, React, TypeScript, Vite, pytest,
Vitest, Playwright, Docker, AWS (ECS, RDS, S3), GitHub Actions
- Primary developer (501 of 523 commits) taking a challenge prototype to a
  production-ready government tourism platform: 165 API endpoints, 46 DB
  migrations, 7 background workers, 9 user roles (tour operators to
  immigration and finance officers), 1,500+ automated tests.
- 7 LLM features with structured outputs (trip next steps, journey and review
  summaries, trend insights), released behind a switch pending client data
  approval; regenerate only when input facts change; every screen works with AI off.
  *(FDE CV)*
- Evaluation framework of 138 cases (schema, grounding: every number must come
  from source facts, prohibited wording), 100% grounding release gate; a
  contract test blocks personal data from every model input.
- Logged tokens and latency per model call; cut cost per request by skipping
  redundant generation, consolidating retry layers (up to 10 provider attempts
  per job) and reusing analytics rebuilt 4 times per scan. *(FDE CV)*
- Document pipelines with on-server Tesseract OCR: passport MRZ reading with
  check-digit validation, payment-receipt checks against the ledger; files
  decrypted in memory only.
- Slowest pages 62 s → under 0.7 s by removing N+1 queries across 10+ endpoints
  (1,227 → 42 queries on one list, batched loaders); query-count regression
  tests over 15 list endpoints; diffed 83 API responses across 5 roles to prove
  no output changed.
- Traced a 5 s delay on every new DB connection to IPv6-first localhost
  resolution; now ~50 ms.
- Security: deny-by-default role checks on every route, enforced by a test
  against a published route inventory; encrypted document storage;
  audit-logged passport access; two-administrator approval for fee changes.
  *(SWE Shanghai CV)*
- Automation scripts: API profiling, OpenAPI-to-TypeScript type generation,
  route-inventory checks, Playwright screenshot capture; keyboard-navigable,
  screen-reader-labelled, responsive frontend. *(SWE Shanghai, older CVs)*
- AWS release (container build, encrypted S3 storage, security headers,
  post-deploy smoke check, runbook); 105-check QA walkthrough before handover.

### LLM / AI Engineer (Contract, Part-time) | Omdena Top Talent: DrukSerenity | Jan – Mar 2026
Python, FastAPI, OpenAI SDK (GPT-5-mini), text-embedding-3-small, FAISS, PostgreSQL, SSE
- Orchestrator delegates each message to 6 specialist agents (emotion, crisis,
  RAG, resource, conversational, guardrail), independent agents in parallel,
  crises routed straight to an emergency path.
- RAG over 977 Dzongkha proverbs and 22 policy and clinical documents
  (~330K words): Unicode normalisation, chunking, embeddings, FAISS cosine
  retrieval with emotion-based query expansion; 0.94 RAG fidelity.
- Self-correcting guardrail agent (diagnosis, boundary, harm, privacy) that
  rewrites unsafe replies (96.3% accuracy); Dzongkha–English translation;
  two-tier session memory.
- Evaluation over 542 synthetic messages, per-agent trajectory tracing, rule
  checks, two LLM judges: 100% crisis precision, 92.2% crisis F1, 83.8%
  functional accuracy (published in Zorig Melong).
- Stateless FastAPI microservice, SSE streaming, SHA-256 user hashing, Fernet
  encryption; informal usability pilot with 20 Bhutanese users (3.80/5).

### QA Engineer, Data Systems (Contract, Part-time) | Omdena Top Talent: GovTech Bhutan Data Lakehouse | Feb – Jun 2026
Apache Spark, Airflow, Debezium (CDC), MinIO, Python, SQL, multi-VM Linux cluster
- Validated Bronze, Silver and Gold layers of a distributed Spark lakehouse
  (Airflow ETL) for the modernisation of GovTech Bhutan's data platform.
- Row-count reconciliation, schema validation, checksums across MinIO and the
  processing pipelines; debugged Airflow DAG and Spark batch failures;
  validated real-time CDC with Debezium.
- Checked the Reference Implementation Guide against live behaviour; worked
  with engineers on observability and pipeline reliability.

### Full-Stack Engineer | Omdena: Druk Climate Guard | Apr – May 2026
- Climate-risk and disaster-preparedness features (FastAPI, React, Supabase,
  JWT auth) combining ECMWF forecasts and GLOF predictions in role-based
  dashboards for farmers, hydropower operators, disaster managers and
  policymakers; geospatial views, alert monitoring. *(IITDelhi_IIRF CV)*

### Full-Stack Engineer | Omdena AI Innovation Challenge: Agentic AI Framework for Smart Tourism | Aug 2026
- Full-stack components connecting agentic AI workflows to backend services
  and UIs for coordination and compliance across tourism stakeholders; the
  work that became TourSync.

## Projects

- **Document Intake Agent** (Nov 2026) | Google ADK, Gemini API, FastAPI |
  github.com/sonameyden/doc-intake-agent
  Multi-agent ADK workflow (extractor, validator with ERP tools, reviewer) plus
  a code guardrail; reads invoices and receipts incl. phone photos; 60/60
  fields and decisions, 0 false accepts on 60 test documents, 28 tests. Eval
  harness caught the reviewer accepting a closed-PO invoice (now blocked) and
  measured 36% extra input tokens from over-shared context.
- **AURA: Music Streaming App** (2026) | Kotlin, React Native, TypeScript
  Multi-module Android app (Jetpack Compose, Hilt, Room, Retrofit, Media3)
  ported to React Native/Expo for Android, iOS and web; shared serverless
  Cloudflare Workers backend (TypeScript) with Supabase PostgreSQL; Firebase
  tokens verified server-side; secrets never reach the app. "AI Atmosphere
  Engine": mood, colour palette and animation profiles per track; particles,
  dynamic lighting, synced lyrics, playlists, queue, history.
  *(SWE Shanghai + IITDelhi_IIRF CVs)*
- **CyberWatchdog: Autonomous Security Agent** (Aug 2026) | INNOVIK Hackathon
  (3IT), team of 2 | Python, FastAPI, React
  Built the backend (10 of 15 commits): reads SSH and web logs, detects
  brute-force attacks (LLM with rule-based fallback), checks IP reputation,
  contains threats (block IP, isolate host), streams to a React dashboard over
  SSE; unit and integration tests.
- **SaniGuard: Smart Public Toilet Monitoring** (2026) | FastAPI, React, MQTT,
  Raspberry Pi Pico W
  IoT platform streaming smoke, gas, temperature and hygiene sensor data over
  MQTT to live dashboards with automated alerts.

## Skills

- **Programming:** Python, SQL, Java, Kotlin, TypeScript, JavaScript
- **AI / ML:** PyTorch, Transformers (BERT variants: RoBERTa, BioBERT, SciBERT),
  scikit-learn, XGBoost, NumPy, Pandas, Bayesian optimisation, contextual
  bandits, RAG, FAISS, embeddings, multi-agent orchestration, Google ADK,
  Gemini API, OpenAI API, structured outputs, LLM evaluation (LLM-as-judge)
- **Web & Mobile:** FastAPI, React, React Native (Expo), Vite, Tailwind CSS,
  Node.js, Express, Cloudflare Workers, REST, WebSockets, SSE, Android,
  Jetpack Compose
- **Data & Systems:** Linux (Ubuntu Server, Bash, firewalld, bind9), Git,
  Docker, AWS (ECS, RDS, S3), GitHub Actions, PostgreSQL, SQLAlchemy, Supabase,
  Spark, Airflow, Kafka, Debezium, MinIO, MQTT
- **Testing:** pytest, Vitest, Playwright
- **Domain tools:** RS Minerve (GSM-SOCONT), spotpy (SCE-UA, DDS), Tesseract OCR
- **Languages:** English (fluent) *(CERN CV; add Dzongkha and others if you want)*

## Activities

- CST College Marathon, participation, 1 Nov 2024
- 20 km Marathon (CST with UNDP / GEF), completion, 2025

## Decisions (conflicts between CVs, settled by Sonam on 26 Nov 2026)

1. **TourSync dates:** 12 Oct – 23 Nov 2026, completed. Show as
   "Oct – Nov 2026"; never "Present".
2. **TourSync numbers:** the newest CV is right: 501 of 523 commits,
   165 endpoints, 1,500+ automated tests. Do not use the older figures
   (260+ of 275, 170+, 960 + 620, 270+).
3. **ICSciEnTec 2025 paper title:** "A Hybrid Transformer-Based **Approach**
   for Classifying Clinically Actionable Genetic Mutations in Cancer" (the
   certificate's "Framework" is not used).
4. **DrukSerenity RAG corpus:** 977 proverbs + 22 documents (~330K words);
   not the older "300+ texts".
5. **Druk Climate Guard:** Apr – May 2026.
6. **Phone number:** never on the website. Public contact is email, LinkedIn
   and GitHub only.

## Kept out of the website on purpose

Left in `D:\resume\reume_that_upadted` and not copied here: the academic
transcript and grades, the IIRF application form (student number, marks),
the DHI internship letter and marathon certificates (they show your CID
number), the NCHM data-request form, the IIRF flyer, and duplicate CVs
(the IIRF CV is identical to the IIT CV; the DHI CV is identical to the CERN
Summer Student CV).
