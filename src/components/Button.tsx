import React, { ReactNode, FC } from "react";

const Button: FC<{
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled,
  type = "button",
}) => {
  const baseClasses =
    "relative overflow-hidden font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95";

  const variantClasses = {
    primary:
      "bg-brand-teal text-white hover:bg-brand-dark shadow-lg hover:shadow-xl hover:shadow-brand-teal/30",
    secondary:
      "bg-brand-yellow text-brand-dark hover:bg-yellow-400 shadow-lg hover:shadow-xl hover:shadow-brand-yellow/30",
    ghost:
      "bg-transparent text-brand-dark hover:bg-brand-teal/10 hover:text-brand-teal",
    danger:
      "bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl hover:shadow-red-600/30",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Ripple effect
    const button = e.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add(
      "absolute",
      "bg-white/30",
      "rounded-full",
      "pointer-events-none",
      "animate-ping"
    );

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;
