import ImageItem from "./ImageItem"

const ImageList = ({fotos}) => {

  return (
    <>
    {fotos.map((item) => {
      return(
        <div className={fotos[0].section} key={item.name}>
        <ImageItem key={item.img} fotos = {item} />
        </div>
    )})}
    </>
  )
}

export default ImageList