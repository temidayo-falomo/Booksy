import React, { useState } from "react";
import FriendsRecommendations from "../friends-recommendations/FriendsRecommendations";
import { StyledRightBar } from "./RightBar.styled";
import { BsChevronDoubleDown } from "react-icons/bs";

function RightBar() {
  const [recommendationsLoading, setRecommendationsLoading] = useState(true);
  const [hideDrop, setHideDrop] = useState(false);

  return (
    <StyledRightBar className={hideDrop ? 'showDrop' : 'hideDrop'}>
      <div className="row">
        {/* <img src="./assets/icons/online.svg" alt="" style={{width: '200px', padding: '5px'}}/>
        <BsChevronDoubleDown
          className="down-btn"
          onClick={() => setHideDrop(!hideDrop)}
        /> */}
        <h2>Online Users</h2>
      </div>
      <FriendsRecommendations
        setRecommendationsLoading={setRecommendationsLoading}
        recommendationsLoading={recommendationsLoading}
      />
    </StyledRightBar>
  );
}

export default RightBar;
