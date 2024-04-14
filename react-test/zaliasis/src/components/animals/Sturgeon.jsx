import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import SturgeonImg from "../../assets/images/Sturgeon/SturgeonImg.png";
import SecondSturgeon from "../../assets/images/Sturgeon/SecondSturgeon.jpg";
// import WisentRegion from '../../assets/images/Wisent/WisentRegion.jpg'
import Category2 from "../../assets/images/category2.jpg"

function Sturgeon() {
    const [Sturgeon, setCardState] = useState({
        Name: "Aštriašnipis eršketas",
        Region: [
            "Klaipėda",
            "Tauragė"],
        Image: SturgeonImg,
        SecondaryImage: SecondSturgeon,
        // ThirdImage: ThirdSturgeon,
        Expanded: false,
        Category: "Žuvys",
        Threat: Category2,
        Information: "Į Lietuvos raudonąją knygą rūšis įrašyta nuo 2019 metų. Aštriašnipiai eršketai gyvena jūroje netoli kranto, negiliuose vandenyse ir į jūrą įtekančiose didesnėse upėse. Labiausiai ėda vėžiagyvius, kirmėlėmis ir moliuskais. Gėluose vandenyse gaudo žieduotąsias kirmėles, vandens vabzdžius, nariuotakojus, jūroje – lygiakojus, šoniplaukas. O suaugę ėda ir detritą. Didžiausia neigiamą poveikį aštriašnipiams eršketams turi Baltijos jūros priekrančių, Kuršių marių ir Nemuno vandens tarša, intensyvi verslinė žvejyba ir laivyba, sąnašų kaupimasis ir Nemuno deltos seklėjimas. Šiuo metu grėsmę kelia ir Kauno HE (Hidro elektrinės) užtvanka, užkirtusi kelią į buvusias sturių nerštavietes Nemuno vidurupyje. Norint atkurti šią rūšį, būtina mažinti Baltijos jūros priekrančių, Kuršių marių ir Nemuno vandens taršą, nebestatyti naujų užtvankų Nemuno žemupyje, gilinti Nemuno deltos atšakas ir įsijungti į aštriašnipių eršketų populiacijos atkūrimo programas.",
        Characteristics: "Aštriašnipis eršketas yra didelė žuvis. Didžiausias žinomas kūno ilgis iki 403 cm (patinėlių), 430 cm (patelių). Svoris iki 370 kg, nors įprastai suaugusios šios žuvys mažesnės. Migruojantys, subrendę patinai sveria apie 30 – 45 kg, patelės apie 50 – 110 kg.",
        Help: "Aštriašnio eršketo išsaugojimui galima padėti prisidedant prie jo natūralių gyvenamųjų vietų ir buveinių apsaugos. Tai apima vandens telkinių, kuriose jie gyvena, kaip ežerai ir upės, aplinkos kokybės palaikymą ir taršos mažinimą. Svarbu taip pat užkirsti kelią invazinių rūšių įsiskverbimui, kurių populiacijos gali konkuruoti su aštriašniu eršketu maisto ar buveinių atžvilgiu. Informuoti ir šviesti bendruomenę apie šių žuvų ekologinę svarbą bei galimus grėsmes gali padėti suvokti būtinybę jas apsaugoti. Dalyvavimas vietiniuose projektuose ar organizacijose, skirtose gamtos išsaugojimui, taip pat gali būti veiksmingas būdas prisidėti prie aštriašnio eršketo išsaugojimo."
    });

    const toggleExpanded = () => {
        setCardState(prevState => ({
            ...prevState,
            Expanded: !prevState.Expanded
        }));
    };



    return (
        <div className={`animalClickable ${Sturgeon.Expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
            {!Sturgeon.Expanded ? (
                <>

                    <div className="bookItemAlign">
                        <h2>{Sturgeon.Name}</h2>
                        <p>(lot. Acipenser oxyrinchus)</p>
                    </div>
                    <img
                        src={Sturgeon.Image}
                        alt={Sturgeon.Name}
                    />
                    <img
                        src={Sturgeon.Threat}
                        alt="Category 2 threat"
                    />

                </>
            ) : (
                <>
                    <div className="bookItemWrapper ">

                        <h3>{Sturgeon.Name}</h3>
                        <p className="Latin">(lot. Acipenser oxyrinchus)</p>

                        <img
                            src={Sturgeon.Image}
                            alt={Sturgeon.Name}
                        />
                        <img
                            className="mt-3"
                            src={Sturgeon.Threat}
                            alt="Category 2 threat"
                        />
                    </div>

                    <Container className="mt-3">
                        <a href="https://www.raudonojiknyga.lt/knyga/2-saugomu-rusiu-kategorijos" target='_blank' className="">Ką tai reiškia?</a>
                    </Container>

                    <div className="bookParagraphs">
                        <h4>Bendra informacija</h4>
                        <p>{Sturgeon.Information}</p>
                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={Sturgeon.SecondaryImage}
                                        alt="Sturgeon"
                                    />
                                </Col>
                            </Row>
                        </Container>

                        <h4>Bruožai</h4>
                        <p>{Sturgeon.Characteristics}</p>


                        <h4>Kaip galima padėti?</h4>
                        <p>{Sturgeon.Help}</p>

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

export default Sturgeon;
