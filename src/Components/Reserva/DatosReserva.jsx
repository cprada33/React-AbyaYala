import { useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DateBooking } from "../../Context/DateContext";

const DatosReserva = () => {
  const {
    BookingRooms,
    TipoDeCabaña,
    CheckInDate,
    CheckOutDate,
    PrecioCabana,
    RangeDates,
    CabanaServer,
    setReservaRealizada,
    ReservaRealizada,
  } = useContext(DateBooking);

  // useEffect(()=>{

  // }, [setCheckInDate, CheckInDate, setCheckOutDate, CheckOutDate])

  const [Nombre, setNombre] = useState("");
  const [Celular, setCelular] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Cedula, setCedula] = useState("");
  const [NumeroAcompanantes, setNumeroAcompanantes] = useState("");
  const [InfoAcompanantes, setInfoAcompanantes] = useState("");
  const [FaltanDatos, setFaltanDatos] = useState(null);
  const [invoice, setInvoice] = useState(null);

  const navigate = useNavigate();

  const options = () => {
    const options = [];

    for (let i = 0; i <= 25; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return options
  };

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
        "Para finalizar la reserva debes completar todos los campos."
      );
    } else if (ReservaRealizada === true) {
      navigate("/");
    } else {
      for (let i = 0; i < BookingRooms; i++) {
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ RangeDates }),
        };
        fetch(CabanaServer, requestOptions)
          .then((response) => {
            console.log("Respuesta del servidor:", response);

            if (!response.ok) {
              throw new Error("Error en la solicitud POST");
            }
            return response.json();
          })
          .then((data) => {
            console.log("Datos insertados correctamente:", data);
          })
          .catch((error) => {
            console.error("Error en la solicitud POST:", error);
          });
      }
      const infoReserva = {
        Nombre,
        Celular,
        Correo,
        Cedula,
        NumeroAcompanantes,
        CheckInDate,
        CheckOutDate,
        InfoAcompanantes,
        PrecioCabana,
        TipoDeCabaña,
      };
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ infoReserva }),
      };

      fetch("http://localhost:3000/datos4", requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error en la solicitud POST");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Respuesta del servidor:", data);
        })
        .catch((error) => {
          console.error("Error en la solicitud POST:", error);
        });

      const formData = new FormData();
      formData.append("archivo", invoice);
      fetch("http://localhost:3000/files", {
        method: "POST",
        body: formData,
      }).then(function (response) {
        if (response.ok) {
          console.log("Antes de");
        }
      });

      setReservaRealizada(true);
      navigate("/confirmacion_de_reserva");
    }
  };

  console.log(CheckInDate);

  return (
    <>
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
                <option disabled value="Seleccionar">Seleccionar</option>
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
              {CheckInDate.format("DD-MM-YYYY")}
            </p>
            <p className="labeldatoInterno">FECHA CHECK OUT: </p>
            <p className="datoInterno" id="fechaReservaOut">
              {CheckOutDate.format("DD-MM-YYYY")}
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
    </>
  );
};

export default DatosReserva;
