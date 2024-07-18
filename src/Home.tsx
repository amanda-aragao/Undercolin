import { Agenda } from './Agenda.tsx';
import { Nav } from './Nav.tsx';

interface HomeProps {
  menuIsVisible: boolean;
  setMenuIsVisible: (isVisible: boolean) => void;
}
export function Home({ menuIsVisible, setMenuIsVisible }: HomeProps) {  
  return (
  <>
    <Nav menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
    <Agenda />
  </>
 );
}
