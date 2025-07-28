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

            <div className="menuLeft">
              <a className='topicNav' href="/home">AGENDA</a>
              <a className='topicNav' href="/historia">HISTÓRIA</a>
              <a className='topicNav'>CONTATO</a>
            </div>
            <div className="logoContainer">
              <RouterLink to="/home" className='linkNav'>
                <img src={underFont} alt='Undercolin Fonte' className='underNav' />
              </RouterLink>
            </div>

            <div className="menuRight">
              <a className='topicNav' onClick={() => scrollToSection('material')}>MATERIAL</a>
              <a className='topicNav' href='/merch'>MERCH</a>
              <a className='topicNav' onClick={() => scrollToSection('materialUnderfest')}>UNDERFEST</a>
            </div>
          </div>
        </header>
        <IoIosMenu onClick={() => setMenuIsVisible(true)} className="mobile" size={35} />
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
