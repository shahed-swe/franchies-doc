import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MyFeaturedSply.css";

import SingleCard from "../Cards/SingleCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MyFeaturedSply = () => {
  return (
    <>
      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={3000}
        infinite
        showDots={true}
        
      >
        <div className="flex justify-evenly">
          <SingleCard isSlider={true} />
        </div>
        <div className="flex justify-evenly">
          <SingleCard isSlider={true} />
        </div>
        <div className="flex justify-evenly">
          <SingleCard isSlider={true} />
        </div>
        <div className="flex justify-evenly">
          <SingleCard isSlider={true} />
        </div>
      </Carousel>
    </>
  );
};

export default MyFeaturedSply;
