import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import AtlanticSturgeonImg from "../../assets/images/AtlanticSturgeon/AtlanticSturgeonImg.jpg";
import SecondAtlanticSturgeon from "../../assets/images/AtlanticSturgeon/SecondAtlanticSturgeon.jpg";
// import WisentRegion from '../../assets/images/Wisent/WisentRegion.jpg'
import Category0 from "../../assets/images/category0.jpg"

function AtlanticSturgeon() {
    const [AtlanticSturgeon, setCardState] = useState({
        Name: "Atlantinis eršketas",
        Region: [
            "Klaipėda"
        ],
        Image: AtlanticSturgeonImg,
        SecondaryImage: SecondAtlanticSturgeon,
        // ThirdImage: ThirdAtlanticSturgeon,
        Expanded: false,
        Category: "Žuvys",
        Threat: Category0,
        Information: " Į Lietuvos raudonąją knygą rūšis įrašyta nuo 1989 iki 2019 metų. XIX a. - XX a. pradžioje Lietuvoje atplaukdavo neršti į Nemuną iki Druskininkų ir Nerį. Remiantis oficialiais šaltiniais, paskutiniai sturiai Lietuvoje sužvejoti: 1939 m. Nemune ties Vilkija (2,5 m ilgio, 122 kg svorio); 1955 m. Kuršių mariose ties Nida (2,54 m ilgio, 120 kg svorio ikringa patelė); 1960 m. Baltijos jūroje ties Nida (2,1 m ilgio, 82 kg svorio patinas). Vėliau Lietuvos vandenyse sturių sugauta nebuvo. Sturiams didžiausia neigiamą poveikį turėjo Baltijos jūros priekrančių, Kuršių marių ir Nemuno vandens tarša, intensyvi verslinė žvejyba ir laivyba, sąnašų kaupimasis ir Nemuno deltos seklėjimas. Šiuo metu grėsme kelia ir Kauno HE (Hidro elektrinės) užtvanka, užkirtusi kelią į buvusias sturių nerštavietes Nemuno vidurupyje. Norint atkurti šią rūšį, būtina mažinti Baltijos jūros priekrančių, Kuršių marių ir Nemuno vandens taršą, nebestatyti naujų užtvankų Nemuno žemupyje, gilinti Nemuno deltos atšakas ir įsijungti a sturių populiacijos atkūrimo programas.",
        Characteristics: "Kūnas ilgas, 31-43 cm ilgio, nors užauga ir iki 5 m. Sveria iki 400 kg. Pilvinė pusė plokščia, nugarinė - iškili. Šnipas ilgas, su 4 ūsais. Nugara pilkšvai rusva ar pilkšvai rausva. Pilvas šviesus. Nugarinėje pusėje yra 9-14 kaulinių plokštelių, šoninėje 24-36, pilvinėje 10-12 labai stambių. Minta smulkiomis žuvimis, bestuburiais. Nerštui migruoja į Nemuno žemupį, todėl žuvis praeivė. Paplitusi Baltijos jūroje. Labai reta nykstanti žuvis.",
        Help: "gali padėti išsaugoti Atlantinę ersketą įgyvendindamas kelis veiksmus. Pirmiausia, svarbu rinktis tvarius žuvies produktus, kurie yra pagaminti tausiomis žvejybos praktikomis arba yra sertifikuoti kaip tvarūs. Sąmoningas žuvies vartojimas taip pat yra svarbus, mažinant per didelį žuvies suvartojimą. Be to, būtina informuoti kitus apie Atlantinės ersketos išsaugojimo svarbą ir skatinti tvarų žuvies vartojimą. Taip pat svarbu palaikyti jūrų ekosistemas ir remti politiką, skatinančią tvarias žvejybos praktikas ir jūrų išteklių apsaugą. Visi šie veiksmai gali padėti prisidėti prie Atlantinės ersketos ir kitų jūrų rūšių išsaugojimo."
    });

    const toggleExpanded = () => {
        setCardState(prevState => ({
            ...prevState,
            Expanded: !prevState.Expanded
        }));
    };



    return (
        <div className={`animalClickable ${AtlanticSturgeon.Expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
            {!AtlanticSturgeon.Expanded ? (
                <>

                    <div className="bookItemAlign">
                        <h2>{AtlanticSturgeon.Name}</h2>
                        <p>(lot. Acipenser sturio)</p>
                    </div>
                    <img
                        src={AtlanticSturgeon.Image}
                        alt={AtlanticSturgeon.Name}
                    />
                    <img
                        src={AtlanticSturgeon.Threat}
                        alt="Category 0 threat"
                    />

                </>
            ) : (
                <>
                    <div className="bookItemWrapper ">

                        <h3>{AtlanticSturgeon.Name}</h3>
                        <p className="Latin">(lot. Acipenser sturio)</p>

                        <img
                            src={AtlanticSturgeon.Image}
                            alt={AtlanticSturgeon.Name}
                        />
                        <img
                            className="mt-3"
                            src={AtlanticSturgeon.Threat}
                            alt="Category 0 threat"
                        />
                    </div>

                    <Container className="mt-3">
                        <a href="https://www.raudonojiknyga.lt/knyga/2-saugomu-rusiu-kategorijos" target='_blank' className="">Ką tai reiškia?</a>
                    </Container>

                    <div className="bookParagraphs">
                        <h4>Bendra informacija</h4>
                        <p>{AtlanticSturgeon.Information}</p>
                        <Container className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col>
                                    <img
                                        className="my-3"
                                        src={AtlanticSturgeon.SecondaryImage}
                                        alt="AtlanticSturgeon"
                                    />
                                </Col>
                            </Row>
                        </Container>

                        <h4>Bruožai</h4>
                        <p>{AtlanticSturgeon.Characteristics}</p>

                        <h4>Kaip galima padėti?</h4>
                        <p>{AtlanticSturgeon.Help}</p>



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

export default AtlanticSturgeon;
