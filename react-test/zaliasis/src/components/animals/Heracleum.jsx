import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import HeracleumImg from "../../assets/images/Heracleum/HeracleumImg.jpg";
import SecondHeracleum from "../../assets/images/Heracleum/SecondHeracleum.webp";
import ThirdHeracleum from "../../assets/images/Heracleum/ThirdHeracleum.webp";

function Heracleum() {
    const [Heracleum, setCardState] = useState({
        Name: "Sosnovskio barštis",
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
        Image: HeracleumImg,
        SecondaryImage: SecondHeracleum,
        ThirdImage: ThirdHeracleum,
        Expanded: false,
        Category: "Invaziniai",
        Information: "Sosnovskio barštis buvo paplitęs tik Kaukazo regione, kol sovietų Sąjungoje pradėtas auginti kaip silosinis augalas. Dėl to augalas išplito Rusijoje, Ukrainoje, Baltarusijoje ir Baltijos šalyse kaip invazinė rūšis. Kol nedideli, jie purškiami glifosatų ir triklopiro grupių herbicidais. Efektyvu didelius plotus suarti kuo giliau pavasarį arba rudenį. Tyrimais nustatyta, kad ant tokių sėklų užpylus 25 cm žemės sluoksnį, šios žūva. Tiesa, iš šaknų vis atželti Sasnovskio barštis gali net iki 13-os metų, todėl išvalytus plotus reikia nuolatos prižiūrėti. Jei jau užaugo barštis, jį reikia nupjauti, šitaip neleidžiant išbarstyti sėklų. Pjaunant augalą būtina dirbti apsisaugojus akis ir odą nuo trykštančių sulčių, po darbo švariai nusiprausti ir kurį laiką saugotis atviros saulės šviesos, nes barščio sultys reaguoja su UV spinduliais.",
        Characteristics: "Užauga iki 3-5 m aukščio. Stiebas status, tvirtas, apaugęs plaukeliais, šakotas, diametras gali siekti 12 cm. Šaknis liemeninė, iki 10 cm skersmens, labai tvirta. Lapai 50–60 cm ilgio. Žiedyno skersmuo gali būti iki 0,5 m. Žydi liepą–rugsėjį. Sėklas išbarsto rugpjūčio-spalio mėnesiais. Augalo lapai maistingi, tinka gyvuliams šerti (bet žmonėms reikia saugotis nudegimų). Gausūs smulkūs žiedai nektaringi, juos lanko daug įvairių vabzdžių, daugiausia musių, tačiau bitės barščio žiedų beveik visiškai nelanko, nes joms šis nektaras nuodingas.",
        Help: "Prisidedant prie jo naikinimo, galima dalyvauti organizuojant vietines valymo akcijas, kad būtų pašalinti augalai iš užkrėstų teritorijų. Be to, svarbu informuoti vietos valdžios institucijas apie Sosnovskio barščio buveinių aptikimo vietas, kad būtų imtasi tinkamų priemonių. Būtina atidžiai laikytis saugos taisyklių ir naudoti tinkamą apsaugos įrangą, kai dirbama su šia augalų rūšimi, kad būtų išvengta odos nudegimų ir kitų pavojų. Organizuodami švietimo programas ir informuodami bendruomenę apie Sosnovskio barščio pavojus ir būdus, kaip padėti jo kontrolėje, taip pat galime prisidėti prie jo naikinimo pastangų."
    });

    const toggleExpanded = () => {
        setCardState(prevState => ({
            ...prevState,
            Expanded: !prevState.Expanded
        }));
    };



    return (
        <div className={`animalClickable ${Heracleum.Expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
            {!Heracleum.Expanded ? (
                <>

                    <div className="bookItemAlign">
                        <h2>{Heracleum.Name}</h2>
                        <p>(lot. Heracleum sosnowskyi)</p>
                    </div>
                    <img
                        src={Heracleum.Image}
                        alt={Heracleum.Name}
                    />


                </>
            ) : (
                <>
                    <div className="bookItemWrapper ">

                        <h3>{Heracleum.Name}</h3>
                        <p className="Latin">(lot. Heracleum sosnowskyi)</p>

                        <img
                            src={Heracleum.Image}
                            alt={Heracleum.Name}
                        />

                    </div>



                    <div className="bookParagraphs">
                        <h4>Bendra informacija</h4>
                        <p>{Heracleum.Information}</p>
                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={Heracleum.SecondaryImage}
                                        alt="Heracleum"
                                    />
                                </Col>
                            </Row>
                        </Container>

                        <h4>Bruožai</h4>
                        <p>{Heracleum.Characteristics}</p>


                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={Heracleum.ThirdImage}
                                        alt="Heracleum"
                                    />
                                </Col>
                            </Row>
                        </Container>

                        <h4>Kaip galima padėti?</h4>
                        <p>{Heracleum.Help}</p>

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

export default Heracleum;
