// components/ContactPage.js
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaGlobeAsia, FaUniversity } from 'react-icons/fa';

const ContactPage = () => {
  const contactInfo = {
    headquarters: {
      title: "مرکزی سیکرٹریٹ",
      address: "آفس جامعہ دارالعلوم حقانیہ اکوڑہ خٹک ضلع نوشہرہ خیبرپختونخوا پاکستان",
      phones: ["92-923630435", "92-313-9808037"],
      email: "abdulhaqsani1@gmail.com",
      timings: "ہفتے تا جمعرات : صبح 9 بجے سے شام 5 بجے تک"
    },
  };

  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.5248308621804!2d72.11961527503445!3d34.00081222044536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ded183c352d30b%3A0xae0c623dc4b2870d!2zSmFtaWEgRGFyIGFsLVVsdW0gSGFxcWFuaWEuICgg2K_Yp9ixINin2YTYudmE2YjZhSDYrdmC2KfZhtuM24HigI4p!5e1!3m2!1sen!2sus!4v1760080471250!5m2!1sen!2sus";

  return (
    <div className="min-h-screen bg-gray-50 urdu-font">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#00582E] to-[#00A0E3] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 urdu-h1">
              رابطہ کریں
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto urdu-body leading-relaxed">
              جمعیت  علماءِ اسلام (س) سے رابطے کے لیے درج ذیل ذرائع استعمال کریں۔ 
              ہم آپ کی آواز سننے کے لیے ہمیشہ موجود ہیں۔
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Headquarters Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="bg-[#00582E] p-3 rounded-full">
                  <FaUniversity className="text-white text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-[#00582E] urdu-h2">
                  {contactInfo.headquarters.title}
                </h2>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="bg-[#00A0E3] p-2 rounded-full flex-shrink-0 mt-1">
                    <FaMapMarkerAlt className="text-white text-sm" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 urdu-h3">پتہ</h3>
                    <p className="text-gray-600 urdu-body leading-relaxed">
                      {contactInfo.headquarters.address}
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="bg-[#00A0E3] p-2 rounded-full flex-shrink-0 mt-1">
                    <FaPhone className="text-white text-sm" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 urdu-h3">فون نمبر</h3>
                    <div className="space-y-1">
                      {contactInfo.headquarters.phones.map((phone, index) => (
                        <p key={index} className="text-gray-600 urdu-body text-lg">
                          {phone}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="bg-[#00A0E3] p-2 rounded-full flex-shrink-0 mt-1">
                    <FaEnvelope className="text-white text-sm" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 urdu-h3">ای میل</h3>
                    <a 
                      href={`mailto:${contactInfo.headquarters.email}`}
                      className="text-[#00582E] hover:text-[#00A0E3] transition-colors duration-300 urdu-body text-lg"
                    >
                      {contactInfo.headquarters.email}
                    </a>
                  </div>
                </div>

                {/* Office Timings */}
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="bg-[#00A0E3] p-2 rounded-full flex-shrink-0 mt-1">
                    <FaClock className="text-white text-sm" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 urdu-h3">دفتری اوقات</h3>
                    <p className="text-gray-600 urdu-body">
                      {contactInfo.headquarters.timings}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-gradient-to-r from-[#00582E] to-[#00A0E3] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4 urdu-h3 text-center">
                رابطے کے طریقے
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h4 className="font-semibold mb-2 urdu-h3">براہ راست ملاقات</h4>
                  <p className="text-white/90 urdu-body text-sm">
                    دفتری اوقات میں براہ راست تشریف لائیں
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h4 className="font-semibold mb-2 urdu-h3">فون پر رابطہ</h4>
                  <p className="text-white/90 urdu-body text-sm">
                    دیے گئے نمبروں پر فون کریں
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h4 className="font-semibold mb-2 urdu-h3">ای میل</h4>
                  <p className="text-white/90 urdu-body text-sm">
                    تفصیلی معلومات کے لیے ای میل کریں
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h4 className="font-semibold mb-2 urdu-h3">خط و کتابت</h4>
                  <p className="text-white/90 urdu-body text-sm">
                    پوسٹ کے ذریعے خط بھیجیں
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-[#00582E] mb-6 urdu-h2 text-right">
             محل وقوع
              </h2>
              
              {/* Map Container */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jamia Darul Uloom Haqqania Location"
                  className="w-full"
                ></iframe>
              </div>

              {/* Location Details */}
              {/* <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-[#00582E] mb-3 urdu-h3 text-right">
                  جامعہ دارالعلوم حقانیہ کے بارے میں
                </h3>
                <p className="text-gray-600 urdu-body text-right leading-relaxed">
                  جامعہ دارالعلوم حقانیہ اکوڑہ خٹک میں واقع ایک معروف دینی تعلیمی ادارہ ہے 
                  جو اسلامی علوم کی تدریس و تربیت کا اہم مرکز ہے۔ جمعیت  علماءِ اسلام (س) 
                  کا مرکزی سیکرٹریٹ اسی تاریخی ادارے میں واقع ہے۔
                </p>
              </div> */}
            </div>

            {/* Quick Contact Tips */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-[#00582E] mb-6 urdu-h2 text-right">
                رابطے کے لیے ہدایات
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="bg-[#00582E] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mt-1 flex-shrink-0">
                    ۱
                  </div>
                  <p className="text-gray-600 urdu-body text-right">
                    دفتری اوقات میں رابطہ کریں تاکہ فوری جواب مل سکے
                  </p>
                </div>
                
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="bg-[#00582E] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mt-1 flex-shrink-0">
                    ۲
                  </div>
                  <p className="text-gray-600 urdu-body text-right">
                    ای میل کے ذریعے رابطہ کرتے وقت معاملے کی نوعیت واضح کریں
                  </p>
                </div>
                
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="bg-[#00582E] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mt-1 flex-shrink-0">
                    ۳
                  </div>
                  <p className="text-gray-600 urdu-body text-right">
                    فون پر رابطہ کرتے وقت اپنا تعارف ضرور کریں
                  </p>
                </div>
                
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="bg-[#00582E] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mt-1 flex-shrink-0">
                    ۴
                  </div>
                  <p className="text-gray-600 urdu-body text-right">
                    خط و کتابت کے لیے مکمل پتہ درج کریں
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact Banner */}
        {/* <div className="mt-12 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4 urdu-h2">
            فوری رابطہ کے لیے
          </h3>
          <p className="text-xl mb-4 urdu-body">
            ہنگامی صورت حال میں درج ذیل نمبر پر رابطہ کریں
          </p>
          <div className="text-3xl font-bold urdu-h2">
            {contactInfo.headquarters.phones[0]}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContactPage;