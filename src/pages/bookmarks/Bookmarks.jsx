import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Leftbar from "../../components/leftbar/Leftbar";
import MyBookmarks from "../../components/my-bookmarks/MyBookmarks";
import RightBar from "../../components/rightbar/RightBar";
import { StyledBookmarks } from "./Bookmarks.styled";

function Bookmarks() {
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate("/signin");
    }
  }, []);
  
  return (
    <StyledBookmarks>
      <Leftbar />
      <MyBookmarks />
      <RightBar />
    </StyledBookmarks>
  );
}

export default Bookmarks;
