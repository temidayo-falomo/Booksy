import styled from "styled-components";

export const StyledTopBook = styled.div`
  display: flex;
  align-items: center;
  min-width: 300px;

  h1 {
    font-size: 15rem;
    margin-right: -20px;
  }

  h4 {
    text-align: center;
    font-weight: 600;
  }

  .book {
    position: relative;
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
`;
