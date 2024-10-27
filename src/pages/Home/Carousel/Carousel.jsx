import { TMDB_IMG_URL } from '@/utils/constants/tmdbApi';
import './Carousel.css';
import { useSelector } from 'react-redux';

const Carousel = () => {
  const { carouselInfo } = useSelector((state) => state); // Access state
  const truncateText = (text, wordLimit) => {
    return text.split(' ').slice(0, wordLimit).join(' ') + '...';
  };
  return (
    <>
      <div className=" content d-flex justify-content-center">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade w-100 h-75"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {carouselInfo?.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                 <div className="mdetails text-center">
                    <div className='font-monospace fw-semibold title-style text-nowrap'>{item?.title}</div>
                    <div className="fw-semibold">{truncateText(item?.overview || '', 10)}</div>
                    <div className="d-flex justify-content-center">
                      <div className="">{item?.release_date} |</div>
                      <div className="">&nbsp; HINDI |</div>
                      <div className="">&nbsp;{item?.vote_average || "N/A"}</div>
                      <div className="">{item?.vote_average}</div>
                    </div>
                    <button type="button" className="btn watch_button btn-lg mt-4">
                      <i className="fa-solid fa-play"></i> Watch Now
                    </button>
                  </div>
                <div className="gradient-overlay">
                  <img
                    src={TMDB_IMG_URL + item?.backdrop_path}
                    alt="..."
                    className="d-block w-100" // Ensure image is responsive
                  />
                </div>
              </div>
            ))}
          </div>
          {/* <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button> */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="navigation">
        <div className="d-flex justify-content-center">
          <div className="btn btn-lg btn-danger">Slide</div>
          <div className="btn btn-lg btn-danger mx-3">Slide</div>
          <div className="btn btn-lg btn-danger">Slide</div>
          <div className="btn btn-lg btn-danger mx-3">Slide</div>
          <div className="btn btn-lg btn-danger">Slide</div>
          <div className="btn btn-lg btn-danger mx-3">Slide</div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
