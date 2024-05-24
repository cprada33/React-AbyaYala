import { useLocation } from 'react-router-dom';

const Loading = () => {
  const location = useLocation();
  const renderDatosDeReserva = location.pathname === '/datos_de_reserva';
  const renderMenu = location.pathname === '/menu';
  const newScreenHeight = window.innerHeight;
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
        {renderMenu && <p className="textloader">Cargando Menu...</p>}
      </div>
    </>
  );
};

export default Loading;
