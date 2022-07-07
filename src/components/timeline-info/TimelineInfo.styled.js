import styled from "styled-components";

export const StyledMyTimelineInfo = styled.div`
position: relative;
  height: 90vh;
  padding: 0 20px;
  overflow-y: auto;
  gap: 1rem;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;

  .add-btn {
    font-size: 3rem;
    position: absolute;
    bottom: 5rem;
    right: 50%;
    left: 50%;
    cursor: pointer;
  }
`;
