import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase-config";
import { StyledFriendsRecommendations } from "./FriendsRecommendations.styled";

function FriendsRecommendations(props) {
  const [recommendations, setRecommendations] = useState([]);
  const usersCollectionRef = collection(db, "recommendations");

  useEffect(() => {
    const getRecommendations = async () => {
      const data = await getDocs(usersCollectionRef);
      setRecommendations(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      props.setRecommendationsLoading(false);
    };
    getRecommendations();
  }, []);

  return (
    <StyledFriendsRecommendations className="col">
      {props.recommendationsLoading ? (
        <div className="lds-hourglass"></div>
      ) : (
        <>
          <h4>Booksy's Weekly Recommendations <div className="circle">{recommendations.length}</div></h4>
          {recommendations.map((rec, index) => {
            return (
              <div className="recommendation-card col" key={index}>
                <div className="row">
                  <div className="bdr">
                    <img src={rec.image} alt="" />
                  </div>
                  <div className="col">
                    <h5>{rec.title}</h5>
                    <span>{rec.author}</span>
                  </div>
                </div>
                <p>{rec.description}</p>
              </div>
            );
          })}
        </>
      )}
    </StyledFriendsRecommendations>
  );
}

export default FriendsRecommendations;
