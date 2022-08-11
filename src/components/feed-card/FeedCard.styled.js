import styled from "styled-components";

export const StyledFeedCard = styled.div`
  position: relative;
  min-height: 300px;
  width: 400px;
  border: 2px black solid;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(3, 37, 236, 0.3);
  gap: 1rem;

  h3 {
    font-weight: 500;
    font-size: 1rem;
  }

  h4 {
    font-weight: 500;
    font-size: 1rem;
    text-transform: capitalize;
  }

  p {
    font-weight: 300;
  }

  img {
    width: 50px;
  }

  .row {
    gap: 0.5rem;
    justify-content: space-between;
  }

  .row:nth-of-type(1) {
    flex-wrap: wrap;
  }

  .rw {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    z-index: 9999999;
  }

  .cl {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .like {
    cursor: pointer;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-size: 1.2rem;
    display: inline-flex;
    align-items: center;
  }

  button {
    background-color: transparent;
  }

  img {
    border-radius: 50%;
    border: 2px #e75c62 solid;
  }
`;
