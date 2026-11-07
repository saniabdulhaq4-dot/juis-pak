// components/SecondLeaderSection.js
import React from 'react';
import { FaUser, FaCalendar, FaMapMarkerAlt, FaBook, FaGraduationCap, FaAward } from 'react-icons/fa';
import leaderImage from '../../assets/LeaderImages/Hamid_Ul_Haq_Haqqani.jpg';

const SecondLeaderSection = () => {
  const leaderInfo = {
    name: "مولانا حامد الحق حقانی شہید",
    title: "سابق امیر",
    image: leaderImage,
    personalInfo: {
      birth: "26 مئی 1967ء",
      birthplace: "اکوڑہ خٹک، پاکستان",
      shahadat: "28 فروری 2025ء",
      education: "دارالعلوم حقانیہ",
      status: "شہید"
    },
    roles: [
      "سیاسی جانشین مولانا سمیع الحقؒ",
      "سابق رکن قومی اسمبلی پاکستان",
      "جمعیت علماءِ اسلام (س) کے سابق امیر",
      "دارالعلوم حقانیہ کے مہتمم",
      "متحدہ مجلس عمل کے رہنما"
    ],
    honors: [
      "شہید ملت",
      "جانشین شیخ الحدیث"
    ],
    description: `مولانا حامد الحق حقانی شہید ، مولانا سمیع الحق شہید کے بڑے صاحبزادے اور جانشین تھے۔ آپ 26 مئی 1967ء کو اکوڑہ خٹک میں پیدا ہوئے ۔ آپ  اپنے والد کے بعد جمعیت علمائے اسلام (س) کی قیادت سنبھالی اور پارٹی کو اتحاد، تنظیم، اور فکری استقامت کی راہ پر گامزن رکھا۔ آپ 2002 کے عام انتخابات میں رکن قومی اسمبلی منتخب ہوئے اور اپنے والد مولانا سمیع الحق شہید کی طرح قومی اسمبلی میں شریعت بل پیش کیا ۔ آپ 28 فروری 2025ء کو جامعہ حقانیہ اکوڑہ خٹک میں نماز جمعہ کے بعد ایک خودکش دھماکے کے نتیجے میں جام شہادت نوش فرما گئے ۔ مولانا حامد الحق شہید نے اپنے والد کے مشن کو آگے بڑھاتے ہوئے اسلامی اقدار کے فروغ، قومی یکجہتی اور امتِ مسلمہ کے مسائل کے حل کے لیے اہم کردار ادا کیا۔`
  };

  return (
    <section className="bg-gray-50 py-16 urdu-font">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Leader Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={leaderInfo.image}
                alt={leaderInfo.name}
                className="rounded-lg shadow-2xl w-full max-w-md border-4 border-[#00582E]"
              />
              <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="urdu-body font-semibold">شہید</span>
              </div>
            </div>
          </div>

          {/* Leader Information */}
          <div className="space-y-6">
            <div className="text-right">
              <h3 className="text-2xl md:text-3xl font-bold text-[#00582E] urdu-h3">
                {leaderInfo.name}
                <span className='arabic-rahmatullah relative bottom-4 left-1 text-base'>رحمة الله عليه</span>
              </h3>
              <p className="text-xl text-[#00A0E3] font-semibold urdu-body mt-2">
                {leaderInfo.title}
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
                  <span className="text-right"><strong>پیدائش:</strong> {leaderInfo.personalInfo.birth}</span>
                </div>
                <div className="flex items-center justify-start">
                  <FaMapMarkerAlt className="text-[#00A0E3] ml-3" />
                  <span className="text-right"><strong>جائے پیدائش:</strong> {leaderInfo.personalInfo.birthplace}</span>
                </div>
                <div className="flex items-center justify-start">
                  <FaAward className="text-red-600 ml-3" />
                  <span className="text-right"><strong>شہادت:</strong> {leaderInfo.personalInfo.shahadat}</span>
                </div>
                <div className="flex items-center justify-start">
                  <FaGraduationCap className="text-[#00A0E3] ml-3" />
                  <span className="text-right"><strong>تعلیم:</strong> {leaderInfo.personalInfo.education}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-lg shadow-md text-right">
              <p className="text-gray-700 leading-loose text-justify">
                {leaderInfo.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondLeaderSection;