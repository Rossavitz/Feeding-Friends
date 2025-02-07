import Card from "./Card";
import pasta from "../photos/pasta.jpg";
import Slider from "../photos/Slider";

export default function Pasta() {
  const pObj = {
    title: "Pasta Nights!",
    url: "/classes",
    description:
      "An unforgettable culinary experience where the art of pasta-making takes center stage! Perfect for parties or gatherings up to 12 people, this hands-on cooking event combines fun, learning, and delicious food. Roll up your sleeves to craft fresh pasta from scratch, guided by a seasoned chef who shares expert tips and tricks along the way. From kneading the dough to shaping fettuccine or ravioli, each participant will master the techniques to create their own mouthwatering dishes. With vibrant sauces and garnishes to complete the meal, this interactive party guarantees a unique and memorable evening filled with laughter, creativity, and the irresistible aroma of homemade pasta.",
    img: "",
  };

  const eObj = {
    title: "How It Works",
    description:
      "We begin by securing the date and finalizing your pasta and sauce selections. Once the menu is set and the price is agreed upon, you can leave the rest to me! While you provide the kitchen and space, I'll take care of everything else—arriving fully prepared with all the ingredients and tools needed to craft our handmade pastas and sauces. As a group we will go step by step starting with creating the dough and finishing with plating and garnishing.",
  };

  const images = [pasta];

  return (
    <div className="cards">
      <div className="card-pasta">
        <Card title={pObj.title} description={pObj.description} />
      </div>
      <div className="card-pasta">
        <Card title={eObj.title} description={eObj.description} />
      </div>
      <Slider images={images} />
    </div>
  );
}
