import React from 'react'
import {
  CircleSlash,
  Copy,
  TriangleAlert,
  Scale,
  Binary,
  ShieldCheck,
} from 'lucide-react'
import { issues } from '../data/mockData.js'

const ICONS = {
  CircleSlash,
  Copy,
  TriangleAlert,
  Scale,
  Binary,
  ShieldCheck,
}

const SEVERITY_STYLE = {
  critical: {
    ring: 'ring-rose-400/25',
    bg: 'bg-rose-400/10',
    text: 'text-rose-300',
    dot: 'bg-rose-400',
    tag: 'Critical',
  },
  warning: {
    ring: 'ring-amber-400/25',
    bg: 'bg-amber-400/10',
    text: 'text-amber-300',
    dot: 'bg-amber-400',
    tag: 'Warning',
  },
  good: {
    ring: 'ring-clinic-400/25',
    bg: 'bg-clinic-400/10',
    text: 'text-clinic-300',
    dot: 'bg-clinic-400',
    tag: 'Healthy',
  },
}

export default function IssueCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {issues.map((issue) => {
        const Icon = ICONS[issue.icon]
        const s = SEVERITY_STYLE[issue.severity]
        return (
          <div
            key={issue.id}
            className={`glass-card p-5 ring-1 ${s.ring} transition hover:-translate-y-0.5 hover:bg-white/[0.05]`}
          >
            <div className="flex items-start justify-between">
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${s.bg} ${s.text}`}>
                <Icon size={19} />
              </span>
              <span className={`flex items-center gap-1.5 text-[11px] font-semibold ${s.text}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                {s.tag}
              </span>
            </div>

            <h3 className="mt-4 text-sm font-semibold text-white">{issue.title}</h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-white/50">{issue.detail}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {issue.columns.map((c) => (
                <span
                  key={c}
                  className="rounded-md border border-white/10 bg-black/20 px-2 py-0.5 font-mono text-[11px] text-white/45"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
