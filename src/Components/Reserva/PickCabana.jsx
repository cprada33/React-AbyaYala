import { Button } from "@mui/material";
import { useContext } from "react";
import { DateBooking } from "../../Context/DateContext";
import { useNavigate } from "react-router-dom";

const PickCabana = ({ cabana }) => {
  const { NumeroCabanas, setNumeroCabanas } = useContext(DateBooking);
  const navigate = useNavigate();
  const handleButtonPick = () => {
    navigate("/booking/datos_de_reserva")
  }
  return (
    <>
      <div className="cardCabanas safari">
        <img className="card-img" src={cabana.img} alt={cabana.tipo} />
        <div className="parent-titulo-reserva">
          <h2 className="titulo-reserva">{cabana.titulo}</h2>
        </div>
        <div className="detalles">
          {cabana.detalles.map((detalle) => {
            return <p key={detalle}>{detalle}</p>;
          })}
        </div>
        <div className="seleccionCabanas">
          <p className="disponibilidad">Cabañas disponibles:</p>
          <Button
            className="btnMas"
            variant="outlined"
            onClick={
              NumeroCabanas > 0
                ? () => setNumeroCabanas(NumeroCabanas - 1)
                : null
            }
          >
            -
          </Button>
          <h5 className="NumeroCabanas">{NumeroCabanas}</h5>
          <Button
            className="btnMenos"
            variant="outlined"
            onClick={() => setNumeroCabanas(NumeroCabanas + 1)}
          >
            +
          </Button>
          <div className="botonReservar col-12">
            <Button className="btn" type="submit" variant="contained" onClick={handleButtonPick}>
              Reservar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PickCabana;
