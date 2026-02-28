import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import NotFound404 from '../src/components/NotFound404'
import Home from '../src/pages/home/Home'
import Ourprojects from '../src/pages/our-projects/ourprojects'
import Services from '../src/pages/services/Services'
import Contact from '../src/pages/contact/Contact'

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
        element: <Ourprojects/>
      },
      {
        path: '/services',
        element: <Services/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '*',
        element: <NotFound404 />
      }
    ]
  }
])

export default router
