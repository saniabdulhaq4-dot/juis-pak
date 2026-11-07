// components/TopBar.js
import React, { useState } from 'react';
import { FaMosque, FaFacebook, FaTwitter, FaYoutube, FaGlobe } from 'react-icons/fa';
import logo from '../../assets/logos/JUI-S_Logo.png';

const TopBar = () => {
  const [language, setLanguage] = useState('urdu');

  const toggleLanguage = () => {
    setLanguage(language === 'urdu' ? 'english' : 'urdu');
  };

  return (
    <div className="hidden md:flex bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="relative">
              <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <img src={logo} alt="" />
              </div>
            </div>
            
            <div className="text-right">
              <h1 className="hidden sm:flex text-[#00582E] text-lg font-bold urdu-heading">جمعیت علماءِ اسلام</h1>
              <p className="hidden sm:flex text-[#00A0E3] text-xs urdu-body">(جے یو آئی-ایس)</p>
            </div>
          </div>

          {/* Right Section - Language Toggle and Social Icons */}
          <div className="flex items-center space-x-4 space-x-reverse">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 space-x-reverse px-3 py-1 border border-[#00582E] rounded-full hover:bg-[#00582E] hover:text-white transition-colors duration-300"
            >
              <FaGlobe className="text-[#00582E] text-sm" />
              <span className="urdu-body text-sm">
                {language === 'urdu' ? 'English' : 'اردو'}
              </span>
            </button>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 space-x-reverse border-r border-gray-300 pr-4">
              <a 
                href="https://www.facebook.com/share/1FdMt8BbTb/?mibextid=wwXIfr" 
                className="text-[#00582E] hover:text-[#00A0E3] transition-colors duration-300"
                title="فیس بک"
              >
                <FaFacebook size={16} />
              </a>
              <a 
                href="https://x.com/haq_sani48110?s=11" 
                className="text-[#00582E] hover:text-[#00A0E3] transition-colors duration-300"
                title="ٹویٹر"
              >
                <FaTwitter size={16} />
              </a>
              <a 
                href="https://youtube.com/@abdulhaqsani-s8h?si=ySHMBBzkAo_m0saF" 
                className="text-[#00582E] hover:text-[#00A0E3] transition-colors duration-300"
                title="یوٹیوب"
              >
                <FaYoutube size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;