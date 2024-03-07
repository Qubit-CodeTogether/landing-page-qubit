import React from "react";

const HamburgerMenu: React.FC<{ fill?: string }> = ({
  fill,
  ...props
}) => {
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="#fffff"
      {...props}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 18L20 18"
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M4 12L20 12"
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M4 6L20 6"
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default HamburgerMenu;
