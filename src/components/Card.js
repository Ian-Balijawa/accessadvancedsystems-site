import React from 'react';

export const Card = (props) => {
  const { name, price, billingCycle, discount, cardClass, description } = props;
  const { item1, item2, item3, item4 } = props.body;
  return (
    <div className={cardClass}>
      <header className="card__header">
        <h3 className="plan__name">{name}</h3>
        <span className="plan__price">{`$${price}`}</span>
        <span className="plan__billing-cycle">{`/${billingCycle}`}</span>
        <span className="badge badge--secondary badge--small">{`${discount}% OFF`}</span>
        <span className="plan__description">{`${description}`}</span>
      </header>
      <div className="card__body">
        <ul className="list list--tick">
          <li className="list__item">{item1}</li>
          <li className="list__item">{item2}</li>
          <li className="list__item">{item3}</li>
          <li className="list__item">{item4}</li>
        </ul>
        <button className="btn btn--outline btn--block">Buy Now</button>
      </div>
    </div>
  );
};
