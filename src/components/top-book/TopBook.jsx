import React, { useContext, useEffect, useState } from "react";
import { ImBookmark } from "react-icons/im";
import { FcBookmark } from "react-icons/fc";
import { StyledTopBook } from "./TopBook.styled";
import { AppContext } from "../../helper/Context";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

const colors = [
  "#add1f1",
  "#ccf2ae",
  "#b7a5e8",
  "#eeaad3",
  "#FADBF2",
  "#e29fc3",
  "#d3a68c",
];

function TopBook(props) {
  const {
    bookmarkedCards,
    setBookMarkedCards,
    setHydratedBookmarkedCards,
    hydratedBookmarkedCards,
  } = useContext(AppContext);

  const [clicked, setClicked] = useState(false);

  const handleBookmarkToggle = () => {
    setClicked(!clicked);
    let bookm = [...bookmarkedCards, newBookmark];
    setBookMarkedCards(bookm);
  };

  useEffect(() => {
    window.localStorage.setItem(
      "MY_BOOKMARKS_ARRAY",
      JSON.stringify(bookmarkedCards)
    );
    window.localStorage.setItem("CLICK", clicked);
  }, [clicked]);

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("MY_BOOKMARKS_ARRAY"));
    setHydratedBookmarkedCards(data);
  }, [clicked]);

  const newBookmark = {
    name: props.title,
    author: props.author,
    img: props.book_image,
    desc: props.description,
  };

  const handleRemove = (param) => {
    setClicked(!clicked);
    setHydratedBookmarkedCards(
      JSON.parse(window.localStorage.getItem("MY_BOOKMARKS_ARRAY")).filter(
        (data) => data.author !== param
      )
    );
  };

  return (
    <Tooltip title={props.description}>
      <StyledTopBook>
        <h1
          style={{
            color: `${colors[Math.floor(Math.random() * colors.length)]}`,
          }}
        >
          {props.index + 1}
        </h1>
        <div className="book col">
          <span>
            {clicked ? (
              <FcBookmark
                className="bookm"
                onClick={() => handleRemove(props.author)}
              />
            ) : (
              <ImBookmark className="bookmark" onClick={handleBookmarkToggle} />
            )}
          </span>
          <img src={props.book_image} alt="" />
          <h4>{props.author}</h4>
        </div>
      </StyledTopBook>
    </Tooltip>
  );
}

export default TopBook;
