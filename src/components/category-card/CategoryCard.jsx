import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { FcBookmark } from "react-icons/fc";
import { GrCircleAlert } from "react-icons/gr";
import { ImBookmark } from "react-icons/im";
import { auth, db } from "../../firebase/firebase-config";
import { AppContext } from "../../helper/Context";

function CategoryCard(props) {
  const [clicked, setClicked] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const { bookList, setBookList, categoriesArray } = useContext(AppContext);

  let descInfo = props.volumeInfo && props.volumeInfo.description;
  let thumbnailer =
    props.volumeInfo.imageLinks && props.volumeInfo.imageLinks.thumbnail;

  const postsCollectionRef = collection(db, "bookmarks");

  const createBoookmark = async () => {
    let currentUserId = auth.currentUser.uid;

    const newBookmark = {
      name: props.volumeInfo.title,
      author: props.volumeInfo.authors,
      img: thumbnailer,
      desc: descInfo,
      user: currentUserId,
    };

    await addDoc(postsCollectionRef, newBookmark);
    setClicked(!clicked);
  };

  const removeBookmark = async (param) => {
    // const postDoc = doc(db, "bookmarks", param);
    // await deleteDoc(postDoc);
  };

  //styling is in parent component.

  if (thumbnailer !== undefined) {
    return (
      <div className="category-card row" data-aos="fade-up">
        <span className="bkm">
          {bookList?.some((e) => e.name === props.volumeInfo.title) ? (
            <FcBookmark
              className="bookm"
              onClick={() => removeBookmark(props.id)}
            />
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
