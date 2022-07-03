import React from "react";
import { StyledMyNotifications } from "./MyNotifications.styled";
import { StyledBar } from "../styled-reuseables/Bar.styled";
import NotificationInfo from "../notification-info/NotificationInfo";

function MyNotifications() {
  return (
    <StyledMyNotifications>
      <StyledBar>
        <h1>My Notifications</h1>
      </StyledBar>
      <NotificationInfo />
    </StyledMyNotifications>
  );
}

export default MyNotifications;
