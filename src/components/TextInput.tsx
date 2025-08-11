import React from 'react'

interface TextInputProps {
  label?: string
  type?: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
}

const TextInput: React.FC <TextInputProps> = ({ label, type = 'text', placeholder, value, onChange, name }) => {


  return (
    <div className="mb-4">
  {label && <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>}
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

  )
}

export default TextInput
