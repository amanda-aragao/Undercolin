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
      <section className='historiaContainer'>
        <hr className='detalheLinhaHist' />
        <h2 className='tituloHistoria'> COMO TUDO COMEÇOU? </h2>
        <hr className='detalheLinhaHist' />
        <section className='historia'>
          <img src='/src/assets/images/under-show.jpeg' alt='banda' className='fotoShow' />
          <div className='textoContainer'>

            <p className='textoHistoria'> A Undercolin surgiu em 2022, formada por cinco integrantes apaixonados por música: Danilo (guitarra solo), Daniel (baixista), Henrique (guitarra base), Dyh (baterista) e Lucas (vocal). No início, a banda possuía em seu repertório covers, incluindo canções de bandas como Dead Fish, Forfun e Green Day. No entanto, a verdadeira paixão da Undercolin sempre foi criar suas próprias músicas autorais, refletindo suas influências e experiências únicas.

              Em 2023, a Undercolin deu um grande passo em sua trajetória ao realizar seu primeiro show na casa de shows Cerveja Azul, em São Paulo. Este evento marcou o início de uma série de conquistas, incluindo a organização de um festival independente que trouxe ao palco talentos locais como Rabujentos, Cannon of Hate, Nunca Estive em Tokyo, Depois da Tempestade e, claro, a própria Undercolin.
            </p>
            <p className='textoHistoria'>
              Atualmente, a formação da banda passou por algumas mudanças e conta com Danilo (guitarrista solo), Matheus (baterista) e Daniel (baixista e vocalista).
              Em 2024, o foco da banda está voltado para a gravação de seu primeiro EP, composto inteiramente por músicas autorais. Além disso, a Undercolin está à frente da organização da próxima edição do Underfest, um festival que promete agitar a cena musical local e que está marcado para o dia 29 de setembro, no Mucha Breja, em Santos. Nos vemos lá!
            </p>
          </div>
        </section>
        {/* <img src='/src/images/element1.png' alt='detalhe na foto' className='element1'/> */}

      </section>
    </>
  );
}
