import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import GoldenrodImg from "../../assets/images/Goldenrod/GoldenrodImg.jpg";
import SecondGoldenrod from "../../assets/images/Goldenrod/SecondGoldenrod.webp";
import ThirdGoldenrod from "../../assets/images/Goldenrod/ThirdGoldenrod.jpg";

function Goldenrod() {
    const [Goldenrod, setCardState] = useState({
        Name: "Kanadinė rykštenė",
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
        Image: GoldenrodImg,
        SecondaryImage: SecondGoldenrod,
        ThirdImage: ThirdGoldenrod,
        Expanded: false,
        Category: "Invaziniai",
        Information: "Rykštenės – daugiamečiai, tankius kerus sudarantys augalai, kurie nereiklūs dirvožemio sąlygoms, ištveria labai stiprius, net iki -40 °C šalčius. Ypač didžiosios rykštenės išaugina daug ilgų šakniastiebių ir sudaro tankius, dažnai beveik grynus sąžalynus, taip darydamos labai stiprų neigiamą poveikį natūralioms augalų bendrijoms, taip sumažėja ir gyvūnų rūšinė sudėtis. Tankiuose didžiųjų rykštenių sąžalynuose nelieka kitų žolinių augalų arba išlieka pavieniai stiprūs konkurentai. Šios rykštenės iš dirvožemio pasiima daug daugiau maisto medžiagų nei vietiniai augalai, reikšmingai pakeičia dirvožemio reakciją – jis labai parūgštėja.",
        Characteristics: "Daugiametė, iki 2 m aukščio išauganti žolė su sumedėjusiomis šaknimis arba ilgais šakniastiebiais. Stiebai statūs, pliki arba plaukuoti, tankiai apaugę lapais. Lapai kiaušiniški, lancetiški arba linijiški, dantyti arba lygiakraščiai. Graižai smulkūs, susitelkę į viršūninius šluotelės pavidalo sudėtinius žiedynus.",
        Help: "Svarbu aktyviai dalyvauti vietinėse valymo akcijose, kad būtų pašalinti augalai iš užkrėstų vandenų. Taip pat galima informuoti vietos valdžios institucijas apie Kanadinės rykštenės aptikimo vietas, kad jos būtų imtasi tinkamų priemonių. Be to, svarbu išvengti šios rūšies plitimo į naujas teritorijas, nešiodami dėmesį ir neleisdami augalui plisti. Organizuodami švietimo programas ir informuodami vietos bendruomenę apie Kanadinės rykštenės pavojus ir būdus, kaip padėti jos kontrolėje, taip pat galime prisidėti prie jos naikinimo pastangų."
    });

    const toggleExpanded = () => {
        setCardState(prevState => ({
            ...prevState,
            Expanded: !prevState.Expanded
        }));
    };



    return (
        <div className={`animalClickable ${Goldenrod.Expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
            {!Goldenrod.Expanded ? (
                <>

                    <div className="bookItemAlign">
                        <h2>{Goldenrod.Name}</h2>
                        <p>(lot. Solidago)</p>
                    </div>
                    <img
                        src={Goldenrod.Image}
                        alt={Goldenrod.Name}
                    />


                </>
            ) : (
                <>
                    <div className="bookItemWrapper ">

                        <h3>{Goldenrod.Name}</h3>
                        <p className="Latin">(lot. Solidago)</p>

                        <img
                            src={Goldenrod.Image}
                            alt={Goldenrod.Name}
                        />

                    </div>



                    <div className="bookParagraphs">
                        <h4>Bendra informacija</h4>
                        <p>{Goldenrod.Information}</p>
                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={Goldenrod.SecondaryImage}
                                        alt="Postured Stoat"
                                    />
                                </Col>
                            </Row>
                        </Container>

                        <h4>Bruožai</h4>
                        <p>{Goldenrod.Characteristics}</p>


                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={Goldenrod.ThirdImage}
                                        alt="Goldenrod"
                                    />
                                </Col>
                            </Row>
                        </Container>

                        <h4>Kaip galima padėti?</h4>
                        <p>{Goldenrod.Help}</p>

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

export default Goldenrod;
