import React, { useState } from 'react'
import { Stethoscope, Menu, X } from 'lucide-react'

const links = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Upload', href: '#upload' },
  { label: 'Diagnosis', href: '#diagnosis' },
  { label: 'Team', href: '#team' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-clinic-400/15 text-clinic-300 ring-1 ring-clinic-400/30">
            <Stethoscope size={18} strokeWidth={2.2} />
          </span>
          <span className="text-[15px] font-bold tracking-tight text-white">
            Dataset<span className="text-clinic-300"> Doctor</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/60 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#upload" className="btn-secondary !px-5 !py-2.5 text-[13px]">
            Analyze a Dataset
          </a>
        </div>

        <button
          className="text-white/70 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-ink-950 px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-white/70"
              >
                {l.label}
              </a>
            ))}
            <a href="#upload" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Analyze a Dataset
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
