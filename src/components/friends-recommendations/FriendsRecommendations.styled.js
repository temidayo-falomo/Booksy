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
    width: 100%;
    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: flex-start;
    font-weight: 500;
    font-size: 1.1rem;
  }

  h5 {
    font-size: 1rem;
    font-weight: 600;
    color: #1c1c1c;
    text-transform: uppercase;
  }

  span {
    font-size: 0.9rem;
  }

  .row {
    margin-bottom: 0.5rem;
  }

  .col {
    gap: 0.3rem;
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

  .bdr {
    width: 70px;
    height: 75px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    /* background-repeat: no-repeat;
    background-size: cover;
    background-position: center; */
  }

  p {
    font-size: 0.95rem;
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

  .circle {
    padding: 10px;
    border-radius: 50%;
    background-color: #e75c62;
    color: white;
    width: 30px;
    height: 30px;
    display: grid;
    place-content: center;
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
