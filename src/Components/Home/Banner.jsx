import { useContext } from "react";
import { DateBooking } from "../../Context/DateContext";
import { DatePicker } from "@mui/x-date-pickers";
import { Button } from "@mui/material";
import dayjs from "dayjs";

const Banner = () => {
  const { CheckInDate, setCheckInDate, setCheckOutDate } =
  useContext(DateBooking);
  console.log(CheckInDate);

  return (
    <>
      <section className="grid-banner">
        <img
          className="img-grid-banner"
          src="src/assets/imgs/bannermujer.png"
          alt="mujerlogo"
        />
        <div className="text-gridbanner-parent main">
          <h1 className="text-gridbanner">BIENVENIDO</h1>
        </div>
        <div className="text-gridbanner-parent blue">
          <h1 className="text-gridbanner blue primero">A</h1>
        </div>
        <div className="text-gridbanner-parent blue segundo">
          <h1 className="text-gridbanner blue">LA MONTAÑA</h1>
        </div>
        <div className="parrafogridbanner-parent">
          <p className="parrafogridbanner">
            Bienvenidos a esta montaña donde se rinde tributo a la herencia y
            legado ancestral, bienvenidos a nuestra casa.
          </p>
        </div>

        <form className="booking row row-cols-lg-auto g-3 align-items-center">
          <div className="form-group">
            <div className="form-floating"></div>
          </div>
          <div className="form-group">
            <div className="form-floating">
              <DatePicker
                className="DatePicker"
                label="Check in"
                minDate={dayjs()}
                onChange={(newValue) => setCheckInDate(newValue)}
              />
              <DatePicker
                label="Check out"
                minDate={CheckInDate.add(1, 'day')}
                onChange={(newValue) => setCheckOutDate(newValue)}
              />
            </div>
          </div>

          <div className="col-12">
            <Button type="submit" variant="contained">
              Ver disponibilidad
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Banner;
