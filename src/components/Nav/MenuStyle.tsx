import styled, { css } from 'styled-components';

interface MenuStyleProps {
  isVisible: boolean;
}

export const MenuStyle = styled.section<MenuStyleProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 20%;
  max-width: 20rem;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(137deg, rgba(36,36,36,1) 50%, rgba(208,204,203,0.214) 175%);
  box-shadow: -10px 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 20px 0 0 20px;

  opacity: 0;
  pointer-events: none;
  transform: translateX(100%);
  transition: transform 0.4s ease, opacity 0.4s ease;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateX(0%);
    `}

  svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #fff;
    transform: rotate(90deg);
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    transition: 0.3s ease;
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    gap: 2rem;
    width: 100%;
  }

  .topicosMenu {
    font-family: "DIN Condensed Web", roboto, sans;
    font-weight: bold;
    font-size: 2rem;
    letter-spacing: 1.5px;
    text-align: center;
    padding: 0.6rem;
    width: 80%;
    color: #fff;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 10px;
    text-decoration: none;
    transition: 0.3s ease;
  }

  .topicosMenu:hover {
    filter: drop-shadow(0 0 0.3em rgba(238, 64, 55, 0.9));
    background-color: #242424;
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    width: 25%;
    max-width: 18rem;
  }

  @media (max-width: 768px) {
    width: 70%;
    max-width: none;
    /* border-radius: 0;  */
  }

  @media (max-width: 480px) {
    width: 100%;
    border-radius: 0;
    aside {
      gap: 1.5rem;
    }

    .topicosMenu {
      font-size: 1.5rem;
      width: 90%;
    }

    svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`;
