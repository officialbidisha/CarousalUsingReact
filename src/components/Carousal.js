import CarousalItem from "./CarousalItem";
import "./Carousal.css";
import { useEffect, useState, Fragment } from "react";
const Carousal = (props) => {
  /**
   * Props
   */
  const { card } = props;
  const firstSlide = card[0];
  const secondSlide = card[1];
  const lastSlide = card[card.length - 1];

  const [activeIndex, setActiveIndex] = useState(0);

  const [slides, setSlides] = useState([card[0], card[1], card[2]]);

  /**
   * States
   */
  const [isSwipingPaused, setIsSwipingPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = card.length - 1;
    } else if (newIndex >= card.length) {
      newIndex = 0;
    }

    let _slides = [];
    let activeIn = newIndex+1;
    // We're at the last slide.

    if (activeIn === card.length - 1)
      _slides = [card[card.length - 2], lastSlide, firstSlide];
    // We're back at the first slide. Just reset to how it was on initial render
    else if (activeIn === 0) _slides = [lastSlide, firstSlide, secondSlide];
    // Create an array of the previous last slide, and the next two slides that follow it.
    else _slides = card.slice(activeIn - 1, activeIn + 2);

    //  console.log("Slides" , _slides);
    setSlides(_slides);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSwipingPaused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div
      className="carousal"
      onMouseEnter={() => setIsSwipingPaused(true)}
      onMouseLeave={() => setIsSwipingPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${slides[1]* 100}%)` }}
      >
        {slides.map((child, index) =>  (
          <Fragment key={child.id +1 }>
            <CarousalItem
              item={child}
              width="100%"
            ></CarousalItem>
          </Fragment>
        ))}
      
      </div>
      <div className="indicators">
        <button
          className="prev-button"
          onClick={(e) => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        {<p>{activeIndex}</p>}
        <button
          className="next-button"
          onClick={(e) => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default Carousal;
