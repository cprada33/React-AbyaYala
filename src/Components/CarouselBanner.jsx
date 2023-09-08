import Carousel from "react-bootstrap/Carousel";

const CarouselBanner = ({fotos}) => {
  return (
    <>
      <Carousel>
        {fotos.map((item) => {
          return (
        <Carousel.Item key={item.name}>
          <img src={item.img} alt={item.name} />
          <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        )})}
      </Carousel>
    </>
  );
};

export default CarouselBanner;
