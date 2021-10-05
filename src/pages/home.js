import React from 'react';
import {
  Preloader,
  Hero,
  Aboutus,
  Header,
  Services,
  Blog,
  PortFolio,
} from '../components';

function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <Hero />
      <Aboutus />
      <Services />
      <PortFolio />
      <Blog />
      <div id="contact" className="contact-us section">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 align-self-center wow fadeInLeft"
              data-wow-duration="0.5s"
              data-wow-delay="0.25s"
            >
              <div className="section-heading">
                <h2>Feel Free To Send Us a Message About Your Website Needs</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doer ket eismod tempor incididunt ut labore et dolores
                </p>
                <div className="phone-info">
                  <h4>
                    For any enquiry, Call Us:{' '}
                    <span>
                      <i className="fa fa-phone"></i>{' '}
                      <a href="#">010-020-0340</a>
                    </span>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInRight"
              data-wow-duration="0.5s"
              data-wow-delay="0.25s"
            >
              <form id="contact" action="" method="post">
                <div className="row">
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Name"
                        autocomplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="surname"
                        name="surname"
                        id="surname"
                        placeholder="Surname"
                        autocomplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Your Email"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        name="message"
                        type="text"
                        className="form-control"
                        id="message"
                        placeholder="Message"
                        required=""
                      ></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="main-button "
                      >
                        Send Message
                      </button>
                    </fieldset>
                  </div>
                </div>
                <div className="contact-dec">
                  <img src="assets/images/contact-decoration.png" alt="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.25s"
            >
              <p>
                © Copyright 2021 Space Dynamic Co. All Rights Reserved. <br />
                Design:{' '}
                <a rel="nofollow" href="https://templatemo.com">
                  TemplateMo
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
