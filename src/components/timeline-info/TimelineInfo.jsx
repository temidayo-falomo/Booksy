import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import FeedCard from "../feed-card/FeedCard";
import PostFeedCard from "../postFeed-card/PostFeedCard";
import { StyledMyTimelineInfo } from "./TimelineInfo.styled";

function TimelineInfo() {
  return (
    <StyledMyTimelineInfo className="row">
      {/* <PostFeedCard /> */}
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <AiFillPlusCircle className="add-btn"/>
    </StyledMyTimelineInfo>
  );
}

export default TimelineInfo;
