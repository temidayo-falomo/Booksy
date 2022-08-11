import React, { useContext, useState } from "react";
import { StyledLeftbar } from "./Leftbar.styled";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase-config";
import { AppContext } from "../../helper/Context";
import { signOut } from "firebase/auth";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";
import { BiNotification } from "react-icons/bi";

import {
  RiDashboardFill,
  RiNotification2Line,
  RiBookmarkLine,
} from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { SiApostrophe } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

function Leftbar() {
  const { setIsAuth } = useContext(AppContext);
  const [click, setClick] = useState(false);

  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/signin");
    });
  };

  return (
    <StyledLeftbar className={click ? "active-leftbar col" : "col"}>
      <div className="hamburger" onClick={() => setClick(!click)}>
        {click ? (
          <GrFormClose style={{ fontSize: "2rem" }} />
        ) : (
          <GiHamburgerMenu style={{ fontSize: "1.5rem" }} />
        )}
      </div>
      <div className="leftbar-top col">
        <div className="logo-div">
          <img src="./assets/logo-2.svg" alt="" className="logo" />
        </div>

        <ul className="icons col">
          <li>
            <Tooltip title="Dashboard">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <RiDashboardFill className="icon" />
                <span>Dashboard</span>
              </NavLink>
            </Tooltip>
          </li>

          <li>
            <Tooltip title="Bookmarks">
              <NavLink
                to="/bookmarks"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <RiBookmarkLine className="icon" />
                <span>Bookmarks</span>
              </NavLink>
            </Tooltip>
          </li>

          <li>
            <Tooltip title="Notifications">
              <NavLink
                to="/notifications"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <BiNotification className="icon" />
                <span>Notifications</span>
              </NavLink>
            </Tooltip>
          </li>

          <li>
            <Tooltip title="Explore">
              <NavLink
                to="/explore"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <MdOutlineExplore className="icon" />
                <span>Explore</span>
              </NavLink>
            </Tooltip>
          </li>

          <li>
            <Tooltip title="Timeline">
              <NavLink
                to="/timeline"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <SiApostrophe className="icon" />
                <span>Timeline</span>
              </NavLink>
            </Tooltip>
          </li>
        </ul>
      </div>

      <div className="leftbar-bottom col">
        <Tooltip
          title="profile"
          style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
        >
          <img
            src={localStorage.getItem("profilePic")}
            alt=""
            className="avatar"
          />
          <span className="username">{localStorage.getItem("username")}</span>
        </Tooltip>
        <Tooltip title="logout" position="bottom">
          <FiLogOut onClick={signUserOut} className="signout" />
        </Tooltip>
      </div>
    </StyledLeftbar>
  );
}

export default Leftbar;
