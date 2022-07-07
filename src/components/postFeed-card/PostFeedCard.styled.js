import styled from "styled-components";

export const StyledPostFeedCard = styled.form`
  /* min-height: 300px; */
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 16px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  gap: 1rem;
  justify-content: space-between;
  background-color: #F0F4FF;
  border: 1px #000 solid;

  input {
    padding: 10px;
    text-transform: capitalize;
    font-weight: 700;
    border: none;
  }

  textarea {
    padding: 10px;
    text-transform: capitalize;
    width: 100% !important;
    height: 8rem !important;
    border: none;
  }

  button {
    padding: 10px;
    background-color: #1dc0ff;
    color: #fff;
    width: 90px;
  }
`;
