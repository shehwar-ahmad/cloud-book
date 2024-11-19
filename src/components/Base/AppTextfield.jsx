import React from "react";

const AppTextField = ({ className, ...props }) => {
  const commonStyles =
    "rounded-full border border-solid border-primary-50 bg-primary-light text-tertiary placeholder:text-[#a3afdc] px-4 py-2 yr text-base font-normal leading-6 text-center w-full focus:outline-none focus:ring-none";

  const classNames = `${commonStyles} ${className}`;

  return (
    <div className="relative w-full">
      <input className={classNames} {...props} />
    </div>
  );
};

export default AppTextField;
