import React from 'react'
import { ClipLoader } from "react-spinners";


interface ButtonProps {
  label: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  size?: 'small' | 'medium' | 'large'
  width?: 'auto' | 'full' | number
  icon?: string
  className?: string
  loading?: boolean;
  
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', size = 'medium', 
  width = 'auto', icon, className = '', loading = false }) => {

    const sizeStyles: Record<string, React.CSSProperties> = {
    small: {
      padding: '6px 12px',
      fontSize: '12px',
    },
    medium: {
      padding: '10px 16px',
      fontSize: '14px',
    },
    large: {
      padding: '14px 20px',
      fontSize: '16px',
    },
  }

  const widthStyle: React.CSSProperties =
    width === 'full'
      ? { width: '100%' }
      : width === 'auto'
      ? { width: 'auto' }
      : { width: `${width}px` }
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-lg bg-blue-600 text-white ${className}`}
      style={{
        ...sizeStyles[size],
        ...widthStyle,
        padding: '10px 16px',
        // backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        
      }}
       disabled={loading}
      //  className={`px-4 py-2 rounded text-white ${className}`}
    >
       {loading ? (
        <ClipLoader size={18} color="#fff" />
      ) : (
        <>
      {icon && (<img src={icon} alt="icon" style={{ width: '20px', height: '20px' }} />
      )}
      {label}
      </>
      )}
    </button>
  )
}

export default Button
