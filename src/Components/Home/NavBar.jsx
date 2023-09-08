import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="sm">
        <Container>
          <Navbar.Brand className="logo" href="/">
            <img
              alt="logo"
              src="src/assets/imgs/mainlogo.png"
              className="logoNav d-inline-block align-top"
            />{" "}
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
