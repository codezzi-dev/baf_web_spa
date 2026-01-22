"use client";

import { Check } from "lucide-react";

type CheckboxProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
};

export const Checkbox = ({
  checked,
  onCheckedChange,
  disabled = false,
  className = "",
}: CheckboxProps) => {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => {
        if (disabled) return;
        onCheckedChange(!checked);
      }}
      className={`
        h-5 w-5 flex items-center justify-center rounded border
        transition-all duration-200
        ${checked ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-slate-300"}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${className}
      `}
    >
      {checked && <Check size={14} strokeWidth={3} />}
    </button>
  );
};
