import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../helper/Context";

import CategoryCard from "../category-card/CategoryCard";

import { StyledPopularCategory } from "./PopularCategory.styled";

function PopularCategory() {
  const {
    categoriesArray,
    subject,
    hydratedSubject,
    visibleCategoryBooks,
    setVisibleCategoryBooks,
  } = useContext(AppContext);

  const handleExtraBooks = () => {
    setVisibleCategoryBooks((prev) => prev + 5);
  };

  return (
    <StyledPopularCategory className="col">
      <h3>{hydratedSubject} Category</h3>
      {categoriesArray.slice(0, visibleCategoryBooks).map((item, index) => {
        return <CategoryCard key={item.id} {...item} />;
      })}
      {visibleCategoryBooks <= 40 ? (
        <button className="view-more-category" onClick={handleExtraBooks}>
          View More Books
        </button>
      ) : (
        <button disabled>View More Books</button>
      )}
    </StyledPopularCategory>
  );
}

export default PopularCategory;
