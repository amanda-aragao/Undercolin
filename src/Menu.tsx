
import { MenuStyle } from '../src/css/MenuStyle';
import {IoClose} from 'react-icons/io5';
import PropTypes from 'prop-types';


interface MenuProps {
  menuIsVisible: boolean;
  setMenuIsVisible: (isVisible: boolean) => void;
}

export function Menu({ menuIsVisible, setMenuIsVisible }: MenuProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (<>

    <MenuStyle isVisible={menuIsVisible}>
        <IoClose size={25} onClick={() => setMenuIsVisible(false)} />

        <aside>
          <a className='topicosMenu' href="/historia">HISTÓRIA</a>
          <a className='topicosMenu' onClick={() => scrollToSection('agenda')}>AGENDA</a>
          <a className='topicosMenu' href="/contato">CONTATO</a>
          <a className='topicosMenu' href="/material">MATERIAL</a>
          <a className='topicosMenu' href="/loja">LOJINHA</a>
          <a className='topicosMenu' href="/underfest">UNDERFEST</a>
        </aside>

    </MenuStyle>
  </>
  )
}

Menu.propTypes = {
  menuIsVisible: PropTypes.bool.isRequired,
  setMenuIsVisible: PropTypes.func.isRequired,
}
