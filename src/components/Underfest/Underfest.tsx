import { Link } from 'react-router-dom'
import './Underfest.css'
import { MaterialUnderfest } from '../CarouselUnderfest/MaterialUnderfest.tsx'

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
          <h3 className='titleBands'>BANDAS QUE PARTICIPANTES</h3>
          <div className='bands'>
            <Link to='https://www.instagram.com/aphoyceh2core/' target='_blanck' >
              <img src='../../src/assets/bandasUnderfest/Aphoyce.png' alt='bandaAphoyce' width={250} />
            </Link>
            <Link to='https://www.instagram.com/cannonofhate/' target='_blanck'>
              <img src='../../src/assets/bandasUnderfest/COH.png' alt='bandaCannonOfHate' width={450} />
            </Link>
            <Link to='https://www.instagram.com/triunfeoficial/' target='_blanck'>
              <img src='../../assets/bandasUnderfest/triunfe.png' alt='bandaTriunfe' width={450} />
            </Link>
            <Link to='https://www.instagram.com/undercolin_/' target='_blanck'>
              <img src='../../assets/bandasUnderfest/undercolin.png' alt='bandaUnderColin' width={190} />
            </Link>
            <Link to='https://www.instagram.com/undercolin_/' target='_blanck'>
              <img src='../../assets/bandasUnderfest/NEET.png' alt='bandaUnderColin' width={190} />
            </Link>
            <Link to='https://www.instagram.com/undercolin_/' target='_blanck'>
              <img src='../../assets/bandasUnderfest/rabujentus.png' alt='bandaUnderColin' width={300} />
            </Link>
            <Link to='https://www.instagram.com/undercolin_/' target='_blanck'>
              <img src='../../assets/bandasUnderfest/DDT.png' alt='bandaUnderColin' width={350} />
            </Link>
            <Link to='https://www.instagram.com/undercolin_/' target='_blanck'>
              <img src='../../assets/bandasUnderfest/EP.png' alt='bandaUnderColin' width={350} />
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