// components/CurrentLeaderSection.js
import React from 'react';
import { FaUser, FaCalendar, FaMapMarkerAlt, FaBook, FaGraduationCap, FaAward, FaCrown } from 'react-icons/fa';
import leaderImage from '../../assets/LeaderImages/Abdul_Haq_Sani_Haqqani.jpg';

const CurrentLeaderSection = () => {
  const leaderInfo = {
    name: "مولانا عبدالحق ثانی ",
    title: "موجودہ سربراہِ جمعیت علمائے اسلام (س)",
    image: leaderImage,
    personalInfo: {
      birth: "موجودہ",
      birthplace: "اکوڑہ خٹک، پاکستان",
      status: "16 اکتوبر 1994",
      education: "دارالعلوم حقانیہ",
      current: "موجودہ امیر"
    },
    roles: [
      "موجودہ سربراہ جمعیت علماءِ اسلام (س)",
      "دارالعلوم حقانیہ کے مہتمم",
      "فکری و تنظیمی تسلسل کے امین",
      "دینی مدارس کے دفاع کے لیے سرگرم",
      "اسلامی نظریات کے فروغ کے لیے کوشاں"
    ],
    honors: [
      "امین فکری تسلسل",
      "قیادت جدید دور"
    ],
    description: `مولانا عبدالحق ثانی دامت برکاتہم موجودہ سربراہِ جمعیت علمائے اسلام (س) ہیں، جنہوں نے مولانا حامد الحق شہید کی شہادت کے بعد پارٹی کی قیادت سنبھالی۔ آپ دارالعلوم حقانیہ اور جمعیت علمائے اسلام (س) کے فکری و تنظیمی تسلسل کے امین ہیں۔ آپ نے پارٹی کو جدید سیاسی تقاضوں کے مطابق منظم کرنے، دینی مدارس کے دفاع، اور ملک میں اسلامی نظریات کے فروغ کے لیے اپنی قیادت کو فعال رکھا ہے۔ مولانا عبدالحق ثانی صاحب علمی، سیاسی، اور تنظیمی میدان میں متوازن قیادت کے طور پر ابھر رہے ہیں۔ مولانا عبدالحق ثانی 16 اکتوبر 1994 کو پیدا ہوئے۔ آپ دینی علوم کے ساتھ ساتھ عصری علوم  سے بھی فیض یافتہ ہیں اور یونیورسٹی سے ایم بی اے فائنانس ڈگری لے کر فارغ تحصیل ہے۔ اس وقت مولانا عبدالحق ثانی ملک بھر میں جمعیت میں اسلام (س) کے پلیٹ فارم سے پارٹی کو منظم کرنے کے لیے ملک کے طول و عرض میں دورے کر رہے ہیں جبکہ اس کے ساتھ ساتھ جامعہ دارالعلوم حقانیہ میں تفسیر قران  حدیث اور فقہ کے استاد بھی ہیں۔`
  };

  return (
    <section className="py-16 bg-gray-50 urdu-font">
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
              <div className="absolute -bottom-4 -right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="urdu-body font-semibold">موجودہ امیر</span>
              </div>
            </div>
          </div>

          {/* Leader Information */}
          <div className="space-y-6">
            <div className="text-right">
              <h3 className="text-2xl md:text-3xl font-bold text-[#00582E] urdu-h3">
                {leaderInfo.name}
                <span className='arabic-rahmatullah relative bottom-4 left-1 text-base'>دامت برکاتہم</span>

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
                  <span className="text-right"><strong>پیدائش::</strong> {leaderInfo.personalInfo.status}</span>
                </div>
                <div className="flex items-center justify-start">
                  <FaMapMarkerAlt className="text-[#00A0E3] ml-3" />
                  <span className="text-right"><strong>جائے پیدائش:</strong> {leaderInfo.personalInfo.birthplace}</span>
                </div>
                <div className="flex items-center justify-start">
                  <FaCrown className="text-green-600 ml-3" />
                  <span className="text-right"><strong>عہدہ:</strong> {leaderInfo.personalInfo.current}</span>
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

export default CurrentLeaderSection;