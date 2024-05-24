import { createContext, useState } from 'react';
export const DateBooking = createContext(null);
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const DateContext = ({ children }) => {
  const [CheckInDate, setCheckInDate] = useState(dayjs());
  const [CheckOutDate, setCheckOutDate] = useState(null);
  const [RangeDates, setRangeDates] = useState(null);
  const [BookingRooms, setBookingRooms] = useState(0);
  const [TipoDeCabaña, setTipoDeCabaña] = useState(null);
  const [PrecioCabana, setPrecioCabana] = useState(null);
  const [CabanaServer, setCabanaServer] = useState(null);
  const [ReservaRealizada, setReservaRealizada] = useState(false);
  const [Nombre, setNombre] = useState('');
  let [idReserva, setIdReserva] = useState('');
  const [logged, setLogged] = useState(false);
  const [LoadPreview, setImgPreview] = useState(false);
  const [Celular, setCelular] = useState('');
  const [Correo, setCorreo] = useState('');
  const [Cedula, setCedula] = useState('');
  const [NumeroAcompanantes, setNumeroAcompanantes] = useState('');
  const [InfoAcompanantes, setInfoAcompanantes] = useState('');
  const [invoice, setInvoice] = useState(null);
  const [urlInvoice, setUrlInvoice] = useState(null);
  const [comidaDetail, setComidaDetail] = useState('');
  const [permiso, setPermiso] = useState(false);
  const [categoria, setCategoria] = useState('Platos fuertes');
  const [contador, setContador] = useState(0);
  const [active, setActive] = useState(false);
  const [comida, setComida] = useState([
    // { Subcategoria: 'No ha sigo agregado ningún elemento' },
  ]);

  return (
    <>
      <DateBooking.Provider
        value={{
          comida,
          setComida,
          active,
          setActive,
          contador,
          setContador,
          categoria,
          setCategoria,
          Celular,
          setCelular,
          Correo,
          setNumeroAcompanantes,
          InfoAcompanantes,
          setInfoAcompanantes,
          invoice,
          setInvoice,
          urlInvoice,
          setUrlInvoice,
          setCorreo,
          NumeroAcompanantes,
          Cedula,
          setCedula,
          CheckInDate,
          CheckOutDate,
          setCheckInDate,
          setCheckOutDate,
          RangeDates,
          setRangeDates,
          BookingRooms,
          setBookingRooms,
          TipoDeCabaña,
          setTipoDeCabaña,
          PrecioCabana,
          setPrecioCabana,
          CabanaServer,
          setCabanaServer,
          setReservaRealizada,
          ReservaRealizada,
          idReserva,
          setIdReserva,
          Nombre,
          setNombre,
          logged,
          setLogged,
          LoadPreview,
          setImgPreview,
          comidaDetail,
          setComidaDetail,
          permiso,
          setPermiso,
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {children}
        </LocalizationProvider>
      </DateBooking.Provider>
    </>
  );
};

export default DateContext;
