import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FooterCompany = () => {
  const [companyExpanded, setCompanyExpanded] = useState(false);
  return (
    <section
      className={
        companyExpanded
          ? 'collapsible collapsible--expanded footer__section'
          : 'collapsible footer__section'
      }
      onClick={() => setCompanyExpanded((companyExpanded) => !companyExpanded)}
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
            <Link to="/#">About</Link>
          </li>
          <li>
            <Link to="/#">Affiliates</Link>
          </li>
          <li>
            <Link to="/#">Blog</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FooterCompany;
