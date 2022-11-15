import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home, Citizens, Login, SendMessage } from '@/pages';
import PrivateRoute from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import ErrorPage from '@/pages/ErrorPage';
interface PageI {
  name: string;
  path: string;
  element: React.ReactNode;
}

function RoutesConfig() {
  const pages = [
    {
      name: 'home',
      path: '/',
      element: <Home />
    },
    {
      name: 'Login',
      path: '/login',
      element: <Login />
    },
    {
      name: 'Citizens',
      path: '/citizens',
      element: <Citizens />
    },
    {
      name: 'page-error',
      path: '/505',
      element: <ErrorPage />
    },
    {
      name: 'page-not-found',
      path: '/*',
      element: <div>Page not found!!!</div>
    }
  ];

  const pagesPrivate: PageI[] = [
    {
      name: 'SendMessage',
      path: '/send_message',
      element: <SendMessage />
    }
  ];
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<PrivateRoute />}>
        {pagesPrivate.map((page: PageI) => (
          <Route key={page.name} path={page.path} element={page.element} />
        ))}
      </Route>

      <Route element={<PublicRoutes />}>
        {pages.map((page: PageI) => (
          <Route key={`${page.name}`} path={page.path} element={page.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default RoutesConfig;
