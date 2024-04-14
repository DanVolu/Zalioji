import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import MinnowImg from "../../assets/images/Minnow/MinnowImg.webp";
import SecondMinnow from "../../assets/images/Minnow/SecondMinnow.jpg";
// import WisentRegion from '../../assets/images/Wisent/WisentRegion.jpg'
import Category4 from "../../assets/images/category4.jpg"

function Minnow() {
    const [Minnow, setCardState] = useState({
        Name: "Ežerinė rainė ",
        Region: [
            "Utena",
            "Šiauliai"
        ],
        Image: MinnowImg,
        SecondaryImage: SecondMinnow,
        // ThirdImage: ThirdMinnow,
        Expanded: false,
        Category: "Žuvys",
        Threat: Category4,
        Information: "Į Lietuvos raudonąją knygą rūšis įrašyta nuo 2010 metų. Ežerinės rainės gyvena priedugniniame ežerėlių sluoksnyje. Žiemą užsirausia giliai į dumblą ir įminga. Minta smulkiais moliuskais, vabzdžių lervomis, kirmėlėmis, taip pat ėda ir kitų žuvų ikrus. Subręsta 2 metų, kai kūno ilgis siekia 6 cm, o svoris - 3,5 g. Neršia gegužės - birželio mėn., kai vandens temperatūra 9-11 °C. Neršia porcijomis (3-4 kartus), vislumas - 19-26 tūkst. ikrelių. Ikrai lipnūs, vystosi vandens augalijoje 10-15 parų. Kai lervučių ilgis pasiekia 15 mm, dar prieš trynio maišelio rezorbciją jos pradeda maitintis planktoniniais vėžiagyviais.",
        Characteristics: "Ežerinė rainė yra trumpaamžė (gyvena iki 6 metų) smulki žuvis (užauga iki 13 cm). Burna nedidelė, galinė. Kūnas išmargintas smulkiomis juodomis ar rudomis dėmėmis. Ežerinei rainei būdingas didelis morfologinis kintamumas, todėl anksčiau buvo išskiriami 7 porūšiai. Lietuvoje pagautų žuvų ilgis buvo 59-77 mm, svoris - 2-5 g.        ",
        Help: "Siekiant padėti išsaugoti Ežerinę rainę, svarbu užtikrinti tinkamas jos buveines ir gyvenvietes, įskaitant ežerus, pelkes ir kitas vandens telkinių aplinkas, kuriuose jos gyvena. Tai reiškia rūpintis šių teritorijų valdymu ir apsauga nuo neigiamų žmogaus veiklos poveikių, pvz., taršos ar habitatų sunaikinimo. Be to, svarbu vykdyti mokslinius tyrimus ir stebėti Ežerinės rainės populiacijas, siekiant geriau suprasti jų būklę ir poreikius. Švietimas ir informavimas apie Ežerinės rainės ekologinę svarbą ir pavojus, su kuriais jos susiduria, taip pat yra svarbus, kad bendruomenė galėtų suprasti, kaip prisidėti prie jų išsaugojimo. Dalyvavimas vietinėse iniciatyvose ir organizacijose, skirtose gamtos apsaugai ir vandens telkinių valdymui, taip pat gali būti veiksmingas būdas padėti prie Ežerinės rainės išsaugojimo pastangų.        "
    });

    const toggleExpanded = () => {
        setCardState(prevState => ({
            ...prevState,
            Expanded: !prevState.Expanded
        }));
    };



    return (
        <div className={`animalClickable ${Minnow.Expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
            {!Minnow.Expanded ? (
                <>

                    <div className="bookItemAlign">
                        <h2>{Minnow.Name}</h2>
                        <p>(lot. Acipenser sturio)</p>
                    </div>
                    <img
                        src={Minnow.Image}
                        alt={Minnow.Name}
                    />
                    <img
                        src={Minnow.Threat}
                        alt="Category 4 threat"
                    />

                </>
            ) : (
                <>
                    <div className="bookItemWrapper ">

                        <h3>{Minnow.Name}</h3>
                        <p className="Latin">(lot. Acipenser sturio)</p>

                        <img
                            src={Minnow.Image}
                            alt={Minnow.Name}
                        />
                        <img
                            className="mt-3"
                            src={Minnow.Threat}
                            alt="Category 4 threat"
                        />
                    </div>

                    <Container className="mt-3">
                        <a href="https://www.raudonojiknyga.lt/knyga/2-saugomu-rusiu-kategorijos" target='_blank' className="">Ką tai reiškia?</a>
                    </Container>

                    <div className="bookParagraphs">
                        <h4>Bendra informacija</h4>
                        <p>{Minnow.Information}</p>
                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={Minnow.SecondaryImage}
                                        alt="Minnow"
                                    />
                                </Col>
                            </Row>
                        </Container>

                        <h4>Bruožai</h4>
                        <p>{Minnow.Characteristics}</p>


                        <h4>Kaip galima padėti?</h4>
                        <p>{Minnow.Help}</p>


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

export default Minnow;
