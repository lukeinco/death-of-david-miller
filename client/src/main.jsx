import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home'
import Play from './pages/Play.jsx'
import Login from './pages/Login.jsx'

import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: '/',
        element: <Login />,
      },
      {
        path: '/play',
        element: <Play />
      },
      {
        path: '/desk',
        element: <Home />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
