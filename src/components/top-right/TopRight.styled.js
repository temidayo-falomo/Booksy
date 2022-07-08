import styled from "styled-components";

export const StyledTopRight = styled.div`
  min-height: 80px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  h4 {
    font-weight: 400;
  }

  img {
    width: 150px;
    cursor: pointer;
  }

  a {
    padding: 5px;
    background-color: #f0f4ff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: grid;
    place-content: center;
  }

  .plus-btn {
    font-size: 2rem;
    color: #0d276b;
  }
`;
