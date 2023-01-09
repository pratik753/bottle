import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder6: "rounded-radius6",
  CircleBorder28: "rounded-radius28",
  CircleBorder25: "rounded-radius25",
  icbCircleBorder24: "rounded-radius24",
};
const variants = {
  GradientOrange200Deeporange300: "bg-gradient1  text-bluegray_900",
  FillTeal900: "bg-teal_900 text-white_A700",
  OutlineWhiteA700:
    "bg-cyan_901 border border-solid border-white_A700 text-white_A700",
  OutlineTeal800:
    "bg-gradient  border border-solid border-teal_800 text-white_A700",
  FillRed500: "bg-red_500 text-white_A700",
  OutlineBlack90087:
    "border-2 border-black_900_87 border-solid text-bluegray_803",
  OutlineTeal900: "border border-solid border-teal_900 text-teal_900",
  icbFillWhiteA70087: "bg-white_A700_87",
};
const sizes = {
  sm: "sm:p-[3px] md:p-[4px] p-[6px]",
  md: "sm:p-[4px] md:p-[6px] p-[9px]",
  lg: "md:p-[10px] p-[15px] sm:p-[7px]",
  smIcn: "p-[11px] sm:p-[5px] md:p-[7px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder6",
    "CircleBorder28",
    "CircleBorder25",
    "icbCircleBorder24",
  ]),
  variant: PropTypes.oneOf([
    "GradientOrange200Deeporange300",
    "FillTeal900",
    "OutlineWhiteA700",
    "OutlineTeal800",
    "FillRed500",
    "OutlineBlack90087",
    "OutlineTeal900",
    "icbFillWhiteA70087",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder6",
  variant: "GradientOrange200Deeporange300",
  size: "lg",
};

export { Button };
