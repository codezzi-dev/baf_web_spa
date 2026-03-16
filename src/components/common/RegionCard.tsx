import React, { ReactNode } from "react";

interface ZoneItem {
  title: string;
  description: string;
}

interface ZoneSectionProps {
  title: string;
  highlightedText?: string;
  highlightColorClass?: string;
  icon: ReactNode;
  items: ZoneItem[];
}

const ZoneSection: React.FC<ZoneSectionProps> = ({
  title,
  highlightedText,
  highlightColorClass = "text-red-500",
  icon,
  items,
}) => {
  return (
    <div className="flex flex-col items-center gap-10 p-8 my-8 bg-background shadow-xl shadow-gray-200 rounded-2xl">
      {/* Section Title */}
      <div className="text-3xl font-bold text-center">
        {title}{" "}
        {highlightedText && (
          <span className={highlightColorClass}>{highlightedText}</span>
        )}
      </div>

      {/* Zone Cards */}
      <div className="flex justify-center items-center gap-4 p-2 flex-wrap">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center h-40 w-50 p-2 gap-4 rounded-2xl shadow-2xl border-2 border-gray-200 shadow-gray-200 hover:border-[#C1272D] transition"
          >
            {/* Icon */}
            <div className="text-[#C1272D] mt-3">{icon}</div>

            {/* Title */}
            <div className="text-xl font-semibold text-center">
              {item.title}
            </div>

            {/* Description */}
            <div className="text-lg text-gray-600 text-center">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZoneSection;
