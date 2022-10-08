import React, { useContext, useState } from "react";
import { AppContext } from "../../helper/Context";
import { Categories } from "./categoriesData";
import { StyledPopularCategories } from "./PopularCategories.styled";

function PopularCategories() {
  const [number, setNumber] = useState(0);

  const { setSubject, setVisibleCategoryBooks } = useContext(AppContext);

  const handleSubject = (param, indexParam) => {
    let handledSubject = param.toString();
    setVisibleCategoryBooks(4);
    setSubject(handledSubject);
    setNumber(indexParam);
  };

  return (
    <StyledPopularCategories className="col">
      <h4>Discover Popular Categories</h4>
      <div className="div">
        {Categories?.map((category, index) => {
          return (
            <button
              key={index}
              onClick={() => handleSubject(category.name, index)}
              className={`normal-btn ${index === number && "active-btn"}`}
            >
              <img src={category.img} alt="" />
              {category.name}
            </button>
          );
        })}
      </div>
    </StyledPopularCategories>
  );
}

export default PopularCategories;
