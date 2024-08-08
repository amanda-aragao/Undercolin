import { Agenda } from './Agenda.tsx';
import './css/merchHome.css';
import { Material } from './Material.tsx';
import { Nav } from './Nav.tsx';
import { Underfest } from './Underfest.tsx';
import { Link } from 'react-router-dom';

interface HomeProps {
  menuIsVisible: boolean;
  setMenuIsVisible: (isVisible: boolean) => void;
}
export function Home({ menuIsVisible, setMenuIsVisible }: HomeProps) {
  return (
    <>
      <Nav menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
      <div className="homeContainer">
        <section id="agenda" className='sectionAgenda'>
          <Agenda />
        </section>
        <Link to="/merch" className='lojaSection'>
          <img src="./src/assets/images/merch.png" alt="Descrição da imagem" style={{ cursor: 'pointer' }} />
        </Link>
        <section className='sectionMaterial' id='material'>
          <Material />
        </section>
        <Underfest />
      </div>
    </>
  );
}
