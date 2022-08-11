import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { db } from "../../firebase/firebase-config";
import FeedCard from "../feed-card/FeedCard";
import PostFeedCard from "../postFeed-card/PostFeedCard";
import { StyledMyTimelineInfo } from "./TimelineInfo.styled";

function TimelineInfo() {
  const [clicked, setClicked] = useState(false);
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    const postsCollectionRef = collection(db, "posts");
    const q = query(postsCollectionRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const posts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFeedList(posts);
    });
  }, []);

  const togglePostCard = () => {
    setClicked(!clicked);
  };

  return (
    <StyledMyTimelineInfo className="row">
      {clicked && (
        <div className="pf-abs">
          <PostFeedCard />
        </div>
      )}
      {feedList.map((feedItem, index) => {
        return <FeedCard key={index} {...feedItem} />;
      })}
      {!clicked ? (
        <AiFillPlusCircle className="add-btn" onClick={togglePostCard} />
      ) : (
        <MdCancel className="add-btn" onClick={togglePostCard} />
      )}
    </StyledMyTimelineInfo>
  );
}

export default TimelineInfo;
