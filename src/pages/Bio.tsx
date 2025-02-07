import Card from "./Card";
import steaks from "../photos/steaks.jpg";

export default function Bio() {
  const bObj = {
    title: "About me!",
    description:
      "What began as a job as a server has grown into a 20-year passion for feeding people.  My love for customer service and creating delicious meals has led me to bring my expertise directly to you. Drawing from my rich background in professional restaurants I now offer private dining services blending creativity, skill and a love for food to craft memorable moments for every occasion.",
    img: steaks,
  };

  return (
    <div className="cards">
      <div className="card-bio">
        <Card
          title={bObj.title as string}
          description={bObj.description as string}
          img={steaks}
        />
      </div>
    </div>
  );
}
