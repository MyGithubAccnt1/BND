import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from "./App.jsx";
import "./index.css";
import Notfound from './pages/Notfound.jsx'

const baseName = import.meta.env.MODE === "development" ? "/" : "/BND";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Notfound/>,
  },
], {
  basename: baseName
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);