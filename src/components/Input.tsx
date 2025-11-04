import React, { FC, useState } from "react";

const Input: FC<{
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactElement;
  disabled?: boolean;
  defaultValue?: string;
  error?: string;
  required?: boolean;
}> = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
  disabled,
  defaultValue,
  error,
  required = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative group">
      <label
        htmlFor={id}
        className={`
          block text-sm font-medium mb-2 transition-all duration-300
          ${isFocused ? "text-brand-teal" : "text-gray-700"}
        `}
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 group-focus-within:text-brand-teal">
            {React.cloneElement(
              icon as React.ReactElement<{ className?: string }>,
              {
                className: "w-5 h-5",
              }
            )}
          </div>
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full px-4 py-3 border-2 rounded-lg
            ${icon ? "pl-11" : ""}
            transition-all duration-300
            focus:outline-none focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/20
            disabled:bg-gray-100 disabled:cursor-not-allowed
            hover:border-brand-teal/50
            ${isFocused ? "shadow-lg scale-[1.02]" : ""}
            ${error ? "border-red-400 focus:ring-red-200" : ""}
          `}
        />
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
