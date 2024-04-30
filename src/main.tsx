import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/globals.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { HomePage } from './pages/home.tsx'
import { AboutPage } from './pages/about.tsx'
import { TeamPage } from './pages/team.tsx'
import { ProcessPage } from './pages/process.tsx'
import { PricingPage } from './pages/pricing.tsx'
import { BlogsPage } from './pages/blog.tsx'
import { ContactPage } from './pages/contact.tsx'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/sobre',
        element: <AboutPage />,
      },
      {
        path: '/time',
        element: <TeamPage />,
      },
      {
        path: '/processo',
        element: <ProcessPage />,
      },
      {
        path: '/preços',
        element: <PricingPage />,
      },
      {
        path: '/blog',
        element: <BlogsPage />,
      },
      {
        path: '/contato',
        element: <ContactPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
