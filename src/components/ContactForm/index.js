import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form id="contact" action="" method="post">
      <div className="row">
        <div className="col-lg-6">
          <fieldset>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={({ target }) => {
                setName(target.value);
              }}
              autocomplete="on"
              required
            />
          </fieldset>
        </div>
        <div className="col-lg-6">
          <fieldset>
            <input
              type="surname"
              name="surname"
              id="surname"
              value={surname}
              onChange={({ target }) => {
                setSurname(target.value);
              }}
              placeholder="Surname"
              autocomplete="on"
              required
            />
          </fieldset>
        </div>
        <div className="col-lg-12">
          <fieldset>
            <input
              type="text"
              name="email"
              id="email"
              value={emailAddress}
              onChange={({ target }) => {
                setEmailAddress(target.value);
              }}
              pattern="[^ @]*@[^ @]*"
              placeholder="Your Email"
              required=""
            />
          </fieldset>
        </div>
        <div className="col-lg-12">
          <fieldset>
            <textarea
              name="message"
              type="text"
              value={message}
              onChange={({ target }) => setMessage(target.value)}
              className="form-control"
              id="message"
              placeholder="Message"
              required=""
            ></textarea>
          </fieldset>
        </div>
        <div className="col-lg-12">
          <fieldset>
            <button type="submit" id="form-submit" className="main-button ">
              Send Message
            </button>
          </fieldset>
        </div>
      </div>
      <div className="contact-dec">
        <img src="assets/images/contact-decoration.png" alt="" />
      </div>
    </form>
  );
}

export default ContactForm;
