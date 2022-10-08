import React, { useContext } from "react";
import { AppContext } from "../../helper/Context";

import CategoryCard from "../category-card/CategoryCard";

import { StyledPopularCategory } from "./PopularCategory.styled";

function PopularCategory() {
  const {
    categoriesArray,
    hydratedSubject,
    visibleCategoryBooks,
    setVisibleCategoryBooks,
    subject,
  } = useContext(AppContext);

  const handleExtraBooks = () => {
    setVisibleCategoryBooks((prev) => prev + 5);
  };

  return (
    <StyledPopularCategory className="col">
      <h3>{subject} Books</h3>
      {categoriesArray?.slice(0, visibleCategoryBooks).map((item, index) => {
        return <CategoryCard key={index} {...item} />;
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
