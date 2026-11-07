// components/HeroSection.js (updated with Urdu fonts)
import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative bg-gradient-to-r from-[#00582E] to-[#00A0E3] text-white py-20 urdu-font"
      style={{
        backgroundImage: 'linear-gradient(135deg, #00582E 0%, #00A0E3 100%)'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 urdu-h1">
          جمعیت علماءِ اسلام
        </h1>
        <p className="text-xl md:text-2xl leading-10 mb-8 opacity-90 urdu-heading">
          (جے یو آئی-ایس) - جمعیت کی دعوت جمعیت کا پیغام
          خدا کی زمین پر خدا کا نظام
        </p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-80 leading-relaxed urdu-body">
          اسلامی تعلیمات کے فروغ، مسلمانوں کے حقوق کے تحفظ اور خدا کی زمین پر خدا کے نظام کے لیے کوشہ
        </p>
        {/* <div className="space-x-4 space-x-reverse">
          <button className="bg-white text-[#00582E] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors urdu-button text-lg">
            ہمارے مشن میں شامل ہوں
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#00582E] transition-colors urdu-button text-lg">
            مزید جانیں
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;