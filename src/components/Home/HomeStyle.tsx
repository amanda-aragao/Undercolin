import styled from 'styled-components';

export const HomeStyle = styled.div`

  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    position: relative;
    box-sizing: border-box;
    background-color: rgb(30, 31, 36);
  }

  .headerContent {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center; 
}

  .menuLeft,
  .menuRight {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    min-width: 20%;
    justify-content: center;
}

  .topicNav {
    padding: 0px 25px;
    font-family: "DIN Condensed Web";
    font-size: 1rem;
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
    width: 20rem;
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
    filter: drop-shadow(0 0 0.3em rgba(255, 255, 255, 0.7));
    transform: scale(1.1);
  }
  
  .mobile {
    display: none;
    color: #fff;
    cursor: pointer;
  }

  // RESPONSIVO
    @media (max-width: 1024px) {
    .menuLeft,
    .menuRight {
      gap: 0.5rem;
    }
    .underNav {
      width: 20rem;
    }
    .topicNav {
      font-size: 1.2rem; 
    }
  }

  @media (max-width: 768px) {
    .menuLeft,
    .menuRight {
      display: none;
    }
    .underNav {
      width: 25rem;
      margin-left: 2%;
 
    }
    .mobile {
      display: block; 
      position: absolute;
      top: 2.5rem;
      left: 42rem;
      width: 2rem;
    }
  }

  @media (max-width: 690px) {
    .menuLeft,
    .menuRight {
      display: none;
    }
    .underNav {
      width: 25rem;
      margin-left: 10%;
    }
    .mobile {
      display: block; 
      position: absolute;
      top: 2.5rem;
      left: 45rem;
      width: 2rem;

    }
  }

  @media (max-width: 414px) {
    .header {
      padding: 0 0.5rem;  
    }
    .topicNav {
      font-size: 1.2rem; 
    }
    .underNav {
      width: 15rem; 
      margin-left: 0.5%;
    }
    .mobile {
      position: absolute;
      left: 22rem;
      top: 2.5rem;
      width: 2rem;

    }
  }
  
    @media (max-width: 430px) {
    .header {
      padding: 0 0.5rem;  
    }
    .topicNav {
      font-size: 1.2rem; 
    }
    .underNav {
      width: 15rem; 
      margin-left: 0.5%;
    }
    .mobile {
      position: absolute;
      left: 22rem;
      top: 1.5rem;
    }
  }
    @media (max-width: 375px) {
      .homeContainer{
        max-width: 100%;
        display: flex;
      }
    .underNav {
      width: 15rem; 
      margin-left: 10%
    }
    .mobile {
      position: absolute;
      left: 22rem;
      top: 1.5rem;
    }
  }

`;
