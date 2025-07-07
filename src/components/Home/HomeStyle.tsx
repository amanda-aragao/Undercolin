import styled from 'styled-components';

export const HomeStyle = styled.div`
  width: 100%;
  background-color:  rgb(30, 31, 36);
  box-shadow: 0px 0 10px rgba(0, 0, 0, 0.5);
  z-index: 100; 


  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 7rem;
    padding: 0 1rem;
    position: relative;
    box-sizing: border-box;
  }

  .header-content {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between; /* ou center + gap */
  gap: 3rem;
}


  .menuLeft,
  .menuRight {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    min-width: 20%;
    justify-content: center;
}

.logoContainer {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 2rem;
}

  .topicNav {
    padding: 0px 15px;
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
      top: 2.5rem;
      width: 2rem;
    }
  }
    @media (max-width: 375px) {
    .header {
      width: 100%;
      }
    .underNav {
      width: 15rem; 
      margin-left: 10%
    }
    .mobile {
      position: absolute;
      left: 22rem;
      top: 2.5rem;
    }
  }
    @media (max-width: 320px) {
    .underNav {
      width: 25rem;
      margin-left: 50%
    }
    .mobile {
      position: absolute;
      top: 2.5rem;
      left: 40rem;
    }

}
`;
