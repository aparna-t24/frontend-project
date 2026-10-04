import React from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from 'recharts'
import { ChartSpline } from 'lucide-react'
import { missingByColumn, classBalance, scoreTrend } from '../data/mockData.js'

const PIE_COLORS = ['#2dd4bf', '#fb7185']

function ChartCard({ title, subtitle, children }) {
  return (
    <div className="glass-card p-6">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <p className="mt-0.5 text-xs text-white/40">{subtitle}</p>
      <div className="mt-4 h-64">{children}</div>
    </div>
  )
}

const tooltipStyle = {
  background: '#0a0f18',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 10,
  fontSize: 12,
  color: '#e6f3f0',
}

export default function Visualizations() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="section-label justify-center">
          <ChartSpline size={14} /> Visual Insights
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          See the issues, not just the numbers
        </h2>
        <p className="mt-3 text-white/55">
          Interactive charts generated automatically from your uploaded dataset.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard title="Missing Values by Column" subtitle="Count of null cells per column">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={missingByColumn} layout="vertical" margin={{ left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" horizontal={false} />
              <XAxis type="number" tick={{ fill: '#8fa3ab', fontSize: 11 }} stroke="rgba(255,255,255,0.1)" />
              <YAxis
                dataKey="column"
                type="category"
                width={95}
                tick={{ fill: '#8fa3ab', fontSize: 11 }}
                stroke="rgba(255,255,255,0.1)"
              />
              <Tooltip contentStyle={tooltipStyle} cursor={{ fill: 'rgba(45,212,191,0.06)' }} />
              <Bar dataKey="missing" fill="#2dd4bf" radius={[0, 6, 6, 0]} barSize={14} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Class Balance" subtitle="Target column: churned">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={classBalance}
                dataKey="value"
                nameKey="name"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={3}
              >
                {classBalance.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} stroke="none" />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
              <Legend
                verticalAlign="bottom"
                height={24}
                iconType="circle"
                wrapperStyle={{ fontSize: 11, color: '#8fa3ab' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Health Score Improvement" subtitle="Projected score after fixes">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={scoreTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="stage" tick={{ fill: '#8fa3ab', fontSize: 10 }} stroke="rgba(255,255,255,0.1)" />
              <YAxis domain={[0, 100]} tick={{ fill: '#8fa3ab', fontSize: 11 }} stroke="rgba(255,255,255,0.1)" />
              <Tooltip contentStyle={tooltipStyle} />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#2dd4bf"
                strokeWidth={2.5}
                dot={{ r: 4, fill: '#0a0f18', stroke: '#2dd4bf', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </section>
  )
}
