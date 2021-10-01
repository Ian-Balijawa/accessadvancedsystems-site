import React from 'react';

const CardTestimonial = (props) => {
  const { companyName, authorName, testimony } = props;

  return (
    <div className="card testimonial">
      <div className="grid grid--1x2">
        <div className="testimonial__image">
          <img src="images/testimonial.jpg" alt="A happy, smiling customer" />
          <span className="icon-container icon-container--accent">
            <svg className="icon icon--white icon--small">
              <use src="images/sprite.svg#quotes"></use>
            </svg>
          </span>
        </div>
        <blockquote className="quote">
          <p className="quote__text">{testimony}</p>
          <footer>
            <div className="media">
              <div className="media__image">
                <svg className="icon icon--primary quote__line">
                  <use src="images/sprite.svg#line"></use>
                </svg>
              </div>
              <div className="media__body">
                <h3 className="media__title quote__author">{authorName}</h3>
                <p className="quote__organization">{companyName}</p>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default CardTestimonial;
