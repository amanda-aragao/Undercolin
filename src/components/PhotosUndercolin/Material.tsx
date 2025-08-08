// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Material.css';
import foto1 from '../../assets/material/material1.jpg';
import foto2 from '../../assets/material/material2.jpg';
import foto3 from '../../assets/material/material3.jpg';

function SpotifySingle() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      // gap: '20px',
      padding: '20px',
      paddingBottom: '60px',
      margin: '0 auto',
      width: '50%',
      alignSelf: 'center',
      justifyContent: 'center'
    }}>

      < iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/track/3MAFVGKEVV9EgO1lQnPqcc?utm_source=generator"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Undercolin Single"
      />
    </div >
  );
}


export function Material() {
  return (
    <>

      <hr className='detailLine' />
      <div className="materialContainer" id='carousel-container'>
        <div id="carouselUndercolin" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselUndercolin" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselUndercolin" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselUndercolin" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={foto2} className="d-block w-100" id='imagemMaterial' alt="Imagem referente a banda" />
            </div>
            <div className="carousel-item">
              <img src={foto3} className="d-block w-100" alt="Imagem referente a banda" />
            </div>
            <div className="carousel-item">
              <img src={foto1} className="d-block w-100" alt="Imagem referente a banda" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselUndercolin" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselUndercolin" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='spotifySingle'>
        <SpotifySingle />
      </div>

    </>
  );
}