import { createContext, useState } from "react";
export const DateBooking = createContext(null);
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DateContext = ({ children }) => {
  const [CheckInDate, setCheckInDate] = useState(dayjs());
  const [CheckOutDate, setCheckOutDate] = useState(null);

  return (
    <>
      <DateBooking.Provider
        value={{ CheckInDate, CheckOutDate, setCheckInDate, setCheckOutDate }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {children}
        </LocalizationProvider>
      </DateBooking.Provider>
    </>
  );
};

export default DateContext;
