import React from 'react';
import { Link } from 'react-router-dom';
import { ContactForm } from '..';

function ContactUs() {
  return (
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
                    <Link to="#">010-020-0340</Link>
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
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
