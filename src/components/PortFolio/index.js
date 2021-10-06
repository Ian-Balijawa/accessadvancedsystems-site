import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

function Showcase() {
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
                See What Our Business <em>Offers</em> &amp; What We{' '}
                <span>Build</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <Link to="#">
              <div
                className="item wow bounceInUp"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <div className="hidden-content">
                  <h4>Health care systems</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                <div className="showed-content">
                  <img src={'assets/images/portfolio-image.png'} alt="photo" />
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-sm-6">
            <Link to="#">
              <div
                className="item wow bounceInUp"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
              >
                <div className="hidden-content">
                  <h4>School Mangement systems</h4>
                  <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                </div>
                <div className="showed-content">
                  <img src="assets/images/portfolio-image.png" alt="" />
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-sm-6">
            <Link to="#">
              <div
                className="item wow bounceInUp"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div className="hidden-content">
                  <h4>Supermarket systems</h4>
                  <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                </div>
                <div className="showed-content">
                  <img src="assets/images/portfolio-image.png" alt="" />
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-sm-6">
            <Link to="#">
              <div
                className="item wow bounceInUp"
                data-wow-duration="1s"
                data-wow-delay="0.6s"
              >
                <div className="hidden-content">
                  <h4>Hardware systems</h4>
                  <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                </div>
                <div className="showed-content">
                  <img src="assets/images/portfolio-image.png" alt="" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
