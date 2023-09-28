import { useContext, useState, useEffect } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DateBooking } from '../../Context/DateContext';
import {
  setDoc,
  doc,
  collection,
  getDocs,
  query,
  limit,
  orderBy,
} from 'firebase/firestore';
import { db } from '../../../Firebase/firebase.config';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import dayjs from 'dayjs';
import { getFunctions, httpsCallable } from 'firebase/functions';
import Loading from '../Loading';

const DatosReserva = () => {
  const {
    BookingRooms,
    TipoDeCabaña,
    CheckInDate,
    CheckOutDate,
    PrecioCabana,
    RangeDates,
    setReservaRealizada,
    ReservaRealizada,
    setIdReserva,
    idReserva,
    Nombre,
    setNombre,
  } = useContext(DateBooking);

  const [loading, IsLoading] = useState(false);

  console.log('RANGO', RangeDates);

  const [Celular, setCelular] = useState('');
  const [Correo, setCorreo] = useState('');
  const [Cedula, setCedula] = useState('');
  const [NumeroAcompanantes, setNumeroAcompanantes] = useState('');
  const [InfoAcompanantes, setInfoAcompanantes] = useState('');
  const [FaltanDatos, setFaltanDatos] = useState(null);
  const [invoice, setInvoice] = useState(null);
  const [urlInvoice, setUrlInvoice] = useState(null);

  const navigate = useNavigate();

  const options = () => {
    const options = [];

    for (let i = 0; i <= 25; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>,
      );
    }

    return options;
  };

  useEffect(() => {
    if (idReserva === '') {
      return;
    } else {
      for (let i = 0; i < BookingRooms; i++) {
        // const requestOptions = {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ RangeDates }),
        // };
        // fetch(CabanaServer, requestOptions)
        //   .then((response) => {
        //     console.log("Respuesta del servidor:", response);

        //     if (!response.ok) {
        //       throw new Error("Error en la solicitud POST");
        //     }
        //     return response.json();
        //   })
        //   .then((data) => {
        //     console.log("Datos insertados correctamente:", data);
        //   })
        //   .catch((error) => {
        //     console.error("Error en la solicitud POST:", error);
        //   });
        let n = 0;
        for (const element of RangeDates) {
          setDoc(doc(db, 'reservadas', `${idReserva + n.toString() + i}`), {
            cabaña: TipoDeCabaña,
            fecha: element,
          });
          n++;
        }
      }

      const infoEmail = {
        Nombre,
        BookingRooms,
        Correo,
        NumeroAcompanantes,
        CheckInDate: CheckInDate.toISOString().slice(0, 10),
        CheckOutDate: CheckOutDate.toISOString().slice(0, 10),
        PrecioCabana,
        TipoDeCabaña,
        subject: 'Confirmación de reserva',
        idReserva: `ABYA${idReserva}`,
      };

      const functions = getFunctions();
      const sendEmail = httpsCallable(functions, 'sendEmail');
      sendEmail({ infoEmail, secret: 'SendThisEmail' }).then((result) => {
        // Read result of the Cloud Function.
        /** @type {any} */
        console.log(result.data);
      });

      // const sendEmail = fetch("/SendEmail", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ infoReserva, secret: "SendThisEmail" }),
      // });

      setDoc(doc(db, 'reservas', `${'ABYA' + idReserva}`), {
        idReserva: idReserva,
        Nombre: Nombre,
        Celular: Celular,
        Correo: Correo,
        Cédula: Cedula,
        'Cantidad de cabañas': BookingRooms,
        'Cantidad de huespedes': NumeroAcompanantes,
        'Check in': CheckInDate.toISOString().slice(0, 10),
        'Check out': CheckOutDate.toISOString().slice(0, 10),
        'Información de acompañantes': InfoAcompanantes,
        Valor: PrecioCabana,
        'Tipo de cabaña': TipoDeCabaña,
        timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        urlInvoice: urlInvoice,
      }).then(() => {
        setReservaRealizada(true);
        navigate('/confirmacion_de_reserva');
      });

      // fetch("http://localhost:3000/datos4", requestOptions)
      //   .then((response) => {
      //     if (!response.ok) {
      //       throw new Error("Error en la solicitud POST");
      //     }
      //     return response.json();
      //   })
      //   .then((data) => {
      //     setIdReserva(data);
      //     let description = `www.abyayalahostel.com/reservas/${data.slice(4)}`;
      //     const event = {
      //       RangeDates,
      //       description,
      //       BookingRooms,
      //       Nombre,
      //       TipoDeCabaña,
      //     };

      //     fetch("http://localhost:3000/crear-evento", {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify(event),
      //     }).then(function (response) {
      //       if (response.ok) {
      //         console.log("Evento creado");
      //       }
      //     });

      // fetch("http://localhost:3000/send-email", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     Correo,
      //     subject,
      //     Nombre,
      //     BookingRooms,
      //     CheckInDate,
      //     CheckOutDate,
      //     TipoDeCabaña,
      //   }),
      // });

      let description = `www.abyayalahostel.com/reservas/${idReserva}`;
      const infoEvent = {
        RangeDates,
        BookingRooms,
        Nombre,
        TipoDeCabaña,
        description,
        secret: 'SendThisEvent',
      };
      const sendCalendar = httpsCallable(functions, 'sendCalendar');
      sendCalendar({ infoEvent }).then((result) => {
        // Read result of the Cloud Function.
        /** @type {any} */
        console.log(result.data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlInvoice]);

  const handleSubmitDatos = (event) => {
    event.preventDefault();

    if (
      !(
        Nombre &&
        Cedula &&
        Celular &&
        Correo &&
        NumeroAcompanantes &&
        InfoAcompanantes &&
        invoice
      )
    ) {
      setFaltanDatos(
        'Para finalizar la reserva debes completar todos los campos.',
      );
    } else if (ReservaRealizada === true) {
      navigate('/');
    } else {
      IsLoading(true);
      const lookingId = collection(db, 'reservas');
      getDocs(query(lookingId, orderBy('timestamp', 'desc'), limit(1))).then(
        (datos) => {
          const lastOne = datos.docs[0].data();
          const nextId = parseInt(lastOne.idReserva) + 1;
          setIdReserva(nextId);
        },
      );

      //     const formData = new FormData();
      //     formData.append("archivo", invoice);
      //     formData.append("idReserva", data);

      //     fetch("http://localhost:3000/files", {
      //       method: "POST",
      //       body: formData,
      //     }).then(function (response) {
      //       if (response.ok) {
      //         console.log("Archivo subido");
      //       }
      //     });
      //   });

      const invoiceName = invoice.name;
      const storage = getStorage();
      const archivoRef = ref(storage, `Comprobantes/${invoiceName}`);
      uploadBytes(archivoRef, invoice)
        .then((snapshot) => {
          console.log('Archivo subido con éxito', snapshot);
          getDownloadURL(archivoRef)
            .then((url) => {
              console.log(url);
              setUrlInvoice(url);
            })
            .catch((error) => {
              console.error(
                'Error al obtener el enlace de acceso al archivo:',
                error,
              );
            });
        })
        .catch((error) => {
          console.error('Error al subir el archivo', error);
        });
    }
  };

  return (
    <>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className="formularioReserva">
            <h1>DATOS DE RESERVA</h1>
            <Form
              action="/files"
              method="post"
              encType="multipart/form-data"
              className="formReserva"
              onSubmit={handleSubmitDatos}
            >
              <Form.Group className="mb-3" controlId="formGridName">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setNombre(e.target.value)}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCelular">
                  <Form.Label>Número de celular</Form.Label>
                  <Form.Control
                    type="text"
                    minLength={10}
                    onChange={(e) => setCelular(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                    type="email"
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridID">
                  <Form.Label>Cédula</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setCedula(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Número de acompañantes</Form.Label>
                  <Form.Select
                    defaultValue={'Seleccionar'}
                    onChange={(e) => setNumeroAcompanantes(e.target.value)}
                  >
                    <option disabled value="Seleccionar">
                      Seleccionar
                    </option>
                    {options()}
                  </Form.Select>
                </Form.Group>
              </Row>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>
                  Nombres y número de cédula de los acompañantes
                </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setInfoAcompanantes(e.target.value)}
                />
              </Form.Group>

              <div id="informacionPrevia">
                <p className="labeldatoInterno">TIPO DE CABAÑA: </p>
                <p className="datoInterno" id="tipoCabaña">
                  {TipoDeCabaña}
                </p>
                <p className="labeldatoInterno">CANTIDAD DE CABAÑAS: </p>
                <p className="datoInterno" id="cantidadCabanas">
                  {BookingRooms}
                </p>
                <p className="labeldatoInterno">FECHA CHECK IN: </p>
                <p className="datoInterno" id="fechaReservaIn">
                  {CheckInDate.format('DD-MM-YYYY')}
                </p>
                <p className="labeldatoInterno">FECHA CHECK OUT: </p>
                <p className="datoInterno" id="fechaReservaOut">
                  {CheckOutDate.format('DD-MM-YYYY')}
                </p>
                <p className="labeldatoInterno">PRECIO TOTAL: </p>
                <p className="datoInterno" id="precioFinal">
                  ${PrecioCabana}
                </p>
                <div className="comprobante">
                  <p className="labeldatoInterno">COMPROBANTE DE PAGO: </p>
                  <input
                    type="file"
                    name="archivo"
                    id="archivo"
                    onChange={(e) => setInvoice(e.target.files[0])}
                  />
                </div>
              </div>

              <div className="botonFinal">
                <Button variant="primary" type="submit">
                  Finalizar reserva
                </Button>
                <p id="errorDatos">{FaltanDatos}</p>
              </div>
            </Form>
          </div>
        )}
      </div>
    </>
  );
};

export default DatosReserva;
