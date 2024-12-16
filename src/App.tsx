import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { LandingPage } from './pages/landing-page'
import { CreatePage } from './pages/create-page'
import { useTranslation } from "react-i18next";
import { useEffect } from 'react';
import "./i18n";

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
  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(navigator.language)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <RouterProvider router={router} />
  )
}
