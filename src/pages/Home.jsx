// pages/Home.js
import React from 'react';
import HeroSection from './home/HeroSection';
import FounderSection from './home/FounderSection';
import SecondLeaderSection from './home/SecondLeaderSection';
import CurrentLeaderSection from './home/CurrentLeaderSection';
import HomePartyWorkers from './home/HomePartyWorkers';
import ManshoorJuiS from './manshoor/ManshoorJuiS';


const Home = () => {
  return (
    <>
      <HeroSection />
      <FounderSection />
      <SecondLeaderSection />
      <CurrentLeaderSection />
      <HomePartyWorkers />
      <ManshoorJuiS />
    </>
  );
};

export default Home;