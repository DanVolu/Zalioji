import '../../styles/categories/SecondSection.css';
import Invasive from '../../assets/images/parazitas.png';
import Aquatic from '../../assets/images/europine.jpg';

function SecondSection() {
  return (
    <>
      <div className='SecondSectionContainer'>
          <div className='SecondFirstSectionCategory'>
                <img className='European' src={Aquatic} alt="Europine" />
                  <h2 className='splitEuropeanFirst'>Įvairovės</h2>
                  <h2 className='splitEuropeanSecond'>srovė</h2>
                  <div className='SecondDescriptionContainer'>  
                      <p>
                      Vandens gyvūnai sudaro esminę vandens ekosistemų dalį, palaikančią biologinę pusiausvyrą ir prisidedančią prie vandens telkinių ekologinės harmonijos. Jų išsaugojimas yra būtinas siekiant užtikrinti sveiką ir gyvybingą vandens aplinką.
                      </p>
                  </div>
            </div>

        <div className='SecondFirstSectionCategory'>
            <img className='Invasive' src={Invasive} alt="Invazine" />
              <h2 className='invasiveNeutral'>Svetima</h2>
              <h2 className='invasiveNeutral2'> Grėsmė</h2>
              <h2 className='invasiveFlipped'>Svetima</h2>
              <h2 className='invasiveFlipped2'>Grėsmė</h2>

              <div className='invasiveDescriptionContainer'>  
                  <p>Invaziniai gyvūnai ir augalai gali išstumti vietines rūšis ir pakenkti ekosistemoms bei žemės ūkiui. Todėl juos verta naikinti siekiant išsaugoti biologinę įvairovę ir apsaugoti ekosistemas bei žmonių gerovę.</p>
              </div>
        </div>


      </div>

    </>
  )
}

export default SecondSection;