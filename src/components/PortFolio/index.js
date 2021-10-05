import React from 'react';

function PortFolio() {
  return (
    <div id="portfolio" className="our-portfolio section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div
              className="section-heading  wow bounceIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <h2>
                See What Our Agency <em>Offers</em> &amp; What We{' '}
                <span>Provide</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <a href="#">
              <div
                className="item wow bounceInUp"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <div className="hidden-content">
                  <h4>SEO Analysis</h4>
                  <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                </div>
                <div className="showed-content">
                  <img src="assets/images/portfolio-image.png" alt="" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6">
            <a href="#">
              <div
                className="item wow bounceInUp"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
              >
                <div className="hidden-content">
                  <h4>Website Reporting</h4>
                  <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                </div>
                <div className="showed-content">
                  <img src="assets/images/portfolio-image.png" alt="" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6">
            <a href="#">
              <div
                className="item wow bounceInUp"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div className="hidden-content">
                  <h4>Performance Tests</h4>
                  <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                </div>
                <div className="showed-content">
                  <img src="assets/images/portfolio-image.png" alt="" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-sm-6">
            <a href="#">
              <div
                className="item wow bounceInUp"
                data-wow-duration="1s"
                data-wow-delay="0.6s"
              >
                <div className="hidden-content">
                  <h4>Data Analysis</h4>
                  <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                </div>
                <div className="showed-content">
                  <img src="assets/images/portfolio-image.png" alt="" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
