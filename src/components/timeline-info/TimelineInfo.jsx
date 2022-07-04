import React from "react";
import FeedCard from "../feed-card/FeedCard";
import PostFeedCard from "../postFeed-card/PostFeedCard";
import { StyledMyTimelineInfo } from "./TimelineInfo.styled";

function TimelineInfo() {
  return (
    <StyledMyTimelineInfo>
      <PostFeedCard />
      <FeedCard />
    </StyledMyTimelineInfo>
  );
}

export default TimelineInfo;
