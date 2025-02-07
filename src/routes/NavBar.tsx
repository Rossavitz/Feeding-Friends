import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../photos/CROPPED Feeding-Friends-By-Ross-Logo-Horizontal - Color White - Tagline.png";

function NavBar() {
  function Nav() {
    return (
      <div className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>
        <ul className="nav-bar-ul">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="li-break">|</li>
          <li>
            <NavLink to="/dinner">Dinner Parties</NavLink>
          </li>
          <li className="li-break">|</li>
          <li>
            <NavLink to="/classes">Cooking Classes</NavLink>
          </li>
          <li className="li-break">|</li>
          <li>
            <NavLink to="/pasta">Pasta Nights</NavLink>
          </li>
          <li className="li-break">|</li>
          <li>
            <NavLink
              to="https://linktr.ee/feedingfriendsbyross"
              target="_blank"
              rel="noopener noreferrer"
            >
              Social Medias
            </NavLink>
          </li>
          <li className="li-break">|</li>
          <li>
            <NavLink to="/contact">Contact Me</NavLink>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <Nav />
    </div>
  );
}

export default NavBar;
