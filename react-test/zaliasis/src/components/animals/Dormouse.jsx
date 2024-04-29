import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import DormouseImg from "../../assets/images/Dormouse/Dormouse.jpg";
import SecondDormouse from "../../assets/images/Dormouse/SecondDormouse.jpg";
// import ThirdLynx from "../../assets/images/Dormouse/ThirdDormouse.jpg";
import DormouseRegion from '../../assets/images/Dormouse/DormouseRegion.jpg'
import Category2 from "../../assets/images/category2.jpg"

function Dormouse() {
  const [Dormouse, setCardState] = useState({
    Name: "Didžioji miegapelė",
    Region: ["Vilnius", "Kaunas", "Alytus"],
    Image: DormouseImg,
    SecondaryImage: SecondDormouse,
    // ThirdImage: ThirdLynx,
    Expanded: false,
    Category: "Žinduoliai",
    Threat: Category2,
    Information: "Lietuvoje šiuo metu žinomos 9 populiacijos, daugiausia Nemuno ir Neries upių bei į jas atitekančių upelių slėniuose ar netoli jų. Lietuvoje dažniausiai gyvena senuose ąžuolynuose ir brandžiuose mišriuose miškuose su senais ąžuolais ir lazdynų traku. Aktyvi sutemus ir naktį, dieną praleidžia lizduose, kuriuos dažniausiai daro medžių uoksuose, mėgsta įsikurti inkiluose. Minta daugiausia augaliniu maistu: pumpurais, uogomis, vaisiais, riešutais, gilėmis, nors ėda ir kiaušinius, jauniklius ar net suaugusius paukščius. Suaugę individai sėslus, turi individualias teritorijas. Jauniklius (4 - 8) veda rugpjūčio mėnesiais. Žiemą miega. Įmygis trunka nuo rugsėjo pabaigos - spalio pradžios iki gegužės antros pusės. Beveik visose žinomose radavietėse didžiosioms miegapelėms tinkamų gyventi buveinių plotai yra nedideli, todėl ir populiacijos yra negausios.",
    Characteristics: "Kailiukas pelenų spalvos, kartais rusvo atspalvio. Kūno apačia šviesesnė. Snukučio šonuose juodų ruožų nėra, tik akis juosia tamsesnių plaukų žiedas. Ausys apvalios, apaugusios trumpais plaukais. Uodega papurusi. Užpakalinės kojos šiek tiek ilgesnės už priekines, letenos trumpos ir plačios. Tai pati didžiausia Lietuvos miegapelė, kuri yra 140-190 mm ilgio ir 70-120 g svorio.",
    Sightings: DormouseRegion,
    Help: "Norint jas išsaugoti, būtina užtikrinti jų buveinių apsaugą ir natūralių gyvenamųjų vietų išsaugojimą. Tai galima pasiekti steigiant draudžiamas teritorijas ar rezervatus, kuriuose būtų apsaugotos miegapelių gyvenamos vietos nuo žmogaus veiklos. Be to, svarbu vykdyti mokslinius tyrimus ir stebėjimus, kad būtų geriau suprasta miegapelių populiacijos būklė ir reikalingos apsaugos priemonės. Tik įgyvendinus šias priemones galima užtikrinti Didžiosios miegapelės išlikimą ateityje."
  });

  const toggleExpanded = () => {
    setCardState(prevState => ({
      ...prevState,
      Expanded: !prevState.Expanded
    }));
  };



  return (
    <div className={`animalClickable ${Dormouse.Expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
      {!Dormouse.Expanded ? (
        <>

          <div className="bookItemAlign">
            <h2>{Dormouse.Name}</h2>
            <p>(lot. Glis glis)</p>
          </div>
          <img
            src={Dormouse.Image}
            alt={Dormouse.Name}
          />
          <img
            src={Dormouse.Threat}
            alt="Category 2 threat"
          />

        </>
      ) : (
        <>
          <div className="bookItemWrapper ">
          <p style={{color:"grey", marginBottom:"-2rem"}}>Norint išeiti iš kortelės reikia nuspausti gyvūno nuotrauką.</p>

                <h3>{Dormouse.Name}</h3>
                <p className="Latin">(lot. Glis glis)</p>

            <img
              src={Dormouse.Image}
              alt={Dormouse.Name}
            />
            <img
              className="mt-3"
              src={Dormouse.Threat}
              alt="Category 2 threat"
            />
          </div>

          <Container className="mt-3">
            <a href="https://www.raudonojiknyga.lt/knyga/2-saugomu-rusiu-kategorijos" target='_blank' className="">Ką tai reiškia?</a>
          </Container>

          <div className="bookParagraphs">
            <h4>Bendra informacija</h4>
            <p>{Dormouse.Information}</p>
            <Container className="d-flex justify-content-center align-items-center">
              <Row>
                <Col>
                  <img
                    className="my-3"
                    src={Dormouse.SecondaryImage}
                    alt="A dormouse in it's burrow"
                  />
                  <p>Photo by Azay</p>
                </Col>
              </Row>
            </Container>

            <h4>Kaip atpazinti</h4>
            <p>{Dormouse.Characteristics}</p>

            <h4>Kaip galima padėti?</h4>
            <p>{Dormouse.Help}</p>

            <h4>Galimos pastebėjimo vietos</h4>
          </div>
          <img
                      style={{ filter: 'contrast(150%)' }}
            src={Dormouse.Sightings}
            alt="possible sightings of the Dormouse"
          />

        </>
      )}
    </div>
  );
}

export default Dormouse;
