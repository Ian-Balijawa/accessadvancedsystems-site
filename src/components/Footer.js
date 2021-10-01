import React, { useState } from 'react';
import FooterCompany from './FooterCompany';
import FooterCopyright from './FooterCopyRight';
import FooterDomain from './FooterDomain';
import FooterProducts from './FooterProducts';
import FooterSupport from './FooterSupport';

const Footer = () => {
  return (
    <footer className="block block--dark footer">
      <div className="container grid footer__sections">
        <FooterProducts />
        <FooterDomain />
        <FooterCompany />
        <FooterSupport />
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
