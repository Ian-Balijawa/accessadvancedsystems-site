import React, { useState } from 'react';

export const OptForm = () => {
  const [domain, setDomain] = useState('');

  return (
    <form className="input-group">
      <input
        type="text"
        className="input"
        value={domain}
        onChange={({ target }) => {
          setDomain(target.value);
        }}
        placeholder="Enter domain name here..."
      />
      <button className="btn btn--accent">
        <svg className="icon icon--white">
          <use src="images/sprite.svg#search"></use>
        </svg>
        Search
      </button>
    </form>
  );
};
