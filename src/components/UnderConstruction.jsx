// components/UnderConstruction.js
import React from 'react';
import { FaTools, FaClock, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const UnderConstruction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00582E] to-[#00A0E3] flex items-center justify-center p-4 urdu-font">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-center border border-white/20">
          
          {/* Icon Section */}
          <div className="mb-6">
            <div className="relative inline-block">
              <div className="bg-gradient-to-r from-[#00582E] to-[#00A0E3] p-5 rounded-full shadow-lg animate-bounce">
                <FaTools className="text-white text-4xl" />
              </div>
              <div className="absolute -top-2 -right-2 bg-amber-500 text-white p-2 rounded-full animate-spin">
                <FaClock className="text-sm" />
              </div>
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#00582E] mb-4 urdu-h2">
            زیرِ تعمیر
          </h1>
          
          <p className="text-gray-700 text-lg mb-6 urdu-body leading-relaxed">
            یہ صفحہ فی الحال زیرِ تعمیر ہے۔ ہم جلد ہی اسے مکمل کر کے آپ کی خدمت میں پیش کریں گے۔
          </p>

          {/* Progress Section */}
          {/* <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div 
                className="bg-gradient-to-r from-[#00582E] to-[#00A0E3] h-2 rounded-full transition-all duration-1000"
                style={{ width: '65%' }}
              ></div>
            </div>
            <p className="text-gray-600 urdu-body text-sm">
              کام جاری ہے... 65% مکمل
            </p>
          </div> */}

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-[#00582E] mb-4 urdu-h3">
              فوری رابطہ کے لیے
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-center space-x-2 space-x-reverse text-gray-700">
                <FaPhone className="text-[#00A0E3] flex-shrink-0" />
                <span className="urdu-body">0313-9808037</span>
              </div>
              <div className="flex items-center justify-center space-x-2 space-x-reverse text-gray-700">
                <FaEnvelope className="text-[#00A0E3] flex-shrink-0" />
                <span className="urdu-body">editor_alhaq@yahoo.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2 space-x-reverse text-gray-700">
                <FaMapMarkerAlt className="text-[#00A0E3] flex-shrink-0" />
                <span className="urdu-body">جامعہ دارالعلوم حقانیہ، اکوڑہ خٹک، نوشہرہ</span>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-[#00582E] to-[#00A0E3] rounded-lg p-4 text-white">
            <p className="urdu-body text-sm">
              براہ کرم کچھ دیر بعد دوبارہ کوشش کریں۔ شکریہ!
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-6">
          <p className="text-white/80 urdu-body text-sm">
            جمعیت علماءِ اسلام (جے یو آئی-ایس)
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;