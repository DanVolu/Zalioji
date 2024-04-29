import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import EagleOwlImg from '../../assets/images/EagleOwl/EagleOwlImg.avif';
import SecondEagleOwl from "../../assets/images/EagleOwl/SecondEagleOwl.jpg";
import ThirdEagleOwl from "../../assets/images/EagleOwl/ThirdEagleOwl.jpg";
import Category1 from "../../assets/images/category1.jpg"

function EagleOwl() {
    const [EagleOwl, setCardState] = useState({
        Name: "Didysis apuokas",
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
        Image: EagleOwlImg,
        SecondaryImage: SecondEagleOwl,
        ThirdImage: ThirdEagleOwl,
        Expanded: false,
        Category: "Paukščiai",
        Threat: Category1,
        Information: "Į Lietuvos raudonąją knygą rūšis įrašyta nuo 1976 metų. Minta kiškiais, beveik visais paukščiais (susidoroja ir su vištvanagiais), pelėmis. Jeigu pasitaiko proga, gali sumedžioti iki 17 kg dydžio elnių jauniklius ar lapes. Patinai lytiškai subręsta po metų, patelės vėliau. Lizdą įruošia dažniausiai ant žemės, kartais pasinaudoja medyje esančiu senu plėšriųjų ar kitų didesnių paukščių lizdu. Deda 2-3 kiaušinius, peri tik patelė apie 35 dienas. Lizdą jaunikliai apleidžia apie birželio vidurį.",
        Characteristics: "Didysis apuokas gana stambus paukštis – stambiausia Lietuvos pelėdinių rūšis. Didysis apuokas antras pagal stambumą paukštis visoje pelėdinių šeimoje, kuris tik truputį mažesnis už didyjį apuoką žuvininką, bei mažesnis ir už Lietuvoje vis dažniau pasitaikantį jūrinį erelį. Už dažnai Lietuvoje aptinkamą naminę pelėdą didesnis apie 4–5 kartus. Didžiojo apuoko kūno ilgis 58-75 cm. Didžiųjų apuokų patelės ir svoriu, ir dydžiu akivaizdžiai pranoksta patinėlius. Norvegijos patinėlių kūno dydis vidutiniškai yra apie 61 cm, o Norvegijos patelių – 67 cm. Atstumas tarp išskleistų sparnų 138–200 cm: patinėlių vidutiniškai 157 cm, o patelių – 168 cm. Patinėlių svoris 1,5-3,2 kg (Norvegijoje – 1,80-2,80 kg, vidutiniškai 2,45 kg), patelių – 1,75-4,5 kg (Norvegijoje 2,30-4,20 kg, vidutiniškai 2,99 kg). Vokietijos Tiuringijoje patinėlių vidutinis svoris 1,89 kg, o patelių 2,55 kg.",
        Help: "Norint užtikrinti jų išlikimą, svarbu kurti draudžiamas teritorijas arba rezervatus, kurie apsaugotų didžiųjų apuokų gyvenamąsias vietas nuo žmogaus veiklos. Be to, būtina rūpintis natūralių buveinių išsaugojimu ir užtikrinti tinkamą miškų tvarkymą, kad būtų išvengta didžiųjų apuokų gyvenamųjų vietų fragmentacijos. Tik įgyvendinus šias apsaugos priemones galima garantuoti didžiųjų apuokų išlikimą ir jų vaidmens ekosistemose tęstinumą."
    });

    const toggleExpanded = () => {
        setCardState(prevState => ({
            ...prevState,
            Expanded: !prevState.Expanded
        }));
    };



    return (
        <div className={`animalClickable ${EagleOwl.Expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
            {!EagleOwl.Expanded ? (
                <>

                    <div className="bookItemAlign">
                        <h2>{EagleOwl.Name}</h2>
                        <p>(lot. Gavia arctica)</p>
                    </div>
                    <img
                        src={EagleOwl.Image}
                        alt={EagleOwl.Name}
                    />
                    <img
                        src={EagleOwl.Threat}
                        alt="Category 1 threat"
                    />

                </>
            ) : (
                <>
                    <div className="bookItemWrapper ">
                    <p style={{color:"grey", marginBottom:"-2rem"}}>Norint išeiti iš kortelės reikia nuspausti gyvūno nuotrauką.</p>

                        <h3>{EagleOwl.Name}</h3>
                        <p className="Latin">(lot. Gavia arctica)</p>

                        <img
                            src={EagleOwl.Image}
                            alt={EagleOwl.Name}
                        />
                        <img
                            className="mt-3"
                            src={EagleOwl.Threat}
                            alt="Category 1 threat"
                        />
                    </div>

                    <Container className="mt-3">
                        <a href="https://www.raudonojiknyga.lt/knyga/2-saugomu-rusiu-kategorijos" target='_blank' className="">Ką tai reiškia?</a>
                    </Container>

                    <div className="bookParagraphs">
                        <h4>Bendra informacija</h4>
                        <p>{EagleOwl.Information}</p>
                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={EagleOwl.SecondaryImage}
                                        alt="EagleOwl"
                                    />
                                </Col>
                            </Row>
                        </Container>

                        <h4>Bruožai</h4>
                        <p>{EagleOwl.Characteristics}</p>


                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={EagleOwl.ThirdImage}
                                        alt="EagleOwl"
                                    />
                                </Col>
                            </Row>
                        </Container>

                        <h4>Kaip galima padėti?</h4>
                        <p>{EagleOwl.Help}</p>


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

export default EagleOwl;
