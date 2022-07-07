import React from "react";
import FeedCard from "../feed-card/FeedCard";
import PostFeedCard from "../postFeed-card/PostFeedCard";
import { StyledMyTimelineInfo } from "./TimelineInfo.styled";

function TimelineInfo() {
  return (
    <StyledMyTimelineInfo className="row">
      <PostFeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </StyledMyTimelineInfo>
  );
}

export default TimelineInfo;
