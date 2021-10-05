import React from 'react';
import {
  Preloader,
  Hero,
  Aboutus,
  Header,
  Services,
  Blog,
  PortFolio,
  Footer,
  ContactUs,
} from '../components';

function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <Hero />
      <Aboutus />
      <Services />
      <PortFolio />
      <Blog />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Home;
