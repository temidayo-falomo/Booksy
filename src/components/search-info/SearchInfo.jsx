import React, { useContext } from "react";
import { AppContext } from "../../helper/Context";
import SearchCard from "../search-card/SearchCard";
import { StyledSearchInfo } from "./SearchInfo.styled";

function SearchInfo() {
  const { searchList, setMaxResults } = useContext(AppContext);

  return (
    <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
      <h4 style={{ padding: "20px" }}>Results</h4>
      <StyledSearchInfo>
        {searchList.map((term, index) => {
          return <SearchCard key={term.id} {...term} />;
        })}
      </StyledSearchInfo>
      <button
        style={{
          margin: "1rem auto",
          alignSelf: "center",
          width: "300px",
          padding: "20px",
          background: "#1DC0FF",
          color: "white",
        }}
        onClick={() => setMaxResults((prev) => prev + 5)}
      >
        Load More Results
      </button>
    </div>
  );
}

export default SearchInfo;
