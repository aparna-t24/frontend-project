import React from 'react'
import { Stethoscope, Github, Users } from 'lucide-react'

const team = [
  'Anurag',
  'Anurag Singh',
  'Anuj Gaur',
  'Aparna Yadav',
  'Aparna Trivedi',
  'Anushka Chaturvedi',
]

export default function Footer() {
  return (
    <footer id="team" className="border-t border-white/5 px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-clinic-400/15 text-clinic-300 ring-1 ring-clinic-400/30">
                <Stethoscope size={18} strokeWidth={2.2} />
              </span>
              <span className="text-[15px] font-bold tracking-tight text-white">
                Dataset<span className="text-clinic-300"> Doctor</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/45">
              AI-Powered Dataset Quality Analyzer for Machine Learning. Built for BCS-554
              Mini Project, Session 2026-27 — Department of Computer Science &amp;
              Engineering, Pranveer Singh Institute of Technology.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-white/35">
              <span className="pill">Team ID: 26_CS_3B_03</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-clinic-300">
              <Users size={13} /> Team
            </div>
            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 text-sm text-white/55 sm:grid-cols-2">
              {team.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-white/35 sm:flex-row">
          <span>© 2026 Dataset Doctor. Built with React &amp; Tailwind CSS.</span>
          <span className="flex items-center gap-1.5">
            <Github size={13} /> FastAPI backend integration coming soon
          </span>
        </div>
      </div>
    </footer>
  )
}
