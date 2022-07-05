import styled from "styled-components";
import img from "./lib-bg.svg";

export const StyledExplore = styled.div`
  display: grid;
  grid-template-columns: 120px auto;
  min-height: 100vh;
  /* background-image: url(${img}); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #1DC0FF;

  @media (max-width: 1300px) {
    grid-template-columns: 100px auto;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;
