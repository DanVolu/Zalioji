import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css'
import { Container, Nav, Navbar } from 'react-bootstrap';

function BasicExample() {
  return (
    <Navbar expand="lg" className="Navbar">
      <Container>
        <Navbar href="#home" className='navMain'>Žalioji knyga</Navbar>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav href="#home" className='navLinks'>Visi gyvūnai</Nav>
            <Nav href="#link" className='navLinks'>Įstatymai</Nav>
            <Nav href="#link" className='navLinks'>Apie</Nav>
            <Nav href="#link" className='navLinks'>Labdaros</Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;