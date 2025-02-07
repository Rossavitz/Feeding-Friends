import "./Homepage.css";
import pasta from "../photos/pasta.jpg";
import Slider from "../photos/Slider";
import steaks from "../photos/steaks.jpg";
import Bio from "./Bio";
import Services from "./Services";

function Homepage() {
  const images = [steaks, pasta];

  return (
    <div className="homepage">
      <Bio />
      <Services />
      <Slider images={images} />
    </div>
  );
}

export default Homepage;
