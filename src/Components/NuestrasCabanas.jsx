const NuestrasCabanas = () => {
  return (
    <>
        <img
          className="img-somos"
          src="src/assets/imgs/familia.png"
          alt="familia"
        />
        <section className="banner-somos">
          <h1 className="tit-somos">¿QUÉ ES ABYA YALA HOSTEL?</h1>
          <p className="psomos">
            Abya Yala, que significa Tierra Madura, Tierra Viva o Tierra en
            Florecimiento, fue el término utilizado por los Kuna, pueblo
            originario que habita en Colombia y Panamá, para designar al
            territorio comprendido por el Continente Americano, El término Abya
            Yala es en sí mismo un símbolo de identidad y respeto hacia las
            raíces de los pueblos originarios.
          </p>
          <p className="psomos">
            Abya Yala Hostel es Un espacio pensado para conectarte con la
            naturaleza, a solo dos horas de la capital colombiana, Abya Yala
            Hostel, se convierte en una opción increíble para descansar,
            explorar, aprender e interactuar con nuestro planeta tierra y cuidar
            de el.
          </p>
        </section>
        <div className="nuestras-somos">
          <div className="img-somos2">
            <img
              className="img-somoss2"
              src="src/assets/imgs/imagen3.JPG"
              alt="familia"
            />
          </div>
          <div className="div-tit-banner-cabanas">
            <p className="tit-banner-cabanas">NUESTRAS CABAÑAS</p>
          </div>
          <div className="div-parrafo-banner">
            <p className="parrafo-banner">
              Disponemos de 8 cabañas en medio de la naturaleza, cada una tiene
              un nombre reconociendo los nombres ancestrales de nuestros
              territorios.
            </p>
            <p className="boton-somos">
              <a href="./cabanas.html">QUIERO CONOCERLAS.</a>
            </p>
          </div>
        </div>
    </>
  );
};

export default NuestrasCabanas;
