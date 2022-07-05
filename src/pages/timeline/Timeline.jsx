import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Leftbar from "../../components/leftbar/Leftbar";
import MyTimeline from "../../components/my-timeline/MyTimeline";
import RightBar from "../../components/rightbar/RightBar";
import { StyledTimeline } from "./Timeline.styled";

function Timeline() {
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate("/signin");
    }
  }, []);

  return (
    <StyledTimeline>
      <Leftbar />
      <MyTimeline />
      <RightBar />
    </StyledTimeline>
  );
}

export default Timeline;
