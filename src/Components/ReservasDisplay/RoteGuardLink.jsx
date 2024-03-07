import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DateBooking } from '../../Context/DateContext';

const RouteGuardLink = ({ children }) => {
  const navigate = useNavigate();
  const { permiso } = useContext(DateBooking);

  if (permiso === false) {
    navigate('/mireserva');
  } else if (permiso === true) {
    return <>{permiso ? children : null}</>;
  }
};

export default RouteGuardLink;
