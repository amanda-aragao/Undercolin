import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './MaterialUnderfest.css';

import uf2SrcSet from '../../assets/underfest/Underfest2.jpg?w=320;640;960;1280&format=webp;avif&as=srcset';
import uf2Fallback from '../../assets/underfest/Underfest2.jpg?w=960&as=url';
import uf3SrcSet from '../../assets/underfest/Underfest3.jpg?w=320;640;960;1280&format=webp;avif&as=srcset';
import uf3Fallback from '../../assets/underfest/Underfest3.jpg?w=960&as=url';
import ufMainSrcSet from '../../assets/underfest/Underfest.jpg?w=320;640;960;1280&format=webp;avif&as=srcset';
import ufMainFallback from '../../assets/underfest/Underfest.jpg?w=960&as=url';

const slides = [
  { srcSet: uf2SrcSet, fallback: uf2Fallback },
  { srcSet: uf3SrcSet, fallback: uf3Fallback },
  { srcSet: ufMainSrcSet, fallback: ufMainFallback },
];

export function MaterialUnderfest() {
  return (
    <div className="carouselContainer">
      <div
        id="carouselUnderfest"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#carouselUnderfest"
              data-bs-slide-to={i}
              className={i === 0 ? 'active' : ''}
              aria-current={i === 0 ? 'true' : undefined}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={slide.fallback}
                srcSet={slide.srcSet}
                sizes="(max-width: 768px) 100vw, 768px"
                alt={`Slide ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselUnderfest"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselUnderfest"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
