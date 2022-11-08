import { QrStyled } from './Qr.styles';

function Qr({ link }: { link?: string }) {
  const url = link ?? 'http://localhost:4001/static/qrs/qr.svg';

  return <QrStyled>{link ? <img src={link} alt="qr_login" /> : <>Loading...</>}</QrStyled>;
}

export default Qr;
