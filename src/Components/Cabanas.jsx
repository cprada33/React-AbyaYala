const Cabanas = () => {
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
    <img className="cabanas" src="src/assets/imgs/cabanasafari.jpg" alt="safari"/>
</div>
<div className="img-ancestral">
    <img className="cabanas" src="src/assets/imgs/cabanaancestral.jpg" alt="ancestral"/>
</div>
<div className="pr-ancestral">
    <h2 className="precio">320.000 COP</h2>
</div>
<div className="pr-safari">
    <h2 className="precio">420.000 COP</h2>
</div>
<div className="incluye">
    <p className="incluye-titulo">Incluye</p>
    <p>⛺️ Alojamiento</p>
    <p>🍳 Desayuno <a href="./pages/menu.html">(Menú restaurante)</a></p>
    <p>🍺 Acceso a piscina, bar y mirador</p>
    <p>🏞 Visita a cascada El escobo (Modestia aparte, una de las más bonitas y altas del país.)</p>
    <p>*Cabaña Ancestral tiene baño particular.</p>
    <p className="incluye-cierre">Todo para dos personas.</p>
</div>
</section>
    </>
  )
}

export default Cabanas


