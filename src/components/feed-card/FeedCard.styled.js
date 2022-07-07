import styled from "styled-components";

export const StyledFeedCard = styled.div`
position: relative;
  min-height: 300px;
  width: 450px;
  border: 2px black solid;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(3, 37, 236, 0.3);
  gap: 1rem;

  img {
    width: 50px;
  }

  .row {
    gap: .5rem;
  }

  .like {
    cursor: pointer;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-size: 1.2rem;
    display: inline-flex;
    align-items: center;
  }
`;
