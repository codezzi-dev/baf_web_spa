import React, { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  description: ReactNode;
  icon: ReactNode;
  iconBgClass?: string;
  bulletPoints?: string[];
  bulletIcon?: ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  icon,
  iconBgClass = "bg-gradient-to-b from-tag-green to-tag-greenDark",
  bulletPoints = [],
  bulletIcon,
}) => {
  return (
    <div className="relative mb-10 p-6 md:p-10 text-gray-600 rounded-2xl shadow-xl shadow-gray-200 w-full md:w-150 overflow-hidden">
      {/* 🔥 Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-tag-green via-tag-red to-tag-yellow" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`${iconBgClass} w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0`}
        >
          {icon}
        </div>

        <span className="text-xl md:text-2xl text-black font-bold">
          {title}
        </span>
      </div>

      {/* Description */}
      <div className="text-sm md:text-base">{description}</div>

      {/* Bullet List */}
      {bulletPoints.length > 0 && (
        <div className="flex flex-col items-start gap-3 mt-4">
          {bulletPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="w-5 h-5 flex items-center justify-center mt-1">
                {bulletIcon}
              </div>
              <span className="text-sm md:text-base">{point}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InfoCard;
