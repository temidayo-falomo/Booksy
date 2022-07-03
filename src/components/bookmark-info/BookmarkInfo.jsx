import React, { useContext, useState } from "react";
import { AppContext } from "../../helper/Context";
import BookmarkCard from "../bookmark-card/BookmarkCard";
import { StyledBookmarkInfo } from "./BookmarkInfo.styled";

function BookmarkInfo() {
  const { bookmarkedCards, setBookMarkedCards, hydratedBookmarkedCards } =
    useContext(AppContext);

  return (
    <StyledBookmarkInfo>
      {hydratedBookmarkedCards.slice(0).reverse().map((data, index) => {
        return <BookmarkCard key={index} {...data} index={index}/>;
      })}
    </StyledBookmarkInfo>
  );
}

export default BookmarkInfo;
