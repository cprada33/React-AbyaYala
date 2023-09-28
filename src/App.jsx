import './App.scss';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Home/Footer';
import NavBar from './Components/Home/NavBar';
import HomeView from './Views/HomeView';
import ActividadesView from './Views/ActividadesView';
import ContactoView from './Views/ContactoView';
import QuienesSomosView from './Views/QuienesSomosView';
import CabanasView from './Views/CabanasView';
import DateContext from './Context/DateContext';
import PickCabanaView from './Views/PickCabanaView';
import DatosReservaView from './Views/DatosReservaView';
import ConfirmacionDeReservaView from './Views/ConfirmacionDeReservaView';
import ReservasView from './Views/ReservasView';
import ReservaDetailView from './Views/ReservaDetailView';
import { GoogleOAuthProvider } from '@react-oauth/google';
import RouteGuard from './Components/ReservasDisplay/RouteGuard';
import Login from './Components/ReservasDisplay/Login';
import MenuView from './Views/MenuView';

function App() {
  return (
    <>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        <GoogleOAuthProvider clientId="617227978230-hehch6bffknc4m5u6tp1g4ffr639str4.apps.googleusercontent.com">
          <DateContext>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path="/" element={<HomeView />}></Route>
                <Route
                  path="/actividades"
                  element={<ActividadesView />}
                ></Route>
                <Route path="/tester" element={<MenuView />}></Route>
                <Route path="/cabanas" element={<CabanasView />}></Route>
                <Route path="/nosotros" element={<QuienesSomosView />}></Route>
                <Route path="/contacto" element={<ContactoView />}></Route>
                <Route path="/booking" element={<PickCabanaView />}></Route>
                <Route
                  path="/datos_de_reserva"
                  element={<DatosReservaView />}
                ></Route>
                <Route
                  path="/confirmacion_de_reserva"
                  element={<ConfirmacionDeReservaView />}
                ></Route>
                <Route
                  path="/reservas"
                  element={
                    <RouteGuard>
                      {' '}
                      <ReservasView />{' '}
                    </RouteGuard>
                  }
                ></Route>
                <Route
                  path="/reservas/:idreserva"
                  element={
                    <RouteGuard>
                      <ReservaDetailView />
                    </RouteGuard>
                  }
                ></Route>
                <Route path="login" element={<Login />}></Route>
              </Routes>
              <Footer />
            </BrowserRouter>
          </DateContext>
        </GoogleOAuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
