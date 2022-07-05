import styled from "styled-components";

export const StyledPopularCategory = styled.div`
  width: 70%;
  gap: 1rem;

  h3 {
    margin-bottom: 1rem;
    color: #e75c62;
  }

  h5 {
    font-size: 1.4rem;
    font-weight: 500;
  }

  .col span {
    color: #787a80;
  }

  .category-card {
    background-color: #f0f4ff;
    padding: 20px;
    gap: 1.5rem;
    align-items: flex-start;
    cursor: pointer;
    position: relative;
    border-radius: 10px;
    border-top-right-radius: 30px;
    box-shadow: rgba(211, 220, 250, 0.2) 0px 2px 8px 0px;
  }

  .category-card .col {
    gap: 0.5rem;
  }

  .category-card img {
    width: 120px;
    border-radius: 10px;
  }

  .category-card p {
    font-weight: 200;
    font-size: 0.9rem;
  }

  .category-card button {
    padding: 2px 5px;
    background-color: #1bc1ff;
    color: #fff;
  }

  .bkm {
    position: absolute;
    right: 1rem;
    /* top: .2rem; */
  }

  .bookmark {
    font-size: 2rem;
    fill: white ;
    cursor: pointer;
  }

  .bookm {
    font-size: 2.5rem;
    cursor: pointer;
  }

  .view-more-category {
    padding: 10px 5px;
    color: #fff;
    background-color: #1bc1ff;
  }

  @media(max-width: 900px) {
    width: 100%;
  }
`;
