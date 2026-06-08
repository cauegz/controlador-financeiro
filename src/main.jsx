import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import PaginaErro from './pages/PaginaErro.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// configura o roteador
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <PaginaErro />,
      children: [
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/",
          element: <Home />
        }
      ]
    }
  ]
)

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <RouterProvider router={ router } />
)