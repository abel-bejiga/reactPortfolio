import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <ul>
      <Slider {...settings}>
        <li className="item">
          <div className="texts">
            <p>
            "Bemnet has created a stunning website for me that surpasses all expectations. Their expertise and talent in web development are truly exceptional. The website is visually captivating, user-friendly, and perfectly aligned with my brand. She demonstrated professionalism, attention to detail, and excellent communication throughout the process. I highly recommend their services to anyone in search of an outstanding web developer."
            </p>
            <div className="author">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/about/1.jpg"
                    })`,
                  }}
                ></div>
              </div>
              <div className="short">
                <h3 className="author">
                  <span>Abel B.</span>
                </h3>
                <h3 className="job">
                  <span>Client</span>
                </h3>
              </div>
            </div>
          </div>
        </li>
        {/* End single slide item */}

        <li className="item">
          <div className="texts">
            <p>
              I purchased the theme a few weeks ago. I had some issues with the
              theme, I asked customer support to help me with and they were
              helpful and kind to help me with all my problems. I definitely
              recommend this theme to everyone.
            </p>
            <div className="author">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/about/2.jpg"
                    })`,
                  }}
                ></div>
              </div>
              <div className="short">
                <h3 className="author">
                  <span>Teodor Federico</span>
                </h3>
                <h3 className="job">
                  <span>Freelancer</span>
                </h3>
              </div>
            </div>
          </div>
        </li>
        {/* End single slide item */}

        <li className="item">
          <div className="texts">
            <p>
              Really the Code, Support, and design are awesome and its good
              support they are giving. They give an instant solution to our
              needs. Really awesome. I will strongly recommend to my friends.
              Great template, even better service!
            </p>
            <div className="author">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/about/3.jpg"
                    })`,
                  }}
                ></div>
              </div>
              <div className="short">
                <h3 className="author">
                  <span>Bauen Fernandes</span>
                </h3>
                <h3 className="job">
                  <span>Web Developer</span>
                </h3>
              </div>
            </div>
          </div>
        </li>
        {/* End single slide item */}
      </Slider>
    </ul>
  );
}
