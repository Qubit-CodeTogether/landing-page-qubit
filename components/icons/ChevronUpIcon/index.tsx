import React from "react";

const ChevronUpIcon: React.FC<{fill?: string}> = ({fill, ...props}) => {
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
        d="M23.0001 8.78133L39.6885 20.3907L36.9783 22.276L23.0001 12.552L9.02181 22.276L6.31165 20.3907L23.0001 8.78133Z"
        fill="#151516"
      />
    </svg>
  );
};

export default ChevronUpIcon;
