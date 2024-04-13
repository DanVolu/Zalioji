import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import BreamvokImg from "../../assets/images/Breamvok/BreamvokImg.jpg";
import SecondBreamvok from "../../assets/images/Breamvok/SecondBreamvok.png";
// import WisentRegion from '../../assets/images/Wisent/WisentRegion.jpg'
import Category0 from "../../assets/images/category0.jpg"

function Breamvok() {
    const [Breamvok, setCardState] = useState({
        Name: "Juodakaklis naras",
        Region: [
            "Klaipėda",
            "Tauragė"],
        Image: BreamvokImg,
        SecondaryImage: SecondBreamvok,
        // ThirdImage: ThirdBreamvok,
        Expanded: false,
        Category: "Žuvys",
        Threat: Category0,
        Information: "Į Lietuvos raudonąją knygą rūšis įrašyta nuo 1989 iki 2019 metų. Sparis paplitęs Šiaurės, Baltijos, Kaspijos, Juodosios, Azovo jūrų baseinuose: Elbės, Oderio, Volgos, Uralo, Dono, Dunojaus upių žemupiuose. Sparis yra tipiška didžiųjų upių žemupių, vandens talpyklų, didelių pratakių ežerų ir apysūrių jūros pakraščių žuvis. Panaši į karšį ir plakį, tačiau nuo jų skiriasi pailga kūno forma, priekine burna ir didesniu analinio peleko spindulių skaičiumi. Subręsta 4 - 5 metų, kai būna 18 - 20 cm ilgio. Neršia nuo balandžio pabaigos iki birželio vidurio, kai vandens temperatūrai pasiekia +7 °C sekliose vietose, senvagėse ant povandeninių augalų. Vislumas - nuo 4 iki 25 tūkst. ikrelių. Lervutės išsirita po 12 - 13 dienų. Jaunikliai minta zooplanktonu, suaugusios žuvys - zooplanktonu ir bentosiniais vėžiagyviais. Užauga iki 45 cm ilgio ir 500 g svorio, bet dažniausiai būna 30 - 35 cm ilgio.",
        Characteristics: "Kūnas ištįsęs, iki 45 cm ilgio, svoris - iki 800 g. Nugara tamsiai melsva, šonai ir pilvas sidabriški. Šoninėje linijoje yra daugiau kaip 60 žvynų, analiniame peleke daugiau kaip 30 spindulių. Žvynai stambūs. Snukis smailus, žiotys galinės, į viršų kiek įstrižai pakrypusios. Lietuvoje aptiktas Kuršių mariose.",
        // Sightings: WisentRegion
    });

    const toggleExpanded = () => {
        setCardState(prevState => ({
            ...prevState,
            Expanded: !prevState.Expanded
        }));
    };



    return (
        <div className={`animalClickable ${Breamvok.Expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
            {!Breamvok.Expanded ? (
                <>

                    <div className="bookItemAlign">
                        <h2>{Breamvok.Name}</h2>
                        <p>(lot. Acipenser oxyrinchus)</p>
                    </div>
                    <img
                        src={Breamvok.Image}
                        alt={Breamvok.Name}
                    />
                    <img
                        src={Breamvok.Threat}
                        alt="Category 4 threat"
                    />

                </>
            ) : (
                <>
                    <div className="bookItemWrapper ">

                        <h3>{Breamvok.Name}</h3>
                        <p className="Latin">(lot. Acipenser oxyrinchus)</p>

                        <img
                            src={Breamvok.Image}
                            alt={Breamvok.Name}
                        />
                        <img
                            className="mt-3"
                            src={Breamvok.Threat}
                            alt="Category 4 threat"
                        />
                    </div>

                    <Container className="mt-3">
                        <a href="https://www.raudonojiknyga.lt/knyga/2-saugomu-rusiu-kategorijos" target='_blank' className="">Ką reiškia šie skaičiai?</a>
                    </Container>

                    <div className="bookParagraphs">
                        <h4>Bendra informacija</h4>
                        <p>{Breamvok.Information}</p>
                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={Breamvok.SecondaryImage}
                                        alt="Postured Stoat"
                                    />
                                </Col>
                            </Row>
                        </Container>

                        <h4>Kaip atpazinti</h4>
                        <p>{Breamvok.Characteristics}</p>



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

export default Breamvok;
