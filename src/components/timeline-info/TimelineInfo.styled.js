import styled from "styled-components";

export const StyledMyTimelineInfo = styled.div`
  position: relative;
  padding: 0 20px;
  overflow-x: hidden;
  gap: 1rem;
  flex-wrap: wrap;
  align-content: flex-start;

  .add-btn {
    font-size: 3rem;
    position: fixed;
    cursor: pointer;
    left: 8%;
    bottom: 5%;
    color: #e75c62;
  }

  .pf-abs {
    position: fixed;
    width: 400px;
    min-height: 450px;
    z-index: 999;
    display: flex;
    align-items: center;
    left: 8%;
    bottom: 12%;
  }
`;
