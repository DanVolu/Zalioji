import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Lynx from "../../assets/images/lynx.jpg";
import SecondLynx from "../../assets/images/Lynx/SecondLynx.jpg";
import ThirdLynx from "../../assets/images/Lynx/ThirdLynx.jpg";
import LusisRegion from '../../assets/images/Lynx/LusisRegion.jpg'
import Category4 from "../../assets/images/category4.jpg"

function Lusis() {
  const [Lusis, setCardState] = useState({
    Name: "Lūšis",
    Region: ["Klaipeda", "Vilnius", "Panevezys" , "Taurage"],
    Image: Lynx,
    SecondaryImage: SecondLynx,
    ThirdImage: ThirdLynx,
    Expanded: false,
    Category: "Žinduoliai",
    Threat: Category4,
    Information: "Į Lietuvos raudonąją knygą rūšis įrašyta nuo 2000 metų. Minta pelėmis, pelėnais, stirnomis, elniais, bet dažniausiai puola silpnesnius, paliegusius žvėrelius. Žmogaus vengia. Lietuvoje nuolatos randama tik kai kuriuose miškų masyvuose (Biržų, Karšuvos, Žaliojoje giriose, Taujėnų - Užulėnio, Kulių, Latvijos pasienyje esančiuose Rokiškio r. ir keliuose kituose miškuose). Mėgstamos lankymosi vietos - spygliuočių ir mišrūs miškai su tankiu pomiškiu, išvartomis, pelkėtais plotais. Suaugę individai didžiąja metų dalį laikosi pavieniui. ",
    Characteristics: "Kūno ilgis 80–110 cm, uodegos – 5–19 cm, masė 8–19 kg, kartais iki 30 kilogramų. Gelsvai ar pilkšvai rusva. Nugara ir šonai išmarginti tamsiomis dėmelėmis. Ausų viršūnėse yra ilgų plaukų šepetėliai, manoma, kad jie pagerina klausą. Kojos stiprios, ilgos. Letenos didelės, apaugusios plaukais. Uodega trumpa. Minta dažniausiai kiškiais, stirnomis, rečiau - paukščiais ir smulkiais graužikais. Medžioja miško pakraščiuose, laukymėse, atželiančiose kirtavietėse.",
    Sightings: LusisRegion
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

            <h3>{Lusis.Name}</h3>
            <p className="Latin">(lot. Lynx lynx)</p>
            <img
              src={Lusis.Image}
              alt={Lusis.Name}
            />
            <img
              className="mt-3"
              src={Lusis.Threat}
              alt="Category 4 threat"
            />
          </div>

          <Container className="mt-3">
            <a href="https://www.raudonojiknyga.lt/knyga/2-saugomu-rusiu-kategorijos" target='_blank' className="">Ką reiškia šie skaičiai?</a>
          </Container>

          <div className="bookParagraphs">
            <h4>Bendra informacija</h4>
            <p>{Lusis.Information}</p>
            <Container className="d-flex justify-content-center align-items-center">
              <Row>
                <Col>
                  <img
                    className="my-3"
                    src={Lusis.SecondaryImage}
                    alt="Snowy Lynx"
                  />
                </Col>
              </Row>
            </Container>

            <h4>Kaip atpazinti</h4>
            <p>{Lusis.Characteristics}</p>


            <Container className="d-flex justify-content-center align-items-center">
              <Row>
                <Col>
                <img
                  className="my-3"
                  src={Lusis.ThirdImage}
                  alt="Tall Lynx"
                />
                </Col>
              </Row>
            </Container>

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
