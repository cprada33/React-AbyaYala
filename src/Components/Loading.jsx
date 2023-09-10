import { useLocation } from 'react-router-dom';

const Loading = () => {
  const location = useLocation();
  const renderDatosDeReserva = location.pathname === '/datos_de_reserva';
  const newScreenHeight = window.innerHeight;
  console.log(newScreenHeight);
  const padding = (newScreenHeight - 170 - 150) / 2;
  const divStyle = {
    padding: padding,
  };
  return (
    <>
      <div className="divloader" style={divStyle}>
        <div className="loader"></div>
        {renderDatosDeReserva && (
          <p className="textloader">Confirmando reserva...</p>
        )}
      </div>
    </>
  );
};

export default Loading;
