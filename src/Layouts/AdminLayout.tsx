import { NavLink, Outlet } from 'react-router-dom'


const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4 text-xl font-bold border-b border-gray-600">Admin Panel</div>
        <nav className="p-4 space-y-2">

          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            Home
          </NavLink>


          <NavLink
            to="/admin/add-user"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            Add User
          </NavLink>
          <NavLink
            to="/admin/add-product"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            Add Product
          </NavLink>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
