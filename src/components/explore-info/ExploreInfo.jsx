import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledExploreInfo } from "./ExploreInfo.styled";

function ExploreInfo() {
  let navigate = useNavigate();
  return (
    <StyledExploreInfo>
      <h1>Explore!</h1>
      <h4>Page In Progress.</h4>
      <button className="button-81" onClick={() => navigate("/")}>
        Dashboard
      </button>
    </StyledExploreInfo>
  );
}

export default ExploreInfo;
