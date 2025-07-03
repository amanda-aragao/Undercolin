import { Nav } from '../Nav/Nav.tsx';
import './History.css';
import undercolin from '../../assets/material/material6.jpg';
interface HistoryProps {
  menuIsVisible: boolean;
  setMenuIsVisible: (isVisible: boolean) => void;
}
export function History({ menuIsVisible, setMenuIsVisible }: HistoryProps) {
  return (
    <>
      <Nav menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
      <section className='historyContainer'>
        <hr className='detalheLinhaHistory' />
        <h2 className='titleHistory'> COMO TUDO COMEÇOU? </h2>
        <hr className='detalLineHistory' />
        <section className='textAndImageHistory'>
          <img src={undercolin} alt='banda' className='fotoShow' />
          <div className='textContainer'>


            <p className='textHistory'>
              A Undercolin surgiu em 2022, quando cinco amigos que compartilhavam a paixão por música decidiram formar uma banda. No começo, o repertório era feito só de covers — rolava Dead Fish, Forfun, Green Day, Garage Fuzz... Mas logo ficou claro que o que a gente mais queria era contar nossas próprias histórias.            </p>
            <p className='textHistory'>
              Com letras que falam sobre superações e situações difíceis que vivemos, a Undercolin encontrou no hardcore melódico uma forma de transformar experiências em música. Tudo o que cantamos vem de vivências reais — e talvez seja por isso que tanta gente se identifica com o som.            </p>
            <p className='textHistory'>
              Em 2023, fizemos nosso primeiro show no Cerveja Azul, em São Paulo. Foi só o começo. Desde então, seguimos na correria: tocamos com várias bandas da cena independente e até organizamos nosso próprio festival, juntando artistas incríveis e fortalecendo o cenário underground.            </p>

            <p className='textHistory'>
              Hoje, a banda é formada por Danilo (guitarra solo), Daniel (baixo e vocal) e Matheus (bateria). Em 2024, entramos em estúdio para gravar nosso primeiro EP, feito só com músicas autorais — e ele já está quase saindo do forno! </p>
            <p className='textHistory'>
              Se você curte som feito com verdade, intensidade e vontade de transformar dor em energia, fica com a gente. Tem muita coisa boa vindo por aí. </p>

          </div>
        </section>
        {/* <img src='/src/images/element1.png' alt='detalhe na foto' className='element1'/> */}

      </section>
    </>
  );
}
