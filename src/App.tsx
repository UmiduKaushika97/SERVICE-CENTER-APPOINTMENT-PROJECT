// import './App.css'

import { RouterProvider } from 'react-router-dom'
import router from './routes/AppRouter.tsx'
import { ToastContainer } from 'react-toastify'


function App() {
 

  return (
   <>
    <RouterProvider router={router} />
    {/* i added this after beacuse of build file  */}
     {/* <ToastContainer position="top-right" autoClose={3000} /> */}
   </>
  )
}

export default App
