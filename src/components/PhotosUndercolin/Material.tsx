import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Material.css';


import foto1SrcSet from '../../assets/material/material1.jpg?w=320;640;960;1280&format=webp;avif&as=srcset';
import foto1Fallback from '../../assets/material/material1.jpg?w=960&as=url';

import foto2SrcSet from '../../assets/material/material2.jpg?w=320;640;960;1280&format=webp;avif&as=srcset';
import foto2Fallback from '../../assets/material/material2.jpg';

import foto3SrcSet from '../../assets/material/material3.jpg?w=320;640;960;1280&format=webp;avif&as=srcset';
import foto3Fallback from '../../assets/material/material3.jpg';

function SpotifySingle() {
  return (

    <div className="spotifyWrapper">
      <iframe className="iframe" data-testid="embed-iframe" src="https://open.spotify.com/embed/album/6JDby5uA7M7LSVnIPAmeZa?utm_source=generator"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        // style={{ border: 'none' }}
        title="Undercolin Single"
      >

      </iframe>
    </div>
  );
}

function Material() {
  return (
    <>
      <hr className="detailLine" />

      <div className="materialContainer">
        <div className="contentInner" id="carouselContainer">
          <div id="carouselUndercolin" className="carousel slide">
            <div className="carouselIndicators">
              <button type="button" data-bs-target="#carouselUndercolin" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselUndercolin" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselUndercolin" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carouselInner">
              <div className="carousel-item active">
                <img
                  src={foto2Fallback}
                  srcSet={foto2SrcSet}
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="d-block w-100"
                  alt="Imagem referente à banda"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={foto3Fallback}
                  srcSet={foto3SrcSet}
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="d-block w-100"
                  alt="Imagem referente à banda"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={foto1Fallback}
                  srcSet={foto1SrcSet}
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="d-block w-100"
                  alt="Imagem referente à banda"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselUndercolin" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselUndercolin" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Próximo</span>
            </button>
          </div>
          <SpotifySingle />
        </div>
      </div>
    </>
  );
}


export default Material;
