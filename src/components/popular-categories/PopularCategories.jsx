import React from "react";
import CategoryButton from "../category-button/CategoryButton";
import { Categories } from "./categoriesData";
import { StyledPopularCategories } from "./PopularCategories.styled";

function PopularCategories() {
  return (
    <StyledPopularCategories className="col">
      <h4>Discover Popular Categories</h4>
      <div className="div">
        {Categories.map((category, index) => {
          return <CategoryButton key={index} index={index} {...category} />;
        })}
      </div>
    </StyledPopularCategories>
  );
}

export default PopularCategories;
