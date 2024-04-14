import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="Navbar">
        <Navbar href="#home" className='navMain navLinks'><Link to="/home">Žalioji knyga</Link></Navbar>
        <Navbar.Toggle className="bg-light mx-2" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav className='navLinks'><Link to="/all">Visi gyvūnai</Link></Nav>
            <Nav className='navLinks'><a href="https://www.e-tar.lt/portal/legalAct.html?documentId=TAR.F2E76C93830A" target='_blank'>Įstatymai</a></Nav>
            <Nav className='navLinks '><Link to="/about">Apie</Link></Nav>
            <Nav className='navLinks'><Link to="/charities">Labdaros</Link></Nav>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;