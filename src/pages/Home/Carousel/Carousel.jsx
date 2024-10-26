import './Carousel.css';

const Carousel = () => {
  return (
    <>
      <div className=" content d-flex justify-content-center">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade w-100 h-75"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="gradient-overlay">
                <img
                  src="https://thumbs.dreamstime.com/z/valentines-day-romantic-movies-facebook-cover-web-site-page-vector-illustration-banner-advertising-couple-people-love-bed-208484702.jpg"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mdetails">
            <h1>Movie Name</h1>
            <h5 className='bg-primary text-center'>Highlight</h5>
            <div className="fw-semibold">watch this movie online here</div>
            <div className="fw-semibold">watch this movie online here</div>
            <div className="fw-semibold">watch this movie online here</div>
            <button type="button" className="btn watch_button btn-lg mt-4"><i className="fa-solid fa-play"></i> Watch Now</button>
        </div>
        <div className="navigation">
          <div className="d-flex justify-content-center">
            <div className="btn btn-lg btn-danger">Slide</div>
            <div className="btn btn-lg btn-danger mx-2">Slide</div>
            <div className="btn btn-lg btn-danger">Slide</div>
            <div className="btn btn-lg btn-danger mx-2">Slide</div>
            <div className="btn btn-lg btn-danger">Slide</div>
            <div className="btn btn-lg btn-danger mx-2">Slide</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
