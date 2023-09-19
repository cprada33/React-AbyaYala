import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const NavBar = () => {
  const location = useLocation();
  const renderSignOut = location.pathname.startsWith('/reservas');
  const navigate = useNavigate();

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
  return (
    <>
      <Navbar collapseOnSelect expand="sm">
        <Container>
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
            </Nav>
            {renderSignOut ? (
              <Button onClick={handleSubmitLogout} variant="primary">
                Cerrar sesión
              </Button>
            ) : null}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
