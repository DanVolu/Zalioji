import { useState } from "react";
import { Row, Col, Container} from "react-bootstrap";
import Lynx from "../../assets/images/lynx.jpg";
import Category4 from "../../assets/images/category4.jpg"

function Lusis() {
  const [Lusis, setCardState] = useState({
    Name: "Lusis",
    Status: "2/5",
    Region: "Kaunas",
    Image: Lynx,
    Expanded: false,
    Category: "Žemės",
    Threat: Category4
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
          </div>
              <p>{Lusis.Region}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        </>
      )}
    </div>
  );
}

export default Lusis;
