import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import SpottedEagleImg from "../../assets/images/SpottedEagle/SpottedEagleImg.jpg";
import SecondSpottedEagle from "../../assets/images/SpottedEagle/SecondSpottedEagle.jpg";
import ThirdSpottedEagle from "../../assets/images/SpottedEagle/ThirdSpottedEagle.jpg";
import Category1 from "../../assets/images/category1.jpg"

function SpottedEagle() {
    const [SpottedEagle, setCardState] = useState({
        Name: "Didysis erelis rėksnys",
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
        Image: SpottedEagleImg,
        SecondaryImage: SecondSpottedEagle,
        ThirdImage: ThirdSpottedEagle,
        Expanded: false,
        Category: "Paukščiai",
        Threat: Category1,
        Information: ". Į Lietuvos raudonąją knygą rūšis įrašyta nuo 1976 m. ir nuo 1992 m. priskirta 0 (Ex) kategorijai (išnykusios ar galbūt išnykusios rūšys), vėliau nuo 2007 iki 2019 m. buvo priskirta 1 (E) kategorijai (išnykstančios rūšys, kurios yra ties išnykimo riba ir kurias galima išsaugoti tik naudojant specialias apsaugos priemones).",
        Characteristics: "Visas kūnas vienspalviai tamsiai rudos spalvos, tik pakaušis kiek šviesesnis. Antuodegyje kartais būna balsva dėmė. Snapas melsvas. Kojos geltonos, nagai juodi. Bendras kūno ilgis: 59-71 cm. Bendras atstumas tarp išskėstų sparnų galų: 1,57-1,79 m. Patinėlių svoris: 1,5-1,9 kg. Patinėlių sparnų ilgis: 477–517 mm. Patelių svoris: 1,8 kg-2,5 kg., didžiausias svoris: 3,2 kg. Patelių sparnų ilgis: 507–542 mm.",
        Help: "Svarbu užtikrinti maisto šaltinių, ypač laukinių gyvūnų, kuriuos ereliai medžioja, apsaugą ir išsaugojimą. Būtina reguliuoti cheminių medžiagų naudojimą žemės ūkyje ir miškininkystėje, kad būtų išvengta neigiamo jų poveikio erelių populiacijoms. Edukacija ir informavimas apie Didžiojo erelio svarbą ekosistemoms ir grėsmes, su kuriomis jis susiduria, taip pat yra svarbus. Dalyvavimas iniciatyvose, skirtose gamtos apsaugai ir erelių išsaugojimui, taip pat gali būti veiksmingas būdas prisidėti prie Didžiojo erelio rėksnio išsaugojimo."
    });

    const toggleExpanded = () => {
        setCardState(prevState => ({
            ...prevState,
            Expanded: !prevState.Expanded
        }));
    };



    return (
        <div className={`animalClickable ${SpottedEagle.Expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
            {!SpottedEagle.Expanded ? (
                <>

                    <div className="bookItemAlign">
                        <h2>{SpottedEagle.Name}</h2>
                        <p>(lot. Clanga clanga)</p>
                    </div>
                    <img
                        src={SpottedEagle.Image}
                        alt={SpottedEagle.Name}
                    />
                    <img
                        src={SpottedEagle.Threat}
                        alt="Category 1 threat"
                    />

                </>
            ) : (
                <>
                    <div className="bookItemWrapper ">
                    <p style={{color:"grey", marginBottom:"-2rem"}}>Norint išeiti iš kortelės reikia nuspausti gyvūno nuotrauką.</p>

                        <h3>{SpottedEagle.Name}</h3>
                        <p className="Latin">(lot. Clanga clanga)</p>

                        <img
                            src={SpottedEagle.Image}
                            alt={SpottedEagle.Name}
                        />
                        <img
                            className="mt-3"
                            src={SpottedEagle.Threat}
                            alt="Category 1 threat"
                        />
                    </div>

                    <Container className="mt-3">
                        <a href="https://www.raudonojiknyga.lt/knyga/2-saugomu-rusiu-kategorijos" target='_blank' className="">Ką tai reiškia?</a>
                    </Container>

                    <div className="bookParagraphs">
                        <h4>Bendra informacija</h4>
                        <p>{SpottedEagle.Information}</p>
                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={SpottedEagle.SecondaryImage}
                                        alt="SpottedEagle"
                                    />
                                </Col>
                            </Row>
                        </Container>

                        <h4>Bruožai</h4>
                        <p>{SpottedEagle.Characteristics}</p>


                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={SpottedEagle.ThirdImage}
                                        alt="SpottedEagle"
                                    />
                                </Col>
                            </Row>
                        </Container>

                        <h4>Kaip galima padėti?</h4>
                        <p>{SpottedEagle.Help}</p>


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

export default SpottedEagle;
