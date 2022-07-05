import styled from "styled-components";

export const StyledTopBook = styled.div`
  display: flex;
  align-items: center;
  gap: -1rem;
  /* min-width: 300px; */

  h1 {
    font-size: 15rem;
    color: var(--dark-blue);
    margin-right: -20px;
  }

  h4 {
    text-align: center;
    font-weight: 600;
    max-width: 200px;
  }

  .book {
    position: relative;
    margin: auto;
    align-items: center;
  }

  .book img {
    width: 200px;
    border-radius: 20px;
  }

  span {
    position: absolute;
    top: -10px;
    right: 0;
  }

  .bookmark {
    font-size: 2rem;
    fill: gainsboro;
    cursor: pointer;
  }

  .bookm {
    font-size: 2.5rem;
    cursor: pointer;
  }

  .col {
    gap: 1rem;
  }

  @media(max-width: 450px) {
    width: 250px;

    h1 {
      font-size:8rem;
      margin: 0;
    }

    .book img {
      width: 150px;
    }
  }
`;
