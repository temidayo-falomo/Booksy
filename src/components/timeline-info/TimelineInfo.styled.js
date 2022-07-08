import styled from "styled-components";

export const StyledMyTimelineInfo = styled.div`
  position: relative;
  height: 90vh;
  padding: 0 20px;
  overflow-x: hidden;
  overflow-y: auto;
  gap: 1rem;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;

  .add-btn {
    font-size: 3rem;
    position: fixed;
    bottom: 5rem;
    cursor: pointer;
    left: 50%;
transform: translateX(-50%);
margin: auto;
  }

  .pf-abs {
    position: fixed;
    bottom: 7rem;
    width: 400px;
    min-height: 400px;
    z-index: 999;
    display: flex;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);
    margin: auto;
  }
`;
