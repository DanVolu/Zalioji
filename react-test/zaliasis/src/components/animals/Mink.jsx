import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import MinkImg from "../../assets/images/Mink/MinkImg.jpg";
import SecondMink from "../../assets/images/Mink/SecondMink.jpg";
import ThirdMink from "../../assets/images/Mink/ThirdMink.jpg";
import MinkRegion from '../../assets/images/Mink/MinkRegion.png'
import Category0 from "../../assets/images/category0.jpg"

function Mink() {
    const [Mink, setCardState] = useState({
        Name: "Europinė audinė",
        Region: ["Alytus"],
        Image: MinkImg,
        SecondaryImage: SecondMink,
        ThirdImage: ThirdMink,
        Expanded: false,
        Category: "Žinduoliai",
        Threat: Category0,
        Information: "Į Lietuvos raudonąją knygą rūšis įrašyta nuo 1989 iki 2019 metų. Gyvena atskiruose Ispanijos, Prancūzijos, Rumunijos, Švedijos, Lenkijos regionuose ir didžiojoje Rusijos dalyje, bet ne toliau į rytus nei Uralo kalnai. Lietuvoje rūšis nėra pastebėta jau apie tris dešimtmečius, paskutiniai žvėreliai pastebėti 1978 — 1979 m. pietų Lietuvoje, Merkio baseine.  Kartais sutinkamas pavadinimas - švitras. Poruojasi vasario - kovo mėn., jauniklius veda balandžio - birželio mėnesiais. Jais rūpinasi tik patelė. Subręsta antraisiais gyvenimo metais. Pastebėta, kad ten, kur europinė audinė jau 50 metų gyvena greta kanadinės audinės, pirmosios masė dabar vidutiniškai yra šeštadaliu didesnė nei anksčiau.",
        Characteristics: "Kailis nuo rudos iki tamsiai durpinės spalvos, tankus, žvilgantis, baltos lūpos ir balta dėmė yra po gerkle. Gyvena arti vandens, gerai plaukioja ir nardo. Minta vandens gyviais - žuvimis, varlėmis, vėžiais, taip pat ir paukščiais. Dėl maisto iš dalies konkuruoja su kanadine audine, ūdra ir juoduoju šešku.",
        Sightings: MinkRegion
    });

    const toggleExpanded = () => {
        setCardState(prevState => ({
            ...prevState,
            Expanded: !prevState.Expanded
        }));
    };



    return (
        <div className={`animalClickable ${Mink.Expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
            {!Mink.Expanded ? (
                <>

                    <div className="bookItemAlign">
                        <h2>{Mink.Name}</h2>
                        <p>(lot. Mustela lutreola)</p>
                    </div>
                    <img
                        src={Mink.Image}
                        alt={Mink.Name}
                    />
                    <img
                        src={Mink.Threat}
                        alt="Category 0 threat"
                    />

                </>
            ) : (
                <>
                    <div className="bookItemWrapper ">

                        <h3>{Mink.Name}</h3>
                        <p className="Latin">(lot. Mustela lutreola)</p>

                        <img
                            src={Mink.Image}
                            alt={Mink.Name}
                        />
                        <img
                            className="mt-3"
                            src={Mink.Threat}
                            alt="Category 0 threat"
                        />
                    </div>

                    <Container className="mt-3">
                        <a href="https://www.raudonojiknyga.lt/knyga/2-saugomu-rusiu-kategorijos" target='_blank' className="">Ką reiškia šie skaičiai?</a>
                    </Container>

                    <div className="bookParagraphs">
                        <h4>Bendra informacija</h4>
                        <p>{Mink.Information}</p>
                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={Mink.SecondaryImage}
                                        alt="A mink in a tube"
                                    />
                                </Col>
                            </Row>
                        </Container>

                        <h4>Kaip atpazinti</h4>
                        <p>{Mink.Characteristics}</p>


                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={Mink.ThirdImage}
                                        alt="image of a Mink"
                                    />
                                </Col>
                            </Row>
                        </Container>


                        <h4>Possible sighting locations</h4>
                    </div>
                    <img
                        src={Mink.Sightings}
                        alt="possible sightings of the Mink"
                    />

                </>
            )}
        </div>
    );
}

export default Mink;