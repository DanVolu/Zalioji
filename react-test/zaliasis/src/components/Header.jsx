import '../styles/Header.css';
// import lokysImage from '../images/lokys-transformed.jpeg';

function Header() {
  return (
    <>
      <div className='HeaderTextContainer'>
        <div className='HeaderTexts'>
          {/* <img className='Lokys' src={lokysImage} alt="Lokys" /> */}
            <h1>Žalioji knyga</h1>
            <p>Prisidėkime prie rūšių išsaugojimo</p>
            {/* <a>Go to Section</a> */}
        </div>
      </div>
    </>
  )
}

export default Header;
