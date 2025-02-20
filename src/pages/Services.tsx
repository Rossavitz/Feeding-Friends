import { NavLink } from "react-router-dom";
import pasta from "../photos/pasta/dough.png";
import delicious from "../photos/dinners/delicious.png";
import teaching from "../photos/classes/IMG_3812.png";
import "./Services.css";

function Services() {
  return (
    <div className="services">
      <h2>Services Offered:</h2>
      <div className="services-links">
        <div className="services-links-dinner">
          <NavLink to="/dinner">
            <h4>Dinner Parties</h4>
            <img src={delicious}></img>
          </NavLink>
        </div>
        <div className="services-links-classes">
          <NavLink to="/classes">
            <h4>Cooking Classes</h4>
            <img src={teaching}></img>
          </NavLink>
        </div>
        <div className="services-links-pasta">
          <NavLink to="/pasta">
            <h4>Pasta Nights</h4>
            <img src={pasta}></img>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Services;
