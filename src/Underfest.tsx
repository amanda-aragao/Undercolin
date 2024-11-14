// import { css } from "styled-components"

import { Link } from 'react-router-dom'
import './css/underfest.css'
import { MaterialUnderfest } from './MaterialUnderfest.tsx'

export function Underfest() {

  return (
    <>
      <div className='underfestContainer'>
        <hr className='detalheLinhaUnderfest' />
        <h2 className='tituloUnderfest'>UNDERFEST</h2>
        <hr className='detalheLinhaUnderfest' />
        <section className='selectUnderfest'>
          <h2 className='textUnderfest'>CONHEÇA NOSSO FESTIVAL COM O PROPÓSITO DE MOVIMENTAR AS BANDAS E COMÉRCIO LOCAIS
            O UNDERFEST ACONTECE UMA VEZ POR ANO NO MÊS DE SETEMBRO </h2>
          <p className='subtituloUnderfest'>
            ESSE ANO O UNDERFEST OCORREU NO MUCHA BREJA EM SANTOS COM A PRESENÇA DE 5 BANDAS DO HARDCORE, A CASA CONTA COM CERVEJA E LANCHES ARTESANAIS, CONFIRA ABAIXO A EDIÇÃO UNDERFEST 2024.
          </p>
          <h2 className='tituloBandas'>BANDAS</h2>
          <div className='bandas'>
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
          </div>
            <p className='tituloFotos'> CONFIRA O QUE ROLOU NO UNDERFEST 2024 </p>
            {/* <Link to="/underfest">
              <button className='buttonUnderfest'>VER MAIS</button>
            </Link> */}

            <MaterialUnderfest />  

        </section>




      </div>
    </>
  )
}