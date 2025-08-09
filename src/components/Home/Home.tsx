import { Schedule } from '../Schedule/Schedule.tsx';
import '../Merch/merchHome.css';
import Material from '../PhotosUndercolin/Material.tsx';
import { Nav } from '../Nav/Nav.tsx';
import { Underfest } from '../Underfest/Underfest.tsx';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import store from '../../assets/merch/STORE.png'

interface HomeProps {
  menuIsVisible: boolean;
  setMenuIsVisible: (isVisible: boolean) => void;
}
function Home({ menuIsVisible, setMenuIsVisible }: HomeProps) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });

      }
      setTimeout(() => {
        navigate(location.pathname, { replace: true, state: {} });
      }, 0);
    }
  }, [location]);

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
export default Home;
