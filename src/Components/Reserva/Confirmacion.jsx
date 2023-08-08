const Confirmacion = () => {
  return (
    <>
        <div className="confirmacion">
          <h1 className="tituloConfirmacion">RESERVA CONFIRMADA</h1>
          <p className="textoConfirmacion">
            ¡A tu correo electronico recibirás toda la información de tu
            reserva!
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
            src="src/assets/imgs/menu1.jpg"
            alt="foto-menu"
          />
        </div>
    </>
  );
};

export default Confirmacion;
