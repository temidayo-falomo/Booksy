import React from "react";
import { Link } from "react-router-dom";
import { StyledTopRight } from "./TopRight.styled";
import { BsFillCircleFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";

function TopRight() {
  return (
    <StyledTopRight className="row">
      <h4 style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
        <BsFillCircleFill style={{ color: "#2FD414" }} />
        Online
      </h4>
      <ul className="users-pp row">
        <img src="./assets/users.svg" alt="" />
      </ul>
      <Link to="/timeline">
        <FaUserFriends className="plus-btn" />
      </Link>
    </StyledTopRight>
  );
}

export default TopRight;
