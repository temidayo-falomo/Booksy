import React, { useContext, useEffect, useState } from "react";
import { ImBookmark } from "react-icons/im";
import { FcBookmark } from "react-icons/fc";
import { StyledTopBook } from "./TopBook.styled";
import { AppContext } from "../../helper/Context";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase-config";
import { colors } from "./Colors";

function TopBook(props) {
  const [clicked, setClicked] = useState(false);
  const postsCollectionRef = collection(db, "bookmarks");

  const createBookmark = async () => {
    let currentUser = auth.currentUser.displayName;
    let currentUserId = auth.currentUser.uid;

    const newBookmark = {
      name: props.title,
      author: props.author,
      img: props.book_image,
      desc: props.description,
      user: { name: currentUser, id: currentUserId },
    };
    
    await addDoc(postsCollectionRef, newBookmark);
    setClicked(!clicked);
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
              <FcBookmark className="bookm" />
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
