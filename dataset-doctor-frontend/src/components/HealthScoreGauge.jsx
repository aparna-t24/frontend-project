import React, { useEffect, useState } from 'react'
import { HeartPulse } from 'lucide-react'

export default function HealthScoreGauge({ score = 68, label = 'Needs Attention' }) {
  const [animated, setAnimated] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setAnimated(score), 150)
    return () => clearTimeout(t)
  }, [score])

  const radius = 88
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (animated / 100) * circumference

  const color =
    score >= 80 ? '#2dd4bf' : score >= 55 ? '#facc15' : '#fb7185'
  const glow =
    score >= 80
      ? 'shadow-[0_0_50px_-10px_rgba(45,212,191,0.55)]'
      : score >= 55
      ? 'shadow-[0_0_50px_-10px_rgba(250,204,21,0.4)]'
      : 'shadow-[0_0_50px_-10px_rgba(251,113,133,0.4)]'

  return (
    <div className={`relative flex h-56 w-56 items-center justify-center rounded-full ${glow}`}>
      <svg width="220" height="220" viewBox="0 0 220 220" className="-rotate-90">
        <circle
          cx="110"
          cy="110"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="14"
        />
        <circle
          cx="110"
          cy="110"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1.2s ease-out, stroke 0.6s' }}
        />
      </svg>

      <div className="absolute flex flex-col items-center">
        <HeartPulse size={16} className="mb-1 text-white/40" />
        <span className="font-mono text-5xl font-bold text-white tabular-nums">
          {animated}
        </span>
        <span className="text-xs text-white/40">out of 100</span>
        <span
          className="mt-2 rounded-full px-3 py-1 text-[11px] font-semibold"
          style={{ color, backgroundColor: `${color}1a`, border: `1px solid ${color}40` }}
        >
          {label}
        </span>
      </div>
    </div>
  )
}
