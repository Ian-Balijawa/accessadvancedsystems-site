import React, { useState } from 'react';

const OptForm = () => {
  const [domain, setDomain] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // call the backend API
  };

  return (
    <form className="input-group" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={domain}
        onChange={({ target }) => {
          setDomain(target.value);
        }}
        placeholder="Enter domain name here..."
      />
      <button className="btn btn--accent" type="submit">
        <svg className="icon icon--white">
          <use src="images/sprite.svg#search"></use>
        </svg>
        Search
      </button>
    </form>
  );
};

export default OptForm;
