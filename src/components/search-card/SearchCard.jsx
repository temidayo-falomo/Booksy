import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { FcBookmark } from "react-icons/fc";
import { GrCircleAlert } from "react-icons/gr";
import { ImBookmark } from "react-icons/im";
import { auth, db } from "../../firebase/firebase-config";
import { AppContext } from "../../helper/Context";
import { StyledSearchCard } from "./SearchCard.styledd";

function SearchCard(props) {
  const [readMore, setReadMore] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { bookList, setBookList, categoriesArray } = useContext(AppContext);

  let thumbnailer =
    props.volumeInfo.imageLinks && props.volumeInfo.imageLinks.thumbnail;
  let descInfo = props.volumeInfo && props.volumeInfo.description;
  let bookTitle = props.volumeInfo && props.volumeInfo.title;
  let authorName = props.volumeInfo && props.volumeInfo.authors;
  let releaseDate = props.volumeInfo && props.volumeInfo.publishedDate;

  const postsCollectionRef = collection(db, "bookmarks");

  const createBoookmark = async () => {
    let currentUserId = auth.currentUser && auth.currentUser.uid;

    const newBookmark = {
      name: props.volumeInfo.title,
      author: props.volumeInfo.authors,
      img: thumbnailer,
      desc: descInfo,
      user: currentUserId,
    };

    await addDoc(postsCollectionRef, newBookmark);
    setClicked(!clicked);
    console.log('clicked');
  };

  const removeBookmark = async () => {};

  return (
    <>
      <StyledSearchCard className="row">
        <span className="bkm">
          {bookList?.some((e) => e.name === props.volumeInfo.title) ? (
            <FcBookmark className="bookm" onClick={removeBookmark} />
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
          <p>Published: {releaseDate !== undefined ? releaseDate : "NA"}</p>
        </div>
      </StyledSearchCard>
    </>
  );
}

export default SearchCard;
