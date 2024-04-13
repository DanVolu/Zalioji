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
        Sightings: StoatRegion
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
                        <img
                            className="mt-3"
                            src={Stoat.Threat}
                            alt="Category 4 threat"
                        />
                    </div>

                    <Container className="mt-3">
                        <a href="https://www.raudonojiknyga.lt/knyga/2-saugomu-rusiu-kategorijos" target='_blank' className="">Ką reiškia šie skaičiai?</a>
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
                                </Col>
                            </Row>
                        </Container>

                        <h4>Kaip atpazinti</h4>
                        <p>{Stoat.Characteristics}</p>


                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={Stoat.ThirdImage}
                                        alt="Stoat after a succesful hunt"
                                    />
                                </Col>
                            </Row>
                        </Container>


                        <h4>Possible sighting locations</h4>
                    </div>
                    <img
                        src={Stoat.Sightings}
                        alt="possible sightings of the Stoat"
                    />

                </>
            )}
        </div>
    );
}

export default Stoat;
