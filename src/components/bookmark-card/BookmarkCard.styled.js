import styled from "styled-components";

export const StyledBookmarkCard = styled.div`
  border: 1px black solid;
  padding: 20px;
  width: 400px;
  min-height: 300px;
  gap: 1rem;
  position: relative;


  .col {
    gap: .5rem;
  }

  .bookm {
    position: absolute;
    top: .5rem;
    right: .5rem;
    font-size: 2.5rem;
    cursor: pointer;
    fill: red;
  }
`