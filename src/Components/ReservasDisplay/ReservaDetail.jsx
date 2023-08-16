import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const ReservaDetail = () => {
  const { idreserva } = useParams();

  const [nombreDetail, setNombreDetail] = useState("");
  const [celularDetail, setCelularDetail] = useState("");
  const [correoDetail, setCorreoDetail] = useState("");
  const [cedulaDetail, setCedulaDetail] = useState("");
  const [tipoDeCabanaDetail, setTipoDeCabanaDetail] = useState("");
  const [acompanantesDetail, setAcompanantesDetail] = useState("");
  const [checkinDetail, setCheckinDetail] = useState("");
  const [checkoutDetail, setCheckoutDetail] = useState("");
  const [infoAcompanantesDetail, setinfoAcompanantesDetail] = useState("");
  const [comidaDetail, setComidaDetail] = useState("");
  const [precioDetail, setPrecioDetail] = useState("");
  const [screenshotDetail, setScreenshotDetail] = useState("");

  const [ReservaData, setReservaData] = useState('');
  console.log(ReservaData)

  useEffect(() => {
    fetch(`http://localhost:3000/reserva/${idreserva}`)
      .then((response) => response.json())
      .then((data) => {
        setReservaData(data);
        setNombreDetail(data["Nombre"]);
        setCelularDetail(data["Celular"]);
        setCorreoDetail(data["Correo electronico"]);
        setCedulaDetail(data["Cédula"]);
        const checkin = dayjs(data["fecha check in"]).format("DD-MM-YYYY");
        setCheckinDetail(checkin);
        const checkout = dayjs(data["fecha check out"]).format("DD-MM-YYYY");
        setCheckoutDetail(checkout);
        setAcompanantesDetail(data["Número de huespedes"]);
        setinfoAcompanantesDetail(data["Información acompañantes"]);
        setComidaDetail(data["Reserva de comida"]);
        setPrecioDetail(data.precio);
        setScreenshotDetail(data["Comprobante de pago"]);
        setTipoDeCabanaDetail(data["Tipo de cabaña"]);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, [idreserva]);

  return (
    <>
      <h1 className="tituloReservas">INFORMACIÓN DE RESERVA: <p className="codeReserva"> ABYA{idreserva}</p></h1>
      <div className="reservaContainer">
        <div className="labelColumn">
          <label className="label" htmlFor="">
            ID de reserva
          </label>
          <label className="label" htmlFor="">
            Nombre
          </label>
          <label className="label" htmlFor="">
            Celular
          </label>
          <label className="label" htmlFor="">
            Correo
          </label>
          <label className="label" htmlFor="">
            Cédula
          </label>
          <label className="label" htmlFor="">
            Tipo de cabaña
          </label>
          <label className="label" htmlFor="">
            Fecha de Check in
          </label>
          <label className="label" htmlFor="">
            Fecha de Check out
          </label>
          <label className="label" htmlFor="">
            Número de acompañantes
          </label>
          <label className="label" htmlFor="">
            Información de acompañantes
          </label>
          <label className="label" htmlFor="">
            Comida seleccionada
          </label>
          <label className="label" htmlFor="">
            Precio de reserva
          </label>
          <label className="label" htmlFor=""></label>
        </div>
        <div className="inputColumn">
          <input className="input" type="text" defaultValue={idreserva} />

          <input className="input" type="text" defaultValue={nombreDetail} />

          <input className="input" type="text" defaultValue={celularDetail} />

          <input className="input" type="text" defaultValue={correoDetail} />

          <input className="input" type="text" defaultValue={cedulaDetail} />

          <input
            className="input"
            type="text"
            defaultValue={tipoDeCabanaDetail}
          />

          <input className="input" type="text" defaultValue={checkinDetail} />

          <input className="input" type="text" defaultValue={checkoutDetail} />

          <input
            className="input"
            type="text"
            defaultValue={acompanantesDetail}
          />

          <input
            className="input"
            type="text"
            defaultValue={infoAcompanantesDetail}
          />

          <input className="input" type="text" defaultValue={comidaDetail} />

          <input className="input" type="text" defaultValue={precioDetail} />

          <img src={screenshotDetail} alt="" />
        </div>
      </div>
    </>
  );
};

export default ReservaDetail;
