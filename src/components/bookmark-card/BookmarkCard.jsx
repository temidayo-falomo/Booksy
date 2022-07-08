import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { MdOutlineBookmarkRemove } from "react-icons/md";
import { db } from "../../firebase/firebase-config";
import { StyledBookmarkCard } from "./BookmarkCard.styled";
import { Tooltip } from "react-tippy";

function BookmarkCard(props) {

  const deleteBookmark = async (param) => {
    const postDoc = doc(db, "bookmarks", param);
    await deleteDoc(postDoc);
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
