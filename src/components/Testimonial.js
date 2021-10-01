import React from 'react';
import cardTestimonial from '../Fixtures/cardTestimonial.json';
import CardTestimonial from './CardTestimonial';

const Testimonial = () => {
  return (
    <section className="block" data-aos="zoom-in">
      <header className="block__header">
        <h2>What our Customers are Saying</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ipsam.
        </p>
      </header>
      <div className="container">
        {cardTestimonial.map((cardData) => (
          <CardTestimonial
            key={cardData.id}
            authorName={cardData.authorName}
            companyName={cardData.companyName}
            testimony={cardData.testimony}
          />
        ))}
      </div>
    </section>
  );
};
export default Testimonial;
