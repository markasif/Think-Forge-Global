import React from 'react';
import Hero from '../Components/Hero/Hero';
import About from '../Components/About/about';
import OurServices from '../Components/Service/service';
import Team from '../Components/Team/team';
import ConnectSection from '../Components/Connect/Connect';



export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <OurServices />
      <Team />
      <ConnectSection sectionId='connect' />

    </>
  );
}