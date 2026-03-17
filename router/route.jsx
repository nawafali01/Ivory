import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import NotFound404 from '../src/components/NotFound404'
import Home from '../src/Pages/home/Home'
import Ourprojects from '../src/Pages/our-projects/Ourprojects'
import Services from '../src/Pages/services/Services'
import Contact from '../src/Pages/contact/Contact'

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
        path: '/our-project',
        element: <Ourprojects />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ]
  },
  // 404 — Layout ke bahar, no navbar/footer
  {
    path: '*',
    element: <NotFound404 />
  }
])

export default router