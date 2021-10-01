import React from 'react';
import card from '../Fixtures/card.json';
import Card from './Card';

export const Plans = () => {
  return (
    <section data-aos="fade-up" className="block container block-plans">
      <div className="grid grid--1x3">
        {card.map((card) => (
          <div className="plan" key={card.id}>
            <Card
              className={card.class}
              name={card.name}
              price={card.price}
              billingCycle={card.billingCycle}
              body={card.body}
              discount={card.discount}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
