import React from 'react';
import CareersHero from '../Components/Careers/careersHero';
import OpenPositions from '../Components/Careers/OpenPositions';
import ConnectSection from '../Components/Connect/Connect';

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <OpenPositions/>
      <ConnectSection  variant='default'/>
 
    </>
  );
}