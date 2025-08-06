import styled, { css } from 'styled-components';

interface MenuStyleProps {
  isVisible: boolean;
}

export const MenuStyle = styled.section<MenuStyleProps>`
  // display: ${props => (props.isVisible ? 'block' : 'none')};
  position: fixed;
  display: flex;
  width: 20%;
  max-width: 20rem;
  height: 100vh;
  z-index: 10;
  border-radius: 20px; 
  top: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  box-shadow: -10px 0 10px rgba(0, 0, 0, 0.5);
  background: linear-gradient(137deg, rgba(36,36,36,1) 50%, rgba(208,204,203,0.21445783132530116) 175%);
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
  transform: translateY(100px);

  svg {
    position: absolute;
    top: 1rem;
    color: #fff;
    transform: rotate(45deg);
    transition: 0.7s;
    width: 5rem;
    height: 2rem;
  }

  aside {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: scale(0.7);
    transition: 0.7s;
    margin-top: 2rem;
    margin-left: 0.5rem;
    background-color: transparent;
    gap: 2.5rem;
  }

  .topicosMenu {
    font-family: "DIN Condensed Web", roboto, sans;
    font-weight: bold;
    border-radius: 10px;
    border: 1px solid #fff;
    padding: 0.5rem;
    width: 15rem;
    font-size: 2rem;
    letter-spacing: 1.5px;
    color: #fff;
    text-decoration: none;
    transition: 0.3s;
    background-color: transparent;
    align-items: center;
    text-align: center;
  }

  a:hover {
    filter: drop-shadow(0 0 0.20em rgba(238, 64, 55));
    transform: scale(1.1);
    background-color: #242424;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    `}

  /* @media (max-width: 1024px){ */
    /* width: 25%; */
    /* max-width: 25%; */
    /* height: 100vh; */
    /* position: fixed; */
    /* top: 2px; */
    /* right: 2px;; */
    /* bottom: 0; */
    /* left: 0; */
    /* z-index: 10; */
    /* border-radius: 0; */
    /* box-shadow: none; */
    /* background-color: rgba(36,36,36,0.9); */
  /* } */
  @media (max-width: 768px) {}
  @media (max-width: 690px) {}
  @media (max-width: 414px) {}
  @media (max-width: 375px) {}
  @media (max-width: 320px) {}
`;