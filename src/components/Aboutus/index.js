import React from 'react';

function Aboutus() {
  return (
    <div id="about" className="about-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div
              className="left-image wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <img
                src="assets/images/about-left-image.png"
                alt="person graphic"
              />
            </div>
          </div>
          <div className="col-lg-8 align-self-center">
            <div className="services">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="item wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <div className="icon">
                      <img
                        src="assets/images/service-icon-01.png"
                        alt="reporting"
                      />
                    </div>
                    <div className="right-text">
                      <h4>Data Analysis</h4>
                      <p>
                        Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="item wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.7s"
                  >
                    <div className="icon">
                      <img src="assets/images/service-icon-02.png" alt="" />
                    </div>
                    <div className="right-text">
                      <h4>Data Reporting</h4>
                      <p>
                        Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="item wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.9s"
                  >
                    <div className="icon">
                      <img src="assets/images/service-icon-03.png" alt="" />
                    </div>
                    <div className="right-text">
                      <h4>Web Analytics</h4>
                      <p>
                        Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="item wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="1.1s"
                  >
                    <div className="icon">
                      <img src="assets/images/service-icon-04.png" alt="" />
                    </div>
                    <div className="right-text">
                      <h4>SEO Suggestions</h4>
                      <p>
                        Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
