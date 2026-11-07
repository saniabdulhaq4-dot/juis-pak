// components/FounderSection.js
import React from 'react';
import { FaUser, FaCalendar, FaMapMarkerAlt, FaBook, FaGraduationCap, FaAward } from 'react-icons/fa';
import founderImage from '../../assets/LeaderImages/Sami_Ul_Haq_Haqqani.jpg';

const FounderSection = () => {
  const founderInfo = {
    name: "مولانا سمیع الحق شہید",
    title: "بانی اور سابق امیر",
    image: founderImage,
    personalInfo: {
      birth: "18 دسمبر 1937ء",
      birthplace: "اکوڑہ خٹک، پاکستان",
      shahadat: "2 نومبر 2018ء",
      education: "دارالعلوم حقانیہ",
      status: "شہید"
    },
    
    description: `مولانا سمیع الحق شہید ایک جید عالمِ دین، مفسر قران و محدث، اور ممتاز سیاسی رہنما تھے۔ آپ دارالعلوم حقانیہ اکوڑہ خٹک کے مہتمم جمعیت علمائے اسلام (س) کے سربراہ تھے۔ آپ 18 دسمبر 1937ء کو اکوڑہ خٹک میں پیدا ہوئے اور 2 نومبر 2018ء کو جام شہادت نوش فرمایا۔ آپ نے دینی تعلیم کے ساتھ ساتھ عملی سیاست میں بھی بھرپور حصہ لیا اور پاکستان میں اسلامی نظام کے نفاذ کے لیے کوشاں رہیں۔  تین مرتبہ ایوان بالا سینٹ کے رکن کی حیثیت سے آپ نے ملک کے دینی اور سیاسی استحکام اور وطن عزیز  میں اسلامی نظام کے نفاذ کے لیے اپنی خدمات سر انجام دیں ۔  آپ ہی نے سینٹ سے شریعت بل منظور کروایا ۔ مولانا سمیع الحق   شہید کو ان کے علمی وقار ملی خدمات اور دیانت دار قیادت کی وجہ سے ملک بھر میں ایک ممتاز مقام حاصل رہا۔`
  };

  return (
    <section className="py-16 bg-gray-50 urdu-font">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-[#00582E] mb-4 urdu-h2">
            ہمارے بانی
          </h2> */}
          {/* <div className="w-24 h-1 bg-[#00A0E3] mx-auto"></div> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Founder Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={founderInfo.image}
                alt={founderInfo.name}
                className="rounded-lg shadow-2xl w-full max-w-md border-4 border-[#00582E]"
              />
              <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="urdu-body font-semibold">شہید</span>
              </div>
            </div>
          </div>

          {/* Founder Information */}
          <div className="space-y-6">
            <div className="text-right">
              <h3 className="text-2xl md:text-3xl font-bold text-[#00582E] urdu-h3">
                {founderInfo.name} 
                <span className='arabic-rahmatullah relative bottom-4 left-1 text-base'>رحمة الله عليه</span>
              </h3>
              <p className="text-xl text-[#00A0E3] font-semibold urdu-body mt-2">
                {founderInfo.title}
              </p>
            </div>

            {/* Personal Information */}
            <div className="bg-white p-6 rounded-lg shadow-md text-right">
              <h4 className="text-lg font-semibold text-[#00582E] mb-4 flex items-center justify-start urdu-heading">
                <FaUser className="ml-2 text-[#00A0E3]" />
                ذاتی معلومات
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-start">
                  <FaCalendar className="text-[#00A0E3] ml-3" />
                  <span className="text-right"><strong>پیدائش:</strong> {founderInfo.personalInfo.birth}</span>
                </div>
                <div className="flex items-center justify-start">
                  <FaMapMarkerAlt className="text-[#00A0E3] ml-3" />
                  <span className="text-right"><strong>جائے پیدائش:</strong> {founderInfo.personalInfo.birthplace}</span>
                </div>
                <div className="flex items-center justify-start">
                  <FaAward className="text-red-600 ml-3" />
                  <span className="text-right"><strong>شہادت:</strong> {founderInfo.personalInfo.shahadat}</span>
                </div>
                <div className="flex items-center justify-start">
                  <FaGraduationCap className="text-[#00A0E3] ml-3" />
                  <span className="text-right"><strong>تعلیم:</strong> {founderInfo.personalInfo.education}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-lg shadow-md text-right">
              <p className="text-gray-700 leading-loose text-justify">
                {founderInfo.description}
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default FounderSection;