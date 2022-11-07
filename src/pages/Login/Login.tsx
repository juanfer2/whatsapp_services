import Qr from '@/components/Qr';
import InfoLogin from './components/InfoLogin';
import { LoginStyled } from './Login.styles';

function Login() {
  return (
    <LoginStyled>
      <div className="content">
        <InfoLogin />
      </div>
      <Qr />
    </LoginStyled>
  );
}

export default Login;
