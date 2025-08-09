import './Schedule.css';

export function Schedule() {
  return (
    <section className="sheduleSection">
      <h1 className='titleShedule'>AGENDA</h1>
      <section className="sheduleShows">
        <div className="show">
          <h2>UnderFest - 15h</h2>
          <span>29/09</span>
          <p>MUCHA BREJA - Av. Rei Alberto I, 161 - Ponta da Praia, Santos - SP</p>
          <a href="#">Ingresso</a>
        </div>
        <div className="show">
          <h2>FullRise - 20h</h2>
          <span>07/09</span>
          <p>Av. Dr. Roberto de Almeida Vinhas, 10473 - Maracanã, Praia Grande - SP</p>
          <a href="#">Ingresso</a>
        </div>
      </section>
      <p className='captionShedule'> AGENDA FECHADA PARA GRAVAÇÃO DO NOSSO EP</p>
    </section>
  );
}
