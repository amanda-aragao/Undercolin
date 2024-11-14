import './css/App.css'

import { Link } from 'react-router-dom';


function App() {

  return (
    <>
      <div className='logos'>
        <Link to="/home">
          <img src='/src/assets/images/underPassarinho.png' className='logo-passarinho' alt='Undercolin Banda' />
        </Link>

        <img src='/src/assets/images/underFont.png' className='logo-font' alt='Fonte Undercolin' />
      </div>
      <Link target='_blank'  to="https://linktr.ee/undercolin">
        <div className="card">
          <img src='/src/assets/images/spotify.png' />
          <img src='/src/assets/images/youtube.png' />
          <img src='/src/assets/images/whatsapp.png' />
          <img src='/src/assets/images/instagram.png' className='instagram' />
        </div>
      </Link>
      <p className="planoA">
        Clique aqui para conhecer nosso som!
      </p>
    </>
  )
}

export default App
