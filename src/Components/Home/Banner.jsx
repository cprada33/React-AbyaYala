const Banner = () => {
  return (
    <>
        <section className="grid-banner">
            <img className="img-grid-banner" src='src/assets/imgs/bannermujer.png' alt="mujerlogo"/>
            <div className="text-gridbanner-parent main">
                <h1 className="text-gridbanner">BIENVENIDO</h1>
            </div>
            <div className="text-gridbanner-parent blue">
                <h1 className="text-gridbanner blue primero">A</h1>
            </div>
            <div className="text-gridbanner-parent blue segundo">
                <h1 className="text-gridbanner blue">LA MONTAÑA</h1>
            </div>
            <div className="parrafogridbanner-parent">
                <p className="parrafogridbanner">Bienvenidos a esta montaña donde se rinde tributo a la herencia y legado ancestral, bienvenidos a nuestra casa.</p>
            </div>

            <form className="booking row row-cols-lg-auto g-3 align-items-center">
                <div className="form-group">
                    <div className="form-floating">
                      <input type="date" className="form-control" id="fechain" name="fechain" min=""/>
                      <label htmlFor="fechain">Check in</label>
                    </div>
                </div>

                <div className="form-group">
                    <div className="form-floating">
                      <input type="date" className="form-control" id="fechaout" name="fechaout" min=""/>
                      <label htmlFor="fechaout">Check out</label>
                    </div>
                </div>
              
                <div className="col-12">
                  <button id="btn-disponibilidad" type="submit" className="btn btn-primary">Ver disponibilidad</button>
                </div>

              </form>
        </section>
    </>
  )
}

export default Banner