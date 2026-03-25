import React from "react";

interface Stat {
  value: string | number;
  label: string;
}

interface StatisticsSectionProps {
  stats: Stat[];
}

const gradients = [
  "bg-gradient-to-b from-tag-green to-tag-greenDark",
  "bg-gradient-to-b from-tag-red to-tag-redDark",
  "bg-gradient-to-b from-tag-yellow to-tag-yellowDark",
  "bg-gradient-to-b from-tag-purple to-tag-purpleDark",
];

const StatisticsSection = ({ stats }: StatisticsSectionProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-full mx-auto">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`
            ${gradients[index % gradients.length]}
            text-white
            h-28
            rounded-xl
            py-4 px-6
            flex flex-col items-center justify-center text-center
          `}
        >
          <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
          <div className="text-sm opacity-90">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatisticsSection;
