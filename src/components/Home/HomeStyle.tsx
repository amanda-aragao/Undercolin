import styled from 'styled-components';

export const HomeStyle = styled.div`

  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(30, 31, 36);
    position: relative;
    box-sizing: border-box;
    padding: 0 1rem;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.8);
    z-index: 1000;
    height: 100px;

  }

  .headerContent {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center; 

}


  .homeContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: rgb(30, 31, 36);
    color: #fff;
  }

  .sectionMaterial {
    margin-top: 2rem;
  }

  .navSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

  .navSectionLeft,
  .navSectionRight {
    display: flex;
    gap: 1.2rem;
    align-items: center;
}

  .navLink {
    padding: 0px 25px;
    font-family: "DIN Condensed Web";
    font-size: 1.5rem;
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

  .logoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .underNav {
    width: 20rem;
    height: auto;
    margin: 0 auto;
    padding: 1rem;
  }
      
  .linkNav:hover {
    transform: none; 
    filter: drop-shadow(0 0 0.1em rgba(255, 255, 255, 0.8));
  }

  .linkNav{
    text-decoration: none;
  }
        
  .navLink:hover {
    filter: drop-shadow(0 0 0.3em rgba(255, 255, 255, 0.7));
    transform: scale(1.1);
  }
  
  .menuToggleIcon {
    display: none;
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: 1.2rem;
    right: 1rem;
    z-index: 1000;
  }

  @media (max-width: 1024px) {
    .navLink {
      font-size: 1rem;
      padding: 0 15px;
    }

    .navSectionLeft,
    .navSectionRight {
      gap: 1rem;
    }
  }

  @media (max-width: 768px) {
    .navSectionLeft,
    .navSectionRight {
      display: none;
    }

    .menuToggleIcon {
        display: block ;
    }

    .underNav {
      width: 18rem;
      padding: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    .underNav {
      width: 14rem;
    }

    .navLink {
      font-size: 0.95rem;
      padding: 0 10px;
    }

    .menuToggleIcon {
      top: 1rem;
      right: 0.8rem;
    }
  }

    @media (max-width: 360px) {
    .underNav {
      width: 14rem;
    }

    .navLink {
      font-size: 0.95rem;
      padding: 0 10px;
    }

    .menuToggleIcon {
      top: 1.5rem;
      right: 0.8rem;
      size: 30px;
      /* width: 350px; */
    }
  }

`;
