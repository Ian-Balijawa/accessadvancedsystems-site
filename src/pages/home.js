import React from 'react';
import {
  Preloader,
  Hero,
  Aboutus,
  Header,
  Services,
  Blog,
  Footer,
  ContactUs,
  Showcase,
} from '../components';

function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <Hero />
      <Aboutus />
      <Services />
      <Showcase />
      <Blog />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Home;
