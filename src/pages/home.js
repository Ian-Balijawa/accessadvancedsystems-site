import React from 'react';
import {
  JumbotronContainer,
  FooterContainer,
  FaqsContainer,
  HeaderContainer,
} from '../containers';
import './styles.css';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <div className="img__container">
          <div>
            <img
              src="https://lh5.googleusercontent.com/ZMwmOdnHSdx2MjZjwFy3ngJiawVK9UHbYCNMzYqAYFOwfynbRsNLCxdljl-sYoPi-nlwsUD8ustRDe4mCbdo8vNCeeELAdkROP2fOJsdrwSj8GJT5WOwB4CLY7QcyaXxTivsWHM"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.subscriptionflow.com/wp-content/uploads/2019/03/billing_top_img-e1586338031219.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://miro.medium.com/max/1110/0*wptLbt4cS24GzFdQ"
              alt=""
            />
          </div>
        </div>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
