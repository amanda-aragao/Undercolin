import './css/merch.css';
import { Nav } from './Nav.tsx';

interface MerchProps {
  menuIsVisible: boolean;
  setMenuIsVisible: (isVisible: boolean) => void;
}
export function Merch({ menuIsVisible, setMenuIsVisible }: MerchProps) {
  return (
    <>
      <Nav menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
      <div className='merchContainer'>
        <hr className='detalheLinhaMerch1' />
        <h2 className='tituloMerch'>MERCHANDISE</h2>
        <hr className='detalheLinhaMerch2' />

        <div className='image-grid'>
          <div className='grid-item'>
            <img src='/src/assets/merch/3.png' className='grid-image' />
            <h1 className='tituloCamisa'>T-SHIRT BRANCA GUARÁ VERMELHO </h1>
            <h3 className='precoCamisa'>R$ 70,00</h3>
          </div>
          <div className='grid-item'>
            <img src='/src/assets/merch/STORE.png' className='grid-image' />
            <h1 className='tituloCamisa'>T-SHIRT PRETA GUARÁ VERMELHO </h1>
            <h3 className='precoCamisa'>R$ 70,00</h3>
          </div>
          <div className='grid-item'>
            <img src='/src/assets/merch/1.png' className='grid-image' />
            <h1 className='tituloCamisa'>T-SHIRT BRANCA UNDERCOLIN</h1>
            <h3 className='precoCamisa'>R$ 75,00</h3>
          </div>
          <div className='grid-item'>
            <img src='/src/assets/merch/2.png' className='grid-image' />
            <h1 className='tituloCamisa'>T-SHIRT PRETA UNDERCOLIN</h1>
            <h3 className='precoCamisa'>R$ 75,00</h3>
          </div>
        </div>
        <section className='sectionMerch' >
          <p className='infoMerch'>
            Nossos produtos estão disponíveis em todos os nossos shows e podem ser adquiridos pessoalmente.
          </p>
        </section>
      </div>

    </>
  )
}