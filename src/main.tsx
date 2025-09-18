import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from "react-redux";
import store from "./store/store"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { store } from "../";
// import App from './App.tsx'

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
  <Provider store={store}>
    <App />
    </Provider>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    {/* <RouterProvider router={router} /> */}
  </StrictMode>,
)
