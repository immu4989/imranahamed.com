export const SITE = {
  title: 'Imran Ahamed',
  description:
    'Applied AI/ML engineer. Multi-agent systems, RAG, and open-source ML infrastructure. Co-founder at VEZRAN.',
  url: 'https://imranahamed.com',
  author: 'Imran Ahamed',
  locale: 'en',
  initials: 'IA',
} as const;

export const SOCIAL = {
  github: 'https://github.com/immu4989',
  linkedin: 'https://www.linkedin.com/in/imranahamed/',
  scholar: 'https://scholar.google.com/citations?user=1wuxc7MAAAAJ',
  email: 'mailto:immu4989@gmail.com',
  vezran: 'https://www.vezran.com',
  zyberpol: 'https://www.zyberpol.com',
  substack: 'https://imranahamed.substack.com',
  // TODO: add if/when you create these
  x: '',
  huggingface: '',
  medium: '',
  hackernoon: '',
  youtube: '',
} as const;

export const NEWSLETTER = {
  substack: 'https://imranahamed.substack.com',
} as const;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/writing', label: 'Writing' },
  { href: '/notes', label: 'Notes' },
  { href: '/projects', label: 'Projects' },
  { href: '/contributions', label: 'OSS' },
  { href: '/about', label: 'About' },
] as const;

export const STATS = [
  { value: '26+', label: 'merged OSS PRs', accent: 'brand' },
  { value: '8+', label: 'years shipping ML in production', accent: 'accent-4' },
  { value: '1', label: 'agentic SOC platform, in production', accent: 'accent-1' },
  { value: '3', label: 'companies (incl. one I co-founded)', accent: 'accent-3' },
] as const;

// Merged / open PRs across major OSS projects — grouped for the Contributions page.
// Update as new PRs land or get merged.
export type ContribStatus = 'merged' | 'open' | 'closed';
export interface ContribPR {
  number: number;
  title: string;
  url: string;
  status: ContribStatus;
  merged?: string;
  note?: string;
}
export interface ContribProject {
  name: string;
  repo: string;
  url: string;
  description: string;
  stars?: string;
  focus: string;
  color: string;
  prs: ContribPR[];
}

