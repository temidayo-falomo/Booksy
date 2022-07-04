import { deleteDoc, doc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { MdOutlineBookmarkRemove } from "react-icons/md";
import { auth, db } from "../../firebase/firebase-config";
import { AppContext } from "../../helper/Context";
import { StyledBookmarkCard } from "./BookmarkCard.styled";
import { Tooltip } from "react-tippy";

function BookmarkCard(props) {
  const { isAuth } = useContext(AppContext);

  const [clicked, setClicked] = useState(false);

  useEffect(() => {}, [clicked]);

  const deleteBookmark = async (param) => {
    const postDoc = doc(db, "bookmarks", param);
    await deleteDoc(postDoc);
    window.location.reload();
  };

  return (
    <>
      <StyledBookmarkCard className="col">
        <Tooltip title="remove">
          <MdOutlineBookmarkRemove
            className="bookm"
            onClick={() => deleteBookmark(props.id)}
          />
        </Tooltip>
        <div>
          <img src={props.img} alt="" />
        </div>
        <div className="col">
          <h3>{props.name}</h3>
          <span>{props.author}</span>
          <p>{props.desc}</p>
        </div>
      </StyledBookmarkCard>
    </>
  );
}

export default BookmarkCard;
