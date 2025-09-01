import React from 'react';
import HomeSection from '../components/sections/HomeSection';
import VenuesSection from '../components/sections/VenuesSection';
import HistorySection from '../components/sections/HistorySection';
import MusicSection from '../components/sections/MusicSection';

const HomePage = () => {
  return (
    <>
      <HomeSection />
      <VenuesSection />
      <HistorySection />
      <MusicSection />
    </>
  );
};

export default HomePage;