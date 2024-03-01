import '../styles/Navbar.css';

function Navbar() {
    return (
      <>
        <div className='Navbar'>
          <ul className='Navspread'>
              <li><a href="">Visi gyvunai</a></li>
              <li><a href="">Istatymai</a></li>
              <li><a href="">Labdaros</a></li>
              <li><a href="">Apie</a></li>
          </ul>

          <ul className='Dropdown'>
              <li><a href="">Visi gyvunai</a></li>
              <li><a href="">Istatymai</a></li>
              <li><a href="">Labdaros</a></li>
              <li><a href="">Apie</a></li>
          </ul>
        </div>
      </>
    )
  }
  
  export default Navbar