import React from "react";
const variantClasses = {
  h1: "font-bold md:text-[48px] sm:text-[48px] text-[96px]",
  h2: "font-normal text-[9.72px]",
  h3: "font-normal text-[9.29px]",
  h4: "font-normal md:text-[48px] sm:text-[48px] text-[72px]",
  h5: "font-black md:text-[48px] sm:text-[48px] text-[65px]",
  h6: "font-normal text-[6.96px]",
  body1: "font-black sm:text-[41px] md:text-[47px] text-[55px]",
  body2: "font-bold sm:text-[38px] md:text-[44px] text-[48px]",
  body3: "font-black sm:text-[36px] md:text-[42px] text-[46px]",
  body4: "sm:text-[28px] md:text-[30px] text-[32px]",
  body5: "font-bold sm:text-[24px] md:text-[26px] text-[28px]",
  body6: "sm:text-[20px] md:text-[22px] text-[24px]",
  body7: "font-black text-[20px]",
  body8: "font-black text-[180px] md:text-[48px] sm:text-[48px]",
  body9: "text-[18px]",
  body10: "text-[16px]",
  body11: "font-normal text-[14px]",
  body12: "font-normal text-[12.96px]",
  body13: "font-semibold text-[12.89px]",
  body14: "font-normal text-[12px]",
  body15: "font-normal text-[11px]",
  body16: "text-[10px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
