import { Link } from 'react-router-dom';
import './Underfest.css';
import { MaterialUnderfest } from '../CarouselUnderfest/MaterialUnderfest.tsx';

import aphoyce from '../../assets/bandasUnderfest/Aphoyce.png';
import cannonOfhate from '../../assets/bandasUnderfest/COH.png';
import triunfe from '../../assets/bandasUnderfest/triunfe.png';
import undercolin from '../../assets/bandasUnderfest/undercolin.png';
import NEET from '../../assets/bandasUnderfest/NEET.png';
import rabujentus from '../../assets/bandasUnderfest/rabujentus.png';
import DDT from '../../assets/bandasUnderfest/DDT.png';
import EP from '../../assets/bandasUnderfest/EP.png';

export function Underfest() {
  const bandas = [
    { link: 'https://www.instagram.com/aphoyceh2core/', img: aphoyce, alt: 'Aphoyce' },
    { link: 'https://www.instagram.com/cannonofhate/', img: cannonOfhate, alt: 'CannonOfHate' },
    { link: 'https://www.instagram.com/triunfeoficial/', img: triunfe, alt: 'Triunfe' },
    { link: 'https://www.instagram.com/undercolin/', img: undercolin, alt: 'Undercolin' },
    { link: 'https://www.instagram.com/nuncatokyo/', img: NEET, alt: 'NEET' },
    { link: 'https://www.instagram.com/rabujentus', img: rabujentus, alt: 'Rabujentus' },
    { link: 'https://www.instagram.com/somosdepoisdatempestade/', img: DDT, alt: 'DDT' },
    { link: 'https://www.instagram.com/entrepontosrock/', img: EP, alt: 'EP' },
  ];

  return (
    <div className="underfestContainer" id="materialUnderfest">
      <div className="underfestContent">
        <hr className="detailLine" />
        <h2 className="titleUnderfest">UNDERFEST</h2>
        <hr className="detailLine" />

        <h2 className="textUnderfest">
          CONHEÇA NOSSO FESTIVAL COM O PROPÓSITO DE MOVIMENTAR AS BANDAS E COMÉRCIO LOCAL
        </h2>

        <p className="subtitleUnderfest">
          O UNDERFEST É UM FESTIVAL ORGANIZADO ANUALMENTE PELA BANDA UNDERCOLIN DE FORMA 100% INDEPENDENTE.
          <br />
          O EVENTO REÚNE BANDAS E ARTISTAS DA CENA ALTERNATIVA, PROPORCIONANDO UM ESPAÇO PARA NOVAS E JÁ CONSOLIDADAS
          BANDAS SE APRESENTAREM.
        </p>

        <h3 className="titleBands">BANDAS PARTICIPANTES</h3>

        <div className="bandsGrid">
          {bandas.map((banda, index) => (
            <Link to={banda.link} target="_blank" key={index} className="bandItem">
              <img src={banda.img} alt={banda.alt} />
            </Link>
          ))}
        </div>

        <section className="materialSection">
          <MaterialUnderfest />
        </section>
      </div>
    </div>
  );
}
