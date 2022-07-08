import styled from "styled-components";

export const StyledBookmarkInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  @media(max-width: 500px) {
   overflow-y: hidden;
  }
`;
