import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Historia } from './Historia.tsx';
import { Home } from './Home.tsx'
// import { Material } from './Material.tsx';
import { Merch } from './Merch.tsx';
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
        <Route path="/merch" element={<Merch menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />} />
        <Route path="/material" />
      </Routes>
    </Router>
  );
}

export default Main;