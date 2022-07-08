import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../../firebase/firebase-config";
import { StyledPostFeedCard } from "./PostFeedCard.styled";

function PostFeedCard() {
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [review, setReview] = useState("");

  const currentDate = new Date();

  const postsCollectionRef = collection(db, "posts");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let currentUserId = auth.currentUser.uid;
    e.target.reset();

    const newPost = {
      author: bookAuthor,
      image: localStorage.getItem("profilePic"),
      thoughts: review,
      title: bookTitle,
      creator: auth.currentUser.displayName,
      createdAt: currentDate,
      likeCount: 0,
      user: {
        id: currentUserId,
      },
    };
    await addDoc(postsCollectionRef, newPost);
  };

  return (
    <StyledPostFeedCard className="col" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Book Title.."
        onChange={(e) => setBookTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author.."
        onChange={(e) => setBookAuthor(e.target.value)}
        required
      />
      <textarea
        name=""
        id=""
        onChange={(e) => setReview(e.target.value)}
        required
        placeholder="Share your thoughts..."
      ></textarea>
      <button>Post</button>
    </StyledPostFeedCard>
  );
}

export default PostFeedCard;
