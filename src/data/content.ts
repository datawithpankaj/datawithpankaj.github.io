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
    company: "Harman India (HCS)",
    companyContext: "Projects: Convatec (Patient Platform), Lowe's (Price Optimisation & Strategy)",
    period: "Apr 2025 - Present",
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

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  comingSoon?: boolean;
};

// Personal projects go here. Each card renders from this array —
// add an entry (with a real link/repo) and it shows up on the site automatically.
export const projects: Project[] = [
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
