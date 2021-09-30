import React, { useState } from 'react';

export const Header = () => {
  const [navClicked, setNavClicked] = useState(false);

  return (
    <header>
      <nav
        className={
          navClicked
            ? 'nav collapsible collapsible--expanded'
            : 'nav collapsible'
        }
      >
        <a className="nav__brand" href="/">
          <img src="images/logo.svg" alt="" />
        </a>
        <svg
          className="icon icon--white nav__toggler"
          onClick={() => setNavClicked((navClicked) => !navClicked)}
        >
          <use src="images/sprite.svg#menu"></use>
        </svg>
        <ul className="list nav__list collapsible__content">
          <li className="nav__item">
            <a href="/#">Hosting</a>
          </li>
          <li className="nav__item">
            <a href="/#">VPS</a>
          </li>
          <li className="nav__item">
            <a href="/#">Domain</a>
          </li>
          <li className="nav__item">
            <a href="/#">Pricing</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
