import './App.scss'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Home/Footer';
import NavBar from './Components/Home/NavBar';
import HomeView from './Views/HomeView';
import ActividadesView from './Views/ActividadesView';
import ContactoView from './Views/ContactoView';
import QuienesSomosView from './Views/QuienesSomosView';
import CabanasView from './Views/CabanasView';


function App() {

  return (
    <>
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path = '/' element = {<HomeView/>}></Route>
          <Route path = '/actividades' element = {<ActividadesView/>}></Route>
          <Route path = '/cabanas' element = {<CabanasView/>}></Route>
          <Route path = '/nosotros' element = {<QuienesSomosView/>}></Route>
          <Route path = '/contacto' element = {<ContactoView/>}></Route>
        </Routes>
      <Footer/>
      </BrowserRouter>
      </ThemeProvider>;
    </>
  )
}

export default App