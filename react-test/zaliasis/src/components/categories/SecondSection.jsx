import '../../styles/categories/SecondSection.css';
import OwlImage from '../../images/oul1.png';
import LynxImage from '../../images/lynx.jpg';

function SecondSection() {
  return (
    <>
      <div className='FirstSectionContainer'>
        <div className='FirstFirstSectionCategory'>
          <h2>Dangaus stebėtojai</h2>
            <h3>Praplėsk žinias</h3>
            <img className='OwlImage' src={OwlImage} alt="Peleda"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mi ipsum faucibus vitae aliquet.</p>
        </div>

        <div className='SecondFirstSectionCategory'>
            <img className='LynxImage' src={LynxImage} alt="Lūšis" />
              <div className='DescriptionContainer'>  
                <h2>Dangaus stebėtojai</h2>
                <h3>Praplėsk žinias</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mi ipsum faucibus vitae aliquet.</p>
              </div>
        </div>


      </div>

    </>
  )
}

export default SecondSection;