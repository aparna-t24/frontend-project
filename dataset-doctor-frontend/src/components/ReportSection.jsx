import React from 'react'
import { FileDown, FileText, CheckCircle2 } from 'lucide-react'
import { mockDataset, issues, recommendations } from '../data/mockData.js'

function buildReportText() {
  const lines = [
    'DATASET DOCTOR — DIAGNOSIS REPORT',
    '='.repeat(40),
    `File: ${mockDataset.fileName}`,
    `Rows: ${mockDataset.rows} | Columns: ${mockDataset.columns}`,
    `Health Score: ${mockDataset.healthScore}/100 (${mockDataset.scoreLabel})`,
    '',
    'DETECTED ISSUES',
    '-'.repeat(40),
    ...issues.map((i) => `[${i.severity.toUpperCase()}] ${i.title} — ${i.detail}`),
    '',
    'AI RECOMMENDATIONS',
    '-'.repeat(40),
    ...recommendations.map((r, idx) => `${idx + 1}. (${r.priority}) ${r.title} — ${r.detail}`),
  ]
  return lines.join('\n')
}

export default function ReportSection() {
  const handleDownload = () => {
    const blob = new Blob([buildReportText()], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'dataset-doctor-report.txt'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <div className="glass-card relative overflow-hidden px-8 py-14 text-center">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-clinic-500/10 blur-3xl" />

        <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-clinic-400/15 text-clinic-300 ring-1 ring-clinic-400/30">
          <FileText size={26} />
        </div>

        <h2 className="relative mt-6 text-2xl font-bold text-white md:text-3xl">
          Take the full diagnosis with you
        </h2>
        <p className="relative mx-auto mt-3 max-w-lg text-sm text-white/55">
          Export a complete report — health score, every detected issue, and the
          prioritized AI recommendations — to document before you start preprocessing.
        </p>

        <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button onClick={handleDownload} className="btn-primary">
            <FileDown size={16} />
            Download Diagnosis Report
          </button>
        </div>

        <div className="relative mx-auto mt-8 flex max-w-md flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/40">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={13} className="text-clinic-400" /> Health score breakdown
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={13} className="text-clinic-400" /> Issue-by-issue detail
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={13} className="text-clinic-400" /> Ranked recommendations
          </span>
        </div>
      </div>
    </section>
  )
}
