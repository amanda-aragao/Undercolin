import './App.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/underPassarinho.png';
import insta from '../../assets/images/instagram.png';
import spotify from '../../assets/images/spotify.png';
import whatsapp from '../../assets/images/whatsapp.png';
import youtube from '../../assets/images/youtube.png';
import underFont from '../../assets/images/underFont.png';


function App() {

  return (

    <div className="hero">

      <div className="logos">
        <Link to="/home" className="logo-link">
          <img
            src={logo} className="logo-passarinho"
            alt="Undercolin Banda"
          />
          <img
            src={underFont}
            className="logo-font"
            alt="Fonte Undercolin"
          />
        </Link>
      </div>

      <main className="main-content">
        <Link target="_blank" to="https://linktr.ee/undercolin" className="card">
          <img src={spotify} alt="Spotify" />
          <img src={youtube} alt="YouTube" />
          <img src={whatsapp} alt="WhatsApp" />
          <img src={insta} className="instagram" alt="Instagram" />
        </Link>

        <a href="https://linktr.ee/undercolin" target="_blank" className='description'>CLIQUE AQUI PARA CONHECER NOSSO SOM</a>
      </main>

    </div>

  );
}

export default App;
