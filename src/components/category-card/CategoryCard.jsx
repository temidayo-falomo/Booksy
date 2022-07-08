import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { FcBookmark } from "react-icons/fc";
import { GrCircleAlert } from "react-icons/gr";
import { ImBookmark } from "react-icons/im";
import { auth, db } from "../../firebase/firebase-config";

function CategoryCard(props) {
  const [clicked, setClicked] = useState(false);
  const [readMore, setReadMore] = useState(false);

  let descInfo = props.volumeInfo && props.volumeInfo.description;
  let thumbnailer =
    props.volumeInfo.imageLinks && props.volumeInfo.imageLinks.thumbnail;

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

  if (thumbnailer !== undefined) {
    return (
      <div className="category-card row" data-aos="fade-up">
        <span className="bkm">
          {clicked ? (
            <FcBookmark className="bookm" />
          ) : (
            <ImBookmark className="bookmark" onClick={createBoookmark} />
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
              This book's information is incomplete!
            </p>
          )}
        </div>
      </div>
    );
  }

  return <></>;
}

export default CategoryCard;
