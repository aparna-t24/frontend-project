# Dataset Doctor — Frontend

Frontend for **Dataset Doctor: AI-Powered Dataset Quality Analyzer for Machine Learning**
(BCS-554 Mini Project, Team 26_CS_3B_03).

Built with React, Vite, Tailwind CSS, Recharts, and lucide-react — matching the stack
listed in the project proposal (React.js, Tailwind CSS, ready to sit in front of a
FastAPI backend).

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## What's inside

- **Hero + How it works** — landing sections explaining the tool.
- **Upload section** (`#upload`) — drag-and-drop CSV/Excel zone with a "Try it with a
  sample dataset" button that simulates the analysis pipeline (no backend required yet).
- **Diagnosis dashboard** (`#diagnosis`) — animated Dataset Health Score gauge, dataset
  vitals, and issue cards (missing values, duplicates, outliers, class imbalance,
  dtype mismatches, leakage risk).
- **Visualizations** — missing-values bar chart, class balance pie chart, and a
  projected health-score-improvement line chart (Recharts).
- **AI recommendations** — prioritized preprocessing checklist.
- **Report export** — downloads a plain-text diagnosis report client-side as a stand-in
  for the real PDF export.

## Wiring up the real backend

All mock data lives in `src/data/mockData.js`, shaped like the JSON the FastAPI backend
is expected to return. Swap in a real `fetch('/api/analyze', ...)` call inside
`UploadSection.jsx`'s `runAnalysis` function, feed the response into `App.jsx` state
instead of the static imports, and the rest of the UI keeps working unchanged.
