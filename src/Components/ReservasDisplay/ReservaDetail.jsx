import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../../Firebase/firebase.config';
import Table from 'react-bootstrap/Table';

const ReservaDetail = () => {
  const { idreserva } = useParams();
  const [comidaDetail, setComidaDetail] = useState('');
  const [ReservaData, setReservaData] = useState('');
  console.log(ReservaData);

  useEffect(() => {
    getDoc(doc(db, 'reservas', `ABYA${idreserva}`)).then((datos) => {
      const data = datos.data();
      setReservaData(data);
      setComidaDetail(data['Reserva de comida']);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idreserva]);

  return (
    <>
      <div className="tableDetail">
        <h1 className="tituloReservas">
          INFORMACIÓN DE RESERVA:{' '}
          <p className="codeReserva"> ABYA{ReservaData.idReserva}</p>
        </h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Item</th>
              <th>Información</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ID de reserva</td>
              <td>
                <input type="text" defaultValue={ReservaData.idReserva} />
              </td>
            </tr>
            <tr>
              <td>Nombre</td>
              <td>
                <input type="text" defaultValue={ReservaData.Nombre} />
              </td>
            </tr>
            <tr>
              <td>Celular</td>
              <td>
                <input type="text" defaultValue={ReservaData.Celular} />
              </td>
            </tr>
            <tr>
              <td>Correo</td>
              <td>
                <input type="text" defaultValue={ReservaData.Correo} />
              </td>
            </tr>
            <tr>
              <td>Cédula</td>
              <td>
                <input type="text" defaultValue={ReservaData.Cédula} />
              </td>
            </tr>
            <tr>
              <td>Tipo de cabaña</td>
              <td>
                <input
                  type="text"
                  defaultValue={ReservaData['Tipo de cabaña']}
                />
              </td>
            </tr>
            <tr>
              <td>Check in</td>
              <td>
                <input type="text" defaultValue={ReservaData['Check in']} />
              </td>
            </tr>
            <tr>
              <td>Check out</td>
              <td>
                <input type="text" defaultValue={ReservaData['Check out']} />
              </td>
            </tr>
            <tr>
              <td>Número de acompañantes</td>
              <td>
                <input
                  type="text"
                  defaultValue={ReservaData['Cantidad de huespedes']}
                />
              </td>
            </tr>
            <tr>
              <td>Información de acompañantes</td>
              <td>
                <input
                  type="text"
                  defaultValue={ReservaData['Información de acompañantes']}
                />
              </td>
            </tr>
            <tr>
              <td>Reserva de comida</td>
              <td>
                <input type="text" defaultValue={comidaDetail} />
              </td>
            </tr>
            <tr>
              <td>Valor de la reserva</td>
              <td>
                <input type="text" defaultValue={ReservaData.Valor} />
              </td>
            </tr>
            <tr>
              <td>Comprobante de pago</td>
              <td>
                <img
                  className="imgComprobante"
                  src={ReservaData.urlInvoice}
                  alt="Comprobante"
                  width={100}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ReservaDetail;
