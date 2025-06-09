import styled from 'styled-components';

export const HomeStyle = styled.div`
  display: flex;
  top: 0;
  height: 7rem;
  width: 100%;
  background-color:  rgb(30, 31, 36);
  box-shadow: 0px 0 10px rgba(0, 0, 0, 0.5);
  z-index: 100; 
  justify-content: space-between;
  align-items: center;

  .navPrincipal {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(50%);
    gap: 2rem;
  }
  
  .topicNav {
    padding: 0px 10px;
    display: inline-block; 
    margin: 0;
    margin-top: 1rem;
    font-size: 1.5rem;
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
      }
      
      .linkNav:hover {
        transform: none; 
        box-shadow: none;
        border: none;
        outline: none;
        filter: drop-shadow(0 0 0.1em rgba(255, 255, 255, 0.8));
        }
        
        .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        position: relative;
      }
        
          
  .mobile {
    color: #fff;
    cursor: pointer;
    position: absolute;
    left: 80rem;

}

  //  // MOBILE (abaixo de 768px)
  // @media (max-width: 768px) {
  //   .navPrincipal {
  //     display: none;
  //   }

  //   .mobile {
  //     display: block;
  //   }

  //   .underNav {
  //     width: 8rem;
  //   }

  //   .logo {
  //     margin-right: 5rem; /* opcional: para posicionar a logo à esquerda */
  //   }
  // }



  @media (max-width: 767px) {
    .navPrincipal {
      
    }
    .mobile svg {
      width: 8%; /* Tamanho menor para telas menores */
    }
  }

  @media (max-width: 770px) {
    .navPrincipal {
      // flex-direction: column; 
    }
    .mobile svg {
      width: 8%; /* Tamanho menor para telas menores */
    }
  }

  @media (min-width: 2375px) {
    .mobile {
      margin-left: 35%;
    }
    .mobile svg {
      width: 10%; /* Tamanho maior para telas muito grandes */
    }
  }

  @media (max-width: 412px) {
    .mobile {
      margin-left: 25%;  
    }
    .mobile svg {
      width: 8.5%;
    }
    p {
      font-size: 2rem;
      margin-left: 2rem;
    }
  }
`;
