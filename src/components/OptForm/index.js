import React, { useState } from 'react';

function OptForm() {
  const [emailAddress, setEmailAddress] = useState('');
  return (
    <form id="search" action="#" method="GET">
      <fieldset>
        <input
          type="address"
          name="address"
          className="email"
          value={emailAddress}
          onChange={({ target }) => setEmailAddress(target.value)}
          placeholder="Enter your Email Address..."
          autocomplete="on"
          required
        />
      </fieldset>
      <fieldset>
        <button type="submit" className="main-button">
          Send Email
        </button>
      </fieldset>
    </form>
  );
}

export default OptForm;
