import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FooterSupport = () => {
  const [supportExpanded, setSupportExpanded] = useState(false);

  return (
    <section
      className={
        supportExpanded
          ? 'collapsible collapsible--expanded footer__section'
          : 'collapsible footer__section'
      }
      onClick={() => setSupportExpanded((supportExpanded) => !supportExpanded)}
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
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">Knowledge Base</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FooterSupport;
