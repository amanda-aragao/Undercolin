import { Link } from 'react-router-dom'
import './Underfest.css'
import { MaterialUnderfest } from '../CarouselUnderfest/MaterialUnderfest.tsx'
import aphoyce from '../../assets/bandasUnderfest/Aphoyce.png';
import cannonOfhate from '../../assets/bandasUnderfest/COH.png';
import triunfe from '../../assets/bandasUnderfest/triunfe.png';
import undercolin from '../../assets/bandasUnderfest/undercolin.png';
import NEET from '../../assets/bandasUnderfest/NEET.png';
import rabujentus from '../../assets/bandasUnderfest/rabujentus.png';
import DDT from '../../assets/bandasUnderfest/DDT.png';
import EP from '../../assets/bandasUnderfest/EP.png';

export function Underfest() {

  return (
    <>
      <div className='underfestContainer' id='materialUnderfest'>
        <hr className='detailLine' />
        <h2 className='titleUnderfest'>UNDERFEST</h2>
        <hr className='detailLine' />
        <section className='selectUnderfest'>
          <h2 className='textUnderfest'>CONHEÇA NOSSO FESTIVAL COM O PROPÓSITO DE MOVIMENTAR AS BANDAS E COMÉRCIO LOCAIS
          </h2>
          <p className='subTitle'>
            O UNDERFEST É UM FESTIVAL ORGANIZADO ANUALMENTE PELA BANDA UNDERCOLIN DE FORMA 100% INDEPENDENTE. <br />
            O EVENTO REÚNE BANDAS E ARTISTAS DA CENA ALTERNATIVA, PROPORCIONANDO UM ESPAÇO PARA NOVAS E JÁ CONSOLIDADAS BANDAS SE APRESENTAREM. </p>
          <h3 className='titleBands'>BANDAS PARTICIPANTES</h3>
          <div className='bands'>
            <Link to='https://www.instagram.com/aphoyceh2core/' target='_blanck' >
              <img src={aphoyce} alt="logo-aphoyce" />
            </Link>
            <Link to='https://www.instagram.com/cannonofhate/' target='_blanck'>
              <img src={cannonOfhate} alt='bandaCannonOfHate' />
            </Link>
            <Link to='https://www.instagram.com/triunfeoficial/' className='triunfe' target='_blanck'>
              <img src={triunfe} alt='bandaTriunfe' />
            </Link>
            <Link to='https://www.instagram.com/undercolin/' target='_blanck' className='bandaUndercolin'>
              <img src={undercolin} alt='bandaUndercolin' />
            </Link>
            <Link to='https://www.instagram.com/undercolin_/' target='_blanck'>
              <img src={NEET} alt='NEET' />
            </Link>
            <Link to='https://www.instagram.com/undercolin_/' target='_blanck'>
              <img src={rabujentus} alt='Rabujentus' />
            </Link>
            <Link to='https://www.instagram.com/undercolin_/' target='_blanck'>
              <img src={DDT} alt='DDT' />
            </Link>
            <Link to='https://www.instagram.com/undercolin_/' target='_blanck'>
              <img src={EP} alt='EP' />
            </Link>
          </div>

          <section className='sectionUnderfestMaterial'>
            <MaterialUnderfest />
          </section>
        </section>
      </div>
    </>
  )
}