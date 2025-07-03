import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './components/Routes/Routes.tsx';
import './index.css';
// import './css/agenda.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);