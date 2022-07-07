import styled from "styled-components";

export const StyledPostFeedCard = styled.div`
  /* min-height: 300px; */
  width: 500px;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  gap: 1rem;

  input {
    padding: 10px;
    text-transform: uppercase;
    font-weight: 800;
  }

  textarea {
    padding: 10px;
    text-transform: capitalize;
    width: 100% !important;
  }

  button {
    padding: 10px;
    background-color: #1dc0ff;
  }

`;
