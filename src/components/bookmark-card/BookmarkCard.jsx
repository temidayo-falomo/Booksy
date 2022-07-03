import React, { useContext, useState } from "react";
import { FcBookmark } from "react-icons/fc";
import { ImBookmark } from "react-icons/im";
import { AppContext } from "../../helper/Context";
import { StyledBookmarkCard } from "./BookmarkCard.styled";

function BookmarkCard(props) {
  const {
    bookmarkedCards,
    setBookMarkedCards,
    setHydratedBookmarkedCards,
    hydratedBookmarkedCards,
  } = useContext(AppContext);

  const [clicked, setClicked] = useState(false);

  return (
    <StyledBookmarkCard className="col">
      <FcBookmark
        className="bookm"
        // onClick={() => handleBookmarkRemove(props.index)}
      />
      <div>
        <img src={props.img} alt="" />
      </div>
      <div className="col">
        <h3>{props.name}</h3>
        <span>{props.author}</span>
        <p>{props.desc}</p>
      </div>
    </StyledBookmarkCard>
  );
}

export default BookmarkCard;
