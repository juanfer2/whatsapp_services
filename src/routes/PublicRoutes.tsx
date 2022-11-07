import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StoreState } from '@/redux/store';

/* eslint no-unused-vars: ["off"] */
function PublicRoutes({ component: Component, redirectTo, path, ...props }: any): JSX.Element {
  // const connection = useSelector((state: StoreState) => state.connection);
  const user = useSelector((state: StoreState) => state.user);

  if (user.loading) return <>Loading...</>;

  return <Outlet />;
}

export default PublicRoutes;
