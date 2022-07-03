import styled from "styled-components";

export const StyledSearchCard = styled.div`
  padding: 20px;
  min-height: 250px;
  width: 600px;
  border-top-right-radius: 30px;
  background-color: #F0F4FF;
  gap: 1rem;
  align-items: flex-start;

  .col {
    gap: .5rem;
  }

  .row {
    gap: .5rem;
  }

  h3 {
    font-weight: 500;
  }

  img {
    width: 120px;
    border-radius: 10px;
  }

  p {
    font-weight: 200;
    font-size: .9rem;
  }

  button {
    padding: 2px 5px;
    background-color: #1bc1ff;
    color: #fff;
  }

`