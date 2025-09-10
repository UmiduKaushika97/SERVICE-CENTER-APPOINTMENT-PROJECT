import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from "react-redux";
import { store } from './store/store'
// import { store } from "../";
// import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
    {/* <RouterProvider router={router} /> */}
  </StrictMode>,
)
