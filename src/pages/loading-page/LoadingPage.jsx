import React from "react";
import { StyledLoadingPage } from "./LoadingPage.styled";

function LoadingPage() {
  return (
    <StyledLoadingPage>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </StyledLoadingPage>
  );
}

export default LoadingPage;
