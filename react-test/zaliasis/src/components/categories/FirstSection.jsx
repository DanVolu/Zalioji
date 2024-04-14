import '../../styles/categories/FirstSection.css';
import OwlImage from '../../assets/images/oul1.png';
import LynxImage from '../../assets/images/lynx.jpg';

function FirstSection() {
  return (
    <>
      <div className='FirstSectionContainer'>
        <div className='FirstFirstSectionCategory'>
          <h2>Dangaus stebėtojai</h2>
            <h3>Praplėsk žinias</h3>
            <img className='OwlImage' src={OwlImage} alt="Peleda"/> 
            {/* butinai pataisyk width sito img */}
              <p>Nykstantys paukščiai Lietuvoje kelia nerimą dėl jų svarbos ekosistemoms ir žmonėms. Išsaugoti juos svarbu dėl biologinės įvairovės ir ekosistemų stabilumo.</p>
        </div>

        <div className='SecondFirstSectionCategory'>
            <img className='LynxImage' src={LynxImage} alt="Lūšis" />
              <div className='DescriptionContainer'>  
                <h2>Miško sargai</h2>
                <h3>Išsaugok įvairovę</h3>
                  <p>
                  Žinduoliai Lietuvoje atlieka esminį vaidmenį ekosistemų išlaikyme ir teikia įvairių naudų, įskaitant gamtos reguliavimą, turizmo pritraukimą ir ekonominę vertę. Todėl jų apsauga ir išsaugojimas yra gyvybiškai svarbus Lietuvos biologinei įvairovei ir ekonomikai.
                  </p>
              </div>
        </div>


      </div>

    </>
  )
}

export default FirstSection;