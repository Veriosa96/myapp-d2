
import{Navbar, Container, Nav, } from "react-bootstrap"
const NavBar =(prop)=>{
  return(
    <>
<Navbar bg="success" expand="lg">
      <Container className="mb-3">
        <Navbar.Brand href="#home" className="text-warning">{prop.Main}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-warning">
          <Nav className="me-auto text-warning">
            <Nav.Link href="#" className="text-warning">{prop.secondaryText1}</Nav.Link>
            <Nav.Link href="#" className="text-warning">{prop.secondaryText2}</Nav.Link>
            <Nav.Link href="#" className="text-warning">{prop.secondaryText3}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
export default NavBar;