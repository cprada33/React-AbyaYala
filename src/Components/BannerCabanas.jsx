import itemData from '../assets/cabanas.json';
import CarouselBanner from './CarouselBanner';
import ImageList from './ImageList';

const BannerCabanas = () => {
  const cabanasFilter = itemData.filter(
    (itemData) => itemData.tipo === 'Safari',
  );

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
          <ImageList fotos={cabanasFilter} />
          <CarouselBanner fotos={cabanasFilter} />
        </div>
      </section>
      <section>
        <div className="banner-ancestral">
          <div className="tit-fotos-ancestral">
            <h2>CABAÑA ANCESTRAL</h2>
          </div>
          <div className="img-ancestral-cabana">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/abyayala-c7fa8.appspot.com/o/assets%2Fancestral.jpeg?alt=media&token=d3bf286c-baa8-4702-adec-0dfc710cd297"
              alt="ancestral"
            />
          </div>
          <div className="tit-ancestral-cabana">
            <p>AWÁ KWAIKER</p>
          </div>
          <div className="text-ancestral-cabana">
            <p>
              Pueblo Indio Americano, que en lengua Awapit significa &quot;Gente
              de la montaña&quot;.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerCabanas;
