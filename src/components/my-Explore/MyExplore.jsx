import React from "react";
import ExploreInfo from "../explore-info/ExploreInfo";
import { StyledBar } from "../styled-reuseables/Bar.styled";
import { StyledMyExplore } from "./MyExplore.styled";

function MyExplore() {
  return (
    <StyledMyExplore>
      <StyledBar>
        <h1>Explore Booksy's Vast Api</h1>
        <input
          type="search"
          placeholder="Search book titles, authors, publishers..."
        />
      </StyledBar>
      <ExploreInfo />
    </StyledMyExplore>
  );
}

export default MyExplore;
