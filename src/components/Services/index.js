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
                Grow your Buisness with our <em>Business Management</em>{' '}
                software
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                doloribus recusandae modi excepturi voluptas at placeat debitis?
                Dignissimos ipsum odit ut obcaecati officiis illum quam
                perspiciatis at nam vitae? Aliquid deleniti facilis velit
                mollitia quibusdam quasi, labore, autem officia maiores, eveniet
                perferendis sed illum quae dolorem. Id, maiores ratione. Sequi?
              </p>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="first-bar progress-skill-bar">
                  <h4>Website Analysis</h4>
                  <div className="filled-bar"></div>
                  <div className="full-bar"></div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="second-bar progress-skill-bar">
                  <h4>SEO Reports</h4>
                  <div className="filled-bar"></div>
                  <div className="full-bar"></div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="third-bar progress-skill-bar">
                  <h4>Page Optimizations</h4>
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
