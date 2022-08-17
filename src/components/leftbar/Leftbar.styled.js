import styled from "styled-components";

export const StyledLeftbar = styled.aside`
  height: 100vh;
  padding: 2%;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  padding-top: 2rem;
  background-color: #fff;
  padding-bottom: 4rem;
  border-right: 2px #f0f4ff solid;
  overflow: auto;

  .icon {
    color: var(--dark-blue);
    fill: var(--dark-blue);
  }

  .active-link .icon {
    color: #e75c62 !important;
    fill: #e75c62 !important;
  }

  .active-link {
    color: #e75c62 !important;
    fill: #e75c62 !important;
  }

  .logo-div {
    margin-bottom: 50px;
    max-width: 50px;
  }

  .hamburger {
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    margin: auto 0;
    display: none;
  }

  .icons {
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  .col {
    align-items: center;
  }

  .leftbar-bottom {
    gap: 2rem;
  }

  .avatar {
    width: 60px;
    height: 60px;
    border: 4px #e38660 solid;
    border-radius: 50%;
  }

  .signout {
    z-index: 999;
    cursor: pointer;
  }

  li a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  li a span {
    display: none;
  }

  .username {
    display: none;
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    height: 5.5rem;
    padding-top: 1.5rem;
    padding-bottom: 0;
    border-right: 0;
    overflow: hidden;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 9999999999;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.45);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11.1px);
    -webkit-backdrop-filter: blur(11.1px);
    transition: 0.2s all ease;

    .logo-div {
      justify-self: flex-start;
      align-self: flex-start;
      margin-left: 20px;
      width: 40px;
    }

    .hamburger {
      display: block;
    }

    .icons {
      align-items: flex-start;
      justify-content: flex-start;
      justify-self: flex-start;
      align-self: flex-start;
      padding-left: 20px;
      gap: 1.5rem;
    }

    li a span {
      display: inline;
      font-size: 1rem;
    }

    .leftbar-bottom {
      padding-left: 20px;
      align-items: flex-start;
      justify-content: flex-start;
      margin-top: 20%;
      margin-bottom: 1rem;
    }

    .username {
      display: block;
    }
  }
`;
