import { useState } from "react";
import Lynx from "../../assets/images/lynx.jpg";
import Category4 from "../../assets/images/category4.jpg"

function Lusis() {
  const [Lusis, setCardState] = useState({
    Name: "Lusis",
    Status: "2/5",
    Region: "Kaunas",
    Image: Lynx,
    Expanded: false,
    Category: "Siltakraujis",
    Threat: Category4
  });

  const toggleExpanded = () => {
    setCardState(prevState => ({
      ...prevState,
      Expanded: !prevState.Expanded
    }));
  };

  

  return (
    <div className={`animalClickable ${Lusis.Expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
      {!Lusis.Expanded ? (
        <>
          <div className="bookItemAlign">
            <h2>{Lusis.Name}</h2>
            <p>(lot. Lynx lynx)</p>        
          </div>
          <img
            src={Lusis.Image}
            alt={Lusis.Name}
          />
          <img 
            src={Lusis.Threat}
            alt="Category 4 threat"
          />

        </>
      ) : (
        <>
          <img
            src={Lusis.Image}
            alt={Lusis.Name}
          />
          <h2>{Lusis.Name}</h2>
          <p>{Lusis.Region}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </>
      )}
    </div>
  );
}

export default Lusis;
