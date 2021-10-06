import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <div id="blog" className="our-blog section">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay="0.25s"
          >
            <div className="section-heading">
              <h2>
                Check Out What Is <em>Trending</em> In Our Latest{' '}
                <span>News</span>
              </h2>
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay="0.25s"
          >
            <div className="top-dec">
              <img src="assets/images/blog-dec.png" alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.25s"
          >
            <div className="left-image">
              <Link to="#">
                <img
                  src="assets/images/big-blog-thumb.jpg"
                  alt="Workspace Desktop"
                />
              </Link>
              <div className="info">
                <div className="inner-content">
                  <ul>
                    <li>
                      <i className="fa fa-calendar"></i>{' '}
                      {new Date().toUTCString()}
                    </li>
                    <li>
                      <i className="fa fa-users"></i> accessadvanced
                    </li>
                    <li>
                      <i className="fa fa-folder"></i> Systems
                    </li>
                  </ul>
                  <Link to="#">
                    <h4>SEO Agency &amp; Digital Marketing</h4>
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur and sed doer ket
                    eismod tempor incididunt ut labore et dolore magna...
                  </p>
                  {/* <div className="main-blue-button">
                    <Link to="#">Discover More</Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.25s"
          >
            <div className="right-list">
              <ul>
                <li>
                  <div className="left-content align-self-center">
                    <span>
                      <i className="fa fa-calendar"></i> 18 Mar 2021
                    </span>
                    <Link to="#">
                      <h4>New Websites &amp; Backlinks</h4>
                    </Link>
                    <p>
                      Lorem ipsum dolor sit amsecteturii and sed doer ket
                      eismod...
                    </p>
                  </div>
                  <div className="right-image">
                    <Link to="#">
                      <img src="assets/images/blog-thumb-01.jpg" alt="" />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="left-content align-self-center">
                    <span>
                      <i className="fa fa-calendar"></i> 14 Mar 2021
                    </span>
                    <Link to="#">
                      <h4>SEO Analysis &amp; Content Ideas</h4>
                    </Link>
                    <p>
                      Lorem ipsum dolor sit amsecteturii and sed doer ket
                      eismod...
                    </p>
                  </div>
                  <div className="right-image">
                    <Link to="#">
                      <img src="assets/images/blog-thumb-01.jpg" alt="" />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="left-content align-self-center">
                    <span>
                      <i className="fa fa-calendar"></i> 06 Mar 2021
                    </span>
                    <Link to="#">
                      <h4>SEO Tips &amp; Digital Marketing</h4>
                    </Link>
                    <p>
                      Lorem ipsum dolor sit amsecteturii and sed doer ket
                      eismod...
                    </p>
                  </div>
                  <div className="right-image">
                    <Link to="#">
                      <img src="assets/images/blog-thumb-01.jpg" alt="" />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
