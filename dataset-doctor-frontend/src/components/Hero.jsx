import React from 'react'
import { Activity, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-24 pt-20 md:pt-28">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-clinic-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mx-auto mb-6 inline-flex animate-floatSlow items-center gap-2 rounded-full border border-clinic-400/25 bg-clinic-400/10 px-4 py-1.5 text-xs font-semibold text-clinic-200">
          <Sparkles size={13} />
          AI-Powered Dataset Quality Analyzer for Machine Learning
        </div>

        <h1 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
          A full check-up for your
          <span className="relative mx-3 inline-block text-clinic-300">
            dataset
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
            >
              <path
                d="M0 8 Q 50 0 100 8 T 200 8"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                className="text-clinic-500/60"
              />
            </svg>
          </span>
          before it ever meets a model.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-white/60 md:text-lg">
          Dataset Doctor diagnoses missing values, duplicates, outliers, class imbalance,
          incorrect types, and data leakage — then hands you a Health Score and an
          AI-generated treatment plan, not just another statistics table.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#upload" className="btn-primary w-full sm:w-auto">
            Diagnose My Dataset
            <ArrowRight size={16} />
          </a>
          <a href="#how-it-works" className="btn-secondary w-full sm:w-auto">
            See how it works
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/40">
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-clinic-400" /> Leakage-aware checks
          </span>
          <span className="flex items-center gap-1.5">
            <Activity size={14} className="text-clinic-400" /> Real-time health scoring
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles size={14} className="text-clinic-400" /> AI preprocessing guidance
          </span>
        </div>
      </div>

      {/* EKG pulse divider */}
      <div className="relative mx-auto mt-16 max-w-4xl">
        <svg viewBox="0 0 800 80" className="w-full text-clinic-400/70">
          <path
            d="M0 40 H240 L265 10 L295 70 L320 40 H420 L445 20 L470 60 L495 40 H800"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="1400"
            className="animate-pulseline"
          />
        </svg>
      </div>
    </section>
  )
}
