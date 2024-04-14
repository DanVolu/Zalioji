import '../styles/Description.css'

function Description() {
    return (
        <>
            <h5>KAS YRA ŽALIOJI KNYGA?</h5>
            <div className="descriptionContainer">
                <p>	Tinklapis, skirtas rūšių išsaugojimui, tai svarbu, kovojant su planetos nykstančios biologinės įvairovės problema. Tinklapyje talpinama informacija apie vietines rūšis, vertinant aplinkos pokyčių, miškų naikinimo, neteisėtos žmogaus veiklos įtaką šioms rūšims. Tai tinklapis leidžiantis analizuoti Lietuvos gyvūnų išsaugojimo problemas. Suteikia galimybę imtis veiksmų, siekiant apsaugoti nykstančias rūšis, remiantis mokslininkų atliktais tyrimais ir bendradarbiauti tarp organizacijų. Tinklapis leidžia aiškiai ir lengvai surasti išsamią informacija apie rūšį, būdingą pasirinktam regionui taip pat skatins visuomenę teikti paramą, saugant Lietuvos gamtą ir gyvūniją.</p>
            </div>

            <h5>INFORMACIJOS ŠALTINIAI</h5>
            <div className="descriptionContainer">
                
                <a href='www.raudonojiknyga.lt.'>www.raudonojiknyga.lt.</a><br></br>
                <a href='https://www.vle.lt/'>https://www.vle.lt/</a><br></br>
                <a href='https://www.iucnredlist.org/'>https://www.iucnredlist.org/</a><br></br>
                <a href='https://www.worldwildlife.org/'>https://www.worldwildlife.org/</a><br></br>
            </div>

            <h5>SURADOTĖ NETISKLUMŲ?</h5>
            <div className="descriptionContainer">
                <p>Praneškite rašydami į <span style={{color: 'purple'}}>danielis.volujevicius@stud.vtmc.lt</span></p>
            </div>

        </>
    )
}

export default Description;
