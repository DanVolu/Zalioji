import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import SnakeEagleImg from "../../assets/images/SnakeEagle/SnakeEagleImg.jpg";
import SecondSnakeEagle from "../../assets/images/SnakeEagle/SecondSnakeEagle.jpg";
import ThirdSnakeEagle from "../../assets/images/SnakeEagle/ThirdSnakeEagle.jpg";
// import WisentRegion from '../../assets/images/Wisent/WisentRegion.jpg'
import Category0 from "../../assets/images/category0.jpg"

function SnakeEagle() {
    const [SnakeEagle, setCardState] = useState({
        Name: "Gyvatėdis ",
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
        Image: SnakeEagleImg,
        SecondaryImage: SecondSnakeEagle,
        ThirdImage: ThirdSnakeEagle,
        Expanded: false,
        Category: "Paukščiai",
        Threat: Category0,
        Information: " Į Lietuvos raudonąją knygą rūšis įrašyta nuo 1976 metų. Paprastasis gyvatėdis Lietuvoje labai retas. Įrašytas į Lietuvos raudonosios knygos 0(Ex) kategoriją. XX a. pabaigoje ir XXI a. pirmus du dešimtmečius miško ūkiui tapus intensyvesniam, masiškai kertant kadaise buvusius didelius miškų masyvus, lieka vis mažiau galimybių rasti gyvatėdį perintį Lietuvos miškuose. Perėjimo sezono metu gyvatėdis reguliariau matomas pietinėse ir rytinėse Lietuvos dalyse. Taip pat gana reguliariai pastebimas Kazlų Rūdos miškuose. ",
        Characteristics: " šeimos paukštis. Paplitęs Eurazijoje ir Šiaurės Afrikoje. Kūno ilgis apie 65 cm, masė 1,5–2 kilogramai. Galva didelė, sparnai ilgi. Kūno viršus rusvai pilkas, uodega ruda su 3–4 tamsiomis juostomis, apačia balta, pagurklis pilkas su tamsiais dryželiais. Sparnų apačia beveik balta. Skrenda lengvai, dažnai sklando.",
        Help: " Būtina užkirsti kelią buveinių sunaikinimui ir neigiamam žmogaus veiklos poveikiui, pvz., teršalams ar medžioklei. Be to, svarbu vykdyti mokslinius tyrimus ir stebėti Gyvatėdžio paukščio populiacijas, siekiant geriau suprasti jų būklę ir poreikius. Edukacija ir informavimas apie Gyvatėdžio paukščio ekologinę svarbą ir grėsmes, su kuriais jis susiduria, taip pat yra svarbūs. Dalyvavimas vietinėse iniciatyvose ir organizacijose, skirtose gamtos apsaugai, taip pat gali padėti prisidėti prie Gyvatėdžio išsaugojimo pastangų."
    });

    const toggleExpanded = () => {
        setCardState(prevState => ({
            ...prevState,
            Expanded: !prevState.Expanded
        }));
    };



    return (
        <div className={`animalClickable ${SnakeEagle.Expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
            {!SnakeEagle.Expanded ? (
                <>

                    <div className="bookItemAlign">
                        <h2>{SnakeEagle.Name}</h2>
                        <p>(lot. Gavia arctica)</p>
                    </div>
                    <img
                        src={SnakeEagle.Image}
                        alt={SnakeEagle.Name}
                    />
                    <img
                        src={SnakeEagle.Threat}
                        alt="Category 0 threat"
                    />

                </>
            ) : (
                <>
                    <div className="bookItemWrapper ">

                        <h3>{SnakeEagle.Name}</h3>
                        <p className="Latin">(lot. Gavia arctica)</p>

                        <img
                            src={SnakeEagle.Image}
                            alt={SnakeEagle.Name}
                        />
                        <img
                            className="mt-3"
                            src={SnakeEagle.Threat}
                            alt="Category 0 threat"
                        />
                    </div>

                    <Container className="mt-3">
                        <a href="https://www.raudonojiknyga.lt/knyga/2-saugomu-rusiu-kategorijos" target='_blank' className="">Ką tai reiškia?</a>
                    </Container>

                    <div className="bookParagraphs">
                        <h4>Bendra informacija</h4>
                        <p>{SnakeEagle.Information}</p>
                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={SnakeEagle.SecondaryImage}
                                        alt="SnakeEagle"
                                    />
                                </Col>
                            </Row>
                        </Container>

                        <h4>Bruožai</h4>
                        <p>{SnakeEagle.Characteristics}</p>


                        <h4>Kaip galima padėti?</h4>
                        <p>{SnakeEagle.Help}</p>

                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={SnakeEagle.ThirdImage}
                                        alt="SnakeEagle"
                                    />
                                </Col>
                            </Row>
                        </Container>


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

export default SnakeEagle;
