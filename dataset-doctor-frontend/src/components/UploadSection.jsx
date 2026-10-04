import React, { useCallback, useRef, useState } from 'react'
import { UploadCloud, FileSpreadsheet, Loader2, Sparkles } from 'lucide-react'

const STAGES = [
  'Reading file…',
  'Scanning for missing values & duplicates…',
  'Checking outliers & class balance…',
  'Running AI diagnosis…',
]

export default function UploadSection({ onAnalyze, analyzing, analyzed }) {
  const [dragOver, setDragOver] = useState(false)
  const [fileName, setFileName] = useState(null)
  const [stageIdx, setStageIdx] = useState(0)
  const inputRef = useRef(null)

  const runAnalysis = useCallback(
    (name) => {
      setFileName(name)
      setStageIdx(0)
      onAnalyze(true)

      let i = 0
      const interval = setInterval(() => {
        i += 1
        setStageIdx(i)
        if (i >= STAGES.length) {
          clearInterval(interval)
          setTimeout(() => onAnalyze(false, true), 500)
        }
      }, 650)
    },
    [onAnalyze]
  )

  const handleFiles = (files) => {
    if (!files || !files.length) return
    runAnalysis(files[0].name)
  }

  return (
    <section id="upload" className="mx-auto max-w-5xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="section-label justify-center">
          <UploadCloud size={14} /> Step 1
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Upload your dataset
        </h2>
        <p className="mt-3 text-white/55">
          CSV or Excel, up to 200&nbsp;MB. Nothing is stored — analysis happens for this
          session only.
        </p>
      </div>

      <div
        onDragOver={(e) => {
          e.preventDefault()
          setDragOver(true)
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragOver(false)
          handleFiles(e.dataTransfer.files)
        }}
        className={`glass-card mt-10 flex flex-col items-center justify-center border-2 border-dashed px-6 py-14 text-center transition ${
          dragOver ? 'border-clinic-400 bg-clinic-400/5' : 'border-white/15'
        }`}
      >
        {!analyzing && !analyzed && (
          <>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-clinic-400/10 text-clinic-300 ring-1 ring-clinic-400/25">
              <UploadCloud size={26} />
            </div>
            <p className="text-sm font-medium text-white">
              Drag & drop your file here, or{' '}
              <button
                onClick={() => inputRef.current?.click()}
                className="text-clinic-300 underline underline-offset-4 hover:text-clinic-200"
              >
                browse
              </button>
            </p>
            <p className="mt-1.5 text-xs text-white/40">Supports .csv, .xlsx, .xls</p>
            <input
              ref={inputRef}
              type="file"
              accept=".csv,.xlsx,.xls"
              className="hidden"
              onChange={(e) => handleFiles(e.target.files)}
            />

            <div className="mt-8 flex items-center gap-3 text-xs text-white/30">
              <span className="h-px w-14 bg-white/10" /> or <span className="h-px w-14 bg-white/10" />
            </div>

            <button
              onClick={() => runAnalysis('customer_churn_raw.csv')}
              className="btn-primary mt-6"
            >
              <Sparkles size={16} />
              Try it with a sample dataset
            </button>
          </>
        )}

        {analyzing && (
          <div className="w-full max-w-sm">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-clinic-400/10 text-clinic-300 ring-1 ring-clinic-400/25 mx-auto">
              <Loader2 size={26} className="animate-spin" />
            </div>
            <p className="flex items-center justify-center gap-2 text-sm font-medium text-white">
              <FileSpreadsheet size={15} className="text-clinic-300" />
              {fileName}
            </p>
            <p className="mt-2 text-sm text-clinic-200">
              {STAGES[Math.min(stageIdx, STAGES.length - 1)]}
            </p>
            <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-clinic-500 to-clinic-300 transition-all duration-500"
                style={{ width: `${((stageIdx + 1) / STAGES.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        {analyzed && !analyzing && (
          <div>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-clinic-400/15 text-clinic-300 ring-1 ring-clinic-400/30 mx-auto">
              <FileSpreadsheet size={26} />
            </div>
            <p className="text-sm font-medium text-white">{fileName} — diagnosis complete</p>
            <p className="mt-1.5 text-xs text-white/40">
              Scroll down to view the full diagnosis report.
            </p>
            <button
              onClick={() => {
                setFileName(null)
                onAnalyze(false, false)
              }}
              className="btn-secondary mt-6 !px-5 !py-2.5 text-xs"
            >
              Analyze a different file
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
