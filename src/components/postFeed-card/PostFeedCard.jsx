import React from "react";
import { StyledPostFeedCard } from "./PostFeedCard.styled";

function PostFeedCard() {
  return (
    <StyledPostFeedCard className="col">
      <input type="text" placeholder="Book Title.."/>
      <input type="text" placeholder="Author.."/>
      <textarea name="" id="" cols="30" rows="30"></textarea>
      <button>Post</button>
    </StyledPostFeedCard>
  );
}

export default PostFeedCard;
