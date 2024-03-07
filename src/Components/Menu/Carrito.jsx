import { useContext, useEffect, useState } from 'react';
import { DateBooking } from '../../Context/DateContext';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { doc, updateDoc } from 'firebase/firestore';
import { Button } from 'react-bootstrap';
import ProductItemCarrito from './ProductItemCarrito';
import { db } from '../../../Firebase/firebase.config';
import { useLocation, useNavigate } from 'react-router-dom';

const Carrito = () => {
  const { comida, setActive, idReserva, setComida } = useContext(DateBooking);
  let [precioComida, setPrecioComida] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const locationArray = location.pathname.split('/');

  const handleClick = () => {
    setActive(false);
  };

  useEffect(() => {
    let precioComida = 0;
    comida.forEach((item) => {
      precioComida += item.Precio;
      setPrecioComida(precioComida);
    });
  }, [comida]);

  const handleSubmit = () => {
    const thisReserva = doc(db, 'reservas', `ABYA${idReserva}`);
    updateDoc(thisReserva, {
      Comida: comida,
    });
    navigate(`/${locationArray[1]}/${idReserva}`);
  };

  return (
    <div className="carrito">
      <div
        className="opacity"
        onClick={() => {
          handleClick();
        }}
      ></div>
      <div className="CarritoGrid">
        <div className="topCarrito">
          <KeyboardArrowLeftIcon
            className="flechaCarrito"
            onClick={() => {
              handleClick();
            }}
          />
          <h2 className="titleCarrito">Resumen de pedido</h2>
        </div>
        <div className="productosCarrito">
          {comida.map((item) => {
            return (
              <div className="productoCarrito" key={item.Producto}>
                <button
                  className="removeComida"
                  onClick={() => {
                    setComida(comida.filter((element) => element !== item));
                  }}
                >
                  x
                </button>
                <ProductItemCarrito
                  producto={item}
                  tamañoW={120}
                  tamañoH={80}
                />
              </div>
            );
          })}
        </div>
        <div className="detallesCarrito">
          <p className="subtitleCarrito">Número de reserva</p>
          <p>ABYA{idReserva}</p>
          <p className="subtitleCarrito">Precio</p>
          <p>${precioComida.toLocaleString('es-ES')}</p>
          <p className="subtitleCarrito">Descuento</p>
          <p>15%</p>
          <div className="separador"></div>
          <p className="subtitleCarrito">Precio final</p>
          <p>${((precioComida * 75) / 100).toLocaleString('es-ES')}</p>
          <Button
            className="btnCarrito"
            variant="primary"
            type="submit"
            onClick={() => {
              handleSubmit();
            }}
          >
            Reservar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
