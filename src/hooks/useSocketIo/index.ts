import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateStatusConnection } from '@/redux/reducers/connection';
import { updateUser } from '@/redux/reducers/user';
import { updateStatusQr } from '@/redux/reducers/qr';
import io from 'socket.io-client';

const socket = io('http://localhost:4001');

export const useSocketIO = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('connect', () => {
      dispatch(updateStatusConnection({ status: 'CONNECT' }));
    });

    socket.on('connect_error', (err) => {
      console.log('error', err);

      dispatch(updateStatusConnection({ status: 'ERROR' }));
    });

    socket.on('statusLogin', (data) => {
      dispatch(updateUser({ loading: data === 'PENDING' }));
    });

    socket.on('login', (data) => {
      dispatch(updateUser({ ...data }));
    });

    socket.on('updateQr', (data) => {
      console.log(data);
      dispatch(updateStatusQr({ url: data }));
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
