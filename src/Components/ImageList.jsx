import ImageItem from "./ImageItem"

const ImageList = ({fotos}) => {

  return (
    <>
    {fotos.map((item) => {
      return(
        <div className={fotos[0].section} key={item.img}>
        <ImageItem fotos = {item} />
        </div>
    )})}
    </>
  )
}

export default ImageList