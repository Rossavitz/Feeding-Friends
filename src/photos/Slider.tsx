import { useState } from "react";
import "./Slider.css";

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images = [] }) => {
  const [currImg, setCurrImg] = useState(0);

  const prevImg = () =>
    setCurrImg(currImg === 0 ? images.length - 1 : currImg - 1);

  const nextImg = () =>
    setCurrImg(currImg >= images.length - 1 ? 0 : currImg + 1);

  if (images.length === 0) {
    return <div className="Slider">No images available</div>;
  }

  return (
    <div className="Slider">
      <div className="img-container">
        <img src={images[currImg]} alt="slider-img" className="img modal-img" />
      </div>
      <div className="btn-container">
        <button type="button" onClick={prevImg} className="btn btn--prev">
          {"<"}
        </button>
        <button type="button" onClick={nextImg} className="btn btn--next">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Slider;
