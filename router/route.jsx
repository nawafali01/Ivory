import { createBrowserRouter } from 'react-router-dom'
import Layout        from '../layout/Layout'
import NotFound404   from '../src/components/NotFound404'
import Home          from '../src/Pages/home/Home'
import Services      from '../src/Pages/services/Services'
import Contact       from '../src/Pages/contact/Contact'
import Projects      from '../src/Pages/our-projects/Projects'
import ProjectDetail from '../src/Pages/our-projects/project-detail/ProjectDetail'

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
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/projects/:id',          // ← naya route
        element: <ProjectDetail />
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
  {
    path: '*',
    element: <NotFound404 />
  }
])

export default router;
