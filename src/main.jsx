import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Layout from './Layout.jsx';
import { MainHome,Cars, Contact } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainHome />,
      },
      {
        path: '/cars', 
        element: <Cars />,
      },
      {
        path: '/contact',
        element: <Contact />,
      }
      // Additional child routes can be added here
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
