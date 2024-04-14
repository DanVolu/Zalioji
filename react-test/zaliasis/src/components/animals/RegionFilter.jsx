import { useState } from 'react';
import { Dropdown, Button, Container, Row, Col } from 'react-bootstrap';

function RegionFilter({ onSelectRegion, onSelectCategory }) {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    onSelectRegion(region);
  };

  const handleCategorySelect = (category) => {
    onSelectCategory(category);
  };

  return (
    <>
      <Container className='regionFilter'>
        <Row>
          <Col lg={6} md={12}>
            <Dropdown>
              <Dropdown.Toggle className='bg-dark regionSelect'>
                Pasirinkti apskritį
              </Dropdown.Toggle>
              <Dropdown.Menu className='text-light bg-dark regionMenu '>
                <Dropdown.Item className='text-light regionMenuChoices' onClick={() => handleRegionSelect('all')}>All Regions</Dropdown.Item>
                <Dropdown.Item className='text-light regionMenuChoices' onClick={() => handleRegionSelect('Alytus')}>Alytus</Dropdown.Item>
                <Dropdown.Item className='text-light regionMenuChoices' onClick={() => handleRegionSelect('Kaunas')}>Kaunas</Dropdown.Item>
                <Dropdown.Item className='text-light regionMenuChoices' onClick={() => handleRegionSelect('Klaipėda')}>Klaipėda</Dropdown.Item>
                <Dropdown.Item className='text-light regionMenuChoices' onClick={() => handleRegionSelect('Klaipėda')}>Marijampolė</Dropdown.Item>
                <Dropdown.Item className='text-light regionMenuChoices' onClick={() => handleRegionSelect('Panevėžys')}>Panevėžys</Dropdown.Item>
                <Dropdown.Item className='text-light regionMenuChoices' onClick={() => handleRegionSelect('Šiauliai')}>Šiauliai</Dropdown.Item>
                <Dropdown.Item className='text-light regionMenuChoices' onClick={() => handleRegionSelect('Tauragė')}>Tauragė</Dropdown.Item>
                <Dropdown.Item className='text-light regionMenuChoices' onClick={() => handleRegionSelect('Telšiai')}>Telšiai</Dropdown.Item>
                <Dropdown.Item className='text-light regionMenuChoices' onClick={() => handleRegionSelect('Utena')}>Utena</Dropdown.Item>
                <Dropdown.Item className='text-light regionMenuChoices' onClick={() => handleRegionSelect('Vilnius')}>Vilnius</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col lg={6} md={12}>
            <Row className="justify-content-center animalButtons">
              <Col lg={3} md={6} sm={6} xs={6} className="mb-2">
                <Button className='bg-dark individualAnimalButtons' variant='dark' block onClick={() => handleCategorySelect('Paukščiai')}>Paukščiai</Button>
              </Col>
              <Col lg={3} md={6 } sm={6} xs={6} className="mb-2">
                <Button className='bg-dark individualAnimalButtons' variant='dark' block onClick={() => handleCategorySelect('Žinduoliai')}>Žinduoliai</Button>
              </Col>
              <Col lg={3} md={6} sm={6} xs={6} className="mb-2">
                <Button className='bg-dark individualAnimalButtons' variant='dark' block onClick={() => handleCategorySelect('Žuvys')}>Žuvys</Button>
              </Col>
              <Col lg={3} md={6} sm={6} xs={6} className="mb-2">
                <Button className='bg-dark individualAnimalButtons' variant='dark' block onClick={() => handleCategorySelect('Invaziniai')}>Invaziniai</Button>
              </Col>
            </Row>
          </Col>
          
          
        </Row>
      </Container>
    </>
  );
}

export default RegionFilter;
