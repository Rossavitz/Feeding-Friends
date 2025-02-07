import Card from "./Card";
import teaching from "../photos/teaching.jpg";
import Slider from "../photos/Slider";
import "./Classes.css";

export default function Classes() {
  const cObj = {
    title: "Private Cooking Classes",
    url: "/classes",
    description:
      "Experience the ultimate convenience of in-home private cooking classes, where I bring all the ingredients and equipment you need to create delicious dishes right to your kitchen. No more trips to the store or worrying about missing essentials. I’ll handle all the details, ensuring you can focus on learning and enjoying the cooking process. Together, we’ll explore techniques and recipes tailored to your tastes and skill level, transforming your home into a culinary classroom. With everything provided, all you need to do is roll up your sleeves and discover the joy of cooking in the comfort of your own space.",
    img: { teaching },
  };

  const dObj = {
    title: "Learn Proper Technique",
    description:
      "Everything from knife skills to sautéing & roasting to seasoning, you’ll learn the techniques and ability to handle any recipe with ease. Learning these techniques not only enhances the quality and flavor of your dishes but also makes cooking more efficient and enjoyable. With personalized guidance in your own kitchen, you’ll build skills that last a lifetime, transforming everyday meals into extraordinary culinary experiences.",
    img: { teaching },
  };

  const images = [teaching];

  return (
    <div className="cards">
      <div className="card-classes">
        <Card
          title={cObj.title as string}
          description={cObj.description as string}
        />
      </div>
      <div className="card-classes">
        <Card
          title={dObj.title as string}
          description={dObj.description as string}
        />
      </div>
      <Slider images={images} />
    </div>
  );
}
