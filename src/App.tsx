import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { LandingPage } from './pages/landing-page'
import { CreatePage } from './pages/create-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/create',
    element: <CreatePage />
  }
])


export function App() {
  return (
    <RouterProvider router={router} />
  )
}