export const CONTRIBUTIONS: ContribProject[] = [
  {
    name: 'dowhy',
    repo: 'py-why/dowhy',
    url: 'https://github.com/py-why/dowhy',
    description: 'Causal inference framework — reproducibility + statistical rigor.',
    focus: 'Determinism + significance-level API',
    color: '#6366f1',
    prs: [
      { number: 1607, title: 'Significance clarity + significance_level (closes #879)', url: 'https://github.com/py-why/dowhy/pull/1607', status: 'merged', merged: '2026-07-01' },
      { number: 1611, title: 'sklearn multi_class → OneVsRest (closes #1610)', url: 'https://github.com/py-why/dowhy/pull/1611', status: 'merged', merged: '2026-07-01' },
      { number: 1586, title: 'Categorical interpreter fix (closes #1588)', url: 'https://github.com/py-why/dowhy/pull/1586', status: 'merged', merged: '2026-07-01' },
      { number: 1571, title: 'random_state for AddUnobservedCommonCause', url: 'https://github.com/py-why/dowhy/pull/1571', status: 'merged' },
      { number: 1557, title: 'DummyOutcomeRefuter deterministic seeding', url: 'https://github.com/py-why/dowhy/pull/1557', status: 'merged' },
      { number: 1556, title: 'random_state in CausalEstimator bootstrap', url: 'https://github.com/py-why/dowhy/pull/1556', status: 'merged' },
      { number: 1495, title: 'Reproducibility fix', url: 'https://github.com/py-why/dowhy/pull/1495', status: 'merged' },
      { number: 1609, title: 'pandas include_groups (open)', url: 'https://github.com/py-why/dowhy/pull/1609', status: 'open' },
    ],
  },
  {
    name: 'FLAML',
    repo: 'microsoft/FLAML',
    url: 'https://github.com/microsoft/FLAML',
    description: 'AutoML library from Microsoft Research — reproducibility audit series.',
    focus: 'Reproducibility audit — 6 PRs, zero review comments',
    color: '#8b5cf6',
    prs: [
      { number: 1541, title: 'Reproducibility fix', url: 'https://github.com/microsoft/FLAML/pull/1541', status: 'merged' },
      { number: 1546, title: 'Reproducibility fix', url: 'https://github.com/microsoft/FLAML/pull/1546', status: 'merged' },
      { number: 1547, title: 'Reproducibility fix', url: 'https://github.com/microsoft/FLAML/pull/1547', status: 'merged' },
      { number: 1549, title: 'Reproducibility fix', url: 'https://github.com/microsoft/FLAML/pull/1549', status: 'merged' },
      { number: 1551, title: 'Reproducibility fix', url: 'https://github.com/microsoft/FLAML/pull/1551', status: 'merged' },
      { number: 1552, title: 'Reproducibility fix (closes #1540)', url: 'https://github.com/microsoft/FLAML/pull/1552', status: 'merged' },
    ],
  },
  {
    name: 'MAPIE',
    repo: 'scikit-learn-contrib/MAPIE',
    url: 'https://github.com/scikit-learn-contrib/MAPIE',
    description: 'Calibrated prediction intervals for any sklearn estimator.',
    focus: '.reset() trilogy + optimize_beta bug fix',
    color: '#ec4899',
    prs: [
      { number: 923, title: 'optimize_beta parameter fix (closes #588, #484)', url: 'https://github.com/scikit-learn-contrib/MAPIE/pull/923', status: 'merged', merged: '2026-05-18' },
      { number: 931, title: 'Cross .reset() propagation', url: 'https://github.com/scikit-learn-contrib/MAPIE/pull/931', status: 'merged', merged: '2026-06-01' },
      { number: 936, title: 'Jackknife .reset() propagation', url: 'https://github.com/scikit-learn-contrib/MAPIE/pull/936', status: 'merged', merged: '2026-06-03' },
      { number: 943, title: 'CrossConformalClassifier .reset()', url: 'https://github.com/scikit-learn-contrib/MAPIE/pull/943', status: 'merged', merged: '2026-06-08' },
    ],
  },
  {
    name: 'Shapash',
    repo: 'MAIF/shapash',
    url: 'https://github.com/MAIF/shapash',
    description: 'ML interpretability library (3.3k+ stars) — SmartPredictor hardening.',
    focus: 'SmartPredictor production-hardening series',
    color: '#f97316',
    prs: [
      { number: 700, title: 'contribution_plot NaN handling (closes #580)', url: 'https://github.com/MAIF/shapash/pull/700', status: 'merged', merged: '2026-05-22' },
      { number: 711, title: 'SmartPredictor input validation (#707 Gap 2)', url: 'https://github.com/MAIF/shapash/pull/711', status: 'merged', merged: '2026-06-15' },
      { number: 722, title: 'SmartPredictor save/load manifest (#707 Gap 1)', url: 'https://github.com/MAIF/shapash/pull/722', status: 'merged', merged: '2026-06-29' },
    ],
  },
  {
    name: 'PyRIT',
    repo: 'microsoft/PyRIT',
    url: 'https://github.com/microsoft/PyRIT',
    description: 'Microsoft Python Risk Identification Tool — LLM red-teaming.',
    focus: 'Scorer + orchestration fixes',
    color: '#06b6d4',
    prs: [
      { number: 1795, title: 'Scorer fix', url: 'https://github.com/microsoft/PyRIT/pull/1795', status: 'merged' },
      { number: 1867, title: 'Scorer/orchestrator improvement', url: 'https://github.com/microsoft/PyRIT/pull/1867', status: 'merged' },
      { number: 2005, title: 'Contribution', url: 'https://github.com/microsoft/PyRIT/pull/2005', status: 'merged' },
      { number: 2009, title: 'Contribution', url: 'https://github.com/microsoft/PyRIT/pull/2009', status: 'open' },
    ],
  },
  {
    name: 'imbalanced-learn',
    repo: 'scikit-learn-contrib/imbalanced-learn',
    url: 'https://github.com/scikit-learn-contrib/imbalanced-learn',
    description: 'sklearn-compatible sampling for imbalanced datasets.',
    focus: 'SMOTENC encoder + sample_weight',
    color: '#10b981',
    prs: [
      { number: 1177, title: 'SMOTENC drop encoder (closes #1035)', url: 'https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1177', status: 'merged', merged: '2026-06-07' },
      { number: 1181, title: 'Specificity sample_weight bug fix', url: 'https://github.com/scikit-learn-contrib/imbalanced-learn/pull/1181', status: 'open' },
    ],
  },
  {
    name: 'EconML',
    repo: 'py-why/EconML',
    url: 'https://github.com/py-why/EconML',
    description: 'Estimating heterogeneous treatment effects (PyWhy).',
    focus: 'Discrete-T + continuous-T fix',
    color: '#a855f7',
    prs: [
      { number: 1029, title: 'Broadened transformer fix (closes #1006)', url: 'https://github.com/py-why/EconML/pull/1029', status: 'merged', merged: '2026-06-03' },
    ],
  },
  {
    name: 'fairlearn',
    repo: 'fairlearn/fairlearn',
    url: 'https://github.com/fairlearn/fairlearn',
    description: 'Assessing and mitigating unfairness in ML models.',
    focus: 'Peer-review evidence — request-changes → shaped merged code',
    color: '#f59e0b',
    prs: [
      { number: 1632, title: 'Reviewed + shaped final code (constraints_ + lambda_cumsum)', url: 'https://github.com/fairlearn/fairlearn/pull/1632', status: 'merged', merged: '2026-06-13' },
    ],
  },
  {
    name: 'mlflow',
    repo: 'mlflow/mlflow',
    url: 'https://github.com/mlflow/mlflow',
    description: 'Open-source MLOps platform — evaluation infrastructure.',
    focus: 'pos_label handling in ROC/PR curves',
    color: '#ef4444',
    prs: [
      { number: 24049, title: 'Fix evaluate pos_label curve AUC (closes #23991)', url: 'https://github.com/mlflow/mlflow/pull/24049', status: 'open' },
    ],
  },
];

export const SECURITY_WORK = [
  {
    title: 'HF Transformers path-traversal cluster',
    org: 'HuggingFace',
    kind: 'Coordinated disclosure',
    id: 'Huntr #38583',
    date: '2026-06-30',
    summary:
      'Four-site path-traversal cluster in checkpoint loading — extends the #46097 fix. Disclosed via Huntr + security@huggingface.co with proof-of-concept and remediation.',
    url: 'https://huntr.com/bounties/153d7da0-5faa-4298-b99f-555f1e90fe37',
  },
  {
    title: 'DSPy Security Bench',
    org: 'Open source (own repo)',
    kind: 'Security benchmark',
    id: 'immu4989/dspy-security-bench',
    date: '2026-06',
    summary:
      'Reproducible security benchmark for DSPy pipelines — prompt injection, jailbreak, and adversarial-example attacks across representative DSPy programs.',
    url: 'https://github.com/immu4989/dspy-security-bench',
  },
] as const;
