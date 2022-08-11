import styled from "styled-components";

export const StyledBookmarkCard = styled.div`
  border: 1px black solid;
  padding: 20px;
  width: 400px;
  min-height: 300px;
  gap: 1rem;
  position: relative;

  span {
    color: #787a80;
  }

  .col {
    gap: 0.5rem;
  }

  .bookm {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    font-size: 2.5rem;
    cursor: pointer;
    fill: red;
  }
`;
