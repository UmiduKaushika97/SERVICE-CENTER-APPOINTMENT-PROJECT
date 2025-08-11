import type { JSX } from 'react'
import { Navigate } from 'react-router-dom'

interface AdminRouteProps {
  children: JSX.Element
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const role = localStorage.getItem('role')
  return role === 'admin' ? children : <Navigate to="/" />
}

export default AdminRoute