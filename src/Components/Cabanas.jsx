import { useLocation } from 'react-router-dom';

const Cabanas = () => {
  const location = useLocation();
  const renderHome = location.pathname === '/';

  return (
    <>
      <section className="secCabanas">
        <div className="tit-ancestral">
          <h2 className="tit-cab">CABAÑA SAFARI</h2>
        </div>
        <div className="tit-safari">
          <h2 className="tit-cab">CABAÑA ANCESTRAL</h2>
        </div>
        <div className="img-safari">
          <img
            className="cabanas"
            src="https://firebasestorage.googleapis.com/v0/b/abyayala-c7fa8.appspot.com/o/assets%2Fcabanasafari.jpg?alt=media&token=5da0e6bc-818e-4686-8093-fc4700ccdeb0"
            alt="safari"
          />
        </div>
        <div className="img-ancestral">
          <img
            className="cabanas"
            src="https://firebasestorage.googleapis.com/v0/b/abyayala-c7fa8.appspot.com/o/assets%2Fcabanaancestral.jpg?alt=media&token=f2f21b00-8d9a-49a2-b9f1-d4c57701509d"
            alt="ancestral"
          />
        </div>
        <div className="pr-ancestral">
          <h2 className="precio">320.000 COP</h2>
        </div>
        <div className="pr-safari">
          <h2 className="precio">420.000 COP</h2>
        </div>
        {renderHome && (
          <div className="incluye">
            <p className="incluye-titulo">Incluye</p>
            <p>⛺️ Alojamiento</p>
            <p>
              🍳 Desayuno <a href="./pages/menu.html">(Menú restaurante)</a>
            </p>
            <p>🍺 Acceso a piscina, bar y mirador</p>
            <p>
              🏞 Visita a cascada El escobo (Modestia aparte, una de las más
              bonitas y altas del país.)
            </p>
            <p>*Cabaña Ancestral tiene baño particular.</p>
            <p className="incluye-cierre">Todo para dos personas.</p>
          </div>
        )}
      </section>
    </>
  );
};

export default Cabanas;
