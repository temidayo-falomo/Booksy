import React, { useContext } from "react";
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

function Leftbar() {
  const { isAuth, setIsAuth } = useContext(AppContext);

  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/signin");
    });
  };

  return (
    <StyledLeftbar className="col">
      <div className="leftbar-top col">
        <div>
          <img src="./assets/logo-2.svg" alt="" className="logo" />
        </div>

        <ul className="icons col">
          <li>
            <Tooltip title="Dashboard">
              <Link to="/">
                <RiDashboardFill />
              </Link>
            </Tooltip>
          </li>

          <li>
            <Tooltip title="Bookmarks">
              <Link to="/bookmarks">
                <RiBookmarkLine />
              </Link>
            </Tooltip>
          </li>

          <li>
            <Tooltip title="Notifications">
              <Link to="/notifications">
                <RiNotification2Line />
              </Link>
            </Tooltip>
          </li>

          <li>
            <Tooltip title="Explore">
              <Link to="/explore">
                <MdOutlineExplore />
              </Link>
            </Tooltip>
          </li>

          <li>
            <Tooltip title="Timeline">
              <Link to="/timeline">
                <SiApostrophe />
              </Link>
            </Tooltip>
          </li>
        </ul>
      </div>

      <div className="leftbar-bottom col">
        <Tooltip title="profile">
          <img
            src={localStorage.getItem("profilePic")}
            alt=""
            className="avatar"
          />
        </Tooltip>
        <Tooltip title="logout" position="bottom">
          <FiLogOut onClick={signUserOut} className="signout" />
        </Tooltip>
      </div>
    </StyledLeftbar>
  );
}

export default Leftbar;
