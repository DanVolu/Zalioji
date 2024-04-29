import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import LoachImg from "../../assets/images/Loach/LoachImg.webp";
import SecondLoach from "../../assets/images/Loach/SecondLoach.webp";
// import WisentRegion from '../../assets/images/Wisent/WisentRegion.jpg'
import Category1 from "../../assets/images/category1.jpg"

function Loach() {
    const [Loach, setCardState] = useState({
        Name: "Auksaspalvis kirtiklis",
        Region: [
            "Utena",
            "Šiauliai"
        ],
        Image: LoachImg,
        SecondaryImage: SecondLoach,
        // ThirdImage: ThirdLoach,
        Expanded: false,
        Category: "Žuvys",
        Threat: Category1,
        Information: "Į Lietuvos raudonąją knygą rūšis įrašyta nuo 2019 metų. Anksčiau buvo manyta, kad šiaurinis auksaspalvis kirtiklis (lot. Sabanejewia baltica) yra auksaspalvio kirtiklio (lot. Sabanejewia aurata) porūšis ir mokslinėje literatūroje lotyniškai buvo vadinamas sabanejewia aurata baltica. Šis pavadinimas dabar išlikęs kaip šiaurinio auksaspalvio kirtiklio sinonimas. saspalviai kirtikliai neršia pavasarį, gegužės – birželio mėnesiais, esant ne žemesnei kaip +20 °C vandens temperatūrai upės dugne tarp vandens augalijos ant smėlio, žvyro, akmenukų, išleisdami apie 900 lipnių 1,1 - 1,2 mm skersmens ikrelių. Esant +22°C vandens temperatūrai, iš ikrelių mailius išlenda po išneršimo praėjus 50 - 60 valandų. Mailius 3,1 - 4,2 mm ilgio ir maitintis pradeda praėjus 6 paroms ir minta zooplanktonu.",
        Characteristics: "Auksaspalvis kirtiklis auga lėtai, jo kūno ilgis sudaro 5 – 9 cm, dažniausiai 6 – 8 cm, kūno masė dažniausiai 3 – 5 g. Auksaspalviai kirtikliai gyvena pavieniui. Aktyviausi vakare ir naktį. Jie slėpdamiesi nuo priešų, upės dugne įsirausia po smėliu, rečiau po žvyru. Auksaspalviai kirtikliai gyvena iki 4 – 5 metų.",
        Help: "Svarbu skatinti tvarų žuvies išteklių naudojimą ir valdymą. Tai apima reguliavimą žvejybos veiklą, kad būtų išvengta pernelyg didelio žuvų populiacijos išnaudojimo, ir tausios žvejybos praktikų skatinimą. Be to, svarbu ginti ir atkurti natūralias gyvenvietes bei buveines, kuriose gyvena Auksaspalvis kirtiklis, įskaitant upes, ežerus ir vandens telkinius. Dėl šių veiksmų būtų galima prisidėti prie Auksaspalvio kirtiklio populiacijos išsaugojimo ir tvaraus jūrų ekosistemų vystymo."
    });

    const toggleExpanded = () => {
        setCardState(prevState => ({
            ...prevState,
            Expanded: !prevState.Expanded
        }));
    };



    return (
        <div className={`animalClickable ${Loach.Expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
            {!Loach.Expanded ? (
                <>

                    <div className="bookItemAlign">
                        <h2>{Loach.Name}</h2>
                        <p>(lot. Sabanejewia baltica)</p>
                    </div>
                    <img
                        src={Loach.Image}
                        alt={Loach.Name}
                    />
                    <img
                        src={Loach.Threat}
                        alt="Category 1 threat"
                    />

                </>
            ) : (
                <>
                    <div className="bookItemWrapper ">
                    <p style={{color:"grey", marginBottom:"-2rem"}}>Norint išeiti iš kortelės reikia nuspausti gyvūno nuotrauką.</p>

                        <h3>{Loach.Name}</h3>
                        <p className="Latin">(lot. Sabanejewia baltica)</p>

                        <img
                            src={Loach.Image}
                            alt={Loach.Name}
                        />
                        <img
                            className="mt-3"
                            src={Loach.Threat}
                            alt="Category 1 threat"
                        />
                    </div>

                    <Container className="mt-3">
                        <a href="https://www.raudonojiknyga.lt/knyga/2-saugomu-rusiu-kategorijos" target='_blank' className="">Ką tai reiškia?</a>
                    </Container>

                    <div className="bookParagraphs">
                        <h4>Bendra informacija</h4>
                        <p>{Loach.Information}</p>
                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={Loach.SecondaryImage}
                                        alt="Loach"
                                    />
                                </Col>
                            </Row>
                        </Container>

                        <h4>Bruožai</h4>
                        <p>{Loach.Characteristics}</p>

                        <h4>Kaip galima padėti?</h4>
                        <p>{Loach.Help}</p>


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

export default Loach;
