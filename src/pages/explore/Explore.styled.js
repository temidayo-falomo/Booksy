import styled from "styled-components";
import img from "./lib-bg.svg";

export const StyledExplore = styled.div`
  display: grid;
  grid-template-columns: 120px auto;
  min-height: 100vh;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  #bg-vid {
    position: absolute;
    z-index: -1;
    min-height: 100vh;
  }
`;
