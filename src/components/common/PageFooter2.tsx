import React, { ReactNode } from "react";
import { SquareArrowOutUpRight } from "lucide-react";

interface CTAButton {
  label: string;
  onClick?: () => void;
  variant?: "filled" | "outline";
}

interface CallToActionProps {
  icon: ReactNode;
  title: string;
  description: ReactNode;
  backgroundClass?: string;
  buttons: CTAButton[];
}

const CallToAction: React.FC<CallToActionProps> = ({
  icon,
  title,
  description,
  backgroundClass = "bg-gradient-to-b from-tag-green to-tag-greenDark",
  buttons,
}) => {
  return (
    <div className={`mt-16 p-6 rounded-2xl ${backgroundClass}`}>
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className="text-[#e5e7eb] mt-6">{icon}</div>

        {/* Title */}
        <div className="font-bold text-white mt-4 text-3xl">{title}</div>

        {/* Description */}
        <div className="text-white mt-3 text-lg max-w-2xl">{description}</div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 my-8 flex-wrap">
          {buttons.map((btn, index) => {
            const isOutline = btn.variant === "outline";

            return (
              <button
                key={index}
                onClick={btn.onClick}
                className={`
                  flex items-center gap-2
                  rounded-2xl
                  px-6 py-3
                  font-medium
                  transition-all duration-300
                  ${
                    isOutline
                      ? "text-white border-2 border-white hover:bg-white/20"
                      : "bg-background text-tag-green hover:bg-accent hover:scale-105"
                  }
                `}
              >
                {btn.label}

                {/* Show icon only for filled */}
                {!isOutline && <SquareArrowOutUpRight size={18} />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
