import { useState } from 'react';
import RudasisLokys from './animals/RudasisLokys';
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
                {(selectedRegion === 'all' || selectedRegion === 'kaunas') && (selectedCategory === 'all' || selectedCategory === 'Siltakraujis') ? (
                  <Col lg={6}><Lusis /></Col>
                ) : null}
                {(selectedRegion === 'all' || selectedRegion === 'siauliai') && (selectedCategory === 'all' || selectedCategory === 'Invazinis') ? (
                  <Col lg={6}><RudasisLokys /></Col>
                ) : null}
              </Row>

              <Row>
                {(selectedRegion === 'all' || selectedRegion === 'kaunas') && (selectedCategory === 'all' || selectedCategory === 'Siltakraujis') ? (
                  <Col lg={6}><Lusis /></Col>
                ) : null}
                {(selectedRegion === 'all' || selectedRegion === 'siauliai') && (selectedCategory === 'all' || selectedCategory === 'Invazinis') ? (
                  <Col lg={6}><RudasisLokys /></Col>
                ) : null}
              </Row>
            </div>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container className='animalBook'>
            <div className='animalBookList'>
              <Row>
                {(selectedRegion === 'all' || selectedRegion === 'kaunas') && (selectedCategory === 'all' || selectedCategory === 'Siltakraujis') ? (
                  <Col lg={6}><Lusis /></Col>
                ) : null}
                {(selectedRegion === 'all' || selectedRegion === 'siauliai') && (selectedCategory === 'all' || selectedCategory === 'Invazinis') ? (
                  <Col lg={6}><RudasisLokys /></Col>
                ) : null}
              </Row>

              <Row>
                {(selectedRegion === 'all' || selectedRegion === 'kaunas') && (selectedCategory === 'all' || selectedCategory === 'Siltakraujis') ? (
                  <Col lg={6}><Lusis /></Col>
                ) : null}
                {(selectedRegion === 'all' || selectedRegion === 'siauliai') && (selectedCategory === 'all' || selectedCategory === 'Invazinis') ? (
                  <Col lg={6}><RudasisLokys /></Col>
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
