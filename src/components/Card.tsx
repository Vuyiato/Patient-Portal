import React, { ReactNode, FC } from "react";

const Card: FC<{
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}> = ({ children, className = "", hover = true, style }) => {
  return (
    <div
      className={`
        bg-white rounded-xl shadow-md p-6 
        transition-all duration-300
        ${
          hover
            ? "hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]"
            : ""
        }
        ${className}
        animate-scale-in
      `}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
