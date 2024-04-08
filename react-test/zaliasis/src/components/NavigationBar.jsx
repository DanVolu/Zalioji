import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css'
import { Nav, Navbar } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="Navbar">
        <Navbar href="#home" className='navMain'>Žalioji knyga</Navbar>
        <Navbar.Toggle className="bg-light" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav className='navLinks'><a href="#home">Visi gyvūnai</a></Nav>
            <Nav className='navLinks'><a href="https://www.e-tar.lt/portal/legalAct.html?documentId=TAR.F2E76C93830A" target='_blank'>Įstatymai</a></Nav>
            <Nav className='navLinks'><a href="#link">Apie</a></Nav>
            <Nav className='navLinks'><a href="#link">Labdaros</a></Nav>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;