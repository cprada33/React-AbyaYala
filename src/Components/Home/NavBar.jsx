import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { DateBooking } from '../../Context/DateContext';

const NavBar = () => {
  const location = useLocation();
  const renderSignOut = location.pathname.startsWith('/reservas');
  const renderCart = location.pathname.includes('/menu');
  const navigate = useNavigate();
  const { setActive, comida } = useContext(DateBooking);

  const handleSubmitLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = () => {
    setActive(true);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="sm">
        <Container className="ContNavbar">
          <Navbar.Brand className="logo" href="/">
            <img
              alt="logo"
              src="https://firebasestorage.googleapis.com/v0/b/abyayala-c7fa8.appspot.com/o/assets%2Fmainlogo.png?alt=media&token=cc3fd5fc-a5a3-4ad8-9fee-a51237bce3da"
              className="logoNav d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto page">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/actividades">Actividades</Nav.Link>
              <Nav.Link href="/cabanas">Cabañas</Nav.Link>
              <Nav.Link href="/nosotros">¿Quienes somos?</Nav.Link>
              <Nav.Link href="/contacto">Contacto</Nav.Link>
              <Nav.Link href="/mireserva">Mi reserva</Nav.Link>
            </Nav>
            {renderSignOut ? (
              <Button
                className="btnLogOut"
                onClick={handleSubmitLogout}
                variant="primary"
              >
                Cerrar sesión
              </Button>
            ) : null}
          </Navbar.Collapse>
          {renderCart ? (
            <div
              className="navBarCarrito"
              onClick={() => {
                handleClick();
              }}
            >
              <Nav.Link>{`(${comida.length})`}</Nav.Link>
              <ShoppingCartIcon fontSize="large" sx={{ color: '#f1bb1b' }} />
            </div>
          ) : null}
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
