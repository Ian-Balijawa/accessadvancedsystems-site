import React, { useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import Plans from '../components/Plans';
import ShowCase from '../components/ShowCase';
import Testimonial from '../components/Testimonial';
import BlockHeader from '../components/BlockHeader';
import Header from '../components/Header';
import Hero from '../components/Hero';
import GetStarted from '../components/GetStarted';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BlockHeader />
      <Plans />
      <Jumbotron />
      <ShowCase />
      <Testimonial />
      <GetStarted />
      <Footer />
    </>
  );
}
