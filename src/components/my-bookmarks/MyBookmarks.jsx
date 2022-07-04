import React, { useContext } from "react";
import { MdBookmarkAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../helper/Context";
import BookmarkInfo from "../bookmark-info/BookmarkInfo";
import { StyledBar } from "../styled-reuseables/Bar.styled";
import { StyledMyBookmarks } from "./MyBookmarks.styled";

function MyBookmarks() {

  let navigate = useNavigate();

  const handleAdd = () => {
    navigate("/");
  };
  
  return (
    <StyledMyBookmarks>
      <StyledBar>
        <h1>My Bookmarks</h1>
        <button
          style={{
            padding: "10px",
            background: "#E75C62",
            color: "white",
            display: "inline-flex",
            alignItems: "center",
          }}
          onClick={handleAdd}
        >
          Add Bookmarks <MdBookmarkAdd />
        </button>
      </StyledBar>
      <BookmarkInfo />
    </StyledMyBookmarks>
  );
}

export default MyBookmarks;
