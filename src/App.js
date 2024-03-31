import React from "react";
import Card from "./components/card/Card.js";
import style from "./App.module.css";
import { useEffect, useState } from "react";
import Carousel from "./components/carousel/Carousel.js";

function App() {
  const [data, setData] = useState({});

  let colors = [
    "#41CA6E",
    "#FAB153",
    "#7277D5",
    "#F87D51",
    "#ED5466",
    "#4EC2E7",
  ];

  useEffect(() => {
    fetch("https://krds-assignment.github.io/aoc/api-assets/data.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  let cardStack = data?.features?.map((feature, index) => (
    <Card
      key={index}
      title={feature.title}
      logo={feature.logo}
      image={feature.image}
      description={feature.desc.toUpperCase()}
      color={colors[index]}
    />
  ));

  return (
    <div className={style.app}>
      <div className={style.header}>
        <img src={data?.logo} className={style.header_logo} />
      </div>

      <div className={style.container}>{cardStack}</div>

      
      <div className={style.carousel_container}>
        <Carousel>{cardStack}</Carousel>
      </div>
    </div>
  );
}

export default App;
