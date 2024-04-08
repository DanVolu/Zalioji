import { useState } from 'react';
import Pavyzdys from './animals/Pavyzdys';
import Lusis from './animals/Lusis';
import RegionFilter from './animals/RegionFilter';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animals/animals.css'
import '../styles/AnimalList.css'

function AnimalList() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };

  const handleCategorySelect = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory('all'); 
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <>
      <RegionFilter onSelectRegion={handleRegionSelect} onSelectCategory={handleCategorySelect} />

      <Carousel>
        <Carousel.Item>
          <Container className='animalBook'>
            <div className='animalBookList'>
              <Row>
                {(selectedRegion === 'all' || selectedRegion === 'Kaunas') && (selectedCategory === 'all' || selectedCategory === 'Žemės') ? (
                  <Col lg={6} className="bookItem"><Lusis /></Col>
                ) : null}
                {(selectedRegion === 'all' || selectedRegion === 'Šiauliai') && (selectedCategory === 'all' || selectedCategory === 'Invaziniai') ? (
                  <Col lg={6}  className="bookItem"><Pavyzdys /></Col>
                ) : null}
              </Row>

              <Row>
                {(selectedRegion === 'all' || selectedRegion === 'Kaunas') && (selectedCategory === 'all' || selectedCategory === 'Žemės') ? (
                  <Col lg={6}  className="bookItem"><Lusis /></Col>
                ) : null}
                {(selectedRegion === 'all' || selectedRegion === 'Šiauliai') && (selectedCategory === 'all' || selectedCategory === 'Invaziniai') ? (
                  <Col lg={6}  className="bookItem"><Pavyzdys /></Col>
                ) : null}
              </Row>
            </div>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container className='animalBook'>
            <div className='animalBookList'>
              <Row>
                {(selectedRegion === 'all' || selectedRegion === 'Kaunas') && (selectedCategory === 'all' || selectedCategory === 'Žemės') ? (
                  <Col lg={6}  className="bookItem"><Lusis /></Col>
                ) : null}
                {(selectedRegion === 'all' || selectedRegion === 'Šiauliai') && (selectedCategory === 'all' || selectedCategory === 'Invaziniai') ? (
                  <Col lg={6}  className="bookItem"><Pavyzdys /></Col>
                ) : null}
              </Row>

              <Row>
                {(selectedRegion === 'all' || selectedRegion === 'Kaunas') && (selectedCategory === 'all' || selectedCategory === 'Žemės') ? (
                  <Col lg={6}  className="bookItem"><Lusis /></Col>
                ) : null}
                {(selectedRegion === 'all' || selectedRegion === 'Šiauliai') && (selectedCategory === 'all' || selectedCategory === 'Invaziniai') ? (
                  <Col lg={6}  className="bookItem"><Pavyzdys /></Col>
                ) : null}
              </Row>
            </div>
          </Container>
        </Carousel.Item>

      </Carousel>
    </>
  );
}

export default AnimalList;
