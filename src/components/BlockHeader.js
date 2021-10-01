import React from 'react';
import OptForm from './OptForm';

const BlockHeader = () => {
  return (
    <section data-aos="fade-up" className="block container block-domain">
      <header className="block__header">
        <h2>Starting at $9 per month</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          exercitationem?
        </p>
      </header>
      <OptForm />
      <ul className="list block-domain__prices">
        <li>
          <span className="badge badge--secondary">.com $9</span>
        </li>
        <li>.sg $10</li>
        <li>.space $11</li>
        <li>.info $14</li>
        <li>.net $10</li>
        <li>.xyz $10</li>
      </ul>
    </section>
  );
};
export default BlockHeader;
