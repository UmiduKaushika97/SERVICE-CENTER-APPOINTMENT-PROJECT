
interface DropdownProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  options?: { label: string; value: string }[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  error?: string;
  touched?: boolean;
}

const DropDown: React.FC<DropdownProps> = ({
    label,
  value,
  onChange ,
  onBlur,
  options = [],
  // placeholder = "Select...",
  disabled = false,
  className = "",
  error,
  touched,
}) =>{

  return (
     <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onBlur={onBlur}
        disabled={disabled}
        className="border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-400"
      >
        <option disabled value="">{`Select`}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && touched && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default DropDown
