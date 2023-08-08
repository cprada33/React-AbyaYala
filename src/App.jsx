import "./App.scss";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Home/Footer";
import NavBar from "./Components/Home/NavBar";
import HomeView from "./Views/HomeView";
import ActividadesView from "./Views/ActividadesView";
import ContactoView from "./Views/ContactoView";
import QuienesSomosView from "./Views/QuienesSomosView";
import CabanasView from "./Views/CabanasView";
import DateContext from "./Context/DateContext";
import PickCabanaView from "./Views/PickCabanaView";
import DatosReservaView from "./Views/DatosReservaView";
import ConfirmacionDeReservaView from "./Views/ConfirmacionDeReservaView";

function App() {
  return (
    <>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <DateContext>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomeView />}></Route>
              <Route path="/actividades" element={<ActividadesView />}></Route>
              <Route path="/cabanas" element={<CabanasView />}></Route>
              <Route path="/nosotros" element={<QuienesSomosView />}></Route>
              <Route path="/contacto" element={<ContactoView />}></Route>
              <Route path="/booking" element={<PickCabanaView/>}></Route>
              <Route path="/booking/datos_de_reserva" element={<DatosReservaView/>}></Route>
              <Route path="/booking/confirmacion_de_reserva" element={<ConfirmacionDeReservaView/>}></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </DateContext>
      </ThemeProvider>
    </>
  );
}

export default App;
