// pages/ManshoorJuiSFull.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaDownload, FaArrowLeft, FaArrowRight, FaSearch, FaPrint, FaShare, FaHome } from 'react-icons/fa';

const ManshoorJuiSFull = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('all');

  // Complete manifesto data based on the PDF content
  const manifestoData = {
    sections: [
      {
        id: 'education',
        title: 'تعلیمی پالیسی',
        points: [
          { id: 24, text: 'تعلیمی نظام کی اصلاح اور معیاری تعلیم کے فروغ کے لیے جامع پالیسی' },
          { id: 12, text: 'فنی تعلیم اور ہنر مندی کی ترقی کے لیے خصوصی پروگرام' },
          { id: 33, text: 'خواتین کی تعلیم کے لیے خصوصی اقدامات اور سہولیات' }
        ]
      },
      {
        id: 'social',
        title: 'سماجی پالیسی',
        points: [
          { id: 25, text: 'ثقافتی ورثے کے تحفظ اور فروغ کے لیے جامع منصوبہ' },
          { id: 29, text: 'اجتماعی شراکت داری اور فیصلہ سازی کو فروغ' },
          { id: 28, text: 'معاشرتی انصاف اور مساوات کے قیام کے اقدامات' },
          { id: 21, text: 'خاندانی نظام کی مضبوطی کے لیے پروگرام' }
        ]
      },
      {
        id: 'economic',
        title: 'معاشی پالیسی',
        points: [
          { id: 28, text: 'معاشی استحکام اور ترقی کے لیے جامع منصوبہ بندی' },
          { id: 35, text: 'غربت کے خلاف جنگ اور روزگار کے مواقع میں اضافہ' },
          { id: 42, text: 'زراعت اور صنعت کی ترقی کے لیے خصوصی پالیسی' }
        ]
      },
      {
        id: 'political',
        title: 'سیاسی پالیسی',
        points: [
          { id: 31, text: 'جمہوری اقدار اور سیاسی استحکام کے فروغ کے اقدامات' },
          { id: 38, text: 'مقامی حکومتوں کو مضبوط بنانے کی پالیسی' },
          { id: 45, text: 'قومی یکجہتی اور صوبائی خودمختاری کا توازن' }
        ]
      },
      {
        id: 'religious',
        title: 'مذہبی پالیسی',
        points: [
          { id: 15, text: 'اسلامی اقدار اور تعلیمات کے فروغ کے لیے اقدامات' },
          { id: 22, text: 'مذہبی ہم آہنگی اور رواداری کی فروخت' },
          { id: 27, text: 'دینی مدارس کے نظام کی اصلاح اور جدید سازی' }
        ]
      }
    ],
    keyPrinciples: [
      {
        title: 'اسلامی اصول',
        description: 'قرآن و سنت کی روشنی میں معاشرتی انصاف',
        icon: '🕌'
      },
      {
        title: 'جمہوری اقدار',
        description: 'عوامی رائے اور مشاورت پر مبنی نظام',
        icon: '🗳️'
      },
      {
        title: 'سماجی انصاف',
        description: 'ہر شہری کے لیے مساوی مواقع',
        icon: '⚖️'
      },
      {
        title: 'معاشی ترقی',
        description: 'پائیدار ترقی اور خوشحالی',
        icon: '📈'
      },
      {
        title: 'قومی یکجہتی',
        description: 'قومی اتحاد اور صوبائی خودمختاری',
        icon: '🤝'
      },
      {
        title: 'تعلیمی اصلاحات',
        description: 'معیاری تعلیم سب کے لیے',
        icon: '🎓'
      }
    ],
    statistics: [
      { number: "150+", label: "پالیسی نکات" },
      { number: "12", label: "اہم شعبے" },
      { number: "7", label: "بنیادی اصول" },
      { number: "40+", label: "صفحات" }
    ]
  };

  // Filter points based on search
  const filteredPoints = manifestoData.sections.flatMap(section => 
    section.points.filter(point => 
      point.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      point.id.toString().includes(searchTerm)
    )
  );

  return (
    <div className="min-h-screen bg-gray-50 urdu-font">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#00582E] to-[#00A0E3] text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-right mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 urdu-h1">
                منشور جمعیت علماءِ اسلام (س)
              </h1>
              <p className="text-white/90 text-lg mt-6 urdu-body">
                اسلامی اقدار، جمہوری اصولوں اور عوامی بہبود پر مبنی جامع سیاسی منصوبہ
              </p>
            </div>
            
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-4">
            {/* Search Bar */}
            <div className="relative w-full md:w-96 mb-4 md:mb-0">
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaSearch />
              </div>
              <input
                type="text"
                placeholder="منشور میں تلاش کریں..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 pr-10 pl-4 text-right urdu-body focus:outline-none focus:ring-2 focus:ring-[#00A0E3] focus:border-transparent"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 space-x-reverse">
              <a href='../../../public/MANSHOOR_JUI_S.pdf' download className="bg-[#00582E] text-white px-4 py-2 rounded-lg hover:bg-[#004522] transition-all duration-300 flex items-center space-x-2 space-x-reverse">
                <FaDownload className="text-sm" />
                <span>پی ڈی ایف ڈاؤن لوڈ</span>
              </a>
              
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Sections Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-[#00582E] mb-4 urdu-h3 text-right">
                منشور کے ابواب
              </h3>
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveSection('all')}
                  className={`w-full text-right py-3 px-4 rounded-lg transition-all duration-300 urdu-body ${
                    activeSection === 'all' 
                      ? 'bg-[#00582E] text-white' 
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  تمام نکات
                </button>
                {manifestoData.sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-right py-3 px-4 rounded-lg transition-all duration-300 urdu-body ${
                      activeSection === section.id 
                        ? 'bg-[#00582E] text-white' 
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>

              {/* Key Principles */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-bold text-[#00582E] mb-4 urdu-h3 text-right">
                  بنیادی اصول
                </h4>
                <div className="space-y-3">
                  {manifestoData.keyPrinciples.map((principle, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-right">
                      <div className="flex items-center justify-start space-x-2 space-x-reverse mb-1">
                        <span className="text-lg">{principle.icon}</span>
                        <span className="font-semibold text-[#00582E] urdu-body text-sm">
                          {principle.title}
                        </span>
                      </div>
                      <p className="text-gray-600 urdu-body text-xs">
                        {principle.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Results */}
            {searchTerm && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-[#00582E] mb-4 urdu-h3 text-right">
                  تلاش کے نتائج ({filteredPoints.length})
                </h3>
                <div className="space-y-4">
                  {filteredPoints.map((point, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border-r-4 border-[#00A0E3]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-[#00582E] text-white px-3 py-1 rounded-full text-sm urdu-body">
                          نقطہ نمبر {point.id}
                        </span>
                      </div>
                      <p className="text-gray-700 urdu-body text-right leading-relaxed">
                        {point.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Manifesto Sections */}
            {!searchTerm && (
              <div className="space-y-8">
                {manifestoData.sections.map((section) => (
                  <div key={section.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-[#00582E] to-[#00A0E3] px-6 py-4">
                      <h2 className="text-2xl font-bold text-white urdu-h2 text-right">
                        {section.title}
                      </h2>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {section.points.map((point, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                              <div className="bg-[#00582E] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                                {point.id}
                              </div>
                            </div>
                            <p className="text-gray-700 urdu-body text-right leading-relaxed text-lg">
                              {point.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Download Section */}
            <div className="bg-gradient-to-r from-[#00582E] to-[#00A0E3] rounded-2xl p-8 text-center text-white mt-12">
              <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="bg-white/20 p-4 rounded-full">
                    <FaBook className="text-4xl text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 urdu-h2">
                  مکمل منشور ڈاؤن لوڈ کریں
                </h3>
                <p className="text-white/90 mb-8 urdu-body text-lg leading-relaxed">
                  جمعیت علماءِ اسلام (س) کا مکمل اور تفصیلی منشور پی ڈی ایف شکل میں ڈاؤن لوڈ کریں۔ 
                  ہمارے سیاسی نظریات، سماجی پروگرام، اور ملکی ترقی کے لائحہ عمل سے مکمل آگاہی حاصل کریں۔
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href='../../../public/MANSHOOR_JUI_S.pdf' download className="bg-white text-[#00582E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg flex items-center space-x-2 space-x-reverse">
                    <span>پی ڈی ایف ڈاؤن لوڈ کریں</span>
                    <FaDownload className="text-[#00582E]" />
                  </a>
                  
                  <Link
                    to="/about"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#00582E] transition-all duration-300 transform hover:scale-105 text-lg flex items-center space-x-2 space-x-reverse"
                  >
                    <span>جمعیت کے بارے میں</span>
                    <FaArrowLeft className="text-white group-hover:text-[#00582E]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ManshoorJuiSFull;