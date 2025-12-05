import React from "react";
import Slider from "react-slick";

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            Testimonial
          </h5>
          <h1 className="mb-5">Our Clients Say!!!</h1>
        </div>

        <Slider {...settings}>
          {[1, 2, 3, 4].map((num) => (
            <div key={num}>
              <div className="testimonial-item bg-transparent border rounded p-4 mx-2">
                <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                <p>
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid flex-shrink-0 rounded-circle"
                    src={`/assets/img/testimonial-${num}.jpg`}
                    style={{ width: 50, height: 50 }}
                    alt=""
                  />
                  <div className="ps-3">
                    <h5 className="mb-1">Client Name</h5>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
