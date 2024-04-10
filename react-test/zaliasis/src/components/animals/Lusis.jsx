import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Lynx from "../../assets/images/lynx.jpg";
import LynxMap from "../../assets/images/LynxMap.png"
import Category4 from "../../assets/images/category4.jpg"

function Lusis() {
  const [Lusis, setCardState] = useState({
    Name: "Lusis",
    Status: "2/5",
    Region: "Kaunas",
    Image: Lynx,
    Expanded: false,
    Category: "Žemės",
    Threat: Category4,
    Characteristics: "cat like appearance weighing less than 50kg can be recognized by it's dotted orange fur n shi",
    Sightings: LynxMap
  });

  const toggleExpanded = () => {
    setCardState(prevState => ({
      ...prevState,
      Expanded: !prevState.Expanded
    }));
  };



  return (
    <div className={`animalClickable ${Lusis.Expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
      {!Lusis.Expanded ? (
        <>

          <div className="bookItemAlign">
            <h2>{Lusis.Name}</h2>
            <p>(lot. Lynx lynx)</p>
          </div>
          <img
            src={Lusis.Image}
            alt={Lusis.Name}
          />
          <img
            src={Lusis.Threat}
            alt="Category 4 threat"
          />

        </>
      ) : (
        <>
          <div className="bookItemWrapper">
            <Container>
              <Row>
                <Col xs lg={2}><h3>{Lusis.Name}</h3></Col>
                <Col><p className="Latin">(lot. Lynx lynx)</p></Col>
              </Row>
            </Container>
            <img
              src={Lusis.Image}
              alt={Lusis.Name}
            />
            <img
              src={Lusis.Threat}
              alt="Category 4 threat"
            />
          </div>

          <Container className="mt-3">
            <a href="https://www.raudonojiknyga.lt/knyga/2-saugomu-rusiu-kategorijos" target='_blank' className="">Ką reiškia šie skaičiai?</a>
          </Container>

          <div className="bookParagraphs">
            <h4>Characteristics</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius aliquam sequi numquam magni voluptatum, necessitatibus odio qui perferendis unde facilis, sint velit dolor ipsum, deserunt eligendi architecto quibusdam perspiciatis veniam?</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, ipsum aliquid debitis minus commodi, illum, dignissimos animi cupiditate facere sed sit itaque officiis dicta ab. Officiis magnam ut explicabo est.</p>
            <h4>Something else</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, ratione quaerat accusantium qui deleniti perferendis odit labore nulla modi consequatur quisquam distinctio. Perspiciatis accusamus sunt tempora adipisci quisquam fugiat officia.</p>
              <p>{Lusis.Characteristics}</p>
            <h4>Possible sighting locations</h4>
          </div>
          <img
            src={Lusis.Sightings}
            alt="possible sightings of the Lynx"
          />

        </>
      )}
    </div>
  );
}

export default Lusis;
