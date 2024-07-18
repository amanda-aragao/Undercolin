import { Menu } from './Menu.tsx';
import { Container } from './css/homeStyle.tsx';
import { IoIosMenu } from "react-icons/io";
import PropTypes from 'prop-types';


interface MenuProps {
  menuIsVisible: boolean;
  setMenuIsVisible: (isVisible: boolean) => void;
}
export function Nav({ menuIsVisible, setMenuIsVisible }: MenuProps){

  return (
  <>
      <Container>
        <Menu
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
      <nav className='navPrincipal'>

        <a className='topicNav'>AGENDA</a>
        <a className='topicNav' href="/historia">HISTÓRIA</a>
        <a className='topicNav'>CONTATO</a>
        <img src='/src/images/underFont.png' alt='Undercolin Fonte' className='underNav'/>
        <a className='topicNav'>MATERIAL</a>
        <a className='topicNav'>LOJA</a>
        <a className='topicNav'>UNDERFEST</a>
      </nav>
        <IoIosMenu onClick={() => setMenuIsVisible(true)} className="mobile" size={55}/>
      </Container>
  </>
 );
}

Menu.propTypes = {
  menuIsVisible: PropTypes.bool.isRequired,
  setMenuIsVisible: PropTypes.func.isRequired,
}
