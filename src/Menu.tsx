
import { MenuStyle } from '../src/css/MenuStyle';
import {IoClose} from 'react-icons/io5';
import PropTypes from 'prop-types';


interface MenuProps {
  menuIsVisible: boolean;
  setMenuIsVisible: (isVisible: boolean) => void;
}

export function Menu({ menuIsVisible, setMenuIsVisible }: MenuProps) {
  return (<>

    <MenuStyle isVisible={menuIsVisible}>
        <IoClose size={25} onClick={() => setMenuIsVisible(false)} />

        <nav>
          <a className='topicosMenu' href="/historia">HISTÓRIA</a>
          <a className='topicosMenu' href="/agenda">AGENDA</a>
          <a className='topicosMenu' href="/contato">CONTATO</a>
          <a className='topicosMenu' href="/material">MATERIAL</a>
          <a className='topicosMenu' href="/loja">LOJINHA</a>
          <a className='topicosMenu' href="/underfest">UNDERFEST</a>
        </nav>

    </MenuStyle>
  </>
  )
}

Menu.propTypes = {
  menuIsVisible: PropTypes.bool.isRequired,
  setMenuIsVisible: PropTypes.func.isRequired,
}
