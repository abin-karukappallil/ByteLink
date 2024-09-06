import React from 'react'
import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layout/app-layout';
import Landing from './pages/landing';
import Link from './pages/link';
import Redirect from './pages/redirect-link';
import Dashboard from './pages/dashboard';
import Auth from './pages/auth';

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Landing/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
      {
        path: '/auth',
        element: <Auth/>
      },
      {
        path: '/link/:id',
        element: <Link/>
      },
      {
        path: '/:id',
        element: <Redirect/>
      },
    ]
  }
])
function App() {
  return <RouterProvider router={router}/>
  
}

export default App