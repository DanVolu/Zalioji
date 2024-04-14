import NavigationBar from '../components/NavigationBar.jsx'
import '../styles/Navbar.css'
import { Container, Row, Col } from 'react-bootstrap';



import Dormouse from '../components/animals/Dormouse';
import Lusis from '../components/animals/Lusis';
import Mink from '../components/animals/Mink';
import Stoat from '../components/animals/Stoat';
import Wisent from '../components/animals/Wisent';

import Diver from '../components/animals/Diver';
import Grebe from '../components/animals/Grebe';
import EagleOwl from '../components/animals/EagleOwl';
import SpottedEagle from '../components/animals/SpottedEagle';
import SnakeEagle from '../components/animals/SnakeEagle';

import Breamvok from '../components/animals/Breamvok';
import Sturgeon from '../components/animals/Sturgeon';
import AtlanticSturgeon from '../components/animals/AtlanticSturgeon';
import Loach from '../components/animals/Loach';
import Minnow from '../components/animals/Minnow'

import Lobata from '../components/animals/Lobata'
import Heracleum from '../components/animals/Heracleum';
import Balsam from '../components/animals/Balsam';
import Goldenrod from '../components/animals/Goldenrod';
import Elodea from '../components/animals/Elodea';



function About() {
  return (
    <>
        <NavigationBar></NavigationBar>

        
            <Container className='animalBook' style={{marginTop: "5rem"}}>
              <div className='animalBookList'>
                <Row>
                    <Col lg={6} className="bookItem"><Dormouse /></Col>
                    <Col lg={6}  className="bookItem"><Lusis /></Col>
                </Row>

                <Row>
                    <Col lg={6}  className="bookItem"><Mink /></Col>
                    <Col lg={6}  className="bookItem"><Stoat /></Col>
                </Row>

                <Row>
                    <Col lg={6} className="bookItem"><Wisent /></Col>
                    <Col lg={6}  className="bookItem"><Diver /></Col>
                </Row>

                <Row>
                    <Col lg={6}  className="bookItem"><Grebe /></Col>
                    <Col lg={6}  className="bookItem"><EagleOwl /></Col>
                </Row>


                <Row>
                    <Col lg={6} className="bookItem"><SpottedEagle /></Col>
                    <Col lg={6}  className="bookItem"><SnakeEagle /></Col>
                </Row>

                <Row>
                    <Col lg={6}  className="bookItem"><Breamvok /></Col>
                    <Col lg={6}  className="bookItem"><Sturgeon /></Col>
                </Row>

                <Row>
                    <Col lg={6}  className="bookItem"><AtlanticSturgeon /></Col>
                    <Col lg={6}  className="bookItem"><Loach /></Col>
                </Row>

                <Row>
                    <Col lg={6}  className="bookItem"><Minnow /></Col>
                    <Col lg={6}  className="bookItem"><Lobata /></Col>
                </Row>

                <Row>
                    <Col lg={6}  className="bookItem"><Heracleum /></Col>
                    <Col lg={6}  className="bookItem"><Balsam /></Col>
                </Row>

                <Row>
                    <Col lg={6}  className="bookItem"><Goldenrod /></Col>
                    <Col lg={6}  className="bookItem"><Elodea /></Col>
                </Row>
              </div>
            </Container>
          
          

    </>
  );
}

export default About;