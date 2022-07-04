import React from "react";
import Leftbar from "../../components/leftbar/Leftbar";
import MyTimeline from "../../components/my-timeline/MyTimeline";
import RightBar from "../../components/rightbar/RightBar";
import { StyledTimeline } from "./Timeline.styled";

function Timeline() {
  return (
    <StyledTimeline>
      <Leftbar />
      <MyTimeline />
      <RightBar />
    </StyledTimeline>
  );
}

export default Timeline;
