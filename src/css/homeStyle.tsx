import styled from 'styled-components';

export const Container = styled.div`
  
  display: flex;
  position: fixed;
  top: 0;
  height: 7rem;
  width: 100%;
  background-color:  rgb(30, 31, 36);
  box-shadow: 0px 0 10px rgba(0, 0, 0, 0.5);
  z-index: 100; 
  
  .navPrincipal {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 25.5rem;
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
    width: 25rem;
    height: auto;
    padding: 1rem;
    display: inline-block; 
  }

  .linkNav:hover {
    transform: none; 
    box-shadow: none;
    border: none;
    outline: none;
    // filter: none;
    filter: drop-shadow(0 0 0.1em rgba(255, 255, 255, 0.8));


  }

  .mobile {
    color: #fff;
    margin-top: 2.4rem;
    margin-left: 20rem;
  }

  // @media (max-width: 767px) {
  //   .navPrincipal {
  //     flex-direction: column; 
  //   }
  //   .mobile svg {
  //     width: 8%; /* Tamanho menor para telas menores */
  //   }
  // }

  // @media (min-width: 2375px) {
  //   .mobile {
  //     margin-left: 35%;
  //   }
  //   .mobile svg {
  //     width: 10%; /* Tamanho maior para telas muito grandes */
  //   }
  // }

  // @media (max-width: 412px) {
  //   .mobile {
  //     margin-left: 25%;  
  //   }
  //   .mobile svg {
  //     width: 8.5%;
  //   }
  //   p {
  //     font-size: 2rem;
  //     margin-left: 2rem;
  //   }
  // }
`;
