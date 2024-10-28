import { TMDB_IMG_URL } from '@/utils/constants/tmdbApi';
import './Carousel.css';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { Carousel } from 'bootstrap';

const CarouselEle = () => {
  const carouselRef = useRef(null);
  const { carouselInfo } = useSelector((state) => state); // Access state
  const truncateText = (text, wordLimit) => {
    return text.split(' ').slice(0, wordLimit).join(' ') + '...';
  };
  const goToSlide = (index) => {
    const carouselElement = carouselRef.current;
    const carouselInstance = new Carousel(carouselElement);
    carouselInstance.to(index);
  };

  return (
    <>
      <div className=" content d-flex justify-content-center">
        <div
          id="carouselExampleFade"
          ref={carouselRef}
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
                  <div className="font-monospace fw-semibold title-style text-nowrap">
                    {item?.title}
                  </div>
                  <div className="fw-semibold">
                    {truncateText(item?.overview || '', 10)}
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="">{item?.release_date} |</div>
                    <div className="">&nbsp; HINDI |</div>
                    {item?.vote_average ? (
                      <div className="">&nbsp;{item?.vote_average}/10</div>
                    ) : (
                      <div className="">&nbsp;N/A</div>
                    )}
                  </div>
                  <div className="d-flex mt-4 justify-content-around">
                    <button type="button" className="btn watch_button btn-lg ">
                      <i className="fa-solid fa-play"></i> Watch Now
                    </button>
                    <button className="btn btn-mute fav_button">
                      <i className="fa-solid fa-heart fa-lg"></i>
                    </button>
                  </div>
                </div>
                <div className="gradient-overlay">
                  <img
                    src={TMDB_IMG_URL + item?.backdrop_path}
                    alt="..."
                    className="d-block w-100 Cover_poster" // Ensure image is responsive
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="navigation">
        <div className="d-flex justify-content-around">
          {carouselInfo?.map((item, index) => (
            <img key={index} className='ref_img'  onClick={() => goToSlide(index)} src={TMDB_IMG_URL + item?.backdrop_path} alt="" />
          ))}
        </div>
      </div>
    </>
  );
};

export default CarouselEle;
