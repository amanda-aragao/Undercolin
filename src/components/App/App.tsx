import './App.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/underPassarinho.png';
import insta from '../../assets/images/instagram.png';
import spotify from '../../assets/images/spotify.png';
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
        <Link target="_blank" to="https://www.instagram.com/undercolin/" className="card">
          <img src={insta} className="instagram" alt="Instagram" />
        </Link>
        <Link target="_blank" to="https://open.spotify.com/intl-pt/artist/6nwROjcnQdTIbv2zIu6Frn" className="card">
          <img src={spotify} className="spotify" alt="Spotify" />
        </Link>
        <Link target="_blank" to="https://www.youtube.com/@undercolin" className="card">
          <img src={youtube} className="youtube" alt="YouTube" />
        </Link>
      </main>
      <div className='button-acesso'>
        <Link to="/home" className="description">
          <a>ACESSAR</a>
        </Link>
      </div>
    </div>

  );
}

export default App;
