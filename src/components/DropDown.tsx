
interface DropdownProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  options?: { label: string; value: string }[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const DropDown: React.FC<DropdownProps> = ({
    label,
  value,
  onChange,
  options = [],
  placeholder = "Select...",
  disabled = false,
  className = "",
}) =>{

  return (
     <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        className="border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-400"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DropDown
