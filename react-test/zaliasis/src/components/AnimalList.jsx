import { useState } from 'react';


import Dormouse from './animals/Dormouse';
import Lusis from './animals/Lusis';
import Mink from './animals/Mink';
import Stoat from './animals/Stoat';
import Wisent from './animals/Wisent';

import Diver from './animals/Diver';
import Grebe from './animals/Grebe';
import EagleOwl from './animals/EagleOwl';
import SpottedEagle from './animals/SpottedEagle';
import SnakeEagle from './animals/SnakeEagle';

import Breamvok from './animals/Breamvok';
import Sturgeon from './animals/Sturgeon';
import AtlanticSturgeon from './animals/AtlanticSturgeon';
import Loach from './animals/Loach';
import Minnow from './animals/Minnow'

import Lobata from './animals/Lobata'
import Heracleum from './animals/Heracleum';
import Balsam from './animals/Balsam';
import Goldenrod from './animals/Goldenrod';
import Elodea from './animals/Elodea';

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
                {(selectedRegion === 'all' || selectedRegion === 'Vilnius' || selectedRegion === 'Tauragė' || selectedRegion === 'Klaipeda' || selectedRegion === 'Panevėžys') && (selectedCategory === 'all' || selectedCategory === 'Žinduoliai') ? (
                  <Col lg={6} className="bookItem"><Lusis /></Col>
                ) : null}
                {(selectedRegion === 'all' || selectedRegion === 'Vilnius' || selectedRegion === 'Kaunas' || selectedRegion === 'Alytus') && (selectedCategory === 'all' || selectedCategory === 'Žinduoliai') ? (
                  <Col lg={6} className="bookItem"><Dormouse /></Col>
                ) : null}
              </Row>

              <Row>
                {(selectedRegion === 'all' || selectedRegion === 'Alytus') && (selectedCategory === 'all' || selectedCategory === 'Žinduoliai') ? (
                  <Col lg={6} className="bookItem"><Mink /></Col>
                ) : null}
                {(selectedRegion === 'all' || selectedRegion === 'Alytus' || selectedRegion === 'Marijampolė' || selectedRegion === 'Klaipėda') && (selectedCategory === 'all' || selectedCategory === 'Žinduoliai') ? (
                  <Col lg={6} className="bookItem"><Stoat /></Col>
                ) : null}
              </Row>
            </div>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container className='animalBook'>
            <div className='animalBookList'>
              <Row>
                {(selectedRegion === 'all' || selectedRegion === 'Telšiai' || selectedRegion === 'Panevėžys' || selectedRegion === 'Alytus  ') && (selectedCategory === 'all' || selectedCategory === 'Žinduoliai') ? (
                  <Col lg={6} className="bookItem"><Wisent /></Col>
                ) : null}
                {(selectedRegion === 'all' ||
                  selectedRegion === 'Alytus' ||
                  selectedRegion === 'Kaunas' ||
                  selectedRegion === 'Klaipėda' ||
                  selectedRegion === 'Panevėžys' ||
                  selectedRegion === 'Šiauliai' ||
                  selectedRegion === 'Tauragė' ||
                  selectedRegion === 'Telšiai' ||
                  selectedRegion === 'Utena' ||
                  selectedRegion === 'Vilnius'
                ) && (selectedCategory === 'all' || selectedCategory === 'Paukščiai') ? (<Col lg={6} className="bookItem"><Diver /></Col>
                ) : null}
              </Row>

              <Row>
                {(selectedRegion === 'all' ||
                  selectedRegion === 'Alytus' ||
                  selectedRegion === 'Kaunas' ||
                  selectedRegion === 'Klaipėda' ||
                  selectedRegion === 'Panevėžys' ||
                  selectedRegion === 'Šiauliai' ||
                  selectedRegion === 'Tauragė' ||
                  selectedRegion === 'Telšiai' ||
                  selectedRegion === 'Utena' ||
                  selectedRegion === 'Vilnius'
                ) && (selectedCategory === 'all' || selectedCategory === 'Paukščiai') ? (<Col lg={6} className="bookItem"><Grebe /></Col>
                ) : null}
                {(selectedRegion === 'all' ||
                  selectedRegion === 'Alytus' ||
                  selectedRegion === 'Kaunas' ||
                  selectedRegion === 'Klaipėda' ||
                  selectedRegion === 'Panevėžys' ||
                  selectedRegion === 'Šiauliai' ||
                  selectedRegion === 'Tauragė' ||
                  selectedRegion === 'Telšiai' ||
                  selectedRegion === 'Utena' ||
                  selectedRegion === 'Vilnius'
                ) && (selectedCategory === 'all' || selectedCategory === 'Paukščiai') ? (<Col lg={6} className="bookItem"><EagleOwl /></Col>
                ) : null}

              </Row>
            </div>
          </Container>
        </Carousel.Item>


        <Carousel.Item>
          <Container className='animalBook'>
            <div className='animalBookList'>
              <Row>
                {(selectedRegion === 'all' || selectedRegion === 'Telšiai' || selectedRegion === 'Panevėžys' || selectedRegion === 'Alytus  ') && (selectedCategory === 'all' || selectedCategory === 'Paukščiai') ? (
                  <Col lg={6} className="bookItem"><SpottedEagle /></Col>
                ) : null}
                {(selectedRegion === 'all' ||
                  selectedRegion === 'Alytus' ||
                  selectedRegion === 'Kaunas' ||
                  selectedRegion === 'Klaipėda' ||
                  selectedRegion === 'Panevėžys' ||
                  selectedRegion === 'Šiauliai' ||
                  selectedRegion === 'Tauragė' ||
                  selectedRegion === 'Telšiai' ||
                  selectedRegion === 'Utena' ||
                  selectedRegion === 'Vilnius'
                ) && (selectedCategory === 'all' || selectedCategory === 'Paukščiai') ? (<Col lg={6} className="bookItem"><SnakeEagle /></Col>
                ) : null}
              </Row>

              <Row>
                {(selectedRegion === 'all' ||
                  selectedRegion === 'Klaipėda' ||
                  selectedRegion === 'Tauragė'
                ) && (selectedCategory === 'all' || selectedCategory === 'Žuvys') ? (<Col lg={6} className="bookItem"><Breamvok /></Col>
                ) : null}

                {(selectedRegion === 'all' ||
                  selectedRegion === 'Klaipėda' ||
                  selectedRegion === 'Tauragė'
                ) && (selectedCategory === 'all' || selectedCategory === 'Žuvys') ? (<Col lg={6} className="bookItem"><Sturgeon /></Col>
                ) : null}

              </Row>
            </div>
          </Container>
        </Carousel.Item>


        <Carousel.Item>
          <Container className='animalBook'>
            <div className='animalBookList'>
              <Row>
                {(selectedRegion === 'all' || selectedRegion === 'Klaipėda') && (selectedCategory === 'all' || selectedCategory === 'Žuvys') ? (
                  <Col lg={6} className="bookItem"><AtlanticSturgeon /></Col>
                ) : null}

                {(selectedRegion === 'all' ||
                  selectedRegion === 'Utena'||
                  selectedRegion === 'Šiauliai'
                ) && (selectedCategory === 'all' || selectedCategory === 'Žuvys') ? (<Col lg={6} className="bookItem"><Loach /></Col>
                ) : null}
              </Row>

              <Row>
              {(selectedRegion === 'all' ||
                  selectedRegion === 'Telšiai' ||
                  selectedRegion === 'Alytus'
                ) && (selectedCategory === 'all' || selectedCategory === 'Žuvys') ? (<Col lg={6} className="bookItem"><Minnow /></Col>
                ) : null}

              {(selectedRegion === 'all' ||
                  selectedRegion === 'Alytus' ||
                  selectedRegion === 'Kaunas' ||
                  selectedRegion === 'Klaipėda' ||
                  selectedRegion === 'Panevėžys' ||
                  selectedRegion === 'Šiauliai' ||
                  selectedRegion === 'Tauragė' ||
                  selectedRegion === 'Telšiai' ||
                  selectedRegion === 'Utena' ||
                  selectedRegion === 'Vilnius'
                ) && (selectedCategory === 'all' || selectedCategory === 'Invaziniai') ? (<Col lg={6} className="bookItem"><Lobata /></Col>
                ) : null}
              </Row>
            </div>
          </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Container className='animalBook'>
            <div className='animalBookList'>
              <Row>
              {(selectedRegion === 'all' ||
                  selectedRegion === 'Alytus' ||
                  selectedRegion === 'Kaunas' ||
                  selectedRegion === 'Klaipėda' ||
                  selectedRegion === 'Panevėžys' ||
                  selectedRegion === 'Šiauliai' ||
                  selectedRegion === 'Tauragė' ||
                  selectedRegion === 'Telšiai' ||
                  selectedRegion === 'Utena' ||
                  selectedRegion === 'Vilnius'
                ) && (selectedCategory === 'all' || selectedCategory === 'Invaziniai') ? (<Col lg={6} className="bookItem"><Heracleum /></Col>
                ) : null}   

              {(selectedRegion === 'all' ||
                  selectedRegion === 'Alytus' ||
                  selectedRegion === 'Kaunas' ||
                  selectedRegion === 'Klaipėda' ||
                  selectedRegion === 'Panevėžys' ||
                  selectedRegion === 'Šiauliai' ||
                  selectedRegion === 'Tauragė' ||
                  selectedRegion === 'Telšiai' ||
                  selectedRegion === 'Utena' ||
                  selectedRegion === 'Vilnius'
                ) && (selectedCategory === 'all' || selectedCategory === 'Invaziniai') ? (<Col lg={6} className="bookItem"><Balsam /></Col>
                ) : null}
              </Row>
              <Row>
              {(selectedRegion === 'all' ||
                  selectedRegion === 'Alytus' ||
                  selectedRegion === 'Kaunas' ||
                  selectedRegion === 'Klaipėda' ||
                  selectedRegion === 'Panevėžys' ||
                  selectedRegion === 'Šiauliai' ||
                  selectedRegion === 'Tauragė' ||
                  selectedRegion === 'Telšiai' ||
                  selectedRegion === 'Utena' ||
                  selectedRegion === 'Vilnius'
                ) && (selectedCategory === 'all' || selectedCategory === 'Invaziniai') ? (<Col lg={6} className="bookItem"><Goldenrod /></Col>
                ) : null}

              {(selectedRegion === 'all' ||
                  selectedRegion === 'Alytus' ||
                  selectedRegion === 'Kaunas' ||
                  selectedRegion === 'Klaipėda' ||
                  selectedRegion === 'Panevėžys' ||
                  selectedRegion === 'Šiauliai' ||
                  selectedRegion === 'Tauragė' ||
                  selectedRegion === 'Telšiai' ||
                  selectedRegion === 'Utena' ||
                  selectedRegion === 'Vilnius'
                ) && (selectedCategory === 'all' || selectedCategory === 'Invaziniai') ? (<Col lg={6} className="bookItem"><Elodea /></Col>
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
