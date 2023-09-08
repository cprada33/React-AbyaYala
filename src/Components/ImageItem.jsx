import { useLocation } from "react-router-dom";

const ImageItem = ({ fotos }) => {
  const location = useLocation();
  const renderCabanasView = location.pathname === "/booking";
  return (
    <>
      <div className={fotos.div}>
        <img className={fotos.imgcss} src={fotos.img} alt={fotos.name} />
        {fotos.name && <h5> {fotos.name}</h5>}
        {fotos.description && (
          <p className="descripcion">{fotos.description}</p>
        )}
        {renderCabanasView && <p className="precio">{fotos.precio}</p>}
      </div>
    </>
  );
};

export default ImageItem;