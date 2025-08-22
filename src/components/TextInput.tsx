import React from 'react'

interface TextInputProps {
  label?: string
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  name?: string
  className?: string
  id? :string
  touched?: boolean
   required?: boolean
   error?: string
}

const TextInput: React.FC <TextInputProps> = ({ label, type = 'text', placeholder, value, onChange, onBlur, name, className = '', id = '', error , touched }) => {


  return (
    <div className="">
  {label && <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>}
  <input
    id={id}
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    className={`border px-3 py-2 rounded ${className} ${error && touched ? "border-red-500" : ""}`}
    required
  />
  {error && touched && (
    <p className='text-red-500 text-xs'>{error}</p>
  )}
</div>

  )
}

export default TextInput
