import React, { useState } from "react";
import "./_categoriesBar.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const keywords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art ",
  "Guitar",
  "Bengali Songs",
  "Coding",
  "Cricket",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Poor Coder",
  "Shwetabh",
];
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 16,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 13,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  return (
    <>
      <Carousel
        className="categoriesBar"
        swipeable={true}
        draggable={true}
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        customTransition="all .2s"
        itemClass="carouselItems"
        partialVisible={true}
      >
        {keywords.map((value, i) => (
          <span key={i} className={activeElement === value ? "active" : ""}>
            {value}
          </span>
        ))}
      </Carousel>
    </>
  );
};

export default CategoriesBar;
