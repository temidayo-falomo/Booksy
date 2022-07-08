import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { StyledBookmarkInfo } from "./BookmarkInfo.styled";
import { auth, db } from "../../firebase/firebase-config";
import BookmarkCard from "../bookmark-card/BookmarkCard";

function BookmarkInfo() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const postsCollectionRef = collection(db, "bookmarks");
    const q = query(postsCollectionRef);
    onSnapshot(q, (snapshot) => {
      const books = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBookList(books);
    });
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
