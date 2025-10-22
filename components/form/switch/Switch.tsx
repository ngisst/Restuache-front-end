"use client";
import React, { useState } from "react";

interface SwitchProps {
  label: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  onChange?: (checked: boolean) => void;
  color?: "blue" | "gray"; // Added prop to toggle color theme
}

const Switch: React.FC<SwitchProps> = ({
  label,
  defaultChecked = false,
  disabled = false,
  onChange,
  color = "blue",
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (disabled) return;
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onChange) {
      onChange(newCheckedState);
    }
  };

  const switchColors =
    color === "blue"
      ? {
          background: isChecked
            ? "bg-brand-500"
            : "bg-gray-200 dark:bg-white/10",
          knob: isChecked
            ? "translate-x-5" // Changed from translate-x-full
            : "translate-x-0",
        }
      : {
          background: isChecked
            ? "bg-gray-800 dark:bg-white/10"
            : "bg-gray-200 dark:bg-white/10",
          knob: isChecked
            ? "translate-x-5" // Changed from translate-x-full
            : "translate-x-0",
        };

  return (
    <label
      className={`inline-flex cursor-pointer items-center gap-3 text-sm font-medium select-none ${
        disabled ? "text-gray-400" : "text-gray-700 dark:text-gray-400"
      }`}
      onClick={handleToggle}
    >
      <div className="relative inline-block">
        <div
          className={`block h-6 w-11 rounded-full transition-colors duration-150 ease-linear ${
            disabled
              ? "pointer-events-none bg-gray-100 dark:bg-gray-800"
              : switchColors.background
          }`}
        ></div>
        <div
          className={`shadow-theme-sm absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform duration-150 ease-linear ${switchColors.knob}`}
        ></div>
      </div>
      <span className="w-16">{label}</span>
    </label>
  );
};

export default Switch;
