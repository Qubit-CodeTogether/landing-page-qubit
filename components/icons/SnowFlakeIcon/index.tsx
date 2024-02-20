import React from "react";

const SnowFlakeIcon: React.FC<{ fill?: string }> = ({ fill, ...props }) => {
  return (
    <svg
      {...props}
      width="67"
      height="70"
      viewBox="0 0 67 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.2148 69.5L27.5882 45.2422L7.2852 58.599L0 45.901L21.6765 35L0 24.099L7.2852 11.401L27.5882 24.7578L26.2148 0.5H40.7255L39.4118 24.7578L59.7148 11.401L67 24.099L45.2638 35L67 45.901L59.7148 58.599L39.4118 45.2422L40.7255 69.5H26.2148Z"
        fill={fill ?? "#151516"}
      />
    </svg>
  );
};

export default SnowFlakeIcon;
