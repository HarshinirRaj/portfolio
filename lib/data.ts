// Central content store — edit this file to update the site's copy.

export const profile = {
  name: "Harshini Gadige",
  role: "Senior Software Engineer",
  focus: "Backend Systems · Event-Driven Architecture · AI-Augmented Engineering",
  location: "O'Fallon, Missouri, US",
  email: "harshiniraj.g@gmail.com",
  phone: "+1 (669) 210-7909",
  linkedin: "https://www.linkedin.com/in/harshini-gpsedev",
  tagline:
    "I build backend systems that don't drop a single event — and the AI-augmented workflows that ship them faster.",
  subTagline:
    "7+ years engineering resilient, high-throughput services for fintech platforms moving millions of dollars a day. Currently architecting payment infrastructure at Intuit.",
};

export const stats = [
  { value: "7+", label: "years in backend engineering" },
  { value: "10M+", label: "accounts protected by idempotency framework" },
  { value: "2×", label: "peak transaction capacity unlocked" },
  { value: "30%+", label: "faster delivery via AI-augmented workflows" },
];

export const about = {
  paragraphs: [
    "I spend most of my time in the layer people never see: the services that move money correctly, every time, even when networks drop packets and consumers retry. Over the last two years at Mastercard and Intuit, that's meant replacing a payment monolith with fault-tolerant microservices, and building an idempotency framework that keeps balance updates safe across ten million-plus accounts.",
    "The other half of my work is newer: teaching engineering teams to build with AI as a first-class collaborator instead of a novelty. I've written the prompt-template libraries, LLM-readable architecture docs, and MCP-connected tooling that took my team's delivery velocity up by 30%+ without loosening our testing bar.",
    "I studied data analytics at San Jose State after five years of full-stack and integration work in Hyderabad, which is probably why I still care as much about the query plan as the API contract. I'm happiest on problems where correctness, scale, and speed all have to hold at once.",
  ],
  facts: [
    { label: "Currently", value: "Senior Software Engineer, Intuit" },
    { label: "Previously", value: "Mastercard, Pramati Technologies, OSI Digital" },
    { label: "Education", value: "M.S. Data Analytics, San Jose State University" },
    { label: "Based in", value: "O'Fallon, Missouri, US" },
  ],
};

