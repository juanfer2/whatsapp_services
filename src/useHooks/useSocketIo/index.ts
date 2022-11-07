import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateStatusConnection } from '@/redux/reducers/connection';
import { resetUser, updateUser } from '@/redux/reducers/user';
import io from 'socket.io-client';

const socket = io('http://localhost:4001');

export const useSocketIO = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('connect', () => {
      dispatch(updateStatusConnection({ status: 'CONNECT' }));
    });

    socket.on('statusLogin', (data) => {
      dispatch(updateUser({ loading: data === 'PENDING' }));
    });

    socket.on('login', (data) => {
      dispatch(updateUser({ ...data }));
    });

    socket.on('disconnect', () => {
      dispatch(updateStatusConnection({ status: 'DISCONNECT' }));
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('statutLogin');
      socket.off('login');
    };
  }, []);
};
