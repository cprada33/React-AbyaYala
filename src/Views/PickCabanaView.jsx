import PickCabana from "../Components/Reserva/PickCabana";
import itemData from "../assets/cabanas.json";

const PickCabanaView = () => {
  const cabanas = itemData.filter((itemData) => itemData.pick === true);
  return (
    <>
      {cabanas.map((item) => {
        return (
          <div key={item.img}>
            <PickCabana cabana={item} />
          </div>
        );
      })}
    </>
  );
};

export default PickCabanaView;
