
import { MenuStyle } from './MenuStyle';
import { IoClose } from 'react-icons/io5';
import PropTypes from 'prop-types';



interface MenuProps {
  menuIsVisible: boolean;
  setMenuIsVisible: (isVisible: boolean) => void;
}

export function Menu({ menuIsVisible, setMenuIsVisible }: MenuProps) {

  return (<>

    <MenuStyle isVisible={menuIsVisible}>
      <IoClose size={25} onClick={() => setMenuIsVisible(false)} />

      <aside>
        <a className='topicosMenu' href="/historia">HISTÓRIA</a>
        <a className='topicosMenu' href='/home'>AGENDA</a>
        <a className='topicosMenu' href="/contato">CONTATO</a>
        <a className='topicosMenu' href="/merch">LOJINHA</a>
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
