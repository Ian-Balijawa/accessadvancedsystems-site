import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FooterDomain = () => {
  const [domainsExpanded, setDomainsExpanded] = useState(false);

  return (
    <section
      className={
        domainsExpanded
          ? 'collapsible collapsible--expanded footer__section'
          : 'collapsible footer__section'
      }
      onClick={() => setDomainsExpanded((domainsExpanded) => !domainsExpanded)}
    >
      <header class="collapsible__header">
        <h2 class="collapsible__heading footer__heading">Domains</h2>
        <svg class="icon icon--white collapsible__chevron">
          <use src="images/sprite.svg#chevron"></use>
        </svg>
      </header>
      <div class="collapsible__content">
        <ul class="list">
          <li>
            <Link to="#">Domain Checker</Link>
          </li>
          <li>
            <Link to="#">Domain Transfer</Link>
          </li>
          <li>
            <Link to="#">Free Domain</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FooterDomain;
