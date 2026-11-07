// components/OtherLeaders.js (updated with Urdu fonts)
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const OtherLeaders = () => {
  const otherLeaders = [
    {
      name: "مولانا عبدالقیوم",
      designation: "صوبائی صدر خیبر پختونخوا",
      contact: "+92-300-1112233",
      email: "kpk.president@jui-s.org",
      address: "پشاور، خیبر پختونخوا"
    },
    {
      name: "مولانا احمد خان",
      designation: "صوبائی صدر پنجاب",
      contact: "+92-300-2223344",
      email: "punjab.president@jui-s.org",
      address: "لاہور، پنجاب"
    },
    {
      name: "مولانا سعید احمد",
      designation: "صوبائی صدر سندھ",
      contact: "+92-300-3334455",
      email: "sindh.president@jui-s.org",
      address: "کراچی، سندھ"
    },
    {
      name: "مولانا ابراہیم خلیل",
      designation: "صوبائی صدر بلوچستان",
      contact: "+92-300-4445566",
      email: "balochistan.president@jui-s.org",
      address: "کوئٹہ، بلوچستان"
    },
    {
      name: "مولانا راشد محمود",
      designation: "سکریٹری اطلاعات",
      contact: "+92-300-5556677",
      email: "info.secretary@jui-s.org",
      address: "اسلام آباد"
    },
    {
      name: "مولانا طارق جمیل",
      designation: "سکریٹری خزانہ",
      contact: "+92-300-6667788",
      email: "finance@jui-s.org",
      address: "اسلام آباد"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 urdu-font">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00582E] mb-4 urdu-h2">
            دیگر رہنما
          </h2>
          <div className="w-24 h-1 bg-[#00A0E3] mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-right urdu-body leading-loose">
            مختلف علاقوں اور محکموں میں کام کرنے والے ہمارے سرگرم رہنماؤں سے ملیں
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherLeaders.map((leader, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 text-right">
              <h3 className="text-lg font-bold text-[#00582E] mb-2 urdu-h3">
                {leader.name}
              </h3>
              <p className="text-[#00A0E3] font-semibold mb-4 urdu-body">
                {leader.designation}
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center text-gray-600 justify-end">
                  <span className="text-sm text-left urdu-body">{leader.contact}</span>
                  <FaPhone className="text-[#00A0E3] mr-3 flex-shrink-0" />
                </div>
                <div className="flex items-center text-gray-600 justify-end">
                  <span className="text-sm text-left urdu-body">{leader.email}</span>
                  <FaEnvelope className="text-[#00A0E3] mr-3 flex-shrink-0" />
                </div>
                <div className="flex items-center text-gray-600 justify-end">
                  <span className="text-sm text-left urdu-body">{leader.address}</span>
                  <FaMapMarkerAlt className="text-[#00A0E3] mr-3 flex-shrink-0" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherLeaders;