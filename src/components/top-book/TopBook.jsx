import React, { useContext, useState } from "react";
import { ImBookmark } from "react-icons/im";
import { FcBookmark } from "react-icons/fc";
import { StyledTopBook } from "./TopBook.styled";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase-config";
import { AppContext } from "../../helper/Context";

function TopBook(props) {
  const [clicked, setClicked] = useState(false);
  const postsCollectionRef = collection(db, "bookmarks");
  const { bookList, setBookList, categoriesArray } = useContext(AppContext);

  const createBookmark = async () => {
    let currentUser = auth.currentUser.displayName;
    let currentUserId = auth.currentUser.uid;

    const newBookmark = {
      name: props.title,
      author: props.author,
      img: props.book_image,
      desc: props.description,
      user: currentUserId,
    };

    await addDoc(postsCollectionRef, newBookmark);
    setClicked(!clicked);
  };

  const removeBookmark = async () => {};

  return (
    <Tooltip title={props.description}>
      <StyledTopBook>
        <h1>{props.index + 1}</h1>
        <div className="book col">
          <span>
            {bookList?.some((e) => e.name === props.title) ? (
              <FcBookmark className="bookm" onClick={removeBookmark} />
            ) : (
              <ImBookmark className="bookmark" onClick={createBookmark} />
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
