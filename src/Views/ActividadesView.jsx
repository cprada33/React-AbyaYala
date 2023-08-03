import ImageList from "../Components/ImageList"
import ItemData from "../assets/actividades.json"

const ActividadesView = () => {
  return (
    <>
      <h1 className="tit-deportes">¿QUÉ HAY PARA HACER?</h1>
      <p className="text-deportes">Un millón de aventuras increíbles, ven y visitanos.</p>
      <p className="text-deportes">¡Te esperamos!</p>
      <div className="sec-deportes">
      <ImageList fotos = {ItemData} />
      </div>
    </>
  )
}

export default ActividadesView