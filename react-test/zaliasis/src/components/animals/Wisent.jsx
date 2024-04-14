import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import WisentImg from "../../assets/images/Wisent/SecondWisent.webp";
import SecondWisent from "../../assets/images/Wisent/WisentImg.jpg";
import ThirdWisent from "../../assets/images/Wisent/ThirdWisent.jpg";
import WisentRegion from '../../assets/images/Wisent/WisentRegion.jpg'
import Category5 from "../../assets/images/category5.jpg"

function Wisent() {
    const [Wisent, setCardState] = useState({
        Name: "Stumbras",
        Region: ["Telšiai", "Panevėžys", "Alytus"],
        Image: WisentImg,
        SecondaryImage: SecondWisent,
        ThirdImage: ThirdWisent,
        Expanded: false,
        Category: "Žinduoliai",
        Threat: Category5,
        Information: " Į Lietuvos raudonąją knygą rūšis įrašyta nuo 1969 metų. Stumbrai gyvena lapuočių bei mišriuose miškuose su didelėmis aikštėmis ir pievomis. Gyvena bandomis, kuriose, be buliaus, yra dar keletas patelių bei jauniklių. Trimečiai patinai iš bandos išvaromi ir ima klajoti. Laisvėje gyvenančiai stumbrų bandai esama aplinka yra netinkama: miškai per maži, todėl žvėrys dažnai ieško maisto jų pakraščiuose esančiuose žemės ūkio plotuose. Siekiant apsaugoti žemės ūkio naudmenas, stumbrai nuvejami į jiems svetimas teritorijas. Dalis gyvūnų žūsta nuo brakonierių. Lietuvoje stumbrus planuojama laikyti tik aptvaruose.",
        Characteristics: "Patino kūno ilgis iki 3,5 m, aukštis iki 200 cm, masė 700–1000 kilogramų. Patelės mažesnės, masė 400–600 kilogramų. Galva didelė, kaklas storas, ketera aukšta, priekinė kūno dalis yra masyvesnė už užpakalinę. Raguoti patinai ir patelės. Ragai palyginti nedideli (patinų iki 60 cm ilgio), lenkti, staigiai plonėjantys, pamatinė dalis stora. Plaukai tankūs šiurkštūs, pilkai rudi. Pakaklėje nukarę plaukai sudaro barzdą. Uodega trumpa, apaugusi ilgais plaukais. ",
        Sightings: WisentRegion,
    });

    const toggleExpanded = () => {
        setCardState(prevState => ({
            ...prevState,
            Expanded: !prevState.Expanded
        }));
    };



    return (
        <div className={`animalClickable ${Wisent.Expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
            {!Wisent.Expanded ? (
                <>

                    <div className="bookItemAlign">
                        <h2>{Wisent.Name}</h2>
                        <p>(lot. Bison bonasus)</p>
                    </div>
                    <img
                        src={Wisent.Image}
                        alt={Wisent.Name}
                    />
                    <img
                        src={Wisent.Threat}
                        alt="Category 4 threat"
                    />

                </>
            ) : (
                <>
                    <div className="bookItemWrapper ">

                        <h3>{Wisent.Name}</h3>
                        <p className="Latin">(lot. Bison bonasus)</p>

                        <img
                            src={Wisent.Image}
                            alt={Wisent.Name}
                        />
                        <img
                            className="mt-3"
                            src={Wisent.Threat}
                            alt="Category 4 threat"
                        />
                    </div>

                    <Container className="mt-3">
                        <a href="https://www.raudonojiknyga.lt/knyga/2-saugomu-rusiu-kategorijos" target='_blank' className="">Ką tai reiškia?</a>
                    </Container>

                    <div className="bookParagraphs">
                        <h4>Bendra informacija</h4>
                        <p>{Wisent.Information}</p>
                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={Wisent.SecondaryImage}
                                        alt="Postured Stoat"
                                    />
                                </Col>
                            </Row>
                        </Container>

                        <h4>Bruožai</h4>
                        <p>{Wisent.Characteristics}</p>


                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={Wisent.ThirdImage}
                                        alt="Stoat after a succesful hunt"
                                    />
                                </Col>
                            </Row>
                        </Container>

                        <h4>Galimos pastebėjimo vietos</h4>
                    </div>
                    <img
                                style={{ filter: 'contrast(150%)' }}
                        src={Wisent.Sightings}
                        alt="possible sightings of the Stoat"
                    />

                </>
            )}
        </div>
    );
}

export default Wisent;
