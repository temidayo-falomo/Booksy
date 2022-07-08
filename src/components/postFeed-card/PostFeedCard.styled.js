import styled from "styled-components";

export const StyledPostFeedCard = styled.form`
  width: 100%;
  min-height: 450px;
  padding: 20px;
  border-radius: 10px;
  gap: 1rem;
  justify-content: space-between;
  background-color: #e75c62;

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
   color: #e75c62;
    background-color: #fff;
    width: 90px;
    border-radius: 20px;
  }

  @media(max-width: 450px) {
    width: 90%;
  }
`;
