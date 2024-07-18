import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Historia } from './Historia.tsx';
import { Home } from './Home.tsx'
import App from './App.tsx'
import './css/index.css'

function Main() {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />} />
        <Route path="/historia" element={<Historia menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />} />
        {/* Outras rotas */}
      </Routes>
    </Router>
  );
}

export default Main;