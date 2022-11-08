import Qr from '@/components/Qr';
import { StoreState } from '@/redux/store';
import { useSelector } from 'react-redux';
import InfoLogin from './components/InfoLogin';
import { LoginStyled } from './Login.styles';

function Login() {
  const qr = useSelector((state: StoreState) => state.qr);

  console.log(qr);

  return (
    <LoginStyled>
      <div className="content">
        <InfoLogin />
      </div>
      <Qr link={'http://localhost:4001/static/qrs/' + qr.url} />
    </LoginStyled>
  );
}

export default Login;
