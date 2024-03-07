import React from "react";

const ChevronDownIcon: React.FC<{ fill?: string }> = ({
  fill,
  ...props
}) => {
  return (
    <svg
    {...props}
      width="46"
      height="32"
      viewBox="0 0 46 32"
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.9999 23.2188L6.31152 11.6095L9.02169 9.72412L22.9999 19.4481L36.9782 9.72412L39.6884 11.6095L22.9999 23.2188Z"
        fill="#151516"
      />
    </svg>
  );
};

export default ChevronDownIcon;
