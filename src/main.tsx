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
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/team',
        element: <TeamPage />,
      },
      {
        path: '/process',
        element: <ProcessPage />,
      },
      {
        path: '/pricing',
        element: <PricingPage />,
      },
      {
        path: '/blog',
        element: <BlogsPage />,
      },
      {
        path: '/contact',
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
