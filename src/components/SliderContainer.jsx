import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "../styles/SliderContainer.css";
import { useState } from "react";

function SliderContainer({ SliderInfo }) {
  const [currentSlider, setCurrentSlider] = useState(0);
  const MaxSliders = SliderInfo.Data.length - 1;
  const SliderData = SliderInfo.Data[currentSlider];

  // console.log(SliderData);

  function SliderMoveRigth() {
    // console.log("Slider Move Rigth");
    let newPosSlider = currentSlider + 1;
    if (newPosSlider > MaxSliders) {
      newPosSlider = 0;
    }
    setCurrentSlider(newPosSlider);
  }

  function SliderMoveLeft() {
    // console.log("Slider Move Left");
    let newPosSlider = currentSlider - 1;
    if (newPosSlider < 0) {
      newPosSlider = MaxSliders;
    }
    setCurrentSlider(newPosSlider);
  }

  return (
    <div className="slider-container">
      <button onClick={SliderMoveLeft} className="slider-button">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="slider-body-container">
        {SliderInfo.RenderFunction(SliderData)}
      </div>
      <button onClick={SliderMoveRigth} className="slider-button">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default SliderContainer;
