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

/**
 * 
 * <footer class="block block--dark footer">
      <div class="container grid footer__sections">
        <section class="collapsible collapsible--expanded footer__section">
          <header class="collapsible__header">
            <h2 class="collapsible__heading footer__heading">Products</h2>
            <svg class="icon icon--white collapsible__chevron">
              <use xlink:href="images/sprite.svg#chevron"></use>
            </svg>
          </header>
          <div class="collapsible__content">
            <ul class="list">
              <li><a href="#">Website Hosting</a></li>
              <li><a href="#">Free Automated Wordpress</a></li>
              <li><a href="#">Migrations</a></li>
            </ul>
          </div>
        </section>
        <section class="collapsible footer__section">
          <header class="collapsible__header">
            <h2 class="collapsible__heading footer__heading">Company</h2>
            <svg class="icon icon--white collapsible__chevron">
              <use xlink:href="images/sprite.svg#chevron"></use>
            </svg>
          </header>
          <div class="collapsible__content">
            <ul class="list">
              <li><a href="#">About</a></li>
              <li><a href="#">Affiliates</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
        </section>
        <section class="collapsible footer__section">
          <header class="collapsible__header">
            <h2 class="collapsible__heading footer__heading">Support</h2>
            <svg class="icon icon--white collapsible__chevron">
              <use xlink:href="images/sprite.svg#chevron"></use>
            </svg>
          </header>
          <div class="collapsible__content">
            <ul class="list">
              <li><a href="#">Contact</a></li>
              <li><a href="#">Knowledge Base</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </section>
        <section class="collapsible footer__section">
          <header class="collapsible__header">
            <h2 class="collapsible__heading footer__heading">Domains</h2>
            <svg class="icon icon--white collapsible__chevron">
              <use xlink:href="images/sprite.svg#chevron"></use>
            </svg>
          </header>
          <div class="collapsible__content">
            <ul class="list">
              <li><a href="#">Domain Checker</a></li>
              <li><a href="#">Domain Transfer</a></li>
              <li><a href="#">Free Domain</a></li>
            </ul>
          </div>
        </section>
        <section class="footer__brand">
          <img src="images/logo.svg" alt="" />
          <p class="footer__copyright">Copyright 2020 Mosh Hamedani</p>
        </section>
      </div>
    </footer>
 * 
 * 
 */
