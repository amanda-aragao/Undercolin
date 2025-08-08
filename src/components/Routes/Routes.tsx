import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import History from '../History/History.tsx';
import Home from '../Home/Home.tsx';
import Merch from '../Merch/Merch.tsx';
import App from '../App/App.tsx'


function Main() {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />} />
        <Route path="/historia" element={<History menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />} />
        <Route path="/merch" element={<Merch menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />} />
      </Routes>
    </Router>
  );
}

export default Main;