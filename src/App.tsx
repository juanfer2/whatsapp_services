import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@/routes/AppRouter';
import { Layout } from '@/organisms';
import './App.css';
import { useSelector } from 'react-redux';
import { useSocketIO } from './useHooks/useSocketIo';
import { StoreState } from '@/redux/store';

function App() {
  useSocketIO();
  const connection = useSelector((state: StoreState) => state.connection);
  const user = useSelector((state: StoreState) => state.user);

  return (
    <BrowserRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
