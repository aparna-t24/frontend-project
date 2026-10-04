import React from 'react'
import { howItWorks } from '../data/mockData.js'
import { ClipboardList } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="section-label justify-center">
          <ClipboardList size={14} /> How it works
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          From raw file to diagnosis report
        </h2>
        <p className="mt-3 text-white/55">
          Four steps stand between a messy CSV and a model-ready dataset.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {howItWorks.map((s, i) => (
          <div key={s.step} className="glass-card group p-6 transition hover:border-clinic-400/30">
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-2xl font-bold text-clinic-400/50 transition group-hover:text-clinic-300">
                {s.step}
              </span>
              {i < howItWorks.length - 1 && (
                <span className="hidden h-px flex-1 translate-x-3 bg-gradient-to-r from-clinic-500/30 to-transparent lg:block" />
              )}
            </div>
            <h3 className="text-base font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/50">{s.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
