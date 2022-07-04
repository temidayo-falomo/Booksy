import styled from "styled-components";

export const StyledLeftbar = styled.div`
   height: 100vh;
   padding: 2%;
   align-items: center;
   justify-content: space-between;
   font-size: 2rem;
   padding-top: 2rem;
   background-color: #fff;
   padding-bottom: 4rem;
   border-right: 2px #F0F4FF solid;

   .logo {
    margin-bottom: 50px;
    width: 50px;
   }


   .icons {
    justify-content: center;
    align-items: center;
    gap: 3rem;
   }

   .col {
    align-items: center;
   }

   .leftbar-bottom {
    gap: 2rem;
   }

   .avatar {
    width: 60px;
    border: 4px #E38660 solid;
    border-radius: 50%;
   }

   .signout {
      z-index: 999;
      cursor: pointer;
   }


`