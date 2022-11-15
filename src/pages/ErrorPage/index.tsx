import { ErrorPageStyled } from './ErrorPage.styles';
import ImgFondo505 from '@/assets/fondo505.png';

function ErrorPage() {
  return (
    <ErrorPageStyled>
      <h1>505</h1>
      <img src={ImgFondo505} alt="fondo_505" />
    </ErrorPageStyled>
  );
}

export default ErrorPage;
