import React from 'react'
import { Stethoscope, Rows3, Columns3, FileDigit } from 'lucide-react'
import HealthScoreGauge from './HealthScoreGauge.jsx'
import IssueCards from './IssueCards.jsx'
import { mockDataset } from '../data/mockData.js'

const STATUS_DOT = {
  good: 'bg-clinic-400',
  warning: 'bg-amber-400',
  critical: 'bg-rose-400',
}

export default function DiagnosisDashboard() {
  return (
    <section id="diagnosis" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="section-label justify-center">
          <Stethoscope size={14} /> Step 2
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Diagnosis Report
        </h2>
        <p className="mt-3 text-white/55">{mockDataset.fileName}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[340px_1fr]">
        {/* Left: score + meta */}
        <div className="glass-card flex flex-col items-center gap-6 p-8">
          <HealthScoreGauge score={mockDataset.healthScore} label={mockDataset.scoreLabel} />

          <div className="grid w-full grid-cols-3 gap-3 border-t border-white/10 pt-6 text-center">
            <div>
              <Rows3 size={15} className="mx-auto mb-1 text-clinic-300" />
              <div className="font-mono text-sm font-semibold text-white">
                {mockDataset.rows.toLocaleString()}
              </div>
              <div className="text-[11px] text-white/40">rows</div>
            </div>
            <div>
              <Columns3 size={15} className="mx-auto mb-1 text-clinic-300" />
              <div className="font-mono text-sm font-semibold text-white">
                {mockDataset.columns}
              </div>
              <div className="text-[11px] text-white/40">columns</div>
            </div>
            <div>
              <FileDigit size={15} className="mx-auto mb-1 text-clinic-300" />
              <div className="font-mono text-sm font-semibold text-white">
                {mockDataset.sizeKb.toLocaleString()}
              </div>
              <div className="text-[11px] text-white/40">KB</div>
            </div>
          </div>

          <div className="w-full space-y-2.5 border-t border-white/10 pt-6">
            {mockDataset.vitals.map((v) => (
              <div key={v.label} className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-white/55">
                  <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[v.status]}`} />
                  {v.label}
                </span>
                <span className="font-mono font-semibold text-white/85">{v.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: issue cards */}
        <IssueCards />
      </div>
    </section>
  )
}
