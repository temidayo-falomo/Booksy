import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Leftbar from "../../components/leftbar/Leftbar";
import MyNotifications from "../../components/my-notifications/MyNotifications";
import RightBar from "../../components/rightbar/RightBar";
import { AppContext } from "../../helper/Context";
import { StyledNotifications } from "./Notifications.styled";

function Notifications() {
  const { isAuth } = useContext(AppContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate("/signin");
    }
  }, []);
  
  return (
    <StyledNotifications>
      <Leftbar />
      <MyNotifications />
      <RightBar />
    </StyledNotifications>
  );
}

export default Notifications;
