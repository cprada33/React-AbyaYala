import { useContext } from 'react';
import { DateBooking } from '../../Context/DateContext';

const Confirmacion = () => {
  const { idReserva } = useContext(DateBooking);

  return (
    <>
      <div className="confirmacion">
        <h1 className="tituloConfirmacion">RESERVA CONFIRMADA</h1>
        <h3 className="codigoDeReserva">CÓDIGO DE RESERVA: ABYA{idReserva}</h3>
        <p className="textoConfirmacion">
          ¡A tu correo electronico recibirás toda la información de tu reserva!
        </p>
        <p>
          Revisa la carpeta de SPAM en caso de no encontrar la confirmación en
          tu bandeja de entrada.
        </p>
        <p className="textoConfirmacion">
          En el siguiente link podrás revisar el menú del restaurante.
        </p>
        <p>
          <a className="menuConfirmacion" href="./menu.html">
            Menú restaurante
          </a>
        </p>
        <img
          className="imagenConfirmacion"
          src="https://firebasestorage.googleapis.com/v0/b/abyayala-c7fa8.appspot.com/o/assets%2Fmenu1.jpg?alt=media&token=ebc25772-63a4-466c-8275-042b37f11a93"
          alt="foto-menu"
        />
      </div>
    </>
  );
};

export default Confirmacion;
