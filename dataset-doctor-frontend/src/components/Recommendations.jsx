import React from 'react'
import { BrainCircuit, ArrowUpRight } from 'lucide-react'
import { recommendations } from '../data/mockData.js'

const PRIORITY_STYLE = {
  High: 'text-rose-300 bg-rose-400/10 border-rose-400/25',
  Medium: 'text-amber-300 bg-amber-400/10 border-amber-400/25',
  Low: 'text-clinic-300 bg-clinic-400/10 border-clinic-400/25',
}

export default function Recommendations() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="section-label justify-center">
          <BrainCircuit size={14} /> AI Prescription
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Recommended treatment plan
        </h2>
        <p className="mt-3 text-white/55">
          Prioritized preprocessing steps generated from the detected issues above.
        </p>
      </div>

      <div className="mt-12 space-y-3">
        {recommendations.map((r, i) => (
          <div
            key={r.title}
            className="glass-card flex flex-col gap-3 p-5 transition hover:border-clinic-400/25 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-4">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 font-mono text-xs font-semibold text-white/50">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">{r.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-white/50">{r.detail}</p>
              </div>
            </div>
            <span
              className={`ml-12 inline-flex w-fit shrink-0 items-center gap-1 rounded-full border px-3 py-1 text-[11px] font-semibold sm:ml-0 ${PRIORITY_STYLE[r.priority]}`}
            >
              {r.priority} Priority
              <ArrowUpRight size={12} />
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
