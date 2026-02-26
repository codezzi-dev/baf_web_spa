import React from "react";

interface Stat {
  value: string | number;
  label: string;
  color: string;
}

interface StatCardProps {
  states: Stat[];
}

const StatCard: React.FC<StatCardProps> = ({ states }) => {
  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
      {states.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-2 p-6 bg-background shadow-sm rounded-2xl text-center"
        >
          <div
            className="text-3xl md:text-3xl font-bold"
            style={{ color: stat.color }}
          >
            {stat.value}
          </div>

          <div className="text-sm md:text-base text-black">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatCard;
