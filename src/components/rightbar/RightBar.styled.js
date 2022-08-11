import styled from "styled-components";

export const StyledRightBar = styled.div`


  h2 {
    padding: 20px;
  }

  p {
    font-weight: 300;
  }

  .down {
    font-weight: 800;
    font-size: 1.5rem;
  }

  @media (max-width: 1300px) {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
    min-width: 350px;
    z-index: 9999;
    background-color: #fff;
    border-top-left-radius: 20px;
    border: 2px black solid;
    display: none;
  }
`;
