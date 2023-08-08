import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DatosReserva = () => {

  const navigate = useNavigate();
  const handleSubmitDatos = (event) => {
    event.preventDefault();
    navigate('/booking/confirmacion_de_reserva')
  };

  return (
    <>
        <htmlForm
          action="/files"
          method="post"
          encType="multipart/htmlForm-data"
          className="htmlFormReserva row g-3"
        >
        </htmlForm>

      <div className="formularioReserva">
        <h1>DATOS DE RESERVA</h1>
        <Form className="formReserva" onSubmit={handleSubmitDatos}>
          <Form.Group className="mb-3" controlId="formGridName">
          <Form.Label>Nombre completo</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCelular">
            <Form.Label>Número de celular</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Correo</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridID">
            <Form.Label>Cédula</Form.Label>

              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Número de acompañantes</Form.Label>
              <Form.Select defaultValue="0">
                <option>0</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Nombres y número de cédula de los acompañantes</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <div id="informacionPrevia">
            <p className="labeldatoInterno">TIPO DE CABAÑA: </p>
            <p className="datoInterno" id="tipoCabaña"></p>
            <p className="labeldatoInterno">CANTIDAD DE CABAÑAS: </p>
            <p className="datoInterno" id="cantidadCabanas"></p>
            <p className="labeldatoInterno">FECHA CHECK IN: </p>
            <p className="datoInterno" id="fechaReservaIn"></p>
            <p className="labeldatoInterno">FECHA CHECK OUT: </p>
            <p className="datoInterno" id="fechaReservaOut"></p>
            <p className="labeldatoInterno">PRECIO TOTAL: </p>
            <p className="datoInterno" id="precioFinal"></p>
            <div className="comprobante">
              <p className="labeldatoInterno">COMPROBANTE DE PAGO: </p>
              <input type="file" name="archivo" id="archivo" />
            </div>
          </div>

          <div className="botonFinal">
          <Button variant="primary" type="submit">
            Finalizar reserva
          </Button>
          <p id="errorDatos"></p>
          </div>
        </Form>
      </div>
    </>
  );
};

export default DatosReserva;
