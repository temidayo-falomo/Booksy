import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }

  html {
    --color-text: black;
    --color-background: white;
    --dark-blue: #0D276B;
    letter-spacing: 0.0125rem;
    scroll-behavior: smooth;
  }

  body {
    height: 100vh;
    overflow: hidden;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  img {
    width: 100%;
  }

  ul li {
    list-style: none;
  }

  .row {
    display: flex;
    align-items: center;
  }

  .col {
    display: flex;
    flex-direction: column;
  }

  .hideDrop {
    height: 5%;
  }

  .showDrop {
    height: 70%;
  }

  .active-leftbar {
      height: 100vh !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.76);
      overflow-y: auto !important;
      transition: .5s all ease;
    }

    .active-leftbar::-webkit-scrollbar {
    width: 0;
   }

    ::-webkit-scrollbar {
      width: 0;
    }

   ::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(113, 112, 112, 0.3);
   }

  ::-webkit-scrollbar-thumb {
  /* From https://css.glass */
  background: #0D266B;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .search-show-more {
    border-radius: 10px;
    font-weight: 600;
    font-size: 1.2rem;
    background-color: #1DC0FF;
    color: #fff;
  }

  .search-show-more:hover {
    background-color: white;
    border: 1px #1DC0FF solid;
    color: #1DC0FF;
  }



`;
export default GlobalStyle;
