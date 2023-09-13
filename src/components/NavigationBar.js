import { Navbar, Container, Nav } from "react-bootstrap";
const NavigationBar = () => {
  return (
    <div>
      <div>
        <Navbar variant="dark">
          <Container>
            <Navbar.Brand href="/">CHILLMOV</Navbar.Brand>
            <Nav>
              <Nav.Link href="#trending">TRENDING</Nav.Link>
              <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavigationBar;
