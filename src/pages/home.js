import React, { useState } from 'react';
import { FeatureBlockHeader } from '../components/BlockHeader';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Jumbotron } from '../components/Jumbotron';
import { Plans } from '../components/Plans';

export default function Home() {
  const [productsExpanded, setProductsExpanded] = useState(true);
  const [companyExpanded, setCompanyExpanded] = useState(false);
  const [domainsExpanded, setDomainsExpanded] = useState(false);
  const [supportExpanded, setSupportExpanded] = useState(false);

  return (
    <>
      <Header />
      <Hero />
      <FeatureBlockHeader />
      <Plans />
      <Jumbotron />

      <section className="block block--dark block--skewed-right block-showcase">
        <header className="block__header">
          <h2>User-friendly Control Panel</h2>
        </header>
        <div className="container grid grid--1x2">
          <picture data-aos="fade-right" className="block-showcase__image">
            <source
              type="image/webp"
              srcSet="images/ipad.webp 1x, images/ipad@2x.webp 2x"
            />
            <source
              type="image/png"
              srcSet="images/ipad.png 1x, images/ipad@2x.png 2x"
            />
            <img src="images/ipad.png" alt="" />
          </picture>
          <ul className="list" data-aos="fade-up">
            <li>
              <div className="media">
                <div className="media__image">
                  <svg className="icon icon--primary">
                    <use src="images/sprite.svg#snap"></use>
                  </svg>
                </div>
                <div className="media__body">
                  <h3 className="media__title">Easy Start & Managed Updates</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam quisquam, ex nostrum vero voluptates dicta excepturi
                    vel perspiciatis consequuntur ab.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="media">
                <div className="media__image">
                  <svg className="icon icon--primary">
                    <use src="images/sprite.svg#growth"></use>
                  </svg>
                </div>
                <div className="media__body">
                  <h3 className="media__title">Staging, GIT & WP-CLI</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam quisquam, ex nostrum vero voluptates dicta excepturi
                    vel perspiciatis consequuntur ab.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="media">
                <div className="media__image">
                  <svg className="icon icon--primary">
                    <use src="images/sprite.svg#wordpress"></use>
                  </svg>
                </div>
                <div className="media__body">
                  <h3 className="media__title">Dynamic Caching & More</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam quisquam, ex nostrum vero voluptates dicta excepturi
                    vel perspiciatis consequuntur ab.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="block" data-aos="zoom-in">
        <header className="block__header">
          <h2>What our Customers are Saying</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
            ipsam.
          </p>
        </header>
        <div className="container">
          <div className="card testimonial">
            <div className="grid grid--1x2">
              <div className="testimonial__image">
                <img
                  src="images/testimonial.jpg"
                  alt="A happy, smiling customer"
                />
                <span className="icon-container icon-container--accent">
                  <svg className="icon icon--white icon--small">
                    <use src="images/sprite.svg#quotes"></use>
                  </svg>
                </span>
              </div>
              <blockquote className="quote">
                <p className="quote__text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt optio officiis dolore earum error eaque perferendis
                  laudantium sed praesentium dolorum.
                </p>
                <footer>
                  <div className="media">
                    <div className="media__image">
                      <svg className="icon icon--primary quote__line">
                        <use src="images/sprite.svg#line"></use>
                      </svg>
                    </div>
                    <div className="media__body">
                      <h3 className="media__title quote__author">John Smith</h3>
                      <p className="quote__organization">ABC Company</p>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="callout callout--primary callout-signup">
          <div className="grid grid--1x2">
            <div className="callout__content">
              <h2 className="callout__heading">Ready to Get Started?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi voluptate tempora qui distinctio consequatur aliquid
                pariatur cupiditate quas cum fugit.
              </p>
            </div>
            <a href="/#" className="btn btn--secondary btn--stretched">
              Get Started
            </a>
          </div>
        </div>
      </div>

      <footer className="block block--dark footer">
        <div className="container grid footer__sections">
          <section
            className={
              productsExpanded
                ? 'collapsible collapsible--expanded footer__section'
                : 'collapsible footer__section'
            }
            onClick={() =>
              setProductsExpanded((productsExpanded) => !productsExpanded)
            }
          >
            <header className="collapsible__header">
              <h2 className="collapsible__heading footer__heading">Products</h2>
              <svg className="icon icon--white collapsible__chevron">
                <use src="images/sprite.svg#chevron"></use>
              </svg>
            </header>
            <div className="collapsible__content">
              <ul className="list">
                <li>
                  <a href="/#">Website Hosting</a>
                </li>
                <li>
                  <a href="/#">Free Automated Wordpress</a>
                </li>
                <li>
                  <a href="/#">Migrations</a>
                </li>
              </ul>
            </div>
          </section>
          <section
            className={
              companyExpanded
                ? 'collapsible collapsible--expanded footer__section'
                : 'collapsible footer__section'
            }
            onClick={() =>
              setCompanyExpanded((companyExpanded) => !companyExpanded)
            }
          >
            <header className="collapsible__header">
              <h2 className="collapsible__heading footer__heading">Company</h2>
              <svg className="icon icon--white collapsible__chevron">
                <use src="images/sprite.svg#chevron"></use>
              </svg>
            </header>
            <div className="collapsible__content">
              <ul className="list">
                <li>
                  <a href="/#">About</a>
                </li>
                <li>
                  <a href="/#">Affiliates</a>
                </li>
                <li>
                  <a href="/#">Blog</a>
                </li>
              </ul>
            </div>
          </section>
          <section
            className={
              supportExpanded
                ? 'collapsible collapsible--expanded footer__section'
                : 'collapsible footer__section'
            }
            onClick={() =>
              setSupportExpanded((supportExpanded) => !supportExpanded)
            }
          >
            <header className="collapsible__header">
              <h2 className="collapsible__heading footer__heading">Support</h2>
              <svg className="icon icon--white collapsible__chevron">
                <use src="images/sprite.svg#chevron"></use>
              </svg>
            </header>
            <div className="collapsible__content">
              <ul className="list">
                <li>
                  <a href="/">Contact</a>
                </li>
                <li>
                  <a href="/">Knowledge Base</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
              </ul>
            </div>
          </section>
          <section
            className={
              domainsExpanded
                ? 'collapsible collapsible--expanded footer__section'
                : 'collapsible footer__section'
            }
            onClick={() =>
              setDomainsExpanded((domainsExpanded) => !domainsExpanded)
            }
          >
            <header className="collapsible__header">
              <h2 className="collapsible__heading footer__heading">Domains</h2>
              <svg className="icon icon--white collapsible__chevron">
                <use src="images/sprite.svg#chevron"></use>
              </svg>
            </header>
            <div className="collapsible__content">
              <ul className="list">
                <li>
                  <a href="/">Domain Checker</a>
                </li>
                <li>
                  <a href="/">Domain Transfer</a>
                </li>
                <li>
                  <a href="/">Free Domain</a>
                </li>
              </ul>
            </div>
          </section>
          <section className="footer__brand">
            <img src="images/logo.svg" alt="" />
            <p className="footer__copyright">Copyright 2020 Mosh Hamedani</p>
          </section>
        </div>
      </footer>
    </>
  );
}
