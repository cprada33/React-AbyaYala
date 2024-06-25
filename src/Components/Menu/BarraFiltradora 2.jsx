import { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { DateBooking } from '../../Context/DateContext';

const BarraFiltradora = ({ datos }) => {
  const { setCategoria } = useContext(DateBooking);

  return (
    <div>
      <Container className="containerBarra">
        <Row>
          {datos.map((categoria) => {
            return (
              <Col
                className="colBarra"
                key={categoria.Categoria}
                xs={6}
                md={3}
                onClick={() => {
                  setCategoria(categoria.Categoria);
                }}
              >
                <Image
                  className="imgCatMenu"
                  src={categoria.Imagen}
                  roundedCircle
                />
                <h1 className="titleCatMenu">{categoria.Categoria}</h1>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default BarraFiltradora;
