import React, { useContext, useEffect, useState } from "react";
import { FcBookmark } from "react-icons/fc";
import { GrCircleAlert } from "react-icons/gr";
import { ImBookmark } from "react-icons/im";
import { AppContext } from "../../helper/Context";

function CategoryCard(props) {
  const {
    bookmarkedCards,
    setBookMarkedCards,
    setHydratedBookmarkedCards,
    hydratedBookmarkedCards,
  } = useContext(AppContext);
  const [clicked, setClicked] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const newBookmark = {
    name: props.volumeInfo.title,
    author: props.volumeInfo.authors,
    img: "https://media.istockphoto.com/vectors/male-user-icon-vector-id517998264?k=20&m=517998264&s=612x612&w=0&h=pdEwtkJlZsIoYBVeO2Bo4jJN6lxOuifgjaH8uMIaHTU=",
    // desc: descInfo,
  };

  // useEffect(() => {
  //   const data = JSON.parse(window.localStorage.getItem("MY_BOOKMARKS_ARRAY"));
  //   setHydratedBookmarkedCards(data);
  // }, [clicked]);

  const handleBookmarkToggle = () => {
    setClicked(!clicked);
    let bookm = [...hydratedBookmarkedCards, ...newBookmark];
    setHydratedBookmarkedCards(bookm);
  };

  let thumbnailer =
    props.volumeInfo.imageLinks && props.volumeInfo.imageLinks.thumbnail;

  let descInfo = props.volumeInfo && props.volumeInfo.description;

  if (thumbnailer !== undefined) {
    return (
      <div className="category-card row" data-aos="fade-up">
        <span className="bkm">
          {clicked ? (
            <FcBookmark className="bookm" />
          ) : (
            <ImBookmark className="bookmark" onClick={handleBookmarkToggle} />
          )}
        </span>
        <img src={thumbnailer} alt="" />
        <div className="col">
          <h5>{props.volumeInfo.title}</h5>
          <span>{props.volumeInfo.authors}</span>
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
        </div>
      </div>
    );
  }

  return <></>;
}

export default CategoryCard;
