import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../Firebase/firebase.config';
import { DateBooking } from '../../Context/DateContext';
import { DatePicker } from '@mui/x-date-pickers';
import { Button, Col, Form, Row } from 'react-bootstrap';
import dayjs from 'dayjs';
import ImgPreview from './ImgPreview';
import Loading from '../Loading';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import ProductItemCarrito from '../Menu/ProductItemCarrito';

const ReservaDetallada = ({ origen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { idreserva } = useParams();
  const [ReservaData, setReservaData] = useState('');
  const [loading, setLoading] = useState(true);
  const {
    setImgPreview,
    LoadPreview,
    BookingRooms,
    setBookingRooms,
    TipoDeCabaña,
    setTipoDeCabaña,
    CheckInDate,
    CheckOutDate,
    Nombre,
    setNombre,
    Celular,
    setCelular,
    Correo,
    setCorreo,
    Cedula,
    setCedula,
    NumeroAcompanantes,
    setNumeroAcompanantes,
    InfoAcompanantes,
    setInfoAcompanantes,
    invoice,
    setInvoice,
    setCheckInDate,
    setCheckOutDate,
    comidaDetail,
    setComidaDetail,
    permiso,
    setIdReserva,
  } = useContext(DateBooking);

  const options = (max) => {
    const options = [];

    for (let i = 0; i <= max; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>,
      );
    }

    return options;
  };

  useEffect(() => {
    if (location.pathname.startsWith('/reservas')) {
      getDoc(doc(db, 'reservas', `ABYA${idreserva}`)).then((datos) => {
        const data = datos.data();
        setReservaData(data);
        setNombre(data.Nombre);
        setCelular(data.Celular);
        setCedula(data.Cédula);
        setCorreo(data.Correo);
        setInfoAcompanantes(data['Información de acompañantes']);
        setNumeroAcompanantes(data['Cantidad de huespedes']);
        setInvoice(data['Reserva de comida']);
        setTipoDeCabaña(data['Tipo de cabaña']);
        setBookingRooms(data['Cantidad de cabañas']);
        setCheckInDate(dayjs(data['Check in']));
        setCheckOutDate(dayjs(data['Check out']));
        setLoading(false);
        setIdReserva(data.idReserva);
        setComidaDetail(data.Comida);
      });
    } else {
      if (permiso == true) {
        getDoc(doc(db, 'reservas', `ABYA${idreserva}`)).then((datos) => {
          const data = datos.data();
          setReservaData(data);
          setNombre(data.Nombre);
          setCelular(data.Celular);
          setCedula(data.Cédula);
          setCorreo(data.Correo);
          setInfoAcompanantes(data['Información de acompañantes']);
          setNumeroAcompanantes(data['Cantidad de huespedes']);
          setInvoice(data['Reserva de comida']);
          setTipoDeCabaña(data['Tipo de cabaña']);
          setBookingRooms(data['Cantidad de cabañas']);
          setCheckInDate(dayjs(data['Check in']));
          setCheckOutDate(dayjs(data['Check out']));
          setLoading(false);
          setIdReserva(data.idReserva);
          setComidaDetail(data.Comida);
          console.log(data);
        });
      } else {
        navigate('/mireserva');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idreserva]);

  const handleSubmitDatos = (event) => {
    event.preventDefault();
    if (invoice != undefined) {
      const invoiceName = invoice.name;
      const storage = getStorage();
      const archivoRef = ref(storage, `Comprobantes/${invoiceName}`);
      uploadBytes(archivoRef, invoice)
        .then((snapshot) => {
          console.log('Archivo subido con éxito', snapshot);
          getDownloadURL(archivoRef)
            .then((url) => {
              const thisReserva = doc(db, 'reservas', `ABYA${idreserva}`);
              updateDoc(thisReserva, {
                Nombre,
                Correo,
                Celular,
                Cédula: Cedula,
                'Tipo de cabaña': TipoDeCabaña,
                'Cantidad de cabañas': BookingRooms,
                'Información de acompañantes': InfoAcompanantes,
                'Cantidad de huespedes': NumeroAcompanantes,
                'Check in': CheckInDate.toISOString().slice(0, 10),
                'Check out': CheckOutDate.toISOString().slice(0, 10),
                urlInvoice: url,
              });
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
    } else {
      const thisReserva = doc(db, 'reservas', `ABYA${idreserva}`);
      updateDoc(thisReserva, {
        Nombre,
        Correo,
        Celular,
        Cédula: Cedula,
        'Tipo de cabaña': TipoDeCabaña,
        'Cantidad de cabañas': BookingRooms,
        'Información de acompañantes': InfoAcompanantes,
        'Cantidad de huespedes': NumeroAcompanantes,
        'Check in': CheckInDate.toISOString().slice(0, 10),
        'Check out': CheckOutDate.toISOString().slice(0, 10),
      });
      console.log('envio sin img');
    }
    if (location.pathname.includes('/mireserva')) {
      navigate('/mireserva/');
    } else if (location.pathname.includes('/reservas')) {
      navigate(`/reservas/`);
    }
  };

  const handleSubmitMenu = () => {
    if (location.pathname.includes('/mireserva')) {
      navigate(`/mireserva/${idreserva}/menu`);
    } else if (location.pathname.includes('/reservas')) {
      navigate(`/reservas/${idreserva}/menu`);
    }
  };

  return (
    <>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <div>
              {origen === 'mireserva' ? (
                <h1 className="tituloReservas">¡ Hola {Nombre}!</h1>
              ) : null}
              {origen === 'reservas' ? (
                <h1 className="tituloReservas">INFORMACIÓN DETALLADA</h1>
              ) : null}
              <h1 className="codeReserva">
                RESERVA ABYA{ReservaData.idReserva}
              </h1>
            </div>
            <div className="tableDetail">
              <div className="imgReservaDetalladaDiv">
                {ReservaData['Tipo de cabaña'] == 'Ancestral' ? (
                  <img
                    className="imgReservaDetallada"
                    alt="Ancestral"
                    src="https://firebasestorage.googleapis.com/v0/b/abyayala-c7fa8.appspot.com/o/assets%2Fcabanaancestral.jpg?alt=media&token=f2f21b00-8d9a-49a2-b9f1-d4c57701509d"
                  ></img>
                ) : (
                  <img
                    className="imgReservaDetallada"
                    src="https://firebasestorage.googleapis.com/v0/b/abyayala-c7fa8.appspot.com/o/assets%2Fcabanasafari.jpg?alt=media&token=5da0e6bc-818e-4686-8093-fc4700ccdeb0"
                    alt="Safari"
                  />
                )}
              </div>
              <Form
                action="/files"
                method="post"
                encType="multipart/form-data"
                className="formReservaDetail"
                onSubmit={handleSubmitDatos}
              >
                <h1 className="subReservaDetallada">TITULAR DE LA RESERVA</h1>
                <Form.Group className="mb-3" controlId="formGridName">
                  <Form.Label>Nombre completo</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setNombre(e.target.value)}
                    value={Nombre}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCelular">
                    <Form.Label>Número de celular</Form.Label>
                    <Form.Control
                      type="text"
                      minLength={10}
                      onChange={(e) => setCelular(e.target.value)}
                      value={Celular}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                      type="email"
                      onChange={(e) => setCorreo(e.target.value)}
                      value={Correo}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridID">
                    <Form.Label>Cédula</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setCedula(e.target.value)}
                      value={Cedula}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Número de acompañantes</Form.Label>
                    <Form.Select
                      onChange={(e) => setNumeroAcompanantes(e.target.value)}
                      value={NumeroAcompanantes}
                    >
                      {options(25)}
                    </Form.Select>
                  </Form.Group>
                </Row>
                <h1 className="subReservaDetallada">DETALLES DE LA RESERVA</h1>

                <Form.Group className="mb-3" as={Col} controlId="formGridZip">
                  <Form.Label>
                    Nombres y número de cédula de los acompañantes
                  </Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setInfoAcompanantes(e.target.value)}
                    value={InfoAcompanantes}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCabaña">
                    <Form.Label>Tipo de cabaña</Form.Label>
                    <Form.Select
                      onChange={(e) => setTipoDeCabaña(e.target.value)}
                      value={TipoDeCabaña}
                    >
                      <option>Safari</option>
                      <option>Ancestral</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    as={Col}
                    controlId="formGridTipo"
                  >
                    <Form.Label>Número de cabañas</Form.Label>
                    <Form.Select
                      onChange={(e) => setBookingRooms(e.target.value)}
                      value={BookingRooms}
                    >
                      {options(8)}
                    </Form.Select>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="DatePickerLabel">
                      Fecha de Check in
                    </Form.Label>
                    <DatePicker
                      className="DatePicker"
                      label="Check in"
                      minDate={dayjs()}
                      value={CheckInDate}
                      onChange={(newValue) => {
                        setCheckInDate(newValue);
                      }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="DatePickerLabel">
                      Fecha de Check in
                    </Form.Label>
                    <DatePicker
                      className="DatePicker"
                      label="Check out"
                      minDate={dayjs(CheckInDate).add(1, 'day')}
                      value={CheckOutDate}
                      onChange={(newValue) => {
                        setCheckOutDate(newValue);
                      }}
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridName">
                  <Form.Label>Reserva de comida</Form.Label>
                  {comidaDetail != undefined ? (
                    <div className="comidaDetail">
                      {comidaDetail.map((item) => {
                        return (
                          <ProductItemCarrito
                            key={item.Producto}
                            producto={item}
                            tamañoW={100}
                            tamañoH={60}
                          />
                        );
                      })}
                    </div>
                  ) : (
                    <Form.Control
                      type="text"
                      readOnly
                      disabled
                      value="Sin reserva"
                    />
                  )}
                  {console.log(comidaDetail)}
                  <Button
                    onClick={() => {
                      handleSubmitMenu();
                    }}
                    className="buttonComida"
                    variant="primary"
                  >
                    Reservar comida
                  </Button>
                </Form.Group>

                <Form.Group className="mb-3" as={Col} controlId="formGridZip">
                  <Form.Label>
                    Valor total de la reserva (sin reserva menú)
                  </Form.Label>
                  <Form.Control
                    type="text"
                    readOnly
                    disabled
                    value={ReservaData.Valor}
                  />
                </Form.Group>

                <Form.Group className="mb-3" as={Col} controlId="formGridZip">
                  <Form.Label>Comprobante de pago</Form.Label>
                  <img
                    className="imgComprobante"
                    src={ReservaData.urlInvoice}
                    alt="Comprobante"
                    width={100}
                    onClick={() => {
                      setImgPreview(true);
                    }}
                  />
                </Form.Group>

                <div id="informacionPrevia">
                  <div className="comprobante">
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
                    Guardar
                  </Button>
                </div>
              </Form>
              {LoadPreview && <ImgPreview imagen={ReservaData.urlInvoice} />}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ReservaDetallada;
