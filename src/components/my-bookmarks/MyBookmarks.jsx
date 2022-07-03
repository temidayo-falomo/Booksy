import React, { useContext } from "react";
import { AppContext } from "../../helper/Context";
import BookmarkInfo from "../bookmark-info/BookmarkInfo";
import { StyledBar } from "../styled-reuseables/Bar.styled";
import { StyledMyBookmarks } from "./MyBookmarks.styled";

function MyBookmarks() {
  const { hydratedBookmarkedCards, setHydratedBookmarkedCards } =
    useContext(AppContext);

  const handleClear = () => {
    window.localStorage.getItem("MY_BOOKMARKS_ARRAY");
    setHydratedBookmarkedCards([]);
  };
  return (
    <StyledMyBookmarks>
      <StyledBar>
        <h1>My Bookmarks</h1>
        <button
          style={{ padding: "10px", background: "red", color: "white" }}
          onClick={handleClear}
        >
          Clear Bookmarks
        </button>
      </StyledBar>
      <BookmarkInfo />
    </StyledMyBookmarks>
  );
}

export default MyBookmarks;
