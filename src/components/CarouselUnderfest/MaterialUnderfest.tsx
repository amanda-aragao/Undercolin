import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './MaterialUnderfest.css';

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
              <img src="../src/assets/underfest/Underfest2.jpg" className="d-block w-100" id="imagemUnderfest" alt="Imagem referente às bandas do Underfest" />

            </div>
            <div className="carousel-item">
              <img src="../src/assets/underfest/Underfest3.jpg" className="d-block w-100" loading="lazy"
                alt="Imagem referente às bandas do Underfest" />
            </div>
            <div className="carousel-item">
              <img src="../src/assets/underfest/Underfest4.jpg" className="d-block w-100" loading="lazy"
                alt="Imagem referente às bandas do Underfest" />
            </div>
            <div className="carousel-item">
              <img src="../src/assets/underfest/Underfest5.jpg" className="d-block w-100" loading="lazy"
                alt="Imagem referente às bandas do Underfest" />
            </div>
            <div className="carousel-item">
              <img src="../src/assets/underfest/Underfest6.jpg" className="d-block w-100" loading="lazy"
                alt="Imagem referente às bandas do Underfest" />
            </div>
            <div className="carousel-item">
              <img src="../src/assets/underfest/Underfest7.jpg" className="d-block w-100" loading="lazy"
                alt="Imagem referente às bandas do Underfest" />
            </div>
            <div className="carousel-item">
              <img src="../src/assets/underfest/Underfest8.jpg" className="d-block w-100" loading="lazy"
                alt="Imagem referente às bandas do Underfest" />
            </div>
            <div className="carousel-item">
              <img src="../src/assets/underfest/Underfest9.jpg" className="d-block w-100" loading="lazy"
                alt="Imagem referente às bandas do Underfest" />
            </div>
            <div className="carousel-item">
              <img src="../src/assets/underfest/Underfest10.jpg" className="d-block w-100" loading="lazy"
                alt="Imagem referente às bandas do Underfest" />
            </div>
            <div className="carousel-item">
              <img src="../src/assets/underfest/Underfest.jpg" className="d-block w-100" loading="lazy"
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
