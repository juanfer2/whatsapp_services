import { QrStyled } from './Qr.styles';

function Qr({ link }: { link?: string }) {
  const url = link ?? 'http://localhost:4001/static/qr.svg';

  return (
    <QrStyled>
      <img src='http://localhost:4001/static/qr.svg' alt="qr_login" />
    </QrStyled>
  );
}

export default Qr;
