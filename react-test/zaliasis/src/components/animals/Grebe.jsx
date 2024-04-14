import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import GrebeImg from "../../assets/images/Grebe/GrebeImg.webp";
import SecondGrebe from "../../assets/images/Grebe/SecondGrebe.webp";
import ThirdGrebe from "../../assets/images/Grebe/ThirdGrebe.webp";
// import WisentRegion from '../../assets/images/Wisent/WisentRegion.webp'
import Category3 from "../../assets/images/category3.jpg"

function Grebe() {
    const [EagleOwl, setCardState] = useState({
        Name: "Juodakaklis kragas",
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
        Image: GrebeImg,
        SecondaryImage: SecondGrebe,
        ThirdImage: ThirdGrebe,
        Expanded: false,
        Category: "Paukščiai",
        Threat: Category3,
        Information: "Į Lietuvos raudonąją knygą rūšis įrašyta nuo 1989 metų. Mėgsta nedidelių ežerų seklias užžėlusias pakrantes, pelkėtas kūdras, tvenkinius, seklius užtakius. Įsikuria nenaudojamuose durpynuose, karjeruose, kūdrose. Labai atsargus paukštis, retai kada išplaukia į atvirus vandens plotus. Slapstosi augalų tankmėse. Pajutęs pavojų, tuojau sprunka.",
        Characteristics: "Juodakaklio krago nugarinė pusė juodai rusva, galvos viršus tamsesnis. Galva gausiai apaugusi plunksnomis, todėl atrodo lyg su kuoduku. Per skruostus eina ilga, šviesiai geltona žvilganti juosta. Kita galvos dalis, kaklas ir pagurklis juodi. Mažosios plasnojamosios plunksnos baltos. Pilvinė pusė balta, šonai ryškiai rudi. Snapas juodas, kojos alyvinės pilkos spalvos, akys raudonos.",
        Help: "Prisidedant prie Juodakaklio krago išsaugojimo, svarbu remti jo natūralias gyvenvietes ir buveines, pavyzdžiui, saugoti miškus ir pievas, kuriose jis gyvena. Taip pat reikia užtikrinti draudžiamų teritorijų arba rezervatų sukūrimą, kad būtų apsaugota jo gyvenamoji aplinka nuo žmogaus veiklos. Būtina vykdyti mokslinius tyrimus ir stebėjimus, siekiant geriau suprasti šios rūšies populiacijos būklę ir reikiamas apsaugos priemones. Taip pat svarbu edukacija ir informavimas apie Juodakaklio krago ekologinę svarbą ir pavojus, su kuriais jis susiduria, kad bendruomenės galėtų prisidėti prie jo išsaugojimo pastangų.        "
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
                        alt="Category 4 threat"
                    />

                </>
            ) : (
                <>
                    <div className="bookItemWrapper ">

                        <h3>{EagleOwl.Name}</h3>
                        <p className="Latin">(lot. Gavia arctica)</p>

                        <img
                            src={EagleOwl.Image}
                            alt={EagleOwl.Name}
                        />
                        <img
                            className="mt-3"
                            src={EagleOwl.Threat}
                            alt="Category 4 threat"
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
                                        alt="Postured Stoat"
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
                                        alt="Stoat after a succesful hunt"
                                    />
                                </Col>
                            </Row>
                        </Container>


                        <h4>Kaip galima padėti?</h4>
                        <p>{Grebe.Help}</p>


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

export default Grebe;
