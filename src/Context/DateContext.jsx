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
  const [BookingRooms, setBookingRooms] = useState(0);
  const [TipoDeCabaña, setTipoDeCabaña] = useState(null);
  const [PrecioCabana, setPrecioCabana] = useState(null);
  const [CabanaServer, setCabanaServer] = useState(null);
  const [ReservaRealizada, setReservaRealizada] = useState(false);
  const [Nombre, setNombre] = useState("");
  let [idReserva, setIdReserva] = useState("");


  return (
    <>
      <DateBooking.Provider
        value={{ CheckInDate, CheckOutDate, setCheckInDate, setCheckOutDate, RangeDates, setRangeDates, BookingRooms, setBookingRooms, TipoDeCabaña, setTipoDeCabaña, PrecioCabana, setPrecioCabana, CabanaServer, setCabanaServer, setReservaRealizada, ReservaRealizada, idReserva, setIdReserva, Nombre, setNombre }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {children}
        </LocalizationProvider>
      </DateBooking.Provider>
    </>
  );
};

export default DateContext;
