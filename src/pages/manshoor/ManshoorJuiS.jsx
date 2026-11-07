// components/HomeManshoorJuiS.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaDownload, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ManshoorJuiS = () => {
  // Main manifesto sections
  const manifestoPoints = [
    {
      id: 1,
      number: "24",
      title: "تعلیمی پالیسی",
      description: "تعلیمی نظام کی اصلاح اور معیاری تعلیم کے فروغ کے لیے جامع پالیسی"
    },
    {
      id: 2,
      number: "33",
      title: "خواتین کے حقوق",
      description: "خواتین کے حقوق اور ان کی سماجی حیثیت کو مضبوط بنانے کے اقدامات"
    },
    {
      id: 3,
      number: "25",
      title: "ثقافتی ورثہ",
      description: "قومی ثقافت اور تہذیبی ورثے کے تحفظ اور فروغ کے لیے منصوبے"
    },
    {
      id: 4,
      number: "29",
      title: "اجتماعی شراکت داری",
      description: "اجتماعی فیصلہ سازی اور شراکت داری کو فروغ دینے کے طریقے"
    },
    {
      id: 5,
      number: "28",
      title: "معاشی پالیسی",
      description: "معاشی استحکام اور ترقی کے لیے جامع منصوبہ بندی"
    },
    {
      id: 6,
      number: "21",
      title: "سماجی انصاف",
      description: "سماجی انصاف اور مساوات کے قیام کے لیے اقدامات"
    }
  ];

  // Key features
  const keyFeatures = [
    { icon: "📘", title: "مکمل منشور", description: "جامع اور مفصل سیاسی منصوبہ" },
    { icon: "🎯", title: " واضح اہداف", description: "مخصوص اور قابل حصول مقاصد" },
    { icon: "🤝", title: "عوامی مشاورت", description: "عوامی رائے اور مشاورت پر مبنی" },
    { icon: "📈", title: "پائیدار ترقی", description: "پائیدار ترقی کے اصولوں پر مبنی" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 urdu-font">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00582E] mb-4 urdu-h2">
            منشور جمعیت علماءِ اسلام (س)
          </h2>
          <div className="w-24 h-1 bg-[#00A0E3] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto urdu-body text-lg leading-relaxed">
            جمعیت علماءِ اسلام (س) کا جامع سیاسی اور سماجی منشور جو اسلامی اقدار، جمہوری اصولوں اور عوامی بہبود پر مبنی ہے۔
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="text-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-bold text-[#00582E] mb-2 urdu-h3">
                {feature.title}
              </h3>
              <p className="text-gray-600 urdu-body text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Manifesto Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {manifestoPoints.map((point) => (
            <div key={point.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="p-6">
                {/* Point Number and Title */}
                <div className="flex items-center space-x-3 space-x-reverse mb-4">
                  <div className="bg-[#00582E] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold">
                    {point.number}
                  </div>
                  <div className="text-right flex-1">
                    <h3 className="text-xl font-bold text-[#00582E] urdu-h3">
                      {point.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 urdu-body text-right leading-relaxed mb-4">
                  {point.description}
                </p>

                {/* Read More Link */}
                <div className="text-left">
                  <button className="text-[#00A0E3] hover:text-[#00582E] font-semibold urdu-body text-sm flex items-center space-x-1 space-x-reverse transition-colors duration-300">
                    <span>مزید پڑھیں</span>
                    <FaArrowLeft className="text-xs" />
                  </button>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent hover:border-[#00A0E3] transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-[#00582E] to-[#00A0E3] rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              {/* <div className="bg-white/20 p-4 rounded-full">
                <FaBook className="text-3xl text-white" />
              </div> */}
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4 urdu-h2">
              مکمل منشور   
            </h3>
            <p className="text-white/90 mb-8 urdu-body text-lg leading-relaxed">
              جمعیت علماءِ اسلام (س) کا مکمل اور تفصیلی منشور ڈاؤن لوڈ کریں۔ 
              ہمارے سیاسی نظریات، سماجی پروگرام، اور ملکی ترقی کے لائحہ عمل سے آگاہ ہوں۔
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/manifesto/full"
                className="bg-white text-[#00582E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg flex items-center space-x-2 space-x-reverse"
              >
                <span>مکمل منشور پڑھیں</span>
                <FaArrowLeft className="text-[#00582E]" />
              </Link>
              
              <a href='../../../public/MANSHOOR_JUI_S.pdf' download className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#00582E] transition-all duration-300 transform hover:scale-105 text-lg flex items-center space-x-2 space-x-reverse">
                <span>پی ڈی ایف ڈاؤن لوڈ</span>
                <FaDownload className="text-white group-hover:text-[#00582E]" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ManshoorJuiS;