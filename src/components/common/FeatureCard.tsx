import React, { ReactNode } from "react";

interface FeatureItem {
  title: string;
  description: string;
}

interface FeatureCardProps {
  title: string;
  icon: ReactNode;
  iconGradient?: string; // tailwind gradient classes
  items: FeatureItem[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  icon,
  iconGradient = "bg-gradient-to-b from-gray-500 to-gray-700",
  items,
}) => {
  return (
    <div className="mb-10 p-10 text-gray-600 rounded-2xl shadow-xl shadow-gray-200 w-150">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div
          className={`${iconGradient} w-12 h-12 rounded-full flex items-center justify-center`}
        >
          {icon}
        </div>

        <span className="text-2xl text-black font-bold">{title}</span>
      </div>

      {/* Items */}
      <div className="flex flex-col items-start gap-4 m-4">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-start gap-2">
            <div className="text-lg text-black">{item.title}</div>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
