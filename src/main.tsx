import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from "./routes/Root.tsx";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './static/ErrorPage.tsx';
import Contact from './routes/Contact.tsx';
import Home from './routes/Home.tsx';
import Signup from './routes/Signup.tsx';
import Match from './routes/Match.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      // Routing for pages
      {
        path:"/",
        element: <Home />
      },
      {
        path: "/contacts",
        element: <Contact />,
      },
      {
        path: "/match",
        element: <Match />,
      },
      {
        path: "/account-authentication",
        element: <Signup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
