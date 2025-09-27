import React from "react";

interface CheckBoxProps {
  label: string;
  name: string;
  checked?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  className?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  name,
  checked,
  value,
  onChange,
  onBlur,
  error,
  touched,
  className,
}) => {
  return (
    <div className={`flex flex-col ${className || ""}`}>
        <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={name + value}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        onBlur={onBlur}
        className=" text-red-500 border-gray-300 rounded focus:ring-red-500"
      />
      <label htmlFor={name + value} className="text-sm text-gray-700">
        {label}
      </label>
      </div>
    
      {error && touched && (
        <span className="text-red-500 text-xs ml-2">{error}</span>
      )}
      
    </div>
  );
};

export default CheckBox;
