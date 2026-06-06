import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './Pages/Login.jsx'
import Home from './Pages/Home.jsx'
import PaginaErro from './Pages/PaginaErro.jsx'
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