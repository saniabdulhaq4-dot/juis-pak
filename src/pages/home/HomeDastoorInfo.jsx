// components/HomeDastoorInfo.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaHistory, FaUsers, FaBalanceScale, FaArrowLeft } from 'react-icons/fa';

const HomeDastoorInfo = () => {
  // Key constitutional information extracted from the PDF
  const constitutionalInfo = [
    {
      icon: <FaHistory className="text-2xl" />,
      title: "تاسیسی سال",
      description: "1956",
      detail: "جمعیت علماءِ اسلام (س) کی بنیاد"
    },
    {
      icon: <FaBook className="text-2xl" />,
      title: "دستور",
      description: "مکمل آئینی ڈھانچہ",
      detail: "شامل ہیں تمام بنیادی اصول اور ضوابط"
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "تنظیمی ڈھانچہ",
      description: "مرکزی و صوبائی",
      detail: "منظم انتظامی ڈھانچہ"
    },
    {
      icon: <FaBalanceScale className="text-2xl" />,
      title: "آئینی شقیں",
      description: "150+",
      detail: "مکمل آئینی دفعات"
    }
  ];

  // Key constitutional principles
  const keyPrinciples = [
    {
      title: "اسلامی اصول",
      description: "قرآن و سنت کی بنیاد پر نظام"
    },
    {
      title: "جمہوری طریقہ کار",
      description: "انتخابی اور مشاورتی نظام"
    },
    {
      title: "تنظیمی ڈسپلن",
      description: "مرکزی قیادت کے تحت کام"
    },
    {
      title: "شریعت کی بالادستی",
      description: "اسلامی قانون کی عملداری"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white urdu-font">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00582E] mb-4 urdu-h2">
            جمعیت علماءِ اسلام (س) کا دستور
          </h2>
          <div className="w-24 h-1 bg-[#00A0E3] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto urdu-body text-lg leading-relaxed">
            2017ء کا منظور شدہ دستور جو جمعیت علماءِ اسلام (س) کے تنظیمی ڈھانچے، 
            بنیادی اصولوں اور کارروائی کے طریقہ کار کی مکخل رہنمائی فراہم کرتا ہے۔
          </p>
        </div>

        {/* Constitutional Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {constitutionalInfo.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="text-[#00A0E3] mb-4 flex justify-center">
                {item.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-[#00582E] mb-2">
                {item.description}
              </div>
              <h3 className="text-lg font-semibold text-[#00582E] mb-2 urdu-h3">
                {item.title}
              </h3>
              <p className="text-gray-600 urdu-body text-sm">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Key Principles */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#00582E] mb-6 urdu-h3 text-right">
              دستور کے بنیادی اصول
            </h3>
            <div className="space-y-4">
              {keyPrinciples.map((principle, index) => (
                <div key={index} className="flex items-start space-x-3 space-x-reverse p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <div className="bg-[#00582E] text-white p-2 rounded-full flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="text-right flex-1">
                    <h4 className="text-lg font-semibold text-[#00582E] mb-1 urdu-h3">
                      {principle.title}
                    </h4>
                    <p className="text-gray-600 urdu-body text-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Constitutional Highlights */}
          <div className="bg-gradient-to-br from-[#00582E] to-[#00A0E3] rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 urdu-h3 text-right">
              دستوری خصوصیات
            </h3>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <h4 className="font-semibold mb-2 urdu-h3 text-lg">تنظیمی ڈھانچہ</h4>
                <p className="text-white/90 urdu-body text-sm leading-relaxed">
                  مرکزی، صوبائی، ضلعی اور مقامی سطح پر منظم تنظیمی ڈھانچہ
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <h4 className="font-semibold mb-2 urdu-h3 text-lg">رکنیت کے اصول</h4>
                <p className="text-white/90 urdu-body text-sm leading-relaxed">
                  واضح رکنیت کے معیارات اور شرائط
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <h4 className="font-semibold mb-2 urdu-h3 text-lg">انتخابی طریقہ کار</h4>
                <p className="text-white/90 urdu-body text-sm leading-relaxed">
                  جمہوری انتخابات کے ذریعے قیادت کا انتخاب
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <h4 className="font-semibold mb-2 urdu-h3 text-lg">مالی ضوابط</h4>
                <p className="text-white/90 urdu-body text-sm leading-relaxed">
                  شفاف مالیاتی نظام اور احتساب
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Historical Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-[#00582E] mb-6 urdu-h3 text-center">
            دستور کی تاریخی جھلک
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-[#00582E] mb-2">1956</div>
              <p className="text-gray-600 urdu-body text-sm">قیام جمعیت</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-[#00582E] mb-2">1973</div>
              <p className="text-gray-600 urdu-body text-sm">دستوری ترامیم</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-[#00582E] mb-2">1986</div>
              <p className="text-gray-600 urdu-body text-sm">تنظیمی اصلاحات</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-[#00582E] mb-2">2017</div>
              <p className="text-gray-600 urdu-body text-sm">مکمل دستور</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#00582E] to-[#00A0E3] rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <FaBook className="text-3xl text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4 urdu-h2">
              مکمل دستور ڈاؤن لوڈ کریں
            </h3>
            <p className="text-white/90 mb-8 urdu-body text-lg leading-relaxed">
              جمعیت علماءِ اسلام (س) کا مکمل اور تفصیلی دستور 2017ء پی ڈی ایف شکل میں ڈاؤن لوڈ کریں۔ 
              تنظیمی ڈھانچے، رکنیت کے اصول، انتخابی طریقہ کار اور دیگر تمام دفعات سے آگاہ ہوں۔
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/dastoor/full"
                className="bg-white text-[#00582E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg flex items-center space-x-2 space-x-reverse"
              >
                <span>مکمل دستور پڑھیں</span>
                <FaArrowLeft className="text-[#00582E]" />
              </Link>
              
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#00582E] transition-all duration-300 transform hover:scale-105 text-lg flex items-center space-x-2 space-x-reverse">
                <span>دستور 2017 ڈاؤن لوڈ</span>
                <FaBook className="text-white group-hover:text-[#00582E]" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeDastoorInfo;