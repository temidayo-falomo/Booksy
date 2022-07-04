import React from "react";
import { StyledBar } from "../styled-reuseables/Bar.styled";
import TimelineInfo from "../timeline-info/TimelineInfo";
import { StyledMyTimeline } from "./MyTimeline.styled";

function MyTimeline() {
  return (
    <StyledMyTimeline>
      <StyledBar>
        <h1>My Timeline</h1>
      </StyledBar>
      <TimelineInfo />
    </StyledMyTimeline>
  );
}

export default MyTimeline;
