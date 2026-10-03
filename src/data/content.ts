// Central content file. Edit this to update the site — no other file needs to change
// for new projects, experience, or skills.

export const profile = {
  name: "Pankaj Kumar",
  title: "Senior Data Engineer",
  tagline: "Lakehouse platforms & streaming pipelines on Azure Databricks and GCP",
  location: "Bangalore, India",
  email: "pankaj.k.dataeng@gmail.com",
  linkedin: "https://www.linkedin.com/in/mepankajkumar",
  github: "https://github.com/datawithpankaj",
  resumeUrl: "/resume/Pankaj_Kumar_Resume.pdf",
  summary:
    "Databricks-certified Senior Data Engineer with nearly 6 years building Lakehouse platforms and streaming pipelines on Azure Databricks and GCP. Work spans 10M+ daily events at sub-5-second latency, 30% faster processing, and regulated data across healthcare, banking, and telecom.",
  stats: [
    { value: "6", suffix: "+", label: "Years in data engineering" },
    { value: "10M", suffix: "+", label: "Daily events streamed" },
    { value: "3", suffix: "", label: "Regulated industries" },
    { value: "30", suffix: "%", label: "Faster processing delivered" },
  ],
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Programming",
    items: ["Python", "SQL", "PySpark", "Apache Spark"],
  },
  {
    label: "Databricks & Streaming",
    items: [
      "Databricks",
      "Unity Catalog",
      "Delta Lake",
      "Workflows",
      "Asset Bundles",
      "Spark Structured Streaming",
      "Kafka",
    ],
  },
  {
    label: "Cloud & Platforms",
    items: [
      "Azure Databricks",
      "Azure Data Factory",
      "ADLS",
      "GCP BigQuery",
      "Dataproc",
      "Cloud Composer",
      "Cloud Pub/Sub",
      "Hadoop",
      "Hive",
      "Snowflake",
    ],
  },
  {
    label: "Architecture & Modeling",
    items: [
      "Lakehouse",
      "Medallion Architecture",
      "Dimensional Modeling",
      "SCD Type 1/2",
      "ETL/ELT Pipelines",
    ],
  },
  {
    label: "Governance & Quality",
    items: [
      "Data Quality Frameworks",
      "Lineage",
      "PII & Access Controls",
      "RBAC",
      "Data Governance",
    ],
  },
  {
    label: "GenAI & AI-Assisted Dev",
    items: ["RAG", "LLMs", "Embeddings", "Vector Search", "Claude", "GitHub Copilot", "Cursor"],
  },
  {
    label: "Tools & DevOps",
    items: [
      "Apache Airflow",
      "dbt",
      "GitLab",
      "Jenkins",
      "Azure DevOps",
      "Terraform",
      "Unix Shell",
      "Maven",
      "Autosys",
      "CI/CD",
    ],
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  companyContext?: string;
  period: string;
  stack: string[];
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Senior Data Engineer",
    company: "Wells Fargo",
    companyContext: "Senior Assistant Vice President",
    period: "Sep 2026 - Present",
    stack: [
      "Python",
      "PySpark",
      "SQL",
      "GCP BigQuery",
      "Dataproc",
      "Hadoop",
      "Hive",
      "Cloud Pub/Sub",
      "Apache Airflow",
      "Maven",
      "Autosys",
      "Unix Shell",
      "PII Handling",
    ],
    bullets: [
      "Led migration of regulated financial datasets from an on-premises Hadoop data lake to GCP BigQuery, building a metadata-driven framework that reads table definitions from a central metastore to auto-generate ingestion pipelines, removing per-table pipeline development.",
      "Designed an event-driven orchestration layer where Pub/Sub messages trigger a router Airflow DAG that inspects message metadata and dynamically triggers the correct downstream ingestion DAG, replacing one-DAG-per-source scheduling with a single scalable dispatch pattern.",
      "Implemented incremental, watermark-based load strategies across migrated pipelines to keep BigQuery datasets current without full table reloads.",
      "Enforced PII handling and data-access policies across Dataproc Hadoop/Hive clusters, with Maven-built Spark jobs scheduled through Autosys and Unix shell wrappers for legacy on-prem batch workflows.",
    ],
  },
  {
    role: "Senior Data Engineer",
    company: "Harman India (HCS)",
    companyContext: "Projects: Convatec (Patient Platform), Lowe's (Price Optimisation & Strategy)",
    period: "Apr 2025 - Aug 2026",
    stack: ["Azure Databricks", "Unity Catalog", "Kafka", "Snowflake", "BigQuery"],
    bullets: [
      "Architected a config-driven Bronze to Silver data-quality engine on Azure Databricks (Unity Catalog, Delta Lake, Workflows) for a healthcare RWE Lakehouse, pairing automated rule-based validation with incremental CDC/Delta MERGE. New clinical sources onboard through JSON config alone, reusing 90% of the code.",
      "Environment promotion and release automation for every data workflow run through Databricks Asset Bundles, Terraform-provisioned Azure infrastructure, and Azure DevOps across dev, test, and prod.",
      "Designed and built a production Snowflake pipeline with dbt and Snowpark, orchestrated via Airflow, securing healthcare data with RBAC, dynamic data masking, and row-access policies.",
      "Streaming pipelines on Kafka and Spark Structured Streaming carry 10M+ daily events at sub-5-second latency, keeping GCP and on-premises systems in near-real-time sync.",
      "Migrated legacy Hadoop/Oozie workloads to Cloud Composer (Airflow) and tuned the Spark jobs behind them (partitioning, caching, OPTIMIZE/Z-ORDER); pipeline failures dropped 20%.",
      "Engineered a historical data warehouse in BigQuery with dimensional modeling, then added Dataplex quality checks and Looker dashboards that took incident mitigation time down 30%.",
    ],
  },
  {
    role: "Data Engineer",
    company: "Ernst & Young Private Limited",
    companyContext: "Client: HSBC Bank",
    period: "May 2023 - Apr 2025",
    stack: ["Python", "BigQuery", "PySpark", "dbt", "Dataproc"],
    bullets: [
      "Built a metadata-driven model execution framework in Python, with variable derivation, calculation order, and source/target mappings held as config in BigQuery. Financial model migration time fell 20%.",
      "Migrated SAS-based financial models to GCP Dataproc using PySpark; processing times fell 30% and the legacy dependencies were retired.",
      "Developed modular, version-controlled dbt models on BigQuery (staging to marts) with incremental materializations and automated dbt tests, which cut manual validation effort 25% and kept lineage audit-ready for regulated reporting.",
      "Reconciliation scripts in Python validate every migrated model against its legacy SAS baseline, holding data accuracy at 97% across regulated financial reporting.",
    ],
  },
  {
    role: "Data Engineer",
    company: "Capgemini Technology Services India Ltd.",
    companyContext: "Client: Rogers Communications",
    period: "Oct 2020 - May 2023",
    stack: ["Azure Data Factory", "PySpark", "Databricks", "Medallion Architecture"],
    bullets: [
      "Ingested SAS, Oracle, and Hive sources into Azure Data Lake through orchestrated PySpark and Azure Data Factory pipelines, scaling to over 3 million daily incremental records with SCD Type 1/2 for 10M+ subscribers.",
      "Built subscriber churn analytics on Azure Databricks with medallion architecture (bronze/silver/gold), processing millions of daily CDRs to surface at-risk customers.",
      "Proactive monitoring and Spark ETL tuning on subscriber workloads brought pipeline downtime down 20%, MTTR 15%, and the job failure rate 10%.",
    ],
  },
];

