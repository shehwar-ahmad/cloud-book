import React from "react";
import { twMerge } from "tailwind-merge";

const AppButton = ({ variant = "default", children, className, ...props }) => {
  const buttonStyles = {
    default: "border border-solid border-gray-900",
    outline: "bg-white",
    text: "",
  };

  const commonStyles =
    "rounded-full px-20 py-2 text-lg font-semibold leading-[27px] relative text-tertiary";

  const classNames = twMerge(commonStyles, buttonStyles[variant], className);

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};

export default AppButton;
