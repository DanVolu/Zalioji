import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import LobataImg from "../../assets/images/Lobata/LobataImg.png";
import SecondLobata from "../../assets/images/Lobata/SecondLobata.jpg";
import ThirdLobata from "../../assets/images/Lobata/ThirdLobata.jpg";

function Lobata() {
    const [Lobata, setCardState] = useState({
        Name: "Dygliavaisis virkštenis ",
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
        Image: LobataImg,
        SecondaryImage: SecondLobata,
        ThirdImage: ThirdLobata,
        Expanded: false,
        Category: "Invaziniai",
        Information: "Auginamas kaip dekoratyvinis augalas, palaipsniui sulaukėjo. Sutinkamas upių pakrantėse, kur antroje vasaros pusėje sudaro tankius brūzgynus, vandens pagalba greitai plinta.",
        Characteristics: " Stiebai gali siekti didesnį nei 6 m ilgį, ūsais tvirtinasi prie kitų augalų. Lapai skiautėti, rečiau ištisiniai, 5-10 cm ilgio. Augalas vienanamis, žydi birželio-rugsėjo mėnesiais. Žiedai balti, sukrauti į kekes, kvapnūs. vaisius – 1-6 cm ilgio moliūgvaisis, padengtas aštriais dygliukais. Viduje yra 2 sėklalizdžiai su pora sėklų. Prinokęs vaisius pageltonuoja, išsipučia ir sėklas iššaudo (rugpjūčio-spalio mėn.). Dažnai pavasarį nuo vėlyvųjų šalnų apšąla.",
        Help: "Dygliavačio augalo naikinimui reikėtų taikyti veiksmingus metodus, įskaitant mechaninius ar cheminius būdus, kad būtų suvaldytas jo populiacijos augimas. Svarbu bendradarbiauti su vietos valdžios institucijomis ir ekspertais, siekiant sukurti efektyvius naikinimo planus ir užtikrinti tinkamą švietimą ir informavimą apie šio augalo invazijos pavojus. Be to, būtina aktyviai dalyvauti valymo akcijose ir kitose vietinėse iniciatyvose, siekiant kontroliuoti Dygliavačio augalo plitimą ir apsaugoti natūralią aplinką.        "
    });

    const toggleExpanded = () => {
        setCardState(prevState => ({
            ...prevState,
            Expanded: !prevState.Expanded
        }));
    };



    return (
        <div className={`animalClickable ${Lobata.Expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
            {!Lobata.Expanded ? (
                <>

                    <div className="bookItemAlign">
                        <h2>{Lobata.Name}</h2>
                        <p>(lot. Echinocystis lobata)</p>
                    </div>
                    <img
                        src={Lobata.Image}
                        alt={Lobata.Name}
                    />


                </>
            ) : (
                <>
                    <div className="bookItemWrapper ">

                        <h3>{Lobata.Name}</h3>
                        <p className="Latin">(lot. Echinocystis lobata)</p>

                        <img
                            src={Lobata.Image}
                            alt={Lobata.Name}
                        />

                    </div>



                    <div className="bookParagraphs">
                        <h4>Bendra informacija</h4>
                        <p>{Lobata.Information}</p>
                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={Lobata.SecondaryImage}
                                        alt="Postured Stoat"
                                    />
                                </Col>
                            </Row>
                        </Container>

                        <h4>Bruožai</h4>
                        <p>{Lobata.Characteristics}</p>


                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={Lobata.ThirdImage}
                                        alt="Stoat after a succesful hunt"
                                    />
                                </Col>
                            </Row>
                        </Container>


                        <h4>Kaip galima padėti?</h4>
                        <p>{Lobata.Help}</p>

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

export default Lobata;
