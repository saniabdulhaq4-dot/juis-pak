// components/MainLeaders.js (updated with Urdu fonts)
import React from 'react';
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const MainLeaders = () => {
  const mainLeaders = [
    {
      name: "مولانا حامد الحق حقانی",
      position: "موجودہ امیر",
      image: "/api/placeholder/300/300",
      contact: {
        phone: "+92-300-1234567",
        email: "amir@jui-s.org",
        address: "سنٹرل سیکرٹریٹ، اسلام آباد"
      },
      description: "بانی کے فرزند، اسلامی قیادت اور سیاسی جدوجہد کی روایت کو آگے بڑھاتے ہوئے"
    },
    {
      name: "مولانا حسن جان",
      position: "سکریٹری جنرل",
      image: "/api/placeholder/300/300",
      contact: {
        phone: "+92-300-7654321",
        email: "secretary@jui-s.org",
        address: "سنٹرل آفس، پشاور"
      },
      description: "جماعت کی تنظیمی ساخت اور سیاسی سرگرمیوں کی قیادت کر رہے ہیں"
    }
  ];

  return (
    <section className="py-16 bg-white urdu-font">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00582E] mb-4 urdu-h2">
            مرکزی قیادت
          </h2>
          <div className="w-24 h-1 bg-[#00A0E3] mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-right urdu-body leading-loose">
            ہماری موجودہ قیادت ہمارے بانی کے مشن اور ویژن کو لگن اور عزم کے ساتھ آگے بڑھا رہی ہے۔
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainLeaders.map((leader, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Leader Image */}
                <div className="md:col-span-1">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                
                {/* Leader Info */}
                <div className="md:col-span-2 p-6 text-right">
                  <h3 className="text-xl font-bold text-[#00582E] mb-2 urdu-h3">
                    {leader.name}
                  </h3>
                  <p className="text-[#00A0E3] font-semibold mb-4 urdu-body text-lg">
                    {leader.position}
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed urdu-body">
                    {leader.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600 justify-end">
                      <span className="text-left urdu-body">{leader.contact.phone}</span>
                      <FaPhone className="text-[#00A0E3] mr-3" />
                    </div>
                    <div className="flex items-center text-gray-600 justify-end">
                      <span className="text-left urdu-body">{leader.contact.email}</span>
                      <FaEnvelope className="text-[#00A0E3] mr-3" />
                    </div>
                    <div className="flex items-center text-gray-600 justify-end">
                      <span className="text-left urdu-body">{leader.contact.address}</span>
                      <FaMapMarkerAlt className="text-[#00A0E3] mr-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainLeaders;