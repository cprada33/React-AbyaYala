import { Button } from "@mui/material";
import { useContext } from "react";
import { DateBooking } from "../../Context/DateContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../Firebase/firebase.config";

const PickCabana = ({ cabana }) => {
  const {
    RangeDates,
    setBookingRooms,
    setTipoDeCabaña,
    setPrecioCabana,
  } = useContext(DateBooking);
  let [NumeroCabanas, setNumeroCabanas] = useState(0);
  let [disponibilidad, setDisponiblidad] = useState('Cargando...');
  const navigate = useNavigate();

  useEffect(() => {
    const reservadasCollection = collection(db, "reservadas");
    getDocs(reservadasCollection).then((datos) => {
      const docs = datos.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log('docs: ',docs)
      const reservas = [];
      for (const item of docs) {
        console.log('fecha item: ', item.fecha)
        if (item.cabaña === cabana.tipo) {
          reservas.push(item.fecha);
        }
      }
      console.log('RangeDates: ',RangeDates)
      console.log('reservas: ',reservas)
      let ocupadas = 0;
      for (const element of RangeDates) {
        const ocurrences = reservas.filter((item) => item === element).length;
        ocupadas += ocurrences;
      }
      setDisponiblidad(cabana.cantidad - ocupadas);
    });
  }, [RangeDates, disponibilidad, cabana.cantidad, cabana.tipo]);

  console.log("Disponibilidad: ", disponibilidad);

  const handleButtonPick = () => {
    setBookingRooms(NumeroCabanas);
    setTipoDeCabaña(cabana.tipo);
    setPrecioCabana(
      (cabana.precio * NumeroCabanas * RangeDates.length).toLocaleString()
    );
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
          <p className="disponibilidad">
            {disponibilidad !== 0 ? (
              `Cabañas disponibles: ${disponibilidad}`
            ) : (
              <p> No hay disponible </p>
            )}
          </p>
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
            onClick={
              NumeroCabanas < disponibilidad
                ? () => setNumeroCabanas(NumeroCabanas + 1)
                : null
            }
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

// const servicioDoc = doc(db, 'Servicios', `${id}`);
// getDoc(servicioDoc).then((datos)=>{
//   const doc = datos.data();
//   setServicio(doc);
//   console.log(datos)
// })

//   const serviciosCollection = collection(db, 'Servicios');
//   getDocs(serviciosCollection).then((datos)=>{
//     const docs = datos.docs.map((doc)=> ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     setServicios(docs);
//   })
