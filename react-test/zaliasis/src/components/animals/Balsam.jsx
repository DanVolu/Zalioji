import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import BalsamImg from "../../assets/images/Balsam/BalsamImg.jpg";
import SecondBalsam from "../../assets/images/Balsam/SecondBalsam.jpg";
import ThirdBalsam from "../../assets/images/Balsam/ThirdBalsam.jpg";

function Balsam() {
    const [Balsam, setCardState] = useState({
        Name: "Bitinė sprigė",
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
        Image: BalsamImg,
        SecondaryImage: SecondBalsam,
        ThirdImage: ThirdBalsam,
        Expanded: false,
        Category: "Invaziniai",
        Information: "Himalajuose auga 1800–4000 m aukštyje. Natūraliame areale paprastai auga lapuočių ir mišriuose miškuose, teikdama pirmenybę šlapesnėms, tačiau neatviroms saulės spinduliams augavietėms, vengia tankios žolės dangos. Bitinė sprigė prisitaikiusi prie įvairių biotopų, bet geriausiai auga drėgnose maistingose dirvose: upių ir ežerų pakrantėse, drėgnuose pakrančių žolynuose, šviesiuose lapuočių miškuose. Ypač sparčiai įsikuria žmogaus pažeistose vietose: apleistuose laukuose, pakelėse, grioviuose, gyvatvorėse. Sudaro vešlius sąžalynus su kitais azotamėgiais augalais (dilgėlėmis, žliūgėmis, šluotsmilgėmis ir kt.).",
        Characteristics: "Vienmetis žolinis augalas. Stiebas status, aukštas, šakotas, trapus, gali užaugti iki 3 m aukščio (paprastai 1–2 m). Lapai pliki, lancetiški arba elipsiški, 5–18 cm ilgio ir 2,5–7 cm pločio. Žiedyną sudaro 2–14 žiedų, kurių ilgis 25–40 mm. Žiedai rausvi (gali būti ir balti, violetiniai), kvapnūs, žydi birželio–spalio mėnesiais. Kaip ir kitos sprigės, bitinė sprigė subrandina sėklų dėžutes (jose iki 16 sėklų), kurios vėliau nuo prisilietimo pradeda aižytis ir išsvaido sėklas.",
        Help: "Galima prisidėti prie bitinės sprigės naikinimo, kurdami tinkamas sąlygas jos natūralių priešų, pavyzdžiui, vabzdžių valgantys paukščiai, veiklai. Be to, galite informuoti vietos institucijas, tokią kaip aplinkosauginės organizacijos ar valstybinės žemės ūkio tarnybos, apie bitinės sprigės populiacijos padidėjimo vietas, kad jos galėtų įsikišti ir įgyvendinti naikinimo programas. Taip pat svarbu stebėti ir nereikalingai nešiotis bitinės sprigės, kad ji nebūtų platinama į naujas teritorijas." 
    });

    const toggleExpanded = () => {
        setCardState(prevState => ({
            ...prevState,
            Expanded: !prevState.Expanded
        }));
    };



    return (
        <div className={`animalClickable ${Balsam.Expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
            {!Balsam.Expanded ? (
                <>

                    <div className="bookItemAlign">
                        <h2>{Balsam.Name}</h2>
                        <p>(lot. Impatiens glandulifera)</p>
                    </div>
                    <img
                        src={Balsam.Image}
                        alt={Balsam.Name}
                    />


                </>
            ) : (
                <>
                    <div className="bookItemWrapper ">

                        <h3>{Balsam.Name}</h3>
                        <p className="Latin">(lot. Impatiens glandulifera)</p>

                        <img
                            src={Balsam.Image}
                            alt={Balsam.Name}
                        />

                    </div>



                    <div className="bookParagraphs">
                        <h4>Bendra informacija</h4>
                        <p>{Balsam.Information}</p>
                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={Balsam.SecondaryImage}
                                        alt="Balsam"
                                    />
                                </Col>
                            </Row>
                        </Container>

                        <h4>Bruožai</h4>
                        <p>{Balsam.Characteristics}</p>


                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={Balsam.ThirdImage}
                                        alt="Balsam"
                                    />
                                </Col>
                            </Row>
                        </Container>

                        <h4>Kaip galima padėti?</h4>
                        <p>{Balsam.Help}</p>


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

export default Balsam;
