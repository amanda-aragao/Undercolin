import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import "./Footer.css";
import underFont from '../../assets/images/underFont.png';


function Footer() {


  return (
    <footer className="footer">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">

        <div className="mb-3 mb-md-0">
          <img src={underFont} alt='Undercolin Fonte' className='underFooter' />

          <p className="mb-0 small">© {new Date().getFullYear()} TODOS OS DIREITOS RESERVADOS</p>
        </div>


        <div className="icons">
          <a href="https://instagram.com/undercolin" target="_blank" rel="noreferrer" className="footer-social">
            <FaInstagram size={30} />
          </a>
          <a href="https://open.spotify.com/intl-pt/artist/6nwROjcnQdTIbv2zIu6Frn" target="_blank" rel="noreferrer" className="footer-social">
            <FaSpotify size={30} />
          </a>
          <a href="https://www.youtube.com/@undercolin" target=" _blank" rel="noreferrer" className="footer-social">
            <FaYoutube size={30} />
          </a>
        </div>
      </div>
    </footer >
  );
}

export default Footer;
