// import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='logos'>
        <a href="https://vitejs.dev" target="_blank">
          <img src='/src/images/underPassarinho.png' className='logo-passarinho' alt='Undercolin Banda'/>
           {/* aqui você vai por a logo e ao clicar vai para a aba de shows ou foto */}
        </a>
        
      <img src='/src/images/underFont.png' className='logo-font' alt='Fonte Undercolin' />
      </div>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p className='planoA'> Sem plano B SÓ PLANO A! </p> */}
        <img src='/src/images/spotify.png'/>
        <img src='/src/images/youtube.png'/>
        <img src='/src/images/whatsapp.png'/>
      </div>
      <p className="read-the-docs">
        Clique aqui para conhecer nosso som! 
      </p>
    </>
  )
}

export default App
