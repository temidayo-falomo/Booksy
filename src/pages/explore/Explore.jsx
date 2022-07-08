import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Leftbar from "../../components/leftbar/Leftbar";
import MyExplore from "../../components/my-Explore/MyExplore";
import { StyledExplore } from "./Explore.styled";

function Explore() {
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate("/signin");
    }
  }, []);

  return (
    <StyledExplore>
      <video autoPlay loop muted id="bg-vid">
        <source src="./assets/vid.mp4" type="video/mp4" />
      </video>
      <Leftbar />
      <MyExplore />
    </StyledExplore>
  );
}

export default Explore;
