import React, { useState } from "react";
import style from "./Carousel.module.css";

function Carousel({ children }) {
  const [current, setCurrent] = useState(0);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const minSpan = 50;

  function onTouchStart(e) {
    setEnd(null);
    setStart(e.targetTouches[0].clientX);
  }

  function onTouchMove(e) {
    setEnd(e.targetTouches[0].clientX);
  }

  function onTouchEnd() {
    if (!start || !end) return;

    const distance = start - end;
    const leftSwipe = distance > minSpan;
    const rightSwipe = distance < -minSpan;

    leftSwipe && nextSlide();
    rightSwipe && prevSlide();
  }

  function prevSlide() {
    current <= 0 ? setCurrent(children.length - 1) : setCurrent(current - 1);
  }

  function nextSlide() {
    current == children.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  }

  function goTo(x) {
    setCurrent(x);
  }

  return (
    <div className={`${style.container}`} >
      <div className={`${style.wrapper}`}>
        <div className={`${style.slider}`}>
          {children?.map((child, i) => (
            <div
              className={`${style.slide}`}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              key={i}
              style={{ transform: `translateX(${(i - current) * 100}%)` }}
            >
              {child}
            </div>
          ))}
        </div>

        <div className={`${style.dots}`}>
          {children?.map((_, i) => (
            <div
              className={current == i ? style.dotActive : style.dot}
              key={i}
              onClick={() => goTo(i)}
            ></div>
          ))}
        </div>
      </div>

      <button className={`${style.right}`} onClick={() => nextSlide()}>
        &#10095;
      </button>
      <button className={`${style.left}`} onClick={() => prevSlide()}>
        &#10094;
      </button>
    </div>
  );
}

export default Carousel;
