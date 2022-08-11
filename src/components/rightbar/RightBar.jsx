import React, { useState } from "react";
import FriendsRecommendations from "../friends-recommendations/FriendsRecommendations";
import TopRight from "../top-right/TopRight";
import { StyledRightBar } from "./RightBar.styled";

function RightBar() {
  const [recommendationsLoading, setRecommendationsLoading] = useState(true);
  const [hideDrop, setHideDrop] = useState(false);

  return (
    <StyledRightBar className={hideDrop ? "showDrop" : "hideDrop"}>
      <TopRight />
      <FriendsRecommendations
        setRecommendationsLoading={setRecommendationsLoading}
        recommendationsLoading={recommendationsLoading}
      />
    </StyledRightBar>
  );
}

export default RightBar;
