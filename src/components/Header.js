import React, { useState } from 'react';

const Header = () => {
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
            <a href="/#">Lorem</a>
          </li>
          <li className="nav__item">
            <a href="/#">Lorem</a>
          </li>
          <li className="nav__item">
            <a href="/#">Lorem</a>
          </li>
          <li className="nav__item">
            <a href="/#">Lorem</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
