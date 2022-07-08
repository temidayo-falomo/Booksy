import styled from "styled-components";

export const StyledBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  position: sticky;
  top: 0;
  background-color: var(--color-background);
  z-index: 999;
  /* margin-bottom: 2rem; */

  h1 {
    color: var(--dark-blue);
  }

  input {
    width: 550px;
    padding: 10px 10px;
    border: none;
    background-color: #f6f6f6;
    border-radius: 5px;
    font-size: 0.8rem;
    text-transform: capitalize;
    letter-spacing: 0.0125rem;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    position: static;

    input {
      width: 100%;
    }
  }

  @media (max-width: 500px) {
    position: static;
    margin-top: 7rem;
  }
`;
