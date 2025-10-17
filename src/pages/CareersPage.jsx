import React from 'react';
import CareersHero from '../Components/Careers/CareersHero';
import Footer from '../Components/Footer/Footer';
import OpenPositions from '../Components/Careers/OpenPositions';
import ConnectSection from '../Components/Connect/Connect';

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <OpenPositions/>
      <ConnectSection  sectionId='career-connect'/>
      <Footer />
    </>
  );
}