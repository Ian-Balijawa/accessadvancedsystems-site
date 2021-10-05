import React from 'react';
import { Preloader, Header } from '../components';
import Hero from '../components/Hero';

function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <Hero />
    </>
  );
}

export default Home;
