import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Leftbar from "../../components/leftbar/Leftbar";
import MyBookmarks from "../../components/my-bookmarks/MyBookmarks";
import RightBar from "../../components/rightbar/RightBar";
import { AppContext } from "../../helper/Context";
import { StyledBookmarks } from "./Bookmarks.styled";

function Bookmarks() {
  const { isAuth } = useContext(AppContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
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
