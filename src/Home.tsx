import { Agenda } from './Agenda.tsx';
import { Loja } from './Loja.tsx';
import { Material } from './Material.tsx';
import { Nav } from './Nav.tsx';
import { Underfest } from './Underfest.tsx';

interface HomeProps {
  menuIsVisible: boolean;
  setMenuIsVisible: (isVisible: boolean) => void;
}
export function Home({ menuIsVisible, setMenuIsVisible }: HomeProps) {
  return (
    <>
      <Nav menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
      <div className="homeContainer">
        <Agenda />
        <Loja />
        <Material />
        <Underfest />
      </div>
    </>
  );
}
