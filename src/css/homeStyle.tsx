import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  height: 6.5rem;
  width: 100%;
  background-color: rgba(17, 20, 35, 0.3); 
  box-shadow: 0px 0 10px rgba(0, 0, 0, 0.5);
  z-index: 1000; 
  
  .navPrincipal {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 18rem;
  }
    
  .topicNav {
    padding: 0px 20px;
    display: inline-block; 
    margin: 0;
    margin-top: 1rem;
    font-size: 1.2rem;
    font-family: "DIN Condensed Web";
    font-weight: bold; 
    letter-spacing: 1px;
    color: #fff; 
    text-shadow: 
      -0.5px 0px 0 grey,  
      0.5px 0px 0 grey,
      -0.5px  0.5px 0 grey,
      0.5px  0.5px 0 grey;
    text-decoration: none; 
  }

  a:hover {
    filter: drop-shadow(0 0 0.5em rgba(255, 255, 255, 0.7));
    transform: scale(1.1);
  }
  
  .underNav {
  width: 20rem;
  height: auto;
  padding: 2rem;
  display: inline-block; 
  }

  .mobile {
    color: #fff;
    padding-top: 1.8rem;
    margin-left: 18rem; 
    z-index: 1;
    width: 2.5rem;
  }

  @media (max-width: 767px) {
    .navPrincipal {
      flex-direction: column; 
    }
  }

  @media (min-width: 2375px) {
    .mobile {
      margin-left: 58%;
    }
  }

  @media (max-width: 412px) {
    .mobile {
      margin-left: 35%;  
    }
    svg {
      width: 8.5%;
    }
    p {
      font-size: 2rem;
      margin-left: 2rem;
    }
  }
`;