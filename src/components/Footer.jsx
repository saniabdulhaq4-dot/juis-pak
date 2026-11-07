// components/Footer.js (updated with Urdu fonts)
import React from 'react';
import { Link } from 'react-router-dom';
import { FaMosque, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logos/JUI-S_Logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#00582E] text-white urdu-font">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              {/* <div className="bg-white p-2 rounded-full">
                <FaMosque className="text-[#00582E] text-2xl" />
              </div> */}
              <div className="text-right">
                <h2 className="text-xl font-bold urdu-heading">جمعیت علماءِ اسلام</h2>
                <p className="text-[#00A0E3] urdu-body">(جے یو آئی-ایس)</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 text-right leading-loose">
              جمعیت علماءِ اسلام (جے یو آئی-ایس) ایک معروف مذہبی سیاسی جماعت ہے جو پاکستان میں اسلامی تعلیمات کے فروغ اور مسلمانوں کے حقوق کے تحفظ کے لیے کوشاں ہے۔
            </p>
            <div className="flex space-x-4 space-x-reverse justify-start">
              <a href="https://www.facebook.com/share/1FdMt8BbTb/?mibextid=wwXIfr" className="text-white hover:text-[#00A0E3] transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://x.com/haq_sani48110?s=11" className="text-white hover:text-[#00A0E3] transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://youtube.com/@abdulhaqsani-s8h?si=ySHMBBzkAo_m0saF" className="text-white hover:text-[#00A0E3] transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='flex justify-center md:justify-center'>
            <img src={logo} className='h-[240px]' alt="JUI-S_Logo" />
            {/* <h3 className="text-lg font-semibold mb-4 text-right urdu-heading">فوری لنکس</h3> */}
            {/* <ul className="space-y-2 text-right">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors urdu-body text-lg">ہوم</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors urdu-body text-lg">ہمارے بارے میں</Link></li>
              <li><Link to="/leadership" className="text-gray-300 hover:text-white transition-colors urdu-body text-lg">قیادت</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-white transition-colors urdu-body text-lg">خبریں</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors urdu-body text-lg">رابطہ</Link></li>
            </ul> */}
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-right urdu-heading">رابطہ کریں</h3>
            <div className="space-y-3 mt-8 text-right">
              <div className="flex items-center space-x-3 space-x-reverse justify-start">
                <FaMapMarkerAlt className="text-[#00A0E3] flex-shrink-0" />
                <span className="text-gray-300" > مرکزی سیکرٹریٹ: آفس جامعہ دارالعلوم حقانیہ اکوڑہ خٹک ضلع نوشہرہ خیبرپختونخوا پاکستان </span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse justify-start">
                <FaPhone className="text-[#00A0E3] flex-shrink-0" />
                <span className="text-gray-300">92-923630435</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse justify-start">
                <FaPhone className="text-[#00A0E3] flex-shrink-0" />
                <span className="text-gray-300">92-313-9808037</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse justify-start">
                <FaEnvelope className="text-[#00A0E3] flex-shrink-0" />
                <span className="text-gray-300">abdulhaqsani1@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p className="urdu-body text-lg">© {new Date().getFullYear()} جمعیت علماءِ اسلام (جے یو آئی-ایس). تمام حقوق محفوظ ہیں۔</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;