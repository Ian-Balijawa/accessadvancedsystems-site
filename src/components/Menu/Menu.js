import React, { useContext } from 'react';
import { collapseContext } from '../../context/CollapseContext';

function Menu(props) {
  const { collapse, setCollapse } = useContext(collapseContext);
  return (
    <svg
      className="icon icon--white nav__toggler"
      onClick={() => setCollapse((collapse) => !collapse)}
    >
      <use href="images/ .svg#menu"></use>
    </svg>
  );
}

export default Menu;
