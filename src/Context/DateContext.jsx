import { createContext, useState } from "react";
export const DateBooking = createContext(null);
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DateContext = ({ children }) => {
  const [CheckInDate, setCheckInDate] = useState(dayjs());
  const [CheckOutDate, setCheckOutDate] = useState(null);
  let [NumeroCabanas, setNumeroCabanas] = useState(0);

  return (
    <>
      <DateBooking.Provider
        value={{ CheckInDate, CheckOutDate, setCheckInDate, setCheckOutDate, NumeroCabanas, setNumeroCabanas }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {children}
        </LocalizationProvider>
      </DateBooking.Provider>
    </>
  );
};

export default DateContext;
