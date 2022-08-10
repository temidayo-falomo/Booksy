import styled from "styled-components";

export const StyledBookmarkInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
  gap: 2rem;

  @media(max-width: 500px) {
   overflow-y: hidden;
  }
`;