export type Project = {
  id: string;
  tag: string;
  status: string;
  statusColor: "green" | "amber" | "cyan";
  name: string;
  org: string;
  period: string;
  problem: string;
  build: string[];
  impact: { value: string; label: string }[];
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "ledger-reliability",
    tag: "01",
    status: "in production",
    statusColor: "green",
    name: "Zero-Loss Balance Event Pipeline",
    org: "Intuit",
    period: "2025 — Present",
    problem:
      "A high-traffic balance-tracking service was losing races under concurrent writes, and any dropped or duplicated event meant an incorrect customer balance — unacceptable on a financial platform.",
    build: [
      "Redis-backed transactional locking with automatic retry to serialize concurrent balance updates",
      "Transactional outbox + Kafka relay pattern so a balance change and its event publish succeed or fail together",
      "Multi-region failover that resumes publishing automatically during regional outages",
      "An idempotency framework across four microservices to safely absorb duplicate or retried requests",
    ],
    impact: [
      { value: "<15%", label: "update conflicts under heavy concurrent load, down from unbounded" },
      { value: "0", label: "balance events lost since launch" },
      { value: "10M+", label: "accounts covered without double-processing" },
    ],
    stack: ["Java 17", "Spring Boot", "Kafka", "Redis", "PostgreSQL", "Onion Architecture"],
  },
  {
    id: "ai-engineering-platform",
    tag: "02",
    status: "adopted team-wide",
    statusColor: "amber",
    name: "AI-Augmented Engineering Platform",
    org: "Intuit",
    period: "2025 — Present",
    problem:
      "Every AI coding session started from zero context, and AI-generated specs varied wildly in quality from one engineer to the next — the opposite of a repeatable workflow.",
    build: [
      "A living, LLM-optimized architecture repository that persists as context across sessions",
      "A version-controlled prompt-template library using role-prompting, chain-of-thought sequencing, and few-shot formatting",
      "Custom AI skills, workspace rules, and MCP connectors so agents can act on real project systems, not copy-paste",
      "A prototype LangGraph ReAct console (React/TypeScript + FastAPI) for natural-language platform testing with human-in-the-loop controls",
    ],
    impact: [
      { value: "10×", label: "faster spec and story authoring, team-wide" },
      { value: "30%+", label: "reduction in overall delivery cycle time" },
      { value: "0", label: "quality gates loosened to get there" },
    ],
    stack: ["LangGraph", "LangChain", "MCP", "Claude Code", "Cursor", "React", "FastAPI"],
  },
  {
    id: "payment-modernization",
    tag: "03",
    status: "migrated · live",
    statusColor: "cyan",
    name: "Payment Platform Modernization",
    org: "Mastercard",
    period: "2023 — 2025",
    problem:
      "A legacy monolithic payment gateway was hitting its ceiling on peak transaction volume, with no safe way to scale services independently.",
    build: [
      "Decomposed the monolith into Spring Boot microservices deployed on Pivotal Cloud Foundry",
      "Event-driven integration across Kafka and WebSphere MQ with retry logic and durable persistence",
      "A zero-downtime cutover plan so the migration was invisible to downstream payment traffic",
    ],
    impact: [
      { value: "2×", label: "peak transaction capacity for global payment gateways" },
      { value: "0", label: "message loss across critical payment workflows" },
      { value: "0", label: "downtime during cutover" },
    ],
    stack: ["Java", "Spring Boot", "Kafka", "PCF", "Oracle", "PostgreSQL", "Jenkins"],
  },
  {
    id: "observability-toolkit",
    tag: "04",
    status: "in use",
    statusColor: "green",
    name: "Regression & Incident Response Toolkit",
    org: "Intuit",
    period: "2025 — Present",
    problem:
      "Diagnosing production issues across distributed services was slow and depended on tribal knowledge instead of a shared playbook.",
    build: [
      "A 240+ case automated regression suite with enforced code-coverage thresholds",
      "Real-time monitoring dashboards backed by Splunk, Prometheus, and Wavefront",
      "30+ incident-response runbooks covering the platform's most common failure modes",
    ],
    impact: [
      { value: "240+", label: "regression cases catching defects pre-release" },
      { value: "30+", label: "documented incident runbooks" },
    ],
    stack: ["Splunk", "Prometheus", "Wavefront", "Jenkins", "Argo CD"],
  },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  bullets: string[];
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Intuit",
    role: "Senior Software Engineer",
    period: "Jun 2025 — Present",
    location: "Mountain View, CA (Remote)",
    current: true,
    bullets: [
      "Architect backend services and payment rails for the Commerce & Payments team on a platform supporting millions of customers.",
      "Design event-driven services in Java and Spring Boot with a focus on resilience and audit-readiness.",
      "Built the team's AI-augmented development practice — prompt libraries, LLM-readable docs, and MCP tooling — cutting delivery cycle time 30%+.",
      "Partner directly with product and business stakeholders to translate roadmaps into scalable technical execution.",
    ],
    stack: ["Java 17", "Spring Boot", "AWS", "Kafka", "Redis", "Cassandra"],
  },
  {
    company: "Mastercard",
    role: "Senior Software Developer",
    period: "Aug 2023 — Feb 2025",
    location: "O'Fallon, MO",
    bullets: [
      "Led the migration of a legacy payment monolith to microservices on Pivotal Cloud Foundry, doubling peak transaction capacity.",
      "Built Kafka and WebSphere MQ event pipelines with retry logic and durable persistence to guarantee zero message loss.",
      "Optimized PostgreSQL and Oracle query paths and automated testing with JUnit, Mockito, and SonarQube.",
      "Streamlined release cycles by automating CI/CD through Jenkins.",
    ],
    stack: ["Java", "Spring Boot", "Kafka", "PCF", "Oracle", "PostgreSQL"],
  },
  {
    company: "Pramati Technologies",
    role: "Software Developer",
    period: "Feb 2018 — Dec 2020",
    location: "Hyderabad, India",
    bullets: [
      "Built modular REST APIs in Spring Boot and Java for scalable B2B platforms, improving response times through service-layer optimization.",
      "Standardized front-end development with a reusable Angular/TypeScript component library, cutting new-feature build time by 20%.",
    ],
    stack: ["Spring Boot", "Java", "Angular", "TypeScript", "MySQL"],
  },
  {
    company: "OSI Digital",
    role: "Associate Software Developer",
    period: "Jun 2016 — Feb 2018",
    location: "Hyderabad, India",
    bullets: [
      "Automated data-integration workflows with Dell Boomi AtomSphere API, cutting manual integration effort by 80%.",
      "Designed and hardened integration interfaces between web services and databases, with structured error handling.",
    ],
    stack: ["Dell Boomi", "Oracle", "AtomSphere API"],
  },
];

export const education = [
  {
    school: "San Jose State University",
    degree: "M.S., Data Analytics",
    period: "2021 — 2022",
  },
  {
    school: "CVR College of Engineering, Hyderabad",
    degree: "B.Tech, Computer Science",
    period: "2012 — 2016",
  },
];

export const certifications = [
  "Google Certified GenAI Leader",
  "AWS Certified Cloud Practitioner",
  "Oracle Certified Associate, Java Developer",
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Java 17+", "Python", "TypeScript", "Go", "SQL"],
  },
  {
    label: "Backend & Architecture",
    items: ["Spring Boot", "Microservices", "REST APIs", "Onion Architecture", "Kafka"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "GCP", "PCF", "Kubernetes", "Docker", "ArgoCD", "Jenkins", "GitHub Actions"],
  },
  {
    label: "Data & Storage",
    items: ["PostgreSQL", "Redis", "Cassandra", "BigQuery", "Oracle", "DB2"],
  },
  {
    label: "AI & Agentic Tooling",
    items: ["LangGraph", "LangChain", "MCP", "Claude Code", "Cursor", "Windsurf", "Prompt Engineering"],
  },
  {
    label: "Observability & Quality",
    items: ["Splunk", "Prometheus", "Wavefront", "JUnit", "Mockito", "SonarQube", "Karate"],
  },
];
