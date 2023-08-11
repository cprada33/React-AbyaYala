import { useEffect, useState } from "react";

const Confirmacion = () => {
  let [idReserva, setIdReserva] = useState("");

  useEffect(() => {
    fetch('http://localhost:3000/datos5')
      .then(response => response.json())
      .then(data => {
        // const idOriginal = data;
        setIdReserva(data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, [idReserva])

  console.log(idReserva)

  return (
    <>
      <div className="confirmacion">
        <h1 className="tituloConfirmacion">RESERVA CONFIRMADA</h1>
        <h3 className="codigoDeReserva">CÓDIGO DE RESERVA: {idReserva}</h3>
        <p className="textoConfirmacion">
          ¡A tu correo electronico recibirás toda la información de tu reserva!
        </p>
        <p className="textoConfirmacion">
          En el siguiente link podrás revisar el menú del restaurante.
        </p>
        <p>
          <a className="menuConfirmacion" href="./menu.html">
            Menú restaurante
          </a>
        </p>
        <img
          className="imagenConfirmacion"
          src="/src/assets/imgs/menu1.jpg"
          alt="foto-menu"
        />
      </div>
    </>
  );
};

export default Confirmacion;
