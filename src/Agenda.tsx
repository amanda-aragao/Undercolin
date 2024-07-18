import './css/agenda.css';
export function Agenda(){
  return (
    <section className="agendaSection">
      <h1>AGENDA</h1>
      <div className='agendaShows'>
        <div className='show'>
          <span>29/09</span>
          <h2>UnderFest - 15h</h2>
          <p> MUCHA BREJA - Av. Rei Alberto I, 161 - Ponta da Praia, Santos - SP  </p>
          <a href="#">Ingresso</a>
        </div>
        <div className='show'>
          <span>07/09</span>
          <h2>FullRise - 20h</h2>
          <p>Av. Dr. Roberto de Almeida Vinhas, 10473 - Maracanã, Praia Grande - SP </p>
          <a href="#">Ingresso</a>
        </div>
  
      </div>
    </section>
  );
}