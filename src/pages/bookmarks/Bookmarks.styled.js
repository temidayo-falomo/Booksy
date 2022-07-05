import styled from "styled-components";

export const StyledBookmarks = styled.div`
  display: grid;
  grid-template-columns: 120px auto 420px;
  height: 100vh;

  @media (max-width: 1300px) {
    grid-template-columns: 100px auto;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;
