import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login'
// import NotFound from '../pages/NotFound'
import AdminDashboard from '../pages/admin/AdminDashboard'
// import AddUser from '../pages/admin/AddUser'
// import AddProduct from '../pages/admin/AddProduct'
import UserDashboard from '../pages/user/UserDashboard'
import AdminRoute from '../components/AdminRoute'
import NotFound from '../pages/NotFound'
import Adduser from '../pages/admin/Adduser'
import AdminLayout from '../Layouts/AdminLayout'
import Addproduct from '../pages/admin/Addproduct'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  // {
  //   path: '/admin',
  //   element: <AdminRoute><AdminDashboard /></AdminRoute>,
  // },
  {
    path: '/admin',
    element: (
    <AdminRoute><AdminLayout /></AdminRoute>
  ),
  children: [
      { path: 'dashboard', element: <AdminDashboard /> }, // /admin
      { path: 'add-user', element: <Adduser /> }, // /admin/add-user
      { path: 'add-product', element: <Addproduct /> }, // /admin/add-product
    ],
  },
  {
    path: '/admin/add-user',
    element: <AdminRoute><Adduser /></AdminRoute>,
  },
//   {
//     path: '/admin/add-product',
//     element: <AdminRoute><AddProduct /></AdminRoute>,
//   },
  {
    path: '/user',
    element: <UserDashboard />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
