import React from 'react';
import jumbotronFeatureData from '../Fixtures/jumbotronFeatureData.json';
import JumbotronFeature from './JumbotronFeature';

const Jumbotron = () => {
  return (
    <section className="block container">
      <header className="block__header">
        <h2>Host on the Cloud to Keep Growing</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
          voluptatem.
        </p>
      </header>
      {jumbotronFeatureData.map((data) => (
        <JumbotronFeature
          key={data.id}
          heading={data.heading}
          description={data.description}
          imageSRC={data.imageSRC}
          svgSRC={data.svgSRC}
          srcSetJPG={data.srcSetJPG}
          srcSetWebp={data.srcSetWebp}
        />
      ))}
    </section>
  );
};
export default Jumbotron;
