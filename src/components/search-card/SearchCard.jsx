import React, { useState } from "react";
import { GrCircleAlert } from "react-icons/gr";
import { StyledSearchCard } from "./SearchCard.styledd";

function SearchCard(props) {
  const [readMore, setReadMore] = useState(false);

  let descInfo = props.volumeInfo && props.volumeInfo.description;
  let bookTitle = props.volumeInfo && props.volumeInfo.title;
  let authorName = props.volumeInfo && props.volumeInfo.authors;

  return (
    <>
      <StyledSearchCard className="row">
        <img
          src={
            props.volumeInfo.imageLinks === undefined
              ? ""
              : `${props.volumeInfo.imageLinks.thumbnail}`
          }
          alt=""
        />
        <div className="col">
          {bookTitle !== undefined ? <h3>{bookTitle}</h3> : <h3>No Title</h3>}
          {authorName !== undefined ? <span>{authorName}</span> : ""}
          {descInfo !== undefined ? (
            <p>
              {readMore ? descInfo : `${descInfo.toString().slice(0, 250)}...`}
              <button onClick={() => setReadMore(!readMore)}>
                {readMore ? "show less" : "  read more"}
              </button>
            </p>
          ) : (
            <p style={{ display: "inline-flex", alignItems: "center" }}>
              <GrCircleAlert />
              There is currently no information on this book...
            </p>
          )}
          <p>Release Date: 2020</p>
        </div>
      </StyledSearchCard>
    </>
  );
}

export default SearchCard;
