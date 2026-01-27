import React from 'react'

interface Stat {
  value: string | number
  label: string
  color: string
}

interface StatisticsSectionProps {
  stats: Stat[]
}

const StatisticsSection = ({ stats }: StatisticsSectionProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-full mx-auto">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.color} text-white rounded-xl py-4 px-6`}
        >
          <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
          <div className="text-sm opacity-90">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

export default StatisticsSection