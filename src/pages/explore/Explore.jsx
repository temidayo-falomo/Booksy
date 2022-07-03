import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Leftbar from "../../components/leftbar/Leftbar";
import MyExplore from "../../components/my-Explore/MyExplore";
import RightBar from "../../components/rightbar/RightBar";
import { AppContext } from "../../helper/Context";
import { StyledExplore } from "./Explore.styled";

function Explore() {
  const { isAuth } = useContext(AppContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/signin");
    }
  }, []);
  return (
    <StyledExplore>
      <Leftbar />
      <MyExplore />
      <RightBar />
    </StyledExplore>
  );
}

export default Explore;
