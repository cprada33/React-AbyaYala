import { Button } from "@mui/material";
import { useContext } from "react";
import { DateBooking } from "../../Context/DateContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const PickCabana = ({ cabana }) => {
  const { RangeDates, setBookingRooms, setTipoDeCabaña, setPrecioCabana, setCabanaServer } = useContext(DateBooking);
  let [NumeroCabanas, setNumeroCabanas] = useState(0);
  let [disponibilidad, setDisponiblidad] = useState(cabana.cantidad);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(cabana.server)
      .then((response) => response.json())
      .then((data) => {
        let ocupadas = 0;
        for (const element of RangeDates) {

          const ocurrences = data.filter(
            (item) => item === element
          ).length;
          ocupadas += ocurrences;
        }
        setDisponiblidad(cabana.cantidad - ocupadas)
      })
  }, [
    cabana.server,
    RangeDates,
    disponibilidad,
    cabana.cantidad
  ]);

  console.log(disponibilidad)

  const handleButtonPick = () => {
    setBookingRooms(NumeroCabanas)
    setTipoDeCabaña(cabana.tipo)
    setPrecioCabana((cabana.precio * NumeroCabanas * RangeDates.length).toLocaleString())
    setCabanaServer(cabana.server)
    navigate("/datos_de_reserva");
  };
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
          <p className="disponibilidad">{disponibilidad > 0 ? `Cabañas disponibles: ${disponibilidad}` : <p> No hay disponible </p>}</p>
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
            onClick={ NumeroCabanas < disponibilidad ? () => setNumeroCabanas(NumeroCabanas + 1) : null}
          >
            +
          </Button>
          <div className="botonReservar col-12">
            <Button
              className="btn"
              type="submit"
              variant="contained"
              onClick={handleButtonPick}
              disabled={disponibilidad <= 0 || NumeroCabanas === 0}
            >
              Reservar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PickCabana;
