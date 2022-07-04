import styled from "styled-components";

export const StyledNotificationInfo = styled.div`
  height: 90vh;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h5 {
    display: inline-flex;
    align-items: center;
    color: green;
    font-weight: 500;
  }

  .notification-card {
    padding: 1rem;
    width: auto;
    margin: 0 1.8rem;
    gap: 2rem;
    background-color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
    position: relative;
  }

  .logo-circle {
    min-width: 70px;
    min-height: 70px;
    background-color: #f0f4ff;
    display: grid;
    place-content: center;
    border-radius: 50%;
    position: relative;
  }

  .logo-circle img {
    width: 50%;
    height: 50%;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .col {
    gap: 0.5rem;
  }

  .dot {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 2rem;
    margin: auto 0;
    font-size: 1.5rem;
    color: green;
    cursor: pointer;
  }

  @media(max-width: 600px) {
    .logo-circle {
      display: none;
    }
  }


`;
