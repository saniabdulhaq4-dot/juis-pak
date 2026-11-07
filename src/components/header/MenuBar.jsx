import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import logo from '../../assets/logos/JUI-S_Logo.png';

const MenuBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    const menuItems = [
        {
            name: 'ہوم پیج',
            path: '/',
            description: 'پارٹی کا تعارف، مقصد، ویژن اور مشن'
        },
        {
            name: 'ہمارے بارے میں',
            path: '/about',
            description: 'پارٹی کی تاریخ، قیادت کا تعارف، منشور',
            dropdown: [
                { name: 'تاریخ', path: '/about/history' },
                { name: 'بانی', path: '/about/founder' },
                // { name: 'منشور', path: '/about/manifesto' }
            ]
        },
        {
            name: 'خبریں اور اپڈیٹس',
            path: '/news',
            description: 'جلسے، ریلیاں، پریس ریلیز وغیرہ',
            dropdown: [
                { name: 'تازہ خبریں', path: '/news/latest' },
                { name: 'جلسے و ریلیاں', path: '/news/rallies' },
                { name: 'پریس ریلیز', path: '/news/press' },
                { name: 'بلاگ', path: '/news/blog' }
            ]
        },
        {
            name: 'رہنماؤں کا سیکشن',
            path: '/leadership',
            description: 'مرکزی قیادت اور اہم شخصیات کی پروفائلز',
            dropdown: [
                { name: 'مرکزی قیادت', path: '/leadership/main' },
                // { name: 'صوبائی قیادت', path: '/leadership/provincial' },
                { name: 'عہدیداران', path: '/leadership/workers' }
            ]
        },
        {
            name: 'منشور',
            path: '/manifesto',
            description: 'پارٹی کے بنیادی اصول اور سیاسی ایجنڈا'
        },
        {
            name: 'گیلری',
            path: '/gallery',
            description: 'تصاویر اور ویڈیوز',
            dropdown: [
                { name: 'تصاویر', path: '/gallery/photos' },
                { name: 'ویڈیوز', path: '/gallery/videos' },
                { name: 'تقریبات', path: '/gallery/events' }
            ]
        },
        {
            name: 'رابطہ کریں',
            path: '/contact',
            description: 'ای میل، فون نمبر، سوشل میڈیا لنکس'
        },
        {
            name: 'ممبرشپ فارم',
            path: '/join',
            description: 'آن لائن فارم جس کے ذریعے لوگ پارٹی میں شامل ہوسکیں'
        },
        {
            name: 'ڈونیشن پیج',
            path: '/donate',
            description: 'آن لائن چندہ / ڈونیشن کے لیے'
        }
    ];

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50 urdu-font">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-2 space-x-reverse">
                        {menuItems.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link
                                    to={item.path}
                                    className="flex items-center space-x-1 space-x-reverse px-4 py-2 text-[#00582E] hover:text-[#00A0E3] hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium urdu-nav text-sm"
                                    onMouseEnter={() => item.dropdown && toggleDropdown(item.name)}
                                >
                                    <span>{item.name}</span>
                                    {item.dropdown && (
                                        <FaChevronDown className={`text-xs transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                                    )}
                                </Link>

                                {/* Dropdown Menu */}
                                {item.dropdown && (
                                    <div
                                        className={`absolute right-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 ${openDropdown === item.name ? 'opacity-100 visible' : ''
                                            }`}
                                        onMouseLeave={() => setOpenDropdown(null)}
                                    >
                                        <div className="px-4 py-2 border-b border-gray-100">
                                            <p className="text-[#00582E] font-semibold urdu-heading text-sm">{item.name}</p>
                                            <p className="text-gray-600 text-xs urdu-body mt-1">{item.description}</p>
                                        </div>
                                        {item.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                to={subItem.path}
                                                className="block px-4 py-3 text-gray-700 hover:bg-[#00582E] hover:text-white transition-colors duration-200 urdu-nav text-sm border-b border-gray-50 last:border-b-0"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div>
                        <div className="flex md:hidden items-center space-x-3 space-x-reverse">
                            {/* Animated Flag/Logo */}
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center">
                                    <img src={logo} alt="" />
                                </div>
                            </div>
                            <div className="text-right">
                                <h1 className="text-[#00582E] text-md font-bold urdu-heading">جمعیت علماءِ اسلام</h1>
                                <p className="text-[#00A0E3] text-sm urdu-body">(جے یو آئی-ایس)</p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="md:hidden text-[#00582E] p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="lg:hidden border-t border-gray-200 py-4 bg-white">
                        <div className="space-y-2">
                            {menuItems.map((item) => (
                                <div key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="flex items-center justify-between space-x-2 space-x-reverse p-3 text-[#00582E] hover:bg-gray-50 rounded-lg transition-colors duration-200 urdu-nav text-sm border-b border-gray-100"
                                        onClick={() => !item.dropdown && setIsMenuOpen(false)}
                                    >
                                        <span>{item.name}</span>
                                        {item.dropdown && (
                                            <FaChevronDown
                                                className={`text-xs transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    toggleDropdown(item.name);
                                                }}
                                            />
                                        )}
                                    </Link>

                                    {/* Mobile Dropdown */}
                                    {item.dropdown && openDropdown === item.name && (
                                        <div className="bg-gray-50 ml-4 rounded-lg mt-1">
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    to={subItem.path}
                                                    className="block p-3 text-gray-700 hover:bg-[#00582E] hover:text-white transition-colors duration-200 urdu-nav text-sm border-b border-gray-200 last:border-b-0"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default MenuBar;