// pages/Leadership.js
import React from 'react';
import FounderSection from '../home/FounderSection';
import SecondLeaderSection from '../home/SecondLeaderSection';
import CurrentLeaderSection from '../home/CurrentLeaderSection';

const Leadership = () => {
  return (
    <div className="urdu-font">
      <div className="bg-gradient-to-r from-[#00582E] to-[#00A0E3] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 urdu-h1">
            قیادت کا تسلسل
          </h1>
          <p className="text-xl md:text-2xl opacity-90 urdu-body">
            تین نسلوں کی قیادت - ایک مشن، ایک جدوجہد
          </p>
        </div>
      </div>
      
      <CurrentLeaderSection />
      <SecondLeaderSection />
      <FounderSection />
    </div>
  );
};

export default Leadership;