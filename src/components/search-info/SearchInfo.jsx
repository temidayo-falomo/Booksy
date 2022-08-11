import React, { useContext } from "react";
import { AppContext } from "../../helper/Context";
import SearchCard from "../search-card/SearchCard";
import { StyledSearchInfo } from "./SearchInfo.styled";

function SearchInfo() {
  const { searchList, setMaxResults } = useContext(AppContext);

  return (
    <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
      <h4 style={{ padding: "0 20px", fontSize: "1.2rem" }}>
        {" "}
        {"Search Results >>"}
      </h4>
      <StyledSearchInfo>
        {searchList.map((term, index) => {
          return <SearchCard key={term.id} {...term} />;
        })}
      </StyledSearchInfo>
      <button
        style={{
          margin: "1rem auto",
          alignSelf: "center",
          width: "250px",
          padding: "10px",
        }}
        className="search-show-more"
        onClick={() => setMaxResults((prev) => prev + 5)}
      >
        Load More Results
      </button>
    </div>
  );
}

export default SearchInfo;
