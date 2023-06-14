import React from "react";
import AboutImg from '../../assets/img/aboutMe.jpg'

const About = () => {
  return (
    <>
      <div className="shane_tm_section" id="about">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/img/placeholders/1-1.jpg" alt="placeholder" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + AboutImg
                      })`,
                    }}
                  ></div>
                </div>

                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>About Me</span>
                  <h3>Creative Software Developer based in USA</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                  I specialize in front-end web development, creating visually appealing interfaces using <em>HTML</em> and <em>CSS</em>. I also have strong <em>JavaScript</em> skills for interactivity and a good understanding of <em>MySQL</em> for database management. With these skills, I can build dynamic and responsive websites that provide a great user experience.
                  </p>
                </div>
                <div
                  className="shane_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a href="img/resume/resume.jpg" download>
                    Download CV
                  </a>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </>
  );
};

export default About;
