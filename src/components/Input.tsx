import React, { FC } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
};

const Input: FC<InputProps> = ({ label, id, ...props }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <input
      id={id}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-teal focus:border-brand-teal transition-shadow duration-200 shadow-sm"
      {...props}
    />
  </div>
);

export default Input;
