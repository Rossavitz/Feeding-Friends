import { NavLink } from "react-router-dom";
import salmon from "../photos/salmon.jpg";
import "./Services.css";

function Services() {
  return (
    <div className="services">
      <h2>Services Offered:</h2>
      <div className="services-links">
        <div className="services-links-dinner">
          <NavLink to="/dinner">
            <h4>Dinner Parties</h4>
            <img src={salmon}></img>
          </NavLink>
        </div>
        <div className="services-links-classes">
          <NavLink to="/classes">
            <h4>Cooking Classes</h4>
            <img src={salmon}></img>
          </NavLink>
        </div>
        <div className="services-links-pasta">
          <NavLink to="/pasta">
            <h4>Pasta Nights</h4>
            <img src={salmon}></img>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Services;
