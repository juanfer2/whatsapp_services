import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import { useAuthentication } from '@/middlewares/authentication.middleware';
import { useSelector } from 'react-redux';
import { StoreState } from '@/redux/store';

/* eslint no-unused-vars: ["off"] */
function PrivateRoutes({ component: Component, redirectTo, path, ...props }: any): JSX.Element {
  const connection = useSelector((state: StoreState) => state.connection);
  const user = useSelector((state: StoreState) => state.user);
  const location = useLocation();

  if (user.loading) {
    return <>Loading...</>;
  }

  console.log(user);

  if (false) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
}

export default PrivateRoutes;
