import React from 'react';
import { Link } from 'react-router-dom';

const JumbotronFeature = (props) => {
  const {
    imageSRC,
    svgSRC,
    srcSetWebp,
    srcSetJPG,
    heading,
    description,
  } = props;

  return (
    <article className="grid grid--1x2 feature">
      <div className="feature__content" data-aos="fade-right">
        <span className="icon-container">
          <svg className="icon icon--primary">
            <use src={svgSRC}></use>
          </svg>
        </span>
        <h3 className="feature__heading">{heading}</h3>
        <p>{description}</p>
        <Link to="/#" className="link-arrow">
          Learn More
        </Link>
      </div>
      <picture data-aos="zoom-in-left">
        <source type="image/webp" srcSet={srcSetWebp} />
        <source type="image/jpg" srcSet={srcSetJPG} />
        <img className="feature__image" src={imageSRC} alt="" />
      </picture>
    </article>
  );
};
export default JumbotronFeature;
