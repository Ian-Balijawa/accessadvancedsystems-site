import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FooterProducts = () => {
  const [productsExpanded, setProductsExpanded] = useState(true);

  return (
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
            <Link to="/#">Website Hosting</Link>
          </li>
          <li>
            <Link to="/#">Free Automated Wordpress</Link>
          </li>
          <li>
            <Link to="/#">Migrations</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FooterProducts;
