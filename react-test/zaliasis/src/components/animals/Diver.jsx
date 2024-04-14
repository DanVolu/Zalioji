import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import DiverImg from "../../assets/images/Diver/DiverImg.jpg";
import SecondDiver from "../../assets/images/Diver/SecondDiver.webp";
import ThirdDiver from "../../assets/images/Diver/ThirdDiver.jpg";
// import WisentRegion from '../../assets/images/Wisent/WisentRegion.jpg'
import Category1 from "../../assets/images/category1.jpg"

function Diver() {
    const [Diver, setCardState] = useState({
        Name: "Juodakaklis naras",
        Region: [
            "Alytus",
            "Kaunas",
            "Klaipėda",
            "Klaipėda",
            "Panevėžys",
            "Šiauliai",
            "Tauragė",
            "Telšiai",
            "Utena",
            "Vilnius"],
        Image: DiverImg,
        SecondaryImage: SecondDiver,
        ThirdImage: ThirdDiver,
        Expanded: false,
        Category: "Paukščiai",
        Threat: Category1,
        Information: " Į Lietuvos raudonąją knygą rūšis įrašyta nuo 1981 metų. Lietuvoje aptinkamas balandžio - spalio mėnesiais. Gyvena ežeruose, traukimo metu dažnesnis pajūryje. Lizdą įsiruošia krante ar salelėse, visai prie vandens. Deda 2 rusvus, nelabai dėmėtus kiaušinius. Peri 28-30 dienų. Išveda vieną vadą. Minta žuvimis.",
        Characteristics: "Dydis 27-33 cm, svoris - 2000-3000 g. Skiriamasis požymis - kaklo priekis juodas. Galva ir kaklo viršus pilki. Nugarinė pusė juoda, išmarginta didelėmis baltomis dėmėmis. Kaklo ir pagurklio šonuose išilginės juodai baltos juostelės. Kūno šonai juodi, o pilvinė pusė balta. Snapas pilkai juodas. Kojos žalsvai juodos. Žiemą nugarinė pusė juodai rusva. Apatinė pusė nuo gerklės balta. ",
        Help: "Juodakakliai narai yra jautrios rūšys, kurių išsaugojimas reikalauja bendrų pastangų. Svarbu saugoti ir atkurti jų natūralias buveines, įskaitant šlaitus, kryptingas pievas ir dirvas. Taip pat būtina steigti draudžiamas teritorijas ar rezervatus, kurie apsaugotų juodakaklių narų gyvenvietes nuo žmogaus veiklos. Įgyvendinus šias apsaugos priemones, galima padėti išsaugoti juodakaklių narų populiaciją."
    });

    const toggleExpanded = () => {
        setCardState(prevState => ({
            ...prevState,
            Expanded: !prevState.Expanded
        }));
    };



    return (
        <div className={`animalClickable ${Diver.Expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
            {!Diver.Expanded ? (
                <>

                    <div className="bookItemAlign">
                        <h2>{Diver.Name}</h2>
                        <p>(lot. Gavia arctica)</p>
                    </div>
                    <img
                        src={Diver.Image}
                        alt={Diver.Name}
                    />
                    <img
                        src={Diver.Threat}
                        alt="Category 1 threat"
                    />

                </>
            ) : (
                <>
                    <div className="bookItemWrapper ">

                        <h3>{Diver.Name}</h3>
                        <p className="Latin">(lot. Gavia arctica)</p>

                        <img
                            src={Diver.Image}
                            alt={Diver.Name}
                        />
                        <img
                            className="mt-3"
                            src={Diver.Threat}
                            alt="Category 1 threat"
                        />
                    </div>

                    <Container className="mt-3">
                        <a href="https://www.raudonojiknyga.lt/knyga/2-saugomu-rusiu-kategorijos" target='_blank' className="">Ką tai reiškia?</a>
                    </Container>

                    <div className="bookParagraphs">
                        <h4>Bendra informacija</h4>
                        <p>{Diver.Information}</p>
                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={Diver.SecondaryImage}
                                        alt="Diver"
                                    />
                                </Col>
                            </Row>
                        </Container>

                        <h4>Bruožai</h4>
                        <p>{Diver.Characteristics}</p>


                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={Diver.ThirdImage}
                                        alt="Diver"
                                    />
                                </Col>
                            </Row>
                        </Container>

                    <h4>Kaip galima padėti?</h4>
                    <p>{Diver.Help}</p>

                    </div>
                    {/* <img
                        src={Dormouse.Sightings}
                        alt="possible sightings of the Stoat"
                    /> */}

                </>
            )}
        </div>
    );
}

export default Diver;
