import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from "./App.jsx";
import "./index.css";
import Notfound from './pages/Notfound.jsx'
import AboutBND from './pages/AboutBND.jsx'
import Products from './pages/Products.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Careers from './pages/Careers.jsx'

const baseName = import.meta.env.MODE === "development" ? "/" : "/BND";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Notfound/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'about-bnd',
        element: <AboutBND/>
      },
      {
        path: 'products',
        element: <Products/>
      },
      {
        path: 'careers',
        element: <Careers/>
      },
      {
        path: 'contact',
        element: <Contact/>
      }
    ]
  },
  {
    path: '*',
    element: <Notfound/>
  }
], {
  basename: baseName
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);