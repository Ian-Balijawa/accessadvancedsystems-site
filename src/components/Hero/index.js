import React from 'react';
import { Link } from 'react-router-dom';
import OptForm from '../OptForm';

function Hero() {
  return (
    <div
      className="main-banner wow fadeIn"
      id="top"
      data-wow-duration="1s"
      data-wow-delay="0.5s"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div
                  className="left-content header-text wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                >
                  <h1>Welcome to Access Advanced Systems</h1>
                  <h2>
                    We Make <em>Business Management Systems</em> &amp;{' '}
                    <span>WEB</span> Design
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint placeat odit consectetur ipsa porro doloremque.{' '}
                    <Link
                      rel="nofollow"
                      to="https://accessadvancedsystems.vercel.app"
                      target="_parent"
                    >
                      Access
                    </Link>
                  </p>
                  <OptForm />
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="right-image wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <img
                    // src="assets/images/banner-right-image.png"
                    alt="team meeting"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
