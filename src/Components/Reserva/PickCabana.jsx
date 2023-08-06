const PickCabana = ({cabana}) => {

  return (
    <>
      <div className="cardCabanas safari">
        <img className="card-img" src={cabana.img} alt={cabana.tipo} />
        <div className="parent-titulo-reserva">
          <h2 className="titulo-reserva">{cabana.titulo}</h2>
        </div>
        <div className="detalles">
              {cabana.detalles.map((detalle) => { 
                return (
                <p key={detalle}>{detalle}</p>
                );
              })}
            </div>
        <div className="seleccionCabanas">
          <p className="disponibilidad" id="disponibilidad-safari"></p>
          <div className="cantidadCabanas"> 
            <select
              id="cantidadDeCabanasSafari"
              className="form-select"
              aria-label="Habitaciones"
            >
              <option id="option1" value="1">
                1
              </option>
              <option id="option2" value="2">
                2
              </option>
              <option id="option3" value="3">
                3
              </option>
              <option id="option4" value="4">
                4
              </option>
              <option id="option5" value="5">
                5
              </option>
              <option id="option6" value="6">
                6
              </option>
              <option id="option7" value="7">
                7
              </option>
              <option id="option8" value="8">
                8
              </option>
            </select>
          </div>
          <div className="botonReservar col-12">
            <button
              id="reservar-safari"
              type="submit"
              className="btn btn-primary"
            >
              Reservar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PickCabana;
