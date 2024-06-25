import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { DateBooking } from '../../Context/DateContext';
import { getDocs, query, where, collection } from 'firebase/firestore';
import { db } from '../../../Firebase/firebase.config';

const MiReserva = () => {
  const navigate = useNavigate();
  const { idReserva, setIdReserva, setPermiso } = useContext(DateBooking);
  let [emailInput, setEmailInput] = useState();
  let [error, setError] = useState(false);

  let handleSubmitId = async (event) => {
    event.preventDefault();
    const reservaDB = query(
      collection(db, 'reservas'),
      where('idReserva', '==', parseInt(idReserva)),
      where('Correo', '==', emailInput),
    );
    let snapshot = await getDocs(reservaDB);
    if (snapshot.docs[0] != undefined) {
      setPermiso(true);
      navigate(`/mireserva/${idReserva}`);
    } else {
      setError(true);
    }
  };
  return (
    <div>
      <h1 className="tituloMiReserva">GESTIONAR RESERVA</h1>
      <Form className="formMireserva" onSubmit={handleSubmitId}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>CÓDIGO DE RESERVA</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa los últimos tres digitos de tu codigo de reserva"
              onChange={(e) => setIdReserva(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>CORREO ELECTRONICO</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu correo"
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </Form.Group>
        </Row>
        {error ? (
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>
                *CÓDIGO DE RESERVA O EMAIL NO ES CORRECTO*
              </Form.Label>
            </Form.Group>
          </Row>
        ) : null}

        <Button variant="primary" type="submit">
          Buscar
        </Button>
      </Form>
    </div>
  );
};

export default MiReserva;
