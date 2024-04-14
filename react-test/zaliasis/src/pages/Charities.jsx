import NavigationBar from '../components/NavigationBar.jsx'
import '../styles/Navbar.css'
import '../styles/Description.css'



function Charities() {
  return (
    <>
        <NavigationBar></NavigationBar>
        <h5>Rūpi gyvūnų išsaugojimas?<br></br><br></br>Paremk!<br></br></h5>
        <div className="descriptionContainer">
                <p><a href="http://www.glis.lt/?site=1" target='_blank' >Lietuvos Gamtos Fondas</a></p>
                <p><a href="https://support.defenders.org/page/65651/donate/1?ea.tracking.id=web_menu_donate-button" target='_blank' >Defenders of Wildlife</a></p>
                <p><a href="https://protect.worldwildlife.org/page/65220/donate/1?en_og_source=Web_Donation&ea.tracking.id=Web_Topnav&supporter.appealCode=AWE2402OQ18299A01179RX" target='_blank' >World Wild Life</a></p>
                <p><a href="https://www.gvi.ie/" target='_blank' >GVI</a></p>
                <p><a href="https://www.iucn.org/donate" target='_blank' >IUCN (Tarptautinė gamtos apsaugos sąjunga)</a></p>
                
        </div>

    </>
  );
}

export default Charities;