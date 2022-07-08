import React, { useState } from "react";
import { StyledFeedCard } from "./FeedCard.styled";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase-config";

import { FcLike, FcLikePlaceholder } from "react-icons/fc";

function FeedCard(props) {
  const [click, setClick] = useState(false);

  const deletePost = async (param) => {
    const delDoc = doc(db, "posts", param);
    await deleteDoc(delDoc);
  };

  const incCount = async (id, likeCount) => {
    const userDoc = doc(db, "posts", id);
    const newCount = { likeCount: likeCount + 1 };
    await updateDoc(userDoc, newCount);
    setClick(!click);
  };

  // const decCount = async (id, likeCount) => {
  //   setClick(!click);
  //   if (likeCount < 0) {
  //     // return likeCount === 0
  //   }
  //   const userDoc = doc(db, "posts", id);
  //   const newCount = { likeCount: likeCount - 1 };
  //   await updateDoc(userDoc, newCount);
  // };

  return (
    <StyledFeedCard className="col">
      <div className="row">
        <div className="row">
          <img src={props.image} alt="" />
          <h4>{props.creator}</h4>
        </div>
        {props.user.id === auth.currentUser.uid && (
          <div className="row">
            <span
              className="rw"
              style={{ color: "red" }}
              onClick={() => deletePost(props.id)}
            >
              <MdDelete />
              Delete
            </span>
            <span
              className="rw"
              style={{ color: "blue", cursor: "not-allowed" }}
            >
              <AiFillEdit />
              Edit
            </span>
          </div>
        )}
      </div>
      <div className="cl">
        <h3>{props.title},</h3>
        <h3> {props.author}</h3>
      </div>
      <p>{props.thoughts}</p>
      {click ? (
        <button
          className="like rw"
          // onClick={() => decCount(props.id, props.likeCount)}
        >
          <FcLike />
          {props.likeCount}
        </button>
      ) : (
        <button
          className="like rw"
          onClick={() => incCount(props.id, props.likeCount)}
        >
          <FcLikePlaceholder />
          {props.likeCount}
        </button>
      )}
    </StyledFeedCard>
  );
}

export default FeedCard;
