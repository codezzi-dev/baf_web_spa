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
  iconBgClass = "bg-gradient-to-b from-[#00704A] to-[#005239]",
  bulletPoints = [],
  bulletIcon,
}) => {
  return (
    <div className="mb-10 p-10 text-gray-600 rounded-2xl shadow-xl shadow-gray-200 w-150">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div
          className={`${iconBgClass} w-12 h-12 rounded-full flex items-center justify-center`}
        >
          {icon}
        </div>

        <span className="text-2xl text-black font-bold">{title}</span>
      </div>

      {/* Description */}
      <div>{description}</div>

      {/* Bullet List */}
      {bulletPoints.length > 0 && (
        <div className="flex flex-col items-start gap-2 m-4">
          {bulletPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center">
                {bulletIcon}
              </div>
              <span>{point}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InfoCard;
