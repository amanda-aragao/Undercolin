import styled from 'styled-components';

export const HomeStyle = styled.div`
  width: 100%;
  background-color:  rgb(30, 31, 36);
  box-shadow: 0px 0 10px rgba(0, 0, 0, 0.5);
  z-index: 100; 


  .header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7rem;
    position: relative;
    padding: 0 1rem;
    box-sizing: border-box;
  }

  .menuLeft,
  .menuRight {
    display: flex;
    gap: 1.5rem;
    align-items: center;
}

  .topicNav {
    padding: 0px 10px;
    // display: inline-block; 
    // margin: 0;
    // margin-top: 1rem;
    font-family: "DIN Condensed Web";
    font-size: 1.5rem;
    font-weight: bold; 
    letter-spacing: 1px;
    text-decoration: none; 
    color: #fff; 
    text-shadow: 
      -0.5px 0px 0 grey,  
      0.5px 0px 0 grey,
      -0.5px  0.5px 0 grey,
      0.5px  0.5px 0 grey;
    transition: transform 0.3s;
  }
  
  a:hover {
    filter: drop-shadow(0 0 0.5em rgba(255, 255, 255, 0.7));
    transform: scale(1.1);
  }
    
  .underNav {
    width: 25rem;
    height: auto;
    margin: 0 auto;
    padding: 1rem;
  }
      
  .linkNav:hover {
    transform: none; 
    box-shadow: none;
    border: none;
    outline: none;
    filter: drop-shadow(0 0 0.1em rgba(255, 255, 255, 0.8));
  }
        
  .topicNav:hover {
    filter: drop-shadow(0 0 0.5em rgba(255, 255, 255, 0.7));
    transform: scale(1.1);
  }
  
  .mobile {
    display: none;
    color: #fff;
    cursor: pointer;
    /* position: absolute; */
    /* right: 1rem; */
    /* top: 50%; */
    /* transform: translateY(-50%); */
    /* cursor: pointer; */

  }

  // RESPONSIVO

  @media (max-width: 768px) {
    .menuLeft,
    .menuRight {
      display: none;
    }
    .underNav {
      width: 25rem;
    }
    .mobile {
      display: block; 
    }
  }
  @media (max-width: 480px) {
    .header {
      padding: 0 0.5rem; /* Reduz o padding em telas menores */
    }
    .topicNav {
      font-size: 1.2rem; /* Reduz o tamanho da fonte em telas menores */
    }
    .underNav {
      width: 10rem; /* Ajusta a largura da imagem em telas menores */
    }
    // .mobile {
    //   left: 70rem; /* Ajusta a posição do ícone de menu em telas menores */
    // }
  }

    @media (max-width: 360px) {
    .header {
      // padding: 0 0.5rem; /* Reduz ainda mais o padding em telas muito pequenas */
      width: 100%;
      }
    .underNav {
      width: 10rem; 
    }
    .mobile {
      left: 20rem; 
      width: 1.5rem; 
    }
  }
    @media (max-width: 320px) {
    .underNav {
      width: 8rem;
    }

    .mobile {
      right: 0.5rem;
    }

}
`;
