import { IoEllipsisVerticalOutline, IoSettingsOutline } from 'react-icons/io5';
import { InfoLoginStyled } from './InfoLogin.styles';

function InfoLogin() {
  return (
    <InfoLoginStyled>
      <h4>Para usar Este servicio en tu computadora </h4>

      <ol className="steps">
        <li className="QtrYx">Abre WhatsApp en tu teléfono</li>
        <li className="QtrYx">
          <span dir="ltr" className="i0jNr">
            Toca{' '}
            <strong>
              <span dir="ltr" className="i0jNr">
                Menú <IoEllipsisVerticalOutline />
              </span>
            </strong>{' '}
            o{' '}
            <strong>
              <span dir="ltr" className="i0jNr">
                Configuración <IoSettingsOutline />
              </span>
            </strong>{' '}
            y selecciona <strong>Dispositivos vinculados</strong>
          </span>
        </li>
        <li className="QtrYx">
          <span dir="ltr" className="i0jNr">
            Toca <strong>Vincular un dispositivo</strong>
          </span>
        </li>
        <li className="QtrYx">
          Cuando se active la cámara, apunta tu teléfono hacia esta pantalla para escanear el código
        </li>
      </ol>
    </InfoLoginStyled>
  );
}

export default InfoLogin;
