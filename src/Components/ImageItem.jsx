const ImageItem = ({fotos}) => {

  return (
    <>
    <div className={fotos.div}>
        <img className={fotos.imgcss}
        src={fotos.img}
        alt={fotos.name}/>
        {fotos.name && <h5> {fotos.name}</h5> }
        {fotos.description && <p className="descripcion">{fotos.description}</p> }
        {fotos.precio && <p className="precio">{fotos.precio}</p> }
    </div>
    </>
  )
}

export default ImageItem