import { Link } from 'react-router-dom'
import './css/underfest.css'
import { MaterialUnderfest } from './MaterialUnderfest.tsx'

export function Underfest() {

  return (
    <>
      <div className='underfestContainer'>
        <hr className='detailLine' />
        <h2 className='titleUnderfest'>UNDERFEST</h2>
        <hr className='detailLine' />
        <section className='selectUnderfest'>
          <h2 className='textUnderfest'>CONHEÇA NOSSO FESTIVAL COM O PROPÓSITO DE MOVIMENTAR AS BANDAS E COMÉRCIO LOCAIS
            O UNDERFEST ACONTECE UMA VEZ POR ANO NO MÊS DE SETEMBRO </h2>
          <p className='subTitle'>
            ESSE ANO O UNDERFEST OCORREU NO MUCHA BREJA EM SANTOS COM A PRESENÇA DE 5 BANDAS DO HARDCORE, A CASA CONTA COM CERVEJA E LANCHES ARTESANAIS, CONFIRA ABAIXO A EDIÇÃO UNDERFEST 2024.
          </p>
          <h2 className='titleBands'>BANDAS QUE PARTICIPANTES</h2>
          <div className='bands'>
            <Link to='https://www.instagram.com/aphoyceh2core/' target='_blanck' >
              <img src='./src/assets/bandasUnderfest/Aphoyce.png' alt='bandaAphoyce' width={250} />
            </Link>
            <Link to='https://www.instagram.com/cannonofhate/' target='_blanck'>
              <img src='./src/assets/bandasUnderfest/COH.png' alt='bandaCannonOfHate' width={450} />
            </Link>
            <Link to='https://www.instagram.com/triunfeoficial/' target='_blanck'>
              <img src='./src/assets/bandasUnderfest/triunfe.png' alt='bandaTriunfe' width={450} />
            </Link>
            <Link to='https://www.instagram.com/undercolin_/' target='_blanck'>
              <img src='./src/assets/bandasUnderfest/undercolin.png' alt='bandaUnderColin' width={190} />
            </Link>
            <Link to='https://www.instagram.com/undercolin_/' target='_blanck'>
              <img src='./src/assets/bandasUnderfest/NEET.png' alt='bandaUnderColin' width={190} />
            </Link>
            <Link to='https://www.instagram.com/undercolin_/' target='_blanck'>
              <img src='./src/assets/bandasUnderfest/rabujentus.png' alt='bandaUnderColin' width={300} />
            </Link>
            <Link to='https://www.instagram.com/undercolin_/' target='_blanck'>
              <img src='./src/assets/bandasUnderfest/DDT.png' alt='bandaUnderColin' width={350} />
            </Link>
            <Link to='https://www.instagram.com/undercolin_/' target='_blanck'>
              <img src='./src/assets/bandasUnderfest/EP.png' alt='bandaUnderColin' width={350} />
            </Link>
          </div>
          {/* <p className='tituloFotos'> UNDERFEST 2024 </p> */}
          <section className='sectionUnderfestMaterial' id='material'>
            <MaterialUnderfest />
          </section>
        </section>
      </div>
    </>
  )
}