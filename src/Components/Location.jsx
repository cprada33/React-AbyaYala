const Location = () => {
  return (
    <>
      <section className="location">
        <h3 className="hlocation">¿CÓMO LLEGAR?</h3>
        <div id="dlocation">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d254408.03853972073!2d-74.39157541379505!3d4.918645356227185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8e3f9bf8054fdd45%3A0x51e46a5a7a9a8e79!2sPortal%2080%20-%20TransMilenio%2C%20Calle%2080a%2C%20Bogot%C3%A1!3m2!1d4.7097263!2d-74.1103439!4m5!1s0x8e408db994d6b66d%3A0x95036d19d28350b2!2sAbya%20Yala%20Hostel%2C%20vereda%20pinzaima%2C%20Nimaima%2C%20Cundinamarca!3m2!1d5.1269485!2d-74.392614!5e0!3m2!1ses-419!2sco!4v1676955998396!5m2!1ses-419!2sco"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>
        <div className="div-location">
          <p className="dlocation">TRANSPORTE PÚBLICO</p>
          <p className="horariosLocation">HORARIOS FLOTA AGUILA</p>
          <p className="horariosLocation">
            Buses directos para Nimaima desde Portal de la 80:
          </p>
          <p className="horariosLocation">5:10 am</p>
          <p className="horariosLocation">8:50 am</p>
          <p className="horariosLocation">4:10 pm</p>
        </div>
        <div className="div-location segundo">
          <p className="dlocation final">¡Te esperamos!</p>
        </div>
      </section>
    </>
  );
};

export default Location;
