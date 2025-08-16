import { Menu } from './Menu.tsx';
import { HomeStyle } from '../Home/HomeStyle.tsx';
import { IoIosMenu } from "react-icons/io";
import { Link, Link as RouterLink } from 'react-router-dom';
import underFont from '../../assets/images/underFont.png';
import PropTypes from 'prop-types';

interface MenuProps {
  menuIsVisible: boolean;
  setMenuIsVisible: (isVisible: boolean) => void;
}
export function Nav({ menuIsVisible, setMenuIsVisible }: MenuProps) {

  return (
    <>
      <HomeStyle>
        <header className='header'>
          <div className="headerContent">

            <div className="navSectionLeft">
              <RouterLink to="/historia" className='linkNav'>
                <span className='navLink'>HISTÓRIA</span>
              </RouterLink>
              <Link to="https://linktr.ee/undercolin" target='_blank' className='linkNav'>
                <span className='navLink'>CONTATO</span>
              </Link>
            </div>
            <div className="logoContainer">
              <RouterLink to="/home" className='linkNav'>
                <img src={underFont} alt='Undercolin Fonte' className='underNav' />
              </RouterLink>
            </div>

            <div className="navSectionRight">
              <RouterLink to="/merch" className='linkNav'>
                <span className='navLink'>MERCH</span>
              </RouterLink>
              <RouterLink
                to="/home"
                className='navLink'
                state={{ scrollTo: 'materialUnderfest' }}
              >
                UNDERFEST
              </RouterLink>
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
