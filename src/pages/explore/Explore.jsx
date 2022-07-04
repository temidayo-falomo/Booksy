import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Leftbar from "../../components/leftbar/Leftbar";
import MyExplore from "../../components/my-Explore/MyExplore";
import { AppContext } from "../../helper/Context";
import { StyledExplore } from "./Explore.styled";

function Explore() {
  const { isAuth } = useContext(AppContext);
  let navigate = useNavigate();

  // useEffect(() => {
  //   if (!isAuth) {
  //     navigate("/signin");
  //   }
  // }, []);
  return (
    <StyledExplore>
      {/* <video autoPlay loop muted id="bg-vid">
        <source src="./assets/pexels-rodnae-productions-8499706.mp4" type="video/mp4" />
      </video> */}
      <Leftbar />
      <MyExplore />
    </StyledExplore>
  );
}

export default Explore;
