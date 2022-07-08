import styled from "styled-components";

export const StyledLandingInfo = styled.div`
  width: 100%;
  padding: 20px;

  .rec-dot {
    box-shadow: 0 0 1px 3px #0D276B !important;
  }

  .rec-dot_active {
    background-color: #0D266B !important;
    box-shadow: 0 0 1px 3px #E75C62 !important;
  }
  .rec-dot:focus,
  .rec-dot:hover {
    box-shadow: 0 0 1px 3px #E75C62 !important;
  }
  .rec-dot_active:focus,
  .rec-dot_active:hover {
    background-color: #0D266B !important;
    box-shadow: 0 0 1px 3px #E75C62 !important;
  }

  .rec-arrow {
    background-color: var(--blue) !important;
    transition: all 0.3s ease;
    font-size: 1.1rem !important;
    color: #E75C62 !important;
    width: 1.7rem !important;
    height: 1.7rem !important;
    min-width: 1.7rem !important;
    line-height: 1.7rem !important;
  }

  .rec-arrow:hover:not(:disabled) {
    transform: scale(1.2);
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .top-picks {
    color: #e75c62;
  }

  .top-part {
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-top: 2rem;
  }

  .bottom-part {
    display: flex;
    width: 100%;
    gap: 1rem;
  }

  .slider {
    /* border: 2px green solid; */

  }

  @media(max-width: 1300px) {
    width: 100%;

    .bottom-part {
      display: flex;
      flex-direction: column-reverse;
      width: 100%;
      gap: 2rem;
    }
  }
`;
