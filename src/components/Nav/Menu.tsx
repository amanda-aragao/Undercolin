
import { MenuStyle } from './MenuStyle';
import { IoClose } from 'react-icons/io5';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';




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
        <a className='topicosMenu' href="https://linktr.ee/undercolin" target='_blank'>CONTATO</a>
        <a className='topicosMenu' href="/merch">MERCH</a>
        <RouterLink
          to="/home"
          className="topicosMenu"
          state={{ scrollTo: 'materialUnderfest' }}
          style={{ textDecoration: 'none' }}
          onClick={() => setMenuIsVisible(false)}
        >
          UNDERFEST
        </RouterLink>
      </aside>

    </MenuStyle>
  </>
  )
}

Menu.propTypes = {
  menuIsVisible: PropTypes.bool.isRequired,
  setMenuIsVisible: PropTypes.func.isRequired,
}
