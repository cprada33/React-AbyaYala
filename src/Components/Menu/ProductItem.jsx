import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductItem = ({ producto }) => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Card>
        <Card.Img variant="top" src={producto.img} />
        <Card.Body>
          <Card.Title className="titlePlato negrilla">
            {producto.Plato}
          </Card.Title>
          {producto.Descripción && (
            <Card.Text className="descripcionPlato">
              {producto.Descripción}
            </Card.Text>
          )}
          {producto.Precio && (
            <Card.Text className="precioPlato">$ {producto.Precio}</Card.Text>
          )}
          <div className="pickProductos">
            <Button
              className="btn"
              onClick={() => (counter > 0 ? setCounter(counter - 1) : null)}
              variant="warning"
            >
              -
            </Button>
            <p>{counter}</p>
            <Button
              className="btn"
              onClick={() => setCounter(counter + 1)}
              variant="warning"
            >
              +
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductItem;
