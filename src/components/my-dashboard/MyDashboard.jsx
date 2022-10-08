import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase-config";
import { AppContext } from "../../helper/Context";
import LandingInfo from "../landing-info/LandingInfo";
import SearchInfo from "../search-info/SearchInfo";
import { StyledBar } from "../styled-reuseables/Bar.styled";
import { StyledMyDashboard } from "./MyDashboard.styled";

function MyDashboard() {
  const { searchTerm, setSearchTerm, isAuth } = useContext(AppContext);
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setShowSearch(true);
    if (e.target.value === "") {
      setShowSearch(false);
    }
  };

  return (
    <>
      <StyledMyDashboard>
        <StyledBar>
          <h1 id="view">My Dashboard</h1>
          <input
            type="search"
            placeholder="Search book titles, authors, publishers..."
            onChange={(e) => handleSearch(e)}
          />
        </StyledBar>
        {showSearch && <SearchInfo />}
        {<LandingInfo />}
      </StyledMyDashboard>
    </>
  );
}

export default MyDashboard;
