import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { FcBookmark } from "react-icons/fc";
import { GrCircleAlert } from "react-icons/gr";
import { ImBookmark } from "react-icons/im";
import { auth, db } from "../../firebase/firebase-config";
import { StyledSearchCard } from "./SearchCard.styledd";

function SearchCard(props) {
  const [readMore, setReadMore] = useState(false);
  const [clicked, setClicked] = useState(false);
  let thumbnailer =
    props.volumeInfo.imageLinks && props.volumeInfo.imageLinks.thumbnail;

  let descInfo = props.volumeInfo && props.volumeInfo.description;
  let bookTitle = props.volumeInfo && props.volumeInfo.title;
  let authorName = props.volumeInfo && props.volumeInfo.authors;

  const postsCollectionRef = collection(db, "bookmarks");

  const createBoookmark = async () => {
    let currentUser = auth.currentUser.displayName;
    let currentUserId = auth.currentUser.uid;

    const newBookmark = {
      name: props.volumeInfo.title,
      author: props.volumeInfo.authors,
      img: thumbnailer,
      desc: descInfo,
      user: { name: currentUser, id: currentUserId },
    };

    await addDoc(postsCollectionRef, newBookmark);
    setClicked(!clicked);
  };

  return (
    <>
      <StyledSearchCard className="row">
        <span className="bkm">
          {clicked ? (
            <FcBookmark className="bookm" />
          ) : (
            <ImBookmark className="bookmark" onClick={createBoookmark} />
          )}
        </span>
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
