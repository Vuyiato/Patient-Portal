import React, { ReactNode, FC } from "react";

const Card: FC<{
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}> = ({ children, className, ...props }) => (
  <div
    className={`bg-white rounded-2xl shadow-lg p-6 transition-all duration-500 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default Card;
