import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Statistics from './components/Statistics';
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Dashboard from './components/Dashboard';
import GadgetDetails from './components/GadgetDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'/gadget-details/:product_id',
        element:<GadgetDetails></GadgetDetails>,
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>,
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
