import styled from "styled-components";

export const StyledExploreInfo = styled.div`
  h1 {
    font-size: 8rem;
    color: whitesmoke;
  }

  h4 {
    font-size: 2.5rem;
    width: 80%;
    text-align: center;
    margin: 0 auto;
    color: whitesmoke;
  }

  .button-81 {
    background-color: #1e293b;
    border: 0 solid #e2e8f0;
    border-radius: 1.5rem;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: "Basier circle", -apple-system, system-ui, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1;
    padding: 1rem 1.6rem;
    text-align: center;
    text-decoration: none #0d172a solid;
    text-decoration-thickness: auto;
    transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0px 1px 2px rgba(166, 175, 195, 0.25);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    margin-top: 2rem;
  }

  .button-81:hover {
    background-color: wheat;
    color: #fff;
  }

  @media (min-width: 768px) {
    .button-81 {
      font-size: 1.125rem;
      padding: 1rem 2rem;
    }
  }
`;
