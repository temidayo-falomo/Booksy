import React from "react";
import { StyledFeedCard } from "./FeedCard.styled";
import { AiOutlineLike } from "react-icons/ai";

function FeedCard() {
  return (
    <StyledFeedCard className="col">
      <div className="row">
        <img src="./assets/avatar.svg" alt="" />
        <h4>Allison Burgers</h4>
      </div>
      <h2>Cradle</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id voluptates
        similique quos reprehenderit dolore est, earum quibusdam. Suscipit
        minima assumenda rerum, quam id qui quos ea, maxime iure sapiente
        architecto.
      </p>
      <span className="like">
        <AiOutlineLike />
        21
      </span>
    </StyledFeedCard>
  );
}

export default FeedCard;
