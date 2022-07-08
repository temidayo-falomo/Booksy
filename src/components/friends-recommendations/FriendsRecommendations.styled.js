import styled from "styled-components";

export const StyledFriendsRecommendations = styled.div`
  background-color: #f0f4ff;
  height: 92vh;
  padding: 20px;
  margin-top: 1rem;
  border-top-left-radius: 30px;
  gap: 1rem;
  overflow: auto;
  border-top: 2px #f0f4ff solid;
  padding-bottom: 2rem;
  ::-webkit-scrollbar {
    width: 0 !important;
  }

  h4 {
    margin-bottom: 1rem;
  }

  .col {
    gap: 0.5rem;
  }

  .recommendation-card {
    background-color: #fff;
    border-radius: 20px;
    padding: 15px;
    justify-content: space-between;
  }

  .recommendation-card .row {
    align-items: center;
    gap: 0.5rem;
  }

  .bdr img {
    width: 60px;
    border-radius: 10px;
  }

  p {
    font-size: 0.9rem;
  }

  .lds-hourglass {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin: auto;
  }
  .lds-hourglass:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid #1dc0ff;
    border-color: #1dc0ff transparent #1dc0ff transparent;
    animation: lds-hourglass 1.2s infinite;
  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;
