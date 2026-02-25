import React, { ReactNode } from "react";

interface InfoItemProps {
  title: string;
  description: ReactNode;
  icon: ReactNode;
  iconBg?: string;
  iconColor?: string;
}

const InfoItem: React.FC<InfoItemProps> = ({
  title,
  description,
  icon,
  iconBg = "",
  iconColor = "text-gray-600",
}) => {
  return (
    <div className="flex flex-col gap-2 m-3">
      {/* Icon + Title Row */}
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 ${iconBg} flex items-center justify-center flex-shrink-0`}
        >
          <div className={iconColor}>{icon}</div>
        </div>

        <h3 className="font-semibold text-lg text-[#2D3436] leading-none">
          {title}
        </h3>
      </div>

      {/* Description */}
      <div className="text-gray-600 ml-[64px]">{description}</div>
    </div>
  );
};

export default InfoItem;
