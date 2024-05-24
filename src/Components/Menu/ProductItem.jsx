import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { DateBooking } from '../../Context/DateContext';

const ProductItem = ({ producto }) => {
  const { comida, setComida } = useContext(DateBooking);

  const handleClick = (producto) => {
    setComida([...comida, producto]);
  };
  return (
    <>
      <Card>
        <Card.Img variant="top" src={producto.img} />
        <Card.Body>
          <Card.Title className="titlePlato negrilla">
            {producto.Producto}
          </Card.Title>
          {producto.Descripción && (
            <Card.Text className="descripcionPlato">
              {producto.Descripción}
            </Card.Text>
          )}
          {producto.Precio && (
            <Card.Text className="precioPlato">
              $ {producto.Precio.toLocaleString('es-ES')}
            </Card.Text>
          )}
          <div className="pickProductos">
            <Button
              className="btn menu"
              onClick={() => handleClick(producto)}
              variant="warning"
            >
              Añadir al carrito
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductItem;
