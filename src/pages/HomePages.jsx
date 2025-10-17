import React from 'react';
import Hero from '../Components/Hero/Hero';
import About from '../Components/About/About';
import OurServices from '../Components/Service/Service';
import Team from '../Components/Team/Team';
import ConnectSection from '../Components/Connect/Connect';
import Footer from '../Components/Footer/Footer';


export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <OurServices />
      <Team />
      <ConnectSection sectionId='connect' />
      <Footer />
    </>
  );
}