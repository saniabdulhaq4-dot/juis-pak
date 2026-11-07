// components/LeadershipTimeline.js
import React from 'react';
import { FaUser, FaCalendar, FaHistory, FaCrown } from 'react-icons/fa';
import founderImage from '../../assets/LeaderImages/Sami_Ul_Haq_Haqqani.jpg';
import SecondleaderImage from '../../assets/LeaderImages/Hamid_Ul_Haq_Haqqani.jpg';
import CurrentleaderImage from '../../assets/LeaderImages/Abdul_Haq_Sani_Haqqani.jpg';

const LeadershipTimeline = () => {
  const leaders = [
    {
      id: 1,
      name: "مولانا سمیع الحقؒ",
      title: "بانی اور پہلے امیر",
      period: "1980 - 2018",
      status: "شہید",
      image: founderImage,
      description: "جمعیت علماءِ اسلام (س) کے بانی اور دارالعلوم حقانیہ کے مہتمم",
      achievements: [
        "جمعیت علماءِ اسلام (س) کی بنیاد رکھی",
        "دارالعلوم حقانیہ کی توسیع",
        "سینیٹر کے طور پر خدمات",
        "افغان امن عمل میں کردار"
      ]
    },
    {
      id: 2,
      name: "مولانا حامد الحق حقانیؒ",
      title: "دوسرے امیر",
      period: "2018 - 2025",
      status: "شہید",
      image: SecondleaderImage,
      description: "مولانا سمیع الحقؒ کے جانشین اور جمعیت علماءِ اسلام (س) کے دوسرے امیر",
      achievements: [
        "والد کے بعد پارٹی کی قیادت سنبھالی",
        "دینی تعلیم کے فروغ میں کام جاری رکھا",
        "سیاسی جدوجہد کو آگے بڑھایا",
        "2025 میں شہادت پائی"
      ]
    },
    {
      id: 3,
      name: "مولانا عبدالحق ساجد",
      title: "موجودہ امیر",
      period: "2025 - تا حال",
      status: "زندہ",
      image: CurrentleaderImage,
      description: "مولانا حامد الحق حقانیؒ کے فرزند اور جمعیت علماءِ اسلام (س) کے موجودہ امیر",
      achievements: [
        "شہید والد کے بعد قیادت سنبھالی",
        "نئی نسل کو پارٹی سے جوڑا",
        "جدید دور کے تقاضوں کے مطابق کام",
        "پارٹی کو آگے بڑھانے کا عزم"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white urdu-font">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00582E] mb-4 urdu-h2">
            قیادت
          </h2>
          <div className="w-24 h-1 bg-[#00A0E3] mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto urdu-body text-lg">
            جمعیت علماءِ اسلام (س) کی قیادت کا تسلسل - تین نسلوں کی خدمت
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#00A0E3] h-full hidden md:block"></div>

          <div className="space-y-12">
            {leaders.map((leader, index) => (
              <div key={leader.id} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center gap-8`}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#00582E] rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} w-full`}>
                  <div className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                    {/* Status Badge */}
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
                      leader.status === 'شہید' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {leader.status}
                    </div>

                    <div className="flex items-center space-x-4 space-x-reverse mb-4">
                      <div className="flex-shrink-0">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-[#00582E]"
                        />
                      </div>
                      <div className="text-right flex-1">
                        <h3 className="text-xl font-bold text-[#00582E] urdu-h3">
                          {leader.name}
                        </h3>
                        <p className="text-[#00A0E3] font-semibold urdu-body">
                          {leader.title}
                        </p>
                        <p className="text-gray-600 text-sm urdu-body flex items-center justify-end mt-1">
                          <FaCalendar className="ml-1 text-[#00A0E3]" />
                          {leader.period}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 urdu-body leading-relaxed">
                      {leader.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-[#00582E] urdu-heading text-sm">
                        نمایاں کارنامے:
                      </h4>
                      <ul className="space-y-1 text-right">
                        {leader.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-600 urdu-body text-sm">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Empty space for alignment */}
                <div className="md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTimeline;