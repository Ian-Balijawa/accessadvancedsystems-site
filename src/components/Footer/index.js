import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.25s"
          >
            <p>
              © Copyright 2021 Access Advanced Systems Co. All Rights Reserved.{' '}
              <br />
              Design:{' '}
              <Link rel="nofollow" to="https://accessadvancedsystems.com">
                acessadvancedsystems
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
