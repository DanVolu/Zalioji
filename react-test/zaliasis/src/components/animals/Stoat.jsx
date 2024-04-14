import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import StoatImg from "../../assets/images/Stoat/StoatImg.jpg";
import SecondStoat from "../../assets/images/Stoat/SecondStoat.jpg";
import ThirdStoat from "../../assets/images/Stoat/ThirdStoat.jpg";
import StoatRegion from '../../assets/images/Stoat/StoatRegion.jpg'
import Category4 from "../../assets/images/category4.jpg"

function Stoat() {
    const [Stoat, setCardState] = useState({
        Name: "Šermuonėlis",
        Region: ["Alytus"],
        Image: StoatImg,
        SecondaryImage: SecondStoat,
        ThirdImage: ThirdStoat,
        Expanded: false,
        Category: "Žinduoliai",
        Threat: Category4,
        Information: "Į Lietuvos raudonąją knygą rūšis įrašyta nuo 2003 metų. Minta triušiais, graužikais (pelėmis, žiurkėmis), kitais smulkiais žinduoliais, taip pat ėda paukščius, jų kiaušinius ir jauniklius. Kartais ėda ir žuvis, roplius, amfibijas ir bestuburius. Poruojasi gegužės - birželio mėnesiai ir veda nuo 5-ių iki 12-os jauniklių. Mažyliais rūpinasi tik patelė. Jaunikliai grobį sugeba įveikti būdami 3 mėnesių. Tokio amžiaus jie tampa savarankiški. Artėjant žiemai, rudas vasaros kailiukas keičiamas baltu, bet juodas uodegos galiukas išlieka.",
        Characteristics: "Šermuonėlis yra nedidelis, laibas, juodu uodegos galiuku kiauninis žvėrelis. Išauga iki 30 cm ilgio. Aptinkamas miškingose, pelkėtose ir atvirose vietovėse. Dažniau gyvybines veiklos žymių pastebima kupstynėse, nendrynuose, upių slėniuose, kirtavietėse. Gali buti aktyvus bet kuriuo paros metu. Didžiąją gyvenimo dalį praleidžia pelinio graužiko, kurmių urveliuose, kuriuose ilsisi.",
        Sightings: StoatRegion,
        Help: "Šermuonėlio, kaip žinduolio, išsaugojimui esminiai svarbu saugoti jo natūralias gyvenvietes ir buveines. Tai apima gamtos teritorijų, kuriose jie gyvena, kaip pievos, miškai ir laukai, apsaugą nuo neigiamų žmogaus veiklos pasekmių, pvz., gamtos teritorijų naikinimo arba fragmentavimo. Be to, būtina stebėti ir vertinti šermuonėlių populiacijų būklę, kad būtų galima identifikuoti problemas ir įgyvendinti būtinas apsaugos priemones. Edukacija ir informavimas apie šių gyvūnų ekologinę svarbą ir grėsmes, su kuriomis jie susiduria, taip pat yra nepaprastai svarbūs. Bendradarbiavimas su vietos bendruomenėmis, gamtos apsaugos organizacijomis ir institucijomis taip pat gali labai prisidėti prie šermuonėlių išsaugojimo pastangų."
    });

    const toggleExpanded = () => {
        setCardState(prevState => ({
            ...prevState,
            Expanded: !prevState.Expanded
        }));
    };



    return (
        <div className={`animalClickable ${Stoat.Expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
            {!Stoat.Expanded ? (
                <>

                    <div className="bookItemAlign">
                        <h2>{Stoat.Name}</h2>
                        <p>(lot. Mustela erminea)</p>
                    </div>
                    <img
                        src={Stoat.Image}
                        alt={Stoat.Name}
                    />
                    <img
                        src={Stoat.Threat}
                        alt="Category 4 threat"
                    />

                </>
            ) : (
                <>
                    <div className="bookItemWrapper ">

                        <h3>{Stoat.Name}</h3>
                        <p className="Latin">(lot. Mustela erminea)</p>

                        <img
                            src={Stoat.Image}
                            alt={Stoat.Name}
                        />
                        <p>Photo by USFWSAlaska</p>
                        <img
                            className="mt-3"
                            src={Stoat.Threat}
                            alt="Category 4 threat"
                        />
                    </div>

                    <Container className="mt-3">
                        <a href="https://www.raudonojiknyga.lt/knyga/2-saugomu-rusiu-kategorijos" target='_blank' className="">Ką tai reiškia?</a>
                    </Container>

                    <div className="bookParagraphs">
                        <h4>Bendra informacija</h4>
                        <p>{Stoat.Information}</p>
                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={Stoat.SecondaryImage}
                                        alt="Postured Stoat"
                                    />
                                    <p>Photo by Adventures with E&L</p>
                                </Col>
                            </Row>
                        </Container>

                        <h4>Bruožai</h4>
                        <p>{Stoat.Characteristics}</p>


                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={Stoat.ThirdImage}
                                        alt="Stoat after a succesful hunt"
                                    />
                                    <p>Photo by Kentish Plumber</p>
                                </Col>
                            </Row>
                        </Container>
                        <h4>Kaip galima padėti?</h4>
                        <p>{Stoat.Help}</p>



                        <h4>Galimos pastebėjimo vietos</h4>
                    </div>
                    <img
                                style={{ filter: 'contrast(150%)' }}
                        src={Stoat.Sightings}
                        alt="possible sightings of the Stoat"
                    />

                </>
            )}
        </div>
    );
}

export default Stoat;
