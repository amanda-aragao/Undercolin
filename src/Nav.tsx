import { Menu } from './Menu.tsx';
import { Container } from './css/homeStyle.tsx';
import { IoIosMenu } from "react-icons/io";
import { Link as RouterLink } from 'react-router-dom';
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
      <Container>
        <Menu
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
        <nav className='navPrincipal'>
          <a className='topicNav' onClick={() => scrollToSection('agenda')}>AGENDA</a>
          <a className='topicNav' href="/historia">HISTÓRIA</a>
          <a className='topicNav'>CONTATO</a>
          <RouterLink to="/home" className='linkNav'>
            <img src='/src/assets/images/underFont.png' alt='Undercolin Fonte' className='underNav' />
          </RouterLink>
          <a className='topicNav' onClick={() => scrollToSection('material')}>MATERIAL</a>
          <a className='topicNav' href='/merch'>MERCH</a>
          <a className='topicNav'>UNDERFEST</a>
        </nav>
        <IoIosMenu onClick={() => setMenuIsVisible(true)} className="mobile" size={45} />
      </Container>
    </>
  );
}


Menu.propTypes = {
  menuIsVisible: PropTypes.bool.isRequired,
  setMenuIsVisible: PropTypes.func.isRequired,
}