export type Certification = {
  name: string;
  year: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    name: "Databricks Certified Data Engineer Associate",
    year: "2026",
    url: "https://credentials.databricks.com/9caa71ad-1526-4048-a8d5-796febdfc6ba#acc.wl5VUvpd",
  },
];

export const education = {
  degree: "Bachelor of Engineering in Computer Science",
  note: "Big Data Analytics specialization by IBM",
  school: "Chandigarh University",
  period: "2016 - 2020",
};

export type ProjectKpi = {
  label: string;
  value: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  comingSoon?: boolean;
  // A short, visible honesty caveat — e.g. "validated but never run against
  // live infrastructure." Shown directly under the description, not buried
  // in the expandable detail, so it's never missed.
  status?: string;
  // Optional deeper case-study content, shown behind a "Details" toggle on
  // the card instead of cluttering the default compact view.
  highlights?: string[];
  kpis?: ProjectKpi[];
  learned?: string[];
};

// Personal projects go here. Each card renders from this array —
// add an entry (with a real link/repo) and it shows up on the site automatically.
export const projects: Project[] = [
  {
    title: "Real-Time Lakehouse: Kafka + Debezium + Spark CDC Pipeline",
    description:
      "An end-to-end ingestion platform unifying batch, streaming, and CDC into one Medallion lakehouse. Debezium captures every Postgres change via the write-ahead log; Spark Structured Streaming merges it into Delta Lake with idempotent, LSN-ordered upserts.",
    tags: ["PostgreSQL", "Debezium", "Kafka", "Spark Structured Streaming", "Delta Lake", "Airflow", "Docker Compose"],
    highlights: [
      "Deduplicates same-row updates within each CDC micro-batch using Postgres LSN (falling back to Kafka offset during the initial snapshot), so Delta MERGE never sees multiple matches for one key.",
      "REPLICA IDENTITY FULL plus the raw Debezium envelope preserved end-to-end, so before/after images, deletes, and Kafka tombstones all parse correctly instead of silently becoming null rows.",
      "Bronze ingestion, the Silver merge, and the clickstream jobs run as isolated Spark applications with separate checkpoints, so a bug or backlog in merge logic never blocks raw data from landing.",
      "A custom data-quality framework runs null, uniqueness, referential-integrity, range, and row-count checks; error-level failures fail the Airflow task before bad data reaches Gold.",
      "Every storage path is an s3a:// URI, so moving from MinIO to AWS S3, ADLS, or GCS is a config change, not a code change.",
    ],
    kpis: [
      { label: "Ingestion paradigms unified", value: "3 (batch, streaming, CDC)" },
      { label: "Source tables via CDC", value: "4" },
      { label: "Medallion layers / Gold marts", value: "3 layers / 4 marts" },
      { label: "Streaming micro-batch interval", value: "10s (configurable)" },
      { label: "Kafka topics / max partitions", value: "5 / 6" },
      { label: "Automated tests", value: "16" },
      { label: "Airflow DAGs", value: "3" },
      { label: "Containerized services", value: "~19" },
      { label: "Codebase", value: "~1,500 LOC / 40+ modules" },
    ],
    learned: [
      "Exactly-once-style correctness comes from idempotent merges and deterministic ordering, not the transport layer.",
      "How Postgres logical decoding, replication slots, and the WAL actually work.",
      "The trade-offs in decimal handling, envelope unwrapping, and running streaming jobs under a scheduler built for finite tasks.",
    ],
  },
  {
    title: "Healthcare Unified Revenue Metrics Pipeline",
    description:
      "A Snowflake-on-AWS dbt platform unifying hospital billing, subscription revenue, CRM, legacy warehouse, and FX data into governed monthly ARR, NRR, and MRR metrics, with a three-lineage identity-resolved customer dimension and SCD Type 2 history.",
    status:
      "Structurally validated (dbt parse + compile clean across 17 models, dependencies resolved) via a clean-room install — not yet run against a live Snowflake warehouse or real data. See VALIDATION.md in the repo for exactly what was and wasn't checked.",
    tags: ["Snowflake", "dbt", "AWS", "Airflow", "MetricFlow", "Fivetran", "ECS Fargate"],
    highlights: [
      "Unifies five source systems (Salesforce CRM, SAP billing, subscription platform, Teradata legacy warehouse, FX API) via Fivetran CDC, S3 + Snowpipe, and Lambda/EventBridge into a layered dbt project (staging to intermediate to marts).",
      "Three-lineage customer dimension (CRM, legacy, subscription-only) reconciled with deterministic surrogate keys and crosswalk fields to prevent duplicate customers and orphaned revenue.",
      "ARR bridge classifies monthly movements (new, reactivation, expansion, contraction, renewal, churn) with SQL window functions, multi-currency FX normalization to USD, and governed MetricFlow metrics for ARR, NRR, MRR, and churn.",
      "SCD Type 2 snapshots preserve point-in-time customer/contract history; incremental MERGE models handle late-arriving corrections with 5-day and 3-month reprocessing windows plus a weekly full-refresh recovery job.",
      "Orchestrated via Amazon MWAA/Airflow and ECS Fargate, with GitHub Actions CI running SQLFluff linting, Slim CI, and ephemeral PR schemas; Snowflake RBAC, PII masking, and resource monitors enforce governance.",
      "Validation caught three real bugs before any warehouse was involved: an invalid package version pin, a deprecated dbt package, and three MetricFlow schema violations (missing metric labels, derived metrics referencing raw measures instead of metrics, a missing time-spine model).",
    ],
    kpis: [
      { label: "Source systems unified", value: "5" },
      { label: "dbt models", value: "17" },
      { label: "Data tests", value: "115" },
      { label: "Metrics / semantic models", value: "10 / 1" },
      { label: "Snapshots", value: "2" },
      { label: "Bugs caught by validation", value: "3" },
    ],
  },
  {
    title: "More projects coming soon",
    description:
      "Personal Lakehouse, streaming, and GenAI-on-data projects are in progress and will be published here.",
    tags: ["Databricks", "Airflow", "GenAI"],
    comingSoon: true,
  },
];

export const services = [
  {
    title: "Lakehouse Builds",
    description:
      "End-to-end Lakehouse architecture on Databricks or Snowflake: medallion design, Delta Lake, Unity Catalog governance, from raw ingestion to analytics-ready marts.",
  },
  {
    title: "Pipeline Migration & Modernization",
    description:
      "Moving legacy SAS, Hadoop, or on-prem ETL to modern cloud stacks (Databricks, Dataproc, BigQuery) without breaking downstream reporting.",
  },
  {
    title: "Real-Time Streaming",
    description:
      "Kafka and Spark Structured Streaming pipelines for high-volume, low-latency event processing. Built and tuned to run reliably at scale.",
  },
  {
    title: "Data Quality & Governance",
    description:
      "Config-driven data quality frameworks, RBAC, PII controls, and lineage. Built for regulated environments like healthcare and banking.",
  },
  {
    title: "dbt & Analytics Engineering",
    description:
      "Modular, tested, version-controlled dbt models with incremental materializations, staging to marts, audit-ready.",
  },
  {
    title: "GenAI-Assisted Data Workflows",
    description:
      "RAG pipelines and AI-assisted development for data enrichment, using LLMs, embeddings, and vector search alongside traditional pipelines.",
  },
];
