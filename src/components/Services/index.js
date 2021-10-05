import React from 'react';

function Services() {
  return (
    <div id="services" className="our-services section">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 align-self-center  wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="left-image">
              <img src="assets/images/services-left-image.png" alt="" />
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="section-heading">
              <h2>
                Grow your website with our <em>SEO</em> service &amp;{' '}
                <span>Project</span> Ideas
              </h2>
              <p>
                Space Dynamic HTML5 template is free to use for your website
                projects. However, you are not permitted to redistribute the
                template ZIP file on any CSS template collection websites.
                Please contact us for more information. Thank you for your kind
                cooperation.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="first-bar progress-skill-bar">
                  <h4>Website Analysis</h4>
                  <span>84%</span>
                  <div className="filled-bar"></div>
                  <div className="full-bar"></div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="second-bar progress-skill-bar">
                  <h4>SEO Reports</h4>
                  <span>88%</span>
                  <div className="filled-bar"></div>
                  <div className="full-bar"></div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="third-bar progress-skill-bar">
                  <h4>Page Optimizations</h4>
                  <span>94%</span>
                  <div className="filled-bar"></div>
                  <div className="full-bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
