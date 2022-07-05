import styled from "styled-components";

export const StyledPopularCategories = styled.div`
  width: 50%;
  gap: 2rem;

  img {
    width: 20px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  button {
  }

  .normal-btn {
    background-color: transparent;
    padding: 10px;
    min-width: 150px;
    border-radius: 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: 500;
  }

  button:hover {
    background-color: #e75c62;
    color: #fff;
  }

  p {
    font-weight: 200;
    font-size: 0.8rem;
  }

  .active-btn {
    background-color: #e75c62;
    color: #fff;
  }

  @media (max-width: 1300px) {
    width: 95%;
    justify-content: flex-start;
    align-items: flex-start;

    .div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }

  @media (max-width: 488px) {
    .div {
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
`;
