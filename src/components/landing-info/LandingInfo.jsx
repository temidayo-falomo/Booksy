import React, { useContext } from "react";
import { AppContext } from "../../helper/Context";
import PopularCategories from "../popular-categories/PopularCategories";
import PopularCategory from "../popular-category/PopularCategory";
import TopBook from "../top-book/TopBook";
import { StyledLandingInfo } from "./LandingInfo.styled";
import Carousel from "react-elastic-carousel";

function LandingInfo() {
  const breakPoints = [
    { width: 300, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  const { fictionBooksArray } = useContext(AppContext);

  return (
    <StyledLandingInfo>
      <h4 className="top-picks">Our Picks For the Week!</h4>
      <div className="top-part">
        <Carousel breakPoints={breakPoints}>
          {fictionBooksArray.slice(0, 11).map((book, index) => {
            return <TopBook key={index} {...book} index={index} />;
          })}
        </Carousel>
      </div>

      <div className="bottom-part">
        <PopularCategory />
        <PopularCategories />
      </div>
    </StyledLandingInfo>
  );
}

export default LandingInfo;
