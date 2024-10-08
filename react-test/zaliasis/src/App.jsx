import Home from './pages/Home.jsx';
import About from './pages/About.jsx'
import AllAnimals from './pages/AllAnimals.jsx'
import Charities from './pages/Charities.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
    return (
        <>

        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='/All' element={<AllAnimals />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Charities' element={<Charities />} />
            </Routes>
        </BrowserRouter>

        </>
    );
}

export default App;