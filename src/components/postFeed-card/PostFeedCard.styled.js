import styled from "styled-components";

export const StyledPostFeedCard = styled.form`
  width: 100%;
  max-width: 320px;
  min-height: 400px;
  padding: 20px;
  border-radius: 10px;
  gap: 1rem;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  input {
    padding: 10px;
    text-transform: capitalize;
    font-weight: 600;
    border: none;
    border-bottom: 1px gainsboro solid;
    border-radius: 5px;
  }

  textarea {
    padding: 10px;
    text-transform: capitalize;
    width: 100% !important;
    height: 8rem !important;
    border: none;
    font-weight: 600;
    border-radius: 5px;
  }

  button {
    padding: 10px;
    color: #fff;
    background-color: #e75c62;
    width: 90px;
    border-radius: 20px;
  }

  @media (max-width: 450px) {
    width: 90%;
  }
`;
