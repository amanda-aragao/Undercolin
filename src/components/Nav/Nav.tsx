import { Menu } from './Menu.tsx';
import { HomeStyle } from '../Home/HomeStyle.tsx';
import { IoIosMenu } from "react-icons/io";
import { Link as RouterLink } from 'react-router-dom';
import underFont from '../../assets/images/underFont.png';
import PropTypes from 'prop-types';

interface MenuProps {
  menuIsVisible: boolean;
  setMenuIsVisible: (isVisible: boolean) => void;
}
export function Nav({ menuIsVisible, setMenuIsVisible }: MenuProps) {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <HomeStyle>
        <header className='header'>
          <div className="headerContent">

            <div className="navSectionLeft">
              <a className='navLink' href="/home">AGENDA</a>
              <a className='navLink' href="/historia">HISTÓRIA</a>
              <a className='navLink'>CONTATO</a>
            </div>
            <div className="logoContainer">
              <RouterLink to="/home" className='linkNav'>
                <img src={underFont} alt='Undercolin Fonte' className='underNav' />
              </RouterLink>
            </div>

            <div className="navSectionRight">
              <a className='navLink' onClick={() => scrollToSection('material')}>MATERIAL</a>
              <a className='navLink' href='/merch'>MERCH</a>
              <a className='navLink' onClick={() => scrollToSection('materialUnderfest')}>UNDERFEST</a>
            </div>
          </div>
        </header>
        <IoIosMenu onClick={() => setMenuIsVisible(true)}
          className="menuToggleIcon"
          size={35}
          aria-label="Abrir menu"
          role="button" />
        <Menu
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
      </HomeStyle >
    </>
  );
}


Menu.propTypes = {
  menuIsVisible: PropTypes.bool.isRequired,
  setMenuIsVisible: PropTypes.func.isRequired,
}
