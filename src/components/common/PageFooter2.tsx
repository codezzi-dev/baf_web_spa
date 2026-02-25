import React, { ReactNode } from "react";

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
  backgroundClass = "bg-gradient-to-b from-[#00704A] to-[#005239]",
  buttons,
}) => {
  return (
    <div className={`mt-16 p-4 rounded-2xl ${backgroundClass}`}>
      <div className="flex flex-col items-center">
        {/* Icon */}
        <div className="text-[#e5e7eb] mt-6">{icon}</div>

        {/* Title */}
        <div className="font-bold text-white m-3 text-3xl text-center">
          {title}
        </div>

        {/* Description */}
        <div className="text-center text-white m-3 text-lg">{description}</div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 my-6 flex-wrap">
          {buttons.map((btn, index) => {
            const isOutline = btn.variant === "outline";

            return (
              <button
                key={index}
                onClick={btn.onClick}
                className={`rounded-2xl p-4 transition ${
                  isOutline
                    ? "text-white border-2 border-white hover:bg-white/20"
                    : "bg-background text-[#00704A] hover:bg-accent"
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
