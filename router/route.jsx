import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import NotFound404 from '../src/components/NotFound404'
import Home from '../src/Pages/home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <div><h1>About Page</h1></div>
      },
      {
        path: '/services',
        element: <div><h1>Services Page</h1></div>
      },
      {
        path: '/contact',
        element: <div><h1>Contact Page</h1></div>
      },
      {
        path: '*',
        element: <NotFound404 />
      }
    ]
  }
])

export default router
