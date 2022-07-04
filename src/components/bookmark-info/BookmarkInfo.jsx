import { collection, getDocs } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { StyledBookmarkInfo } from "./BookmarkInfo.styled";
import { auth, db } from "../../firebase/firebase-config";
import BookmarkCard from "../bookmark-card/BookmarkCard";

function BookmarkInfo() {
  const [bookList, setBookList] = useState([]);
  const postsCollectionRef = collection(db, "bookmarks");

  useEffect(() => {
    const getBooks = async () => {
      const data = await getDocs(postsCollectionRef);
      setBookList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBooks();
  }, []);

  return (
    <StyledBookmarkInfo>
      {bookList
        .filter(function (item) {
          return item.user.id === auth.currentUser.uid;
        })
        .map((data, index) => {
          return <BookmarkCard key={index} {...data} index={index} />;
        })}
    </StyledBookmarkInfo>
  );
}

export default BookmarkInfo;
