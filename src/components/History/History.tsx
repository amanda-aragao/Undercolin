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

      <section className='historySection'>
        <div className='textAndImageHistory'>
          <div className='textContainer'>
            <h2 className='titleHistory'>COMO TUDO COMEÇOU?</h2>

            <div className='textContent'>
              <p>
                A Undercolin surgiu em 2022, quando cinco amigos que compartilhavam a paixão por música decidiram formar uma banda.
                No começo, o repertório era feito só de covers — rolava Dead Fish, Forfun, Green Day...
                Mas logo ficou claro que o que a gente mais queria era contar nossas próprias histórias.
              </p>
              <p>
                Com letras que falam sobre superações e situações difíceis que vivemos, a Undercolin encontrou no hardcore melódico uma forma
                de transformar experiências em música. Tudo o que cantamos vem de vivências reais — e talvez seja por isso que tanta gente se
                identifica com o som.
              </p>
              <p>
                Em 2023, fizemos nosso primeiro show no Cerveja Azul, em São Paulo. Foi só o começo.
                Desde então, seguimos na correria: tocamos com várias bandas da cena independente e até organizamos nosso próprio festival.
              </p>
              <p>
                Hoje, a banda é formada por Danilo (guitarra solo), Daniel (baixo e vocal) e Matheus (bateria).
                Em 2024, entramos em estúdio para gravar nosso primeiro EP — e ele já está quase saindo do forno!
              </p>
              <p>
                Se você curte som feito com verdade, intensidade e vontade de transformar dor em energia, fica com a gente.
                Tem muita coisa boa vindo por aí.
              </p>
            </div>
          </div>

          <div className='fotoShow'>
            <img src={undercolin} alt='Banda Undercolin em apresentação ao vivo' />
          </div>
        </div>
      </section>
    </>
  );
}
