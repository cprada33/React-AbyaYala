import { createContext, useState } from "react";
export const DateBooking = createContext(null);
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DateContext = ({ children }) => {
  // BANNER
  const [CheckInDate, setCheckInDate] = useState(dayjs());
  const [CheckOutDate, setCheckOutDate] = useState(null);
  const [RangeDates, setRangeDates] = useState(null);
  const [ReservasSafari, setReservasSafari] = useState([]); // BASE DE DATOS
  const [ReservasAncestral, setReservasAncestral] = useState([]); // BASE DE DATOS

  // PICK CABAÑAS
  let [NumeroCabanasSafari, setNumeroCabanasSafari] = useState(0);
  let [NumeroCabanasAncestral, setNumeroCabanasAncestral] = useState(0);
  const [disponibilidadSafari, setDisponibilidadSafari] = useState(8);
  const [disponibilidadAncestral, setDisponiblidadAncestral] = useState(1);


  return (
    <>
      <DateBooking.Provider
        value={{ CheckInDate, CheckOutDate, setCheckInDate, setCheckOutDate, NumeroCabanasSafari, setNumeroCabanasSafari, NumeroCabanasAncestral, setNumeroCabanasAncestral, ReservasSafari, setReservasSafari, ReservasAncestral, setReservasAncestral, disponibilidadSafari, setDisponibilidadSafari, disponibilidadAncestral, setDisponiblidadAncestral, RangeDates, setRangeDates }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {children}
        </LocalizationProvider>
      </DateBooking.Provider>
    </>
  );
};

export default DateContext;
