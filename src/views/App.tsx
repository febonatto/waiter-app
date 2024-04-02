import '@views/styles/globals.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home } from '@views/pages/Home';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/orders',
      element: <Home />,
    },
    {
      path: '/me',
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
}
