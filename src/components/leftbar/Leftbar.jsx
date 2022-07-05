import React, { useContext, useState } from "react";
import { StyledLeftbar } from "./Leftbar.styled";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase-config";
import { AppContext } from "../../helper/Context";
import { signOut } from "firebase/auth";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

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
  const { isAuth, setIsAuth } = useContext(AppContext);
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
        {click ? <GrFormClose /> : <GiHamburgerMenu />}
      </div>
      <div className="leftbar-top col">
        <div className="logo-div">
          <img src="./assets/logo-2.svg" alt="" className="logo" />
        </div>

        <ul className="icons col">
          <li>
            <Tooltip title="Dashboard">
              <Link to="/">
                <RiDashboardFill />
                <span>Dashboard</span>
              </Link>
            </Tooltip>
          </li>

          <li>
            <Tooltip title="Bookmarks">
              <Link to="/bookmarks">
                <RiBookmarkLine />
                <span>Bookmarks</span>
              </Link>
            </Tooltip>
          </li>

          <li>
            <Tooltip title="Notifications">
              <Link to="/notifications">
                <RiNotification2Line />
                <span>Notifications</span>
              </Link>
            </Tooltip>
          </li>

          <li>
            <Tooltip title="Explore">
              <Link to="/explore">
                <MdOutlineExplore />
                <span>Explore</span>
              </Link>
            </Tooltip>
          </li>

          <li>
            <Tooltip title="Timeline">
              <Link to="/timeline">
                <SiApostrophe />
                <span>Timeline</span>
              </Link>
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
