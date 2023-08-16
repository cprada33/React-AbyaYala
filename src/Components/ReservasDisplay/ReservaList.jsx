import { Link } from "react-router-dom";
import ReservaItem from "./ReservaItem";
import { useState, useEffect } from "react";

const ReservaList = () => {
  const [reserva, setReserva] = useState([]);
  console.log(reserva)
  useEffect(() => {
    fetch("http://localhost:3000/reservas")
      .then((response) => response.json())
      .then((data) => {
        setReserva(data);
      });
  }, []);
  return (
    <>
      <div className="reservasSection">
        {reserva.map((item) => {
          return (
            <Link
              className="link"
              to={`/reservas/${item.idReserva}`}
              key={item.idReserva}
            >
              {" "}
              <ReservaItem reserva={item} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ReservaList;
