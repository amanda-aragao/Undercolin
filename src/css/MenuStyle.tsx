import styled, { css } from 'styled-components';

interface MenuStyleProps {
  isVisible: boolean;
}

export const MenuStyle = styled.section<MenuStyleProps>`
  display: ${props => (props.isVisible ? 'block' : 'none')};
  position: fixed;
  width: 18rem;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  box-shadow: -10px 0 10px rgba(0, 0, 0, 0.5);
  background: rgb(36,36,36);
  background: linear-gradient(127deg, rgba(36,36,36,1) 0%, rgba(208,204,203,0.21445783132530116) 87%);
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
  transform: translateY(50px);

  svg {
    position: absolute;
    top: 2rem;
    padding-left: 1.5rem;
    color: #fff;
    transform: rotate(45deg);
    transition: 0.7s;
    width: 35px;
    height: 35px;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: scale(0.7);
    transition: 0.7s;
    margin-top: 4rem;
    margin-left: 4rem;
    background-color: transparent;
    gap: 3rem;
  }

  .topicosMenu {
    font-family: 'Bernard MT Condensed', roboto, sans;
    font-weight: bold;
    border-radius: 10px;
    border: 1px solid #fff;
    padding: 1rem;
    width: 9rem;
    font-size: 1.2rem;
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
      > svg {
        transform: rotate(0deg);
      }
      nav {
        transform: scale(1);
      }
    `};

  // @media (min-width: 768px) {
  //   width: 25%;
  //   svg {
  //     left: 4.2rem;
  //   }
  }
`;