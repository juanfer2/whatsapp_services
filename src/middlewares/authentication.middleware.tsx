import { StatusLogin } from '@/models/connection';
import { StoreState } from '@/redux/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// interface userSession {
//   id: string | number;
//   token: string;
// }

export function useAuthentication(): any {
  const connection = useSelector((state: StoreState) => state.connection);
  const user = useSelector((state: StoreState) => state.user);
  const [isAuth, setIsAuth] = useState<any>(null);

  /*
  export const setSession = (user: userSession) => {
    const id: string = user.id.toString();
    localStorage.setItem('id', id);
    localStorage.setItem('token_user', user.token);
  };

  export const logout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('token_user');
  };
  */

  const validateStatus = () => {
    console.log(connection.status);
    console.log(user.loading);
    console.log(user);
    if (connection.status !== StatusLogin.SUCCESS || !user.loading || user.pushname === '') {
      setIsAuth(false);
    } else {
      setIsAuth(true);
    }
  };

  useEffect(() => {
    validateStatus();
  }, []);

  return { isAuth };
}
