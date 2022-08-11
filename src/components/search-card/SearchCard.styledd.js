import styled from "styled-components";

export const StyledSearchCard = styled.div`
  padding: 20px;
  min-height: 250px;
  width: 600px;
  border-top-right-radius: 30px;
  background-color: #f0f4ff;
  gap: 1rem;
  align-items: flex-start;
  position: relative;

  .col {
    gap: 0.5rem;
  }

  .row {
    gap: 0.5rem;
  }

  h3 {
    font-weight: 500;
  }

  img {
    width: 120px;
    border-radius: 10px;
  }

  p {
    font-weight: 300;
  }

  button {
    padding: 2px 5px;
    background-color: #1bc1ff;
    color: #fff;
  }

  span {
    color: #787a80;
  }

  .bkm {
    position: absolute;
    right: 1rem;
  }

  .bookmark {
    font-size: 2rem;
    fill: white;
    cursor: pointer;
    z-index: 99;
  }

  .bookm {
    font-size: 2.5rem;
    cursor: pointer;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
`;
