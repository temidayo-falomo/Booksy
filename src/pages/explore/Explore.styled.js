import styled from "styled-components";

export const StyledExplore = styled.div`
  display: grid;
  grid-template-columns: 120px auto;
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  #bg-vid {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: -1;
}

  @media (max-width: 1300px) {
    grid-template-columns: 100px auto;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;
