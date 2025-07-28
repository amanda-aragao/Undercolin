import { Schedule } from '../Schedule/Schedule.tsx';
import '../Merch/merchHome.css';
import { Material } from '../PhotosUndercolin/Material.tsx';
import { Nav } from '../Nav/Nav.tsx';
import { Underfest } from '../Underfest/Underfest.tsx';
import { Link } from 'react-router-dom';
import store from '../../assets/merch/STORE.png'

interface HomeProps {
  menuIsVisible: boolean;
  setMenuIsVisible: (isVisible: boolean) => void;
}
export function Home({ menuIsVisible, setMenuIsVisible }: HomeProps) {
  return (
    <>
      <Nav menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
      <div className="homeContainer">
        <Schedule />
        <Link to="/merch" className='storeSection'>
          <img src={store} alt="Descrição da imagem" style={{ cursor: 'pointer' }} />
        </Link>

        <section className='sectionMaterial'>
          <Material />
        </section>

        <Underfest />
      </div>
    </>
  );
}
