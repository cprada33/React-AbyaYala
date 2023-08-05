import itemData from '../assets/cabanas.json';
import ImageList from './ImageList';

const BannerCabanas = () => {
  
  return (
    <>
      <h1 className="tit-cabana-page">NUESTRAS CABAÑAS</h1>
      <p className="subtexto">
        Hay lugares para dormir, este es un lugar para despertar en medio de la
        naturaleza.
      </p>
      <section>
        <div className="banner-safaris">
          <div className="tit-fotos-safari">
            <h2>CABAÑAS SAFARIS</h2>
          </div>
            <ImageList fotos = {itemData}/>
        </div>
      </section>
      <section>
        <div className="banner-ancestral">
          <div className="tit-fotos-ancestral">
            <h2>CABAÑA ANCESTRAL</h2>
          </div>
          <div className="img-ancestral-cabana">
            <img src="src/assets/imgs/ancestral.jpeg" alt="ancestral" />
          </div>
          <div className="tit-ancestral-cabana">
            <p>AWÁ KWAIKER</p>
          </div>
          <div className="text-ancestral-cabana">
            <p>
              Pueblo Indio Americano, que en lengua Awapit significa &quot;Gente de
              la montaña&quot;.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerCabanas;
