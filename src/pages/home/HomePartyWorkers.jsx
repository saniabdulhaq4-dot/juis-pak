// components/HomePartyWorkers.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaPhone, FaMapMarkerAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const HomePartyWorkers = () => {
  // Featured party workers for home page
  const featuredWorkers = [
    {
      id: 1,
      name: "مولانا عبدالقدوس نقشبندی",
      designation: "نائب امیر",
      province: "شمالی پنجاب",
      contact: "0300-5507960",
      address: "ہاؤس نمبر MCB-11/76، دارالعلوم حنفیہ چکوال",
      image: "/api/placeholder/150/150"
    },
    {
      id: 2,
      name: "مفتی حبیب الرحمان درخواستی",
      designation: "نائب امیر",
      province: "جنوبی پنجاب",
      contact: "0333-7477499",
      address: "ہاؤس نمبر 226، خلافت راشد کالونی، رحیم یار خان روڈ، خان پور",
      image: "/api/placeholder/150/150"
    },
    {
      id: 3,
      name: "مولانا عبدالواحد",
      designation: "صوبائی امیر",
      province: "خیبر پختونخوا",
      contact: "0300-5952381",
      address: "محلہ بازار خیل، درسمند، ضلع ہنگو",
      image: "/api/placeholder/150/150"
    },
    {
      id: 4,
      name: "قاری عبدالمنان انور",
      designation: "امیر",
      province: "سندھ",
      contact: "0312-3456789",
      address: "جامع مسجد رحمانیہ، کشمیر روڈ، محلہ مسلم آباد کراچی",
      image: "/api/placeholder/150/150"
    },
    {
      id: 5,
      name: "مولانا مفتی عبدالواحد بزئی",
      designation: "امیر",
      province: "بلوچستان",
      contact: "0333-1234567",
      address: "مہرب زئی، گھیراگ تحصیل اور ضلع کوئٹہ",
      image: "/api/placeholder/150/150"
    },
    {
      id: 6,
      name: "مولانا سید محمد یوسف شاہ",
      designation: "ناظم اعلیٰ",
      province: "مرکزی",
      contact: "0333-9045588",
      address: "محلہ عیدگاہ، اکوڑہ خٹک، نوشہرہ",
      image: "/api/placeholder/150/150"
    }
  ];

  // Party statistics
  const partyStats = [
    { number: "80+", label: "کل اراکین" },
    { number: "4", label: "صوبے" },
    { number: "30+", label: "شہر" },
    { number: "20+", label: "عہدے" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white urdu-font">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00582E] mb-4 urdu-h2">
             عہدیداران
          </h2>
          <div className="w-24 h-1 bg-[#00A0E3] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto urdu-body text-lg leading-relaxed">
            جمعیت علماءِ اسلام (س) کے منتخب عہدیداران جو ملک بھر میں اسلامی تعلیمات اور اسلامی اقدار کے فروغ کے لیے سرگرم عمل ہیں۔
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {partyStats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl md:text-3xl font-bold text-[#00582E] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 urdu-body text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Workers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredWorkers.map((worker) => (
            <div key={worker.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              {/* Worker Image */}
              <div className="relative">
                {/* <img
                  src={worker.image}
                  alt={worker.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                /> */}
                <div className="absolute top-4 left-4 bg-[#00582E] text-white px-3 py-1 rounded-full text-xs urdu-body">
                  {worker.province}
                </div>
              </div>

              {/* Worker Info */}
              <div className="p-6 mt-6">
                <div className="flex items-start space-x-3 space-x-reverse mb-4">
                  <div className="bg-[#00A0E3] p-2 rounded-full flex-shrink-0">
                    <FaUser className="text-white text-sm" />
                  </div>
                  <div className="text-right flex-1">
                    <h3 className="text-xl font-bold text-[#00582E] urdu-h3 mb-1">
                      {worker.name}
                    </h3>
                    <p className="text-[#00A0E3] font-semibold urdu-body text-sm">
                      {worker.designation}
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-3">
                  {worker.contact && (
                    <div className="flex items-center text-gray-600 justify-end">
                      <span className="text-sm urdu-body mr-2">{worker.contact}</span>
                      <FaPhone className="text-[#00A0E3] flex-shrink-0 text-sm" />
                    </div>
                  )}
                  <div className="flex items-start text-gray-600 justify-end">
                    <span className="text-sm urdu-body mr-2 text-right leading-relaxed">
                      {worker.address}
                    </span>
                    <FaMapMarkerAlt className="text-[#00A0E3] flex-shrink-0 text-sm mt-1" />
                  </div>
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
            <h3 className="text-2xl md:text-3xl font-bold mb-4 urdu-h2">
              تمام عہدیداران  
            </h3>
            <p className="text-white/90 mb-8 urdu-body text-lg leading-relaxed">
              جمعیت علماءِ اسلام (س) کے تمام صوبائی اور مرکزی عہدیداران کی مکمل فہرست دیکھیں۔ 
              ہمارے تمام اراکین کی تفصیلی معلومات، رابطہ نمبر اور عہدوں کے بارے میں جانیں۔
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/leadership/workers"
                className="bg-white text-[#00582E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg flex items-center space-x-2 space-x-reverse"
              >
                <span>تمام عہدیداران دیکھیں</span>
                <FaArrowLeft className="text-[#00582E]" />
              </Link>
              
              <Link
                to="/join"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#00582E] transition-all duration-300 transform hover:scale-105 text-lg flex items-center space-x-2 space-x-reverse"
              >
                <span>جمعیت میں شامل ہوں</span>
                <FaArrowRight className="text-white group-hover:text-[#00582E]" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomePartyWorkers;