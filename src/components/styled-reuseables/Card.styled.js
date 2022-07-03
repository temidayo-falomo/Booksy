import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: var(--color-background);
  width: 300px;
  min-height: 200px;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
  }

  .Link {
    width: 100%;
  }

  .card-col {
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    border-bottom: 1px gainsboro solid;
    padding: 1.5rem 0;
  }

  .card-text {
    font-size: .8rem;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.0125rem;
    padding: 5%;
    width: 100%;
    color: #666666;
  }

  .card-text p a {
    text-decoration: underline;
    color: #000;
  }

  button {
    width: 80%;
    margin: 0 auto;
    padding: 12px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    border-radius: 20px;
    background-color: transparent;
    color: #333333;
    border: 1px #333333 solid;
    letter-spacing: 0.0125rem;
  }

  button:hover {
    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
  }
`