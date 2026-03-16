import React, { ReactNode } from "react";

interface FeatureItem {
  title: string;
  description: string;
}

interface FeatureCardProps {
  title: string;
  icon: ReactNode;
  iconGradient?: string;
  items: FeatureItem[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  icon,
  iconGradient = "bg-gradient-to-b from-gray-500 to-gray-700",
  items,
}) => {
  return (
    <div className="relative mb-10 p-6 md:p-10 text-gray-600 rounded-2xl shadow-xl shadow-gray-200 w-full md:w-150 overflow-hidden">
      {/* 🔥 Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-tag-green via-tag-red to-tag-yellow" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`${iconGradient} w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0`}
        >
          {icon}
        </div>

        <span className="text-xl md:text-2xl text-black font-bold">
          {title}
        </span>
      </div>

      {/* Items */}
      <div className="flex flex-col items-start gap-5 mt-4">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-start gap-2">
            <div className="text-base md:text-lg text-black font-medium">
              {item.title}
            </div>

            <span className="text-sm md:text-base">{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
