// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/material.css';
import { Link } from 'react-router-dom';





export function Material() {
  return (
    <>

      <hr className='detalheLinha' />
      <h2 className='materialTitulo'>MATERIAL</h2>
      <hr className='detalheLinha' />

      <div className="material-container" id='carousel-container'>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./src/assets/material/material2.jpg" className="d-block w-100" id='imagemMaterial' alt="Imagem referente a banda" />
            </div>
            <div className="carousel-item">
              <img src="./src/assets/material/material3.jpg" className="d-block w-100" alt="Imagem referente a banda" />
            </div>
            <div className="carousel-item">
              <img src="./src/assets/material/material1.jpg" className="d-block w-100" alt="Imagem referente a banda" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <Link to={'/material'}>
          <a> CLIQUE AQUI E CONFIRA OS NOSSOS CONTEÚDOS</a>
        </Link>
      </div>
    </>
  );
}