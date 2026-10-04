// Mock diagnosis payload — shaped the way the FastAPI backend is expected
// to return it, so swapping this for a real fetch() later is a drop-in change.

export const mockDataset = {
  fileName: 'customer_churn_raw.csv',
  rows: 12480,
  columns: 21,
  sizeKb: 2140,
  healthScore: 68,
  scoreLabel: 'Needs Attention',
  vitals: [
    { label: 'Missing Values', value: '4.8%', status: 'warning' },
    { label: 'Duplicate Rows', value: '312', status: 'critical' },
    { label: 'Outliers Detected', value: '96', status: 'warning' },
    { label: 'Class Imbalance', value: '1 : 6.4', status: 'critical' },
    { label: 'Dtype Mismatches', value: '3 cols', status: 'warning' },
    { label: 'Leakage Risk', value: 'Low', status: 'good' },
  ],
}

export const issues = [
  {
    id: 'missing',
    title: 'Missing Values',
    severity: 'warning',
    detail: '4.8% of cells are null, concentrated in 3 columns.',
    columns: ['last_login', 'monthly_spend', 'support_tickets'],
    icon: 'CircleSlash',
  },
  {
    id: 'duplicates',
    title: 'Duplicate Records',
    severity: 'critical',
    detail: '312 fully duplicated rows found (2.5% of dataset).',
    columns: ['— entire row —'],
    icon: 'Copy',
  },
  {
    id: 'outliers',
    title: 'Statistical Outliers',
    severity: 'warning',
    detail: '96 values fall outside 3 standard deviations.',
    columns: ['monthly_spend', 'tenure_days'],
    icon: 'TriangleAlert',
  },
  {
    id: 'imbalance',
    title: 'Class Imbalance',
    severity: 'critical',
    detail: 'Target class ratio is 1:6.4 — minority class under-represented.',
    columns: ['churned'],
    icon: 'Scale',
  },
  {
    id: 'dtype',
    title: 'Incorrect Data Types',
    severity: 'warning',
    detail: '3 numeric columns are stored as text/object.',
    columns: ['signup_date', 'zipcode', 'plan_id'],
    icon: 'Binary',
  },
  {
    id: 'leakage',
    title: 'Data Leakage Risk',
    severity: 'good',
    detail: 'No strong post-outcome correlations detected.',
    columns: ['—'],
    icon: 'ShieldCheck',
  },
]

export const missingByColumn = [
  { column: 'last_login', missing: 22 },
  { column: 'monthly_spend', missing: 14 },
  { column: 'support_tickets', missing: 9 },
  { column: 'signup_date', missing: 3 },
  { column: 'zipcode', missing: 2 },
  { column: 'plan_id', missing: 1 },
]

export const classBalance = [
  { name: 'Retained', value: 10745 },
  { name: 'Churned', value: 1735 },
]

export const scoreTrend = [
  { stage: 'Raw Upload', score: 41 },
  { stage: 'After Dedup', score: 54 },
  { stage: 'After Impute', score: 63 },
  { stage: 'After Rebalance', score: 68 },
]

export const recommendations = [
  {
    priority: 'High',
    title: 'Remove 312 duplicate rows',
    detail: 'Exact duplicates inflate training signal and bias validation metrics. Drop before splitting train/test.',
  },
  {
    priority: 'High',
    title: 'Address class imbalance on `churned`',
    detail: 'Apply SMOTE or class-weighted loss — current 1:6.4 ratio will bias the model toward the majority class.',
  },
  {
    priority: 'Medium',
    title: 'Impute missing `monthly_spend` and `last_login`',
    detail: 'Use median imputation for spend and forward-fill for login timestamps rather than dropping rows.',
  },
  {
    priority: 'Medium',
    title: 'Cast `signup_date`, `zipcode`, `plan_id` to correct types',
    detail: 'These are stored as object/text and will break numeric feature pipelines downstream.',
  },
  {
    priority: 'Low',
    title: 'Review outliers in `tenure_days`',
    detail: '96 points exceed 3σ — verify these are valid long-tenure customers, not data entry errors.',
  },
]

export const howItWorks = [
  {
    step: '01',
    title: 'Upload your dataset',
    detail: 'Drop in a CSV or Excel file — nothing leaves your session until you choose to export.',
  },
  {
    step: '02',
    title: 'Automated diagnosis',
    detail: 'Missing values, duplicates, outliers, imbalance, dtypes, correlation and leakage are checked in parallel.',
  },
  {
    step: '03',
    title: 'Get a Health Score',
    detail: 'A single 0–100 score plus a prioritized, AI-generated preprocessing checklist.',
  },
  {
    step: '04',
    title: 'Export the report',
    detail: 'Download a shareable diagnosis report to document findings before model training.',
  },
]
