import React, { useContext, useEffect, useState } from "react";
import { StyledBookmarkInfo } from "./BookmarkInfo.styled";
import { auth, db } from "../../firebase/firebase-config";
import BookmarkCard from "../bookmark-card/BookmarkCard";
import { AppContext } from "../../helper/Context";

function BookmarkInfo() {
  const { bookList, setBookList } = useContext(AppContext);

  return (
    <StyledBookmarkInfo>
      {bookList?.map((data, index) => {
        return <BookmarkCard key={index} {...data} index={index} />;
      })}
    </StyledBookmarkInfo>
  );
}

export default BookmarkInfo;
