import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import dayjs from 'dayjs';

const ReservaItem = ({ reserva }) => {
  const checkin = dayjs(reserva['Check in']).format('DD-MM-YYYY');
  const checkout = dayjs(reserva['Check out']).format('DD-MM-YYYY');

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          className="ReservaItemImg"
          variant="top"
          src={reserva.urlInvoice}
        />
        <Card.Body>
          <Card.Title>{reserva.idReserva}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{reserva.Nombre}</ListGroup.Item>
          <ListGroup.Item>
            Número de cabañas: {reserva['Cantidad de cabañas']}
          </ListGroup.Item>
          <ListGroup.Item>
            {checkin} / {checkout}
          </ListGroup.Item>
          <ListGroup.Item>{reserva.Celular}</ListGroup.Item>
          <ListGroup.Item>{reserva['Tipo de cabaña']}</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default ReservaItem;
