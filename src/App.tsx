// import './App.css'

import { RouterProvider } from 'react-router-dom'
import router from './routes/AppRouter.tsx'


function App() {
 

  return (
   <>
    <RouterProvider router={router} />
    {/* i added this after beacuse of build file  */}
   </>
  )
}

export default App
