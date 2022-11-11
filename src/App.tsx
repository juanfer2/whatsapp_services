import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@/routes/AppRouter';
import { Layout } from '@/organisms';
import './App.css';
import { useSelector } from 'react-redux';
import { useSocketIO } from './hooks/useSocketIo';
import { StoreState } from '@/redux/store';

function App() {
  useSocketIO();
  const connection = useSelector((state: StoreState) => state.connection);
  const user = useSelector((state: StoreState) => state.user);

  if (connection.status === 'ERROR') return <>Error! ;/</>;

  return (
    <BrowserRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
