import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../helper/Context";

import CategoryCard from "../category-card/CategoryCard";

import { StyledPopularCategory } from "./PopularCategory.styled";


function PopularCategory() {
  const { categoriesArray, subject, hydratedSubject } = useContext(AppContext);

  return (
    <StyledPopularCategory className="col">
      <h3>{hydratedSubject} Category</h3>
      {categoriesArray.map((item, index) => {
        return <CategoryCard key={index} {...item} />;
      })}
    </StyledPopularCategory>
  );
}

export default PopularCategory;
