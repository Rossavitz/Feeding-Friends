import "./Homepage.css";
import Slider from "../photos/Slider";
import Bio from "./Bio";
import Services from "./Services";
import salmon from "../photos/dinners/salmon.png";
import bisque from "../photos/dinners/shrimpbisque.png";
import souffle from "../photos/dinners/souffle.png";
import tartar from "../photos/dinners/tartar.png";
import wellington from "../photos/dinners/wellington.png";
import watermelon from "../photos/dinners/watermelonsalad.png";
import lamb from "../photos/dinners/rackoflamb.png";
import friedgoat from "../photos/dinners/friedgoat.png";
import foie from "../photos/dinners/foiegras.png";
import cooking from "../photos/dinners/cooking.png";
import teacheross from "../photos/pasta/teacherross.png";

function Homepage() {
  const images = [
    cooking,
    teacheross,
    salmon,
    bisque,
    souffle,
    tartar,
    wellington,
    watermelon,
    lamb,
    friedgoat,
    foie,
  ];

  return (
    <div className="homepage">
      <Bio />
      <Services />
      <Slider images={images} />
    </div>
  );
}

export default Homepage;
