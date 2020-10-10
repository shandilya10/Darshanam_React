import React, {  useState, useEffect  } from "react";
import Slider from "react-slick";
function Banner() {
    const settings = {
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <section className="banner_part">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="banner_slider">
                <Slider {...settings}>
                  <div className="single_banner_slider">
                    <div className="row">
                      <div className="col-lg-5 col-md-8">
                        <div className="banner_text">
                          <div className="banner_text_iner">
                            <h1>Wood &amp; Cloth
                              Sofa</h1>
                            <p>Incididunt ut labore et dolore magna aliqua quis ipsum
                              suspendisse ultrices gravida. Risus commodo viverra</p>
                            <a href="#" className="btn_2">buy now</a>
                          </div>
                        </div>
                      </div>
                      <div className="banner_img d-none d-lg-block">
                        <img src="assets/img/banner_img.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="single_banner_slider">
                    <div className="row">
                      <div className="col-lg-5 col-md-8">
                        <div className="banner_text">
                          <div className="banner_text_iner">
                            <h1>Cloth &amp; Wood
                              Sofa</h1>
                            <p>Incididunt ut labore et dolore magna aliqua quis ipsum
                              suspendisse ultrices gravida. Risus commodo viverra</p>
                            <a href="#" className="btn_2">buy now</a>
                          </div>
                        </div>
                      </div>
                      <div className="banner_img d-none d-lg-block">
                        <img src="assets/img/banner_img.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="single_banner_slider">
                    <div className="row">
                      <div className="col-lg-5 col-md-8">
                        <div className="banner_text">
                          <div className="banner_text_iner">
                            <h1>Wood &amp; Cloth
                              Sofa</h1>
                            <p>Incididunt ut labore et dolore magna aliqua quis ipsum
                              suspendisse ultrices gravida. Risus commodo viverra</p>
                            <a href="#" className="btn_2">buy now</a>
                          </div>
                        </div>
                      </div>
                      <div className="banner_img d-none d-lg-block">
                        <img src="assets/img/banner_img.png" alt="" />
                      </div>
                    </div>
                  </div>
                  </Slider>
                </div>
                <div className="slider-counter" />
              </div>
            </div>
          </div>
        </section>
    );
}
export default Banner;