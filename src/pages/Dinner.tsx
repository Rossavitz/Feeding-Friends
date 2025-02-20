// import { useState } from "react";
import Card from "./Card";
import menu from "../photos/Sample Menu.jpg";
import "./Dinner.css";
import Slider from "../photos/Slider";
import amuse from "../photos/dinners/amuse.png";
import beets from "../photos/dinners/beetsalad.png";
import brussels from "../photos/dinners/brusselssalad.png";
import cooking from "../photos/dinners/cooking.png";
import burrata from "../photos/dinners/burrata.png";
import corn from "../photos/dinners/cornoncorn.png";
import crudo from "../photos/dinners/crudo.png";
import drizzle from "../photos/dinners/drizzle.png";
import fluke from "../photos/dinners/fluke.png";
import shortrib from "../photos/dinners/shortrib.png";
import shrimp from "../photos/dinners/shrimppasta.png";
import table from "../photos/dinners/table.png";
import tweezers from "../photos/dinners/tweezers.png";
import mousse from "../photos/dinners/chocmousse.png";

export default function Dinner() {
  //for optional toggle image size code
  // const [isEnlarged, setIsEnlarged] = useState(false);

  const dObj = {
    title: "Intimate Dinner Parties",
    url: "/dinner",
    description:
      "Enjoy a personalized in-home dining experience where I handle every detail to make your meal unforgettable. From the moment I step into your kitchen, I take care of everything — meticulously preparing ingredients, crafting a delicious multi-course dinner tailored to your preferences, and ensuring your kitchen is left spotless. Whether it’s an intimate date night, a family gathering, a special celebration, or a fun night with friends, I bring the expertise of a fine dining restaurant to your table, allowing you to relax and enjoy the evening without lifting a finger.",
    img: { cooking },
  };

  const fObj = {
    title: "Personalized Menu",
    description:
      "I will work with you to design a tailored menu that reflects your culinary desires.  From elegant appetizers to decadent desserts, every dish is thoughtfully picked ensuring a well balanced delicious journey. Let's make your dinner a unique celebration with a menu that's all about you.",
  };

  const gObj = {
    title: "Pricing",
    description:
      "Price is largely based on menu items chosen, and number of guests.  Menus are hand crafted per party so there is no set pricing structure.  For a free estimate please  ",
    link: "contact me.",
  };

  const eObj = {
    title: "How It Works",
    description:
      "We start by securing the date and working on your custom menu.  Once a menu is set and price is agreed upon, I handle the rest! Even though you're providing a kitchen and a stove, I will bring all other necessary items for food preparation - pots/pans, utensils, and all food items. A server is also provided to assist in all aspects of dinner - serving food and beverages, handling requests, and keeping the table tidy between courses.  To ensure the meal looks as great as it tastes, we will set your table with our own plates, utensils, linens, and optionally minor table decor.",
  };

  const images = [
    table,
    cooking,
    tweezers,
    crudo,
    amuse,
    corn,
    fluke,
    mousse,
    drizzle,
    beets,
    brussels,
    burrata,
    shortrib,
    shrimp,
  ];

  //optional toggle image size code
  // const toggleImageSize = () => {
  //   setIsEnlarged(!isEnlarged);
  // };

  return (
    <div className="cards">
      <div className="card-dinner">
        <Card title={dObj.title} description={dObj.description} />
      </div>
      <Slider images={images} />
      <div className="card-dinner">
        <Card title={fObj.title} description={fObj.description} />
      </div>
      <div className="dinner-menu">
        <img
          src={menu}
          //styling for optional toggle image size code
          // style={{
          //   width: isEnlarged ? "75%" : "30%",
          //   transition: "width 0.3s ease",
          //   cursor: "pointer",
          // }}
          // onClick={toggleImageSize}
        />
      </div>
      <div className="card-dinner">
        <Card title={eObj.title} description={eObj.description} />
      </div>
      <div className="card-dinner">
        <Card
          title={gObj.title}
          description={gObj.description}
          link={gObj.link}
        />
      </div>
    </div>
  );
}
