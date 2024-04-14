import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import ElodeaImg from "../../assets/images/Elodea/ElodeaImg.jpg";
import SecondElodea from "../../assets/images/Elodea/SecondElodea.jpg";
import ThirdElodea from "../../assets/images/Elodea/ThirdElodea.jpg";

function Elodea() {
    const [Elodea, setCardState] = useState({
        Name: "Kanadinė elodėja",
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
        Image: ElodeaImg,
        SecondaryImage: SecondElodea,
        ThirdImage: ThirdElodea,
        Expanded: false,
        Category: "Invaziniai",
        Information: "Augalas kilęs iš Šiaurės Amerikos, aklimatizuotas Azijoje, Australijoje, Europoje, taip pat ir Lietuvoje. Lietuvoje dėl savo polinkio plisti paskelbta invazine rūšimi. Auga vandenyje, kur sudaro sąžalynus, todėl užžėlę vandens baseinai duoda daug žalios masės, kurią galima panaudoti laukams tręšti, taip pat kiaulėms ir kitiems gyvuliams šerti. Tačiau gali turėti ir neigiamą reikšmę – trukdo žuvininkystei, laivininkystei. Kanadinė elodėja taip pat auginama akvariumuose.",
        Characteristics: "Daugiametis vandens augalas, turintis ilgą stiebą ir menturinius lapus. Vyriškieji žiedai turi 3-9 kuokelius. Moteriškieji žiedai pavieniai, išsidėstę viršutinių lapų pažastyse ant ilgų žiedkočių. Vainikėlis baltas. Žydi birželio – rugpjūčio mėn.",
    });

    const toggleExpanded = () => {
        setCardState(prevState => ({
            ...prevState,
            Expanded: !prevState.Expanded
        }));
    };



    return (
        <div className={`animalClickable ${Elodea.Expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
            {!Elodea.Expanded ? (
                <>

                    <div className="bookItemAlign">
                        <h2>{Elodea.Name}</h2>
                        <p>(lot. Elodea canadensis)</p>
                    </div>
                    <img
                        src={Elodea.Image}
                        alt={Elodea.Name}
                    />


                </>
            ) : (
                <>
                    <div className="bookItemWrapper ">

                        <h3>{Elodea.Name}</h3>
                        <p className="Latin">(lot. Elodea canadensis)</p>

                        <img
                            src={Elodea.Image}
                            alt={Elodea.Name}
                        />

                    </div>



                    <div className="bookParagraphs">
                        <h4>Bendra informacija</h4>
                        <p>{Elodea.Information}</p>
                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={Elodea.SecondaryImage}
                                        alt="Postured Stoat"
                                    />
                                </Col>
                            </Row>
                        </Container>

                        <h4>Kaip atpazinti</h4>
                        <p>{Elodea.Characteristics}</p>


                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={Elodea.ThirdImage}
                                        alt="Stoat after a succesful hunt"
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

export default Elodea;
