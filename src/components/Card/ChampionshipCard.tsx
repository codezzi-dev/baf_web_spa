import React, { ReactNode } from "react";

interface ZoneItem {
  title: string;
  icon?: ReactNode;

  desc?: string;
  showDesc?: boolean;

  frequency?: string;
  showFrequency?: boolean;

  nextEdition?: string;
  showNextEdition?: boolean;
}

interface ZoneSectionProps {
  title: string;
  highlightedText?: string;
  highlightColorClass?: string;
  icon?: ReactNode; // fallback icon
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
    <div className="flex flex-col gap-10 my-8">
      {/* Section Title */}
      <div className="text-3xl font-bold text-center">
        {title}{" "}
        {highlightedText && (
          <span className={highlightColorClass}>{highlightedText}</span>
        )}
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-6 justify-center md:justify-start">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start w-full sm:w-[350px] md:w-[400px] p-6 gap-4 rounded-2xl border-2 border-gray-200 hover:border-tag-red transition"
          >
            {/* Icon */}
            {(item.icon ?? icon) && (
              <div className="text-tag-yellow">{item.icon ?? icon}</div>
            )}

            {/* Title */}
            <div className="text-lg sm:text-xl font-semibold">{item.title}</div>

            {/* Description */}
            {item.showDesc && item.desc && (
              <div className="text-base text-gray-600">{item.desc}</div>
            )}

            {/* Frequency */}
            {item.showFrequency && item.frequency && (
              <div className="text-base text-gray-600">
                <span className="font-medium">Frequency:</span> {item.frequency}
              </div>
            )}

            {/* Next Edition */}
            {item.showNextEdition && item.nextEdition && (
              <div className="text-base text-gray-600">
                <span className="font-medium">Next Edition:</span>{" "}
                {item.nextEdition}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZoneSection;
