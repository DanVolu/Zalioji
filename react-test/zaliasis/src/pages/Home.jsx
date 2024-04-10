import Header from '../components/Header.jsx'
import NavigationBar from '../components/NavigationBar.jsx'
import FirstSection from '../components/categories/FirstSection.jsx'
import SecondSection from '../components/categories/SecondSection.jsx'
import AnimalList from '../components/AnimalList.jsx'
import '../styles/Navbar.css'
import '../styles/Header.css'
import '../styles/categories/FirstSection.css'
import '../styles/categories/SecondSection.css'
import '../styles/index.css'




function Home() {
    return (
      <>
            <NavigationBar />
            <Header />
            <FirstSection />
            <SecondSection />
            <AnimalList />
      </>
    );
  }
  
  export default Home;