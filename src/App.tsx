import './css/App.css'
import { Link } from 'react-router-dom';



function App() {

  return (

    <div className="hero">

      <div className="logos">
        <Link to="/home" className="logo-link">
          <img
            src="/src/assets/images/underPassarinho.png"
            className="logo-passarinho"
            alt="Undercolin Banda"
          />
          <img

            src="/src/assets/images/underFont.png"
            className="logo-font"
            alt="Fonte Undercolin"
          />
        </Link>
      </div>

      <main className="main-content">
        <Link target="_blank" to="https://linktr.ee/undercolin" className="card">
          <img src="/src/assets/images/spotify.png" alt="Spotify" />
          <img src="/src/assets/images/youtube.png" alt="YouTube" />
          <img src="/src/assets/images/whatsapp.png" alt="WhatsApp" />
          <img src="/src/assets/images/instagram.png" className="instagram" alt="Instagram" />
        </Link>

        <a href="https://linktr.ee/undercolin" target="_blank" className='cta-button'>CLIQUE AQUI PARA CONHECER NOSSO SOM</a>
      </main>

    </div>

  );
}

export default App;
