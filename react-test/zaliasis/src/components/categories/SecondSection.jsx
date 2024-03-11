import '../../styles/categories/SecondSection.css';
import Invasive from '../../assets/images/parazitas.png';
import Aquatic from '../../assets/images/europine.jpg';

function SecondSection() {
  return (
    <>
      <div className='SecondSectionContainer'>
          <div className='SecondFirstSectionCategory'>
                <img className='European' src={Aquatic} alt="Europine" />
                  <h2 className='splitEuropeanFirst'>Dangaus</h2>
                  <h2 className='splitEuropeanSecond'>stebėtojai</h2>
                  <div className='SecondDescriptionContainer'>  
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br></br><br></br>
                        Ullamcorper a lacus vestibulum sed arcu non odio euismod.
                      </p>
                  </div>
            </div>

        <div className='SecondFirstSectionCategory'>
            <img className='Invasive' src={Invasive} alt="Invazine" />
              <h2 className='invasiveNeutral'>Dangaus</h2>
              <h2 className='invasiveNeutral2'> stebėtojai</h2>
              <h2 className='invasiveFlipped'>Dangaus</h2>
              <h2 className='invasiveFlipped2'>stebėtojai</h2>

              <div className='invasiveDescriptionContainer'>  
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mi ipsum faucibus vitae aliquet.<br></br><br></br> Nunc mi ipsum faucibus vitae aliquet.  </p>
              </div>
        </div>


      </div>

    </>
  )
}

export default SecondSection;