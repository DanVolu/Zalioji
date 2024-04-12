import NavigationBar from '../components/NavigationBar.jsx'
import '../styles/Navbar.css'
import { Container, Row, Col } from 'react-bootstrap';
import Lusis from '../components/animals/Lusis.jsx';
import Pavyzdys from '../components/animals/Pavyzdys.jsx';

function About() {
  return (
    <>
        <NavigationBar></NavigationBar>

        
            <Container className='animalBook' style={{marginTop: "5rem"}}>
              <div className='animalBookList'>
                <Row>
                    <Col lg={6} className="bookItem"><Lusis /></Col>
                    <Col lg={6}  className="bookItem"><Pavyzdys /></Col>
                </Row>

                <Row>
                    <Col lg={6}  className="bookItem"><Lusis /></Col>
                    <Col lg={6}  className="bookItem"><Pavyzdys /></Col>
                </Row>

                <Row>
                    <Col lg={6} className="bookItem"><Lusis /></Col>
                    <Col lg={6}  className="bookItem"><Pavyzdys /></Col>
                </Row>

                <Row>
                    <Col lg={6}  className="bookItem"><Lusis /></Col>
                    <Col lg={6}  className="bookItem"><Pavyzdys /></Col>
                </Row>


                <Row>
                    <Col lg={6} className="bookItem"><Lusis /></Col>
                    <Col lg={6}  className="bookItem"><Pavyzdys /></Col>
                </Row>

                <Row>
                    <Col lg={6}  className="bookItem"><Lusis /></Col>
                    <Col lg={6}  className="bookItem"><Pavyzdys /></Col>
                </Row>
              </div>
            </Container>
          
          

    </>
  );
}

export default About;