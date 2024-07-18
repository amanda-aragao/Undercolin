import { Nav } from './Nav.tsx';
import './css/historia.css';

interface HistoriaProps {
  menuIsVisible: boolean;
  setMenuIsVisible: (isVisible: boolean) => void;
}
export function Historia({ menuIsVisible, setMenuIsVisible }: HistoriaProps) {
  return (
    <>
     <Nav menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
     <p> COMO TUDO COMEÇOU? </p>
    <section className='historia'>
     <a className='textoHistoria'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</a>
    <img src='/src/assets/images/under-show.jpeg' alt='banda' className='fotoShow'/>
    {/* <img src='/src/images/element1.png' alt='detalhe na foto' className='element1'/> */}

    </section>
    </>
  );
}
