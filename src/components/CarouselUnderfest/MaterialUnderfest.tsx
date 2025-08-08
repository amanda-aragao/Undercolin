import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './MaterialUnderfest.css';
import underfest2 from '../../assets/underfest/Underfest2.jpg';
import underfest3 from '../../assets/underfest/Underfest3.png';
import underfest4 from '../../assets/underfest/Underfest4.png';
import underfest5 from '../../assets/underfest/Underfest5.png';
import underfest6 from '../../assets/underfest/Underfest6.png';
import underfest7 from '../../assets/underfest/Underfest7.png';
import underfest8 from '../../assets/underfest/Underfest8.png';
import underfest9 from '../../assets/underfest/Underfest9.png';
import underfest10 from '../../assets/underfest/Underfest10.png';
import underfest from '../../assets/underfest/Underfest.png';

export function MaterialUnderfest() {
  return (
    <>
      <div className="materialU-container" id="carouselUnderfest-container">
        <div id="carouselUnderfest" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselUnderfest" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselUnderfest" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselUnderfest" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselUnderfest" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselUnderfest" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselUnderfest" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselUnderfest" data-bs-slide-to="6" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselUnderfest" data-bs-slide-to="7" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselUnderfest" data-bs-slide-to="8" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselUnderfest" data-bs-slide-to="9" aria-label="Slide 6"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={underfest2} className="d-block w-100" id="imagemUnderfest" alt="Imagem referente às bandas do Underfest" />

            </div>
            <div className="carousel-item">
              <img src={underfest3} className="d-block w-100" loading="lazy"
                alt="Imagem referente às bandas do Underfest" />
            </div>
            <div className="carousel-item">
              <img src={underfest4} className="d-block w-100" loading="lazy"
                alt="Imagem referente às bandas do Underfest" />
            </div>
            <div className="carousel-item">
              <img src={underfest5} className="d-block w-100" loading="lazy"
                alt="Imagem referente às bandas do Underfest" />
            </div>
            <div className="carousel-item">
              <img src={underfest6} className="d-block w-100" loading="lazy"
                alt="Imagem referente às bandas do Underfest" />
            </div>
            <div className="carousel-item">
              <img src={underfest7} className="d-block w-100" loading="lazy"
                alt="Imagem referente às bandas do Underfest" />
            </div>
            <div className="carousel-item">
              <img src={underfest8} className="d-block w-100" loading="lazy"
                alt="Imagem referente às bandas do Underfest" />
            </div>
            <div className="carousel-item">
              <img src={underfest9} className="d-block w-100" loading="lazy"
                alt="Imagem referente às bandas do Underfest" />
            </div>
            <div className="carousel-item">
              <img src={underfest10} className="d-block w-100" loading="lazy"
                alt="Imagem referente às bandas do Underfest" />
            </div>
            <div className="carousel-item">
              <img src={underfest} className="d-block w-100" loading="lazy"
                alt="Imagem referente às bandas do Underfest" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselUnderfest" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselUnderfest" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div >
    </>
  );
}
