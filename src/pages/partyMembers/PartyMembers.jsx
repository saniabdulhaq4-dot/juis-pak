import React, { useState, useMemo } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaSearch, FaFilter } from 'react-icons/fa';

const PartyMembers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('تمام');
  const [selectedDesignation, setSelectedDesignation] = useState('تمام');

  // Data extracted from the PDF file
  const allMembers = useMemo(() => [
    // Central Leadership (Page 1)
    {
      name: "مولانا عبدالحق ثانی",
      designation: "مرکزی امیر",
      province: "مرکزی",
      contact: "0313-9808037",
      email: "editor_alhaq@yahoo.com",
      address: "جامعہ دارالعلوم حقانیہ، اکوڑہ خٹک، نوشہرہ"
    },
    {
      name: "مولانا عبدالقدوس نقشبندی",
      designation: "نائب امیر",
      province: "مرکزی",
      contact: "0300-5507960",
      email: "",
      address: "ہاؤس نمبر MCB-11/76، دارالعلوم حنفیہ چکوال"
    },
    {
      name: "مولانا عبدالواحد",
      designation: "نائب امیر",
      province: "مرکزی",
      contact: "0300-5952381",
      email: "",
      address: "محلہ بازار خیل، درسمند، ضلع ہنگو"
    },
    {
      name: "مفتی حبیب الرحمان درخواستی",
      designation: "نائب امیر",
      province: "مرکزی",
      contact: "0333-7477499",
      email: "",
      address: "ہاؤس نمبر 226، خلافت راشد کالونی، رحیم یار خان روڈ، خان پور"
    },
    {
      name: "مولانا اقبال اللہ",
      designation: "نائب امیر",
      province: "مرکزی",
      contact: "0333-2300914",
      email: "",
      address: "ہاؤس نمبر 1426، MP/B، محلہ معین آباد، لانڈھی ملیر کراچی"
    },
    {
      name: "محترمہ نزمینہ",
      designation: "نائب امیر",
      province: "مرکزی",
      contact: "0300-5975710",
      email: "",
      address: "محلہ عیدگاہ، اکوڑہ خٹک، نوشہرہ"
    },
    {
      name: "مولانا سید محمد یوسف شاہ",
      designation: "ناظم اعلیٰ (جنرل سیکرٹری)",
      province: "مرکزی",
      contact: "0333-9045588",
      email: "",
      address: "محلہ عیدگاہ، اکوڑہ خٹک، نوشہرہ"
    },
    {
      name: "مولانا احمد الرحمان",
      designation: "ناظم (ڈپٹی جنرل سیکرٹری)",
      province: "مرکزی",
      contact: "0300-2113145",
      email: "",
      address: "جامعہ دارالخیر، ہاؤس نمبر ST-2، گلستان جوہر، بلاک 15، کراچی"
    },
    {
      name: "نعیم خان",
      designation: "ناظم",
      province: "مرکزی",
      contact: "0333-7851264",
      email: "",
      address: "کوئٹہ سٹی"
    },
    {
      name: "مولانا ایوب خان",
      designation: "ناظم",
      province: "مرکزی",
      contact: "0300-7415579",
      email: "",
      address: "دارالعلوم مدنیہ، نسبت روڈ، چوک پرانا ڈسکہ، سیالکوٹ"
    },
    {
      name: "نصرین خاتون",
      designation: "ناظمہ",
      province: "مرکزی",
      contact: "0333-9167789",
      email: "",
      address: "محلہ طالب المولہ کالونی، ٹنڈو آدم، ضلع سانگھڑ، سندھ"
    },
    {
      name: "غازی الدین بابر",
      designation: "ناظم اطلاعات",
      province: "مرکزی",
      contact: "0301-8420304",
      email: "",
      address: "ملٹری اکاؤنٹس سوسائٹی، ظہیر چوک، کالج روڈ، لاہور"
    },
    {
      name: "مولانا عاصم مخدوم",
      designation: "ڈپٹی ناظم اطلاعات",
      province: "مرکزی",
      contact: "0300-4111308",
      email: "",
      address: "محلہ کوارٹر جامع مسجد نیو سمن آباد، لاہور"
    },
    {
      name: "مولانا اعظم حسین",
      designation: "سالار",
      province: "مرکزی",
      contact: "0313-4784458",
      email: "",
      address: "اچھرہ، ہاؤس نمبر 695، گلی نمبر 3، محلہ فضلیہ کالونی، لاہور"
    },

    // Southern Punjab (Page 2)
    {
      name: "مفتی حبیب الرحمان",
      designation: "سرپرست",
      province: "جنوبی پنجاب",
      contact: "0333-7477499",
      email: "",
      address: "ہاؤس نمبر 226، خلافت راشد کالونی، رحیم یار خان روڈ، خان پور"
    },
    {
      name: "مولانا بشیر احمد شاہ",
      designation: "سرپرست",
      province: "جنوبی پنجاب",
      contact: "",
      email: "",
      address: "قاضی والا روڈ، نزد لکڑ منڈی، ہاؤس نمبر 50 بلاک A، چشتیاں، بہاولپور"
    },
    {
      name: "مولانا فضل محمد",
      designation: "سرپرست",
      province: "جنوبی پنجاب",
      contact: "",
      email: "",
      address: "چنگی نمبر 8، ہاؤس نمبر 1658، نظام آباد، ملتان"
    },
    {
      name: "مولانا رحمت الرحمان",
      designation: "سرپرست",
      province: "جنوبی پنجاب",
      contact: "",
      email: "",
      address: "جامعہ شیخ درخواستی، انڈس روڈ، روجہان، راجن پور"
    },
    {
      name: "مولانا محمد اسد درخواستی",
      designation: "امیر",
      province: "جنوبی پنجاب",
      contact: "",
      email: "",
      address: "ہاؤس نمبر 226، خلافت راشد کالونی، رحیم یار خان روڈ، خان پور"
    },
    {
      name: "مولانا عبدالصمد درخواستی",
      designation: "نائب امیر",
      province: "جنوبی پنجاب",
      contact: "",
      email: "",
      address: "جامعہ شیخ درخواستی، محلہ آفیسر کالونی، راجن پور"
    },
    {
      name: "مولانا عبدالحمید",
      designation: "نائب امیر",
      province: "جنوبی پنجاب",
      contact: "",
      email: "",
      address: "لوگھڑی کالونی، سٹریٹ 4، ہاؤس نمبر A-61، بلاک 18، ڈیرہ غازی خان"
    },
    {
      name: "مولانا عبدالحق",
      designation: "نائب امیر",
      province: "جنوبی پنجاب",
      contact: "",
      email: "",
      address: "چاہ اتری والا، قادر پور وارن ٹاؤن، ضلع ملتان"
    },
    {
      name: "تسلیم بی بی",
      designation: "نائب امیر",
      province: "جنوبی پنجاب",
      contact: "",
      email: "",
      address: "نیار تل لکھڑی والا، شاہ شمس روڈ، محلہ چوک راشد آباد، ملتان"
    },
    {
      name: "مولانا عتیق الرحمان راشد",
      designation: "جنرل سیکرٹری",
      province: "جنوبی پنجاب",
      contact: "",
      email: "",
      address: "کنگرہ والا، کوٹلہ مغلان، جمپور، راجن پور"
    },
    {
      name: "محمد احمد مکی",
      designation: "ناظم",
      province: "جنوبی پنجاب",
      contact: "",
      email: "",
      address: "وارڈ نمبر 4، ہاؤس نمبر 355، محلہ گجراں والا کوٹ ادو، مظفر گڑھ"
    },
    {
      name: "مولانا لال محمد واٹو",
      designation: "ناظم",
      province: "جنوبی پنجاب",
      contact: "",
      email: "",
      address: "پوسٹ آفس چیکو گاہ، منچن آباد"
    },
    {
      name: "مولانا محمد امیر عمر",
      designation: "ناظم",
      province: "جنوبی پنجاب",
      contact: "",
      email: "",
      address: "کوٹ قیصرانی، تحصیل تونسہ، ضلع ڈیرہ غازی خان"
    },
    {
      name: "منظوراں مائی",
      designation: "ناظم",
      province: "جنوبی پنجاب",
      contact: "",
      email: "",
      address: "شاہ شمس روڈ، ہاؤس نمبر 1902/11، محلہ راشد آباد، ملتان"
    },
    {
      name: "مولانا عبدالرحمان جامی",
      designation: "ناظم اطلاعات",
      province: "جنوبی پنجاب",
      contact: "",
      email: "",
      address: "جامع مسجد ابو بکر صدیق، جھنگ روڈ، خانیوال"
    },
    {
      name: "شکیل احمد",
      designation: "انچارج سوشل میڈیا",
      province: "جنوبی پنجاب",
      contact: "",
      email: "",
      address: "دوآبا کالونی خان پور، ضلع رحیم یار خان"
    },
    {
      name: "مولانا حبیب اللہ",
      designation: "سالار",
      province: "جنوبی پنجاب",
      contact: "",
      email: "",
      address: "جامعہ فاروقیہ، سٹریٹ نوشہرہ غربی، دجال، تحصیل جمپور، ضلع راجن پور"
    },

    // Northern Punjab (Page 3)
    {
      name: "مولانا عبدالقدوس نقشبندی",
      designation: "صوبائی امیر",
      province: "شمالی پنجاب",
      contact: "0300-5507960",
      email: "",
      address: "ہاؤس نمبر MCB-11/76، دارالعلوم حنفیہ چکوال"
    },
    {
      name: "مولانا عبدالجبار شاکر",
      designation: "نائب امیر",
      province: "شمالی پنجاب",
      contact: "",
      email: "",
      address: "جامعہ رحمانیہ، قصور روڈ، علی آباد، ضلع قصور"
    },
    {
      name: "قاری امین الحسنات",
      designation: "نائب امیر",
      province: "شمالی پنجاب",
      contact: "",
      email: "",
      address: "ہاؤس نمبر AA/901، سٹریٹ 4، محلہ ورکشاپ، راولپنڈی"
    },
    {
      name: "مولانا عبید الرحمان",
      designation: "نائب امیر",
      province: "شمالی پنجاب",
      contact: "",
      email: "",
      address: "گڈولہ روڈ، نزد مسجد صدیق اکبر، محلہ پیر بہار شاہ، بھکر"
    },
    {
      name: "مولانا محمد ایوب خان",
      designation: "ناظم اعلیٰ (جنرل سیکرٹری)",
      province: "شمالی پنجاب",
      contact: "0300-7415579",
      email: "",
      address: "دارالعلوم مدنیہ، نسبت روڈ، چوک پرانا ڈسکہ، سیالکوٹ"
    },
    {
      name: "مولانا حبیب الرحمان قاسمی",
      designation: "ناظم",
      province: "شمالی پنجاب",
      contact: "",
      email: "",
      address: "ہاؤس نمبر 12-76، دارالعلوم حنفیہ چکوال"
    },
    {
      name: "محمد اعجاز شکری",
      designation: "ناظم",
      province: "شمالی پنجاب",
      contact: "",
      email: "",
      address: "ہاؤس نمبر 1050، سٹریٹ 2، محلہ رجب والا، خوشاب"
    },
    {
      name: "مولانا عبدالرؤف محسن",
      designation: "ناظم",
      province: "شمالی پنجاب",
      contact: "",
      email: "",
      address: "مین بازار، مقابل جامع مسجد حنفیہ قاسمیہ، محلہ موتی گائے، نارووال"
    },
    {
      name: "مولانا ارشد محمود",
      designation: "ناظم",
      province: "شمالی پنجاب",
      contact: "",
      email: "",
      address: "محلہ صدیقیہ، مسجد عوامی روڈ، ڈسکہ، سیالکوٹ"
    },
    {
      name: "مولانا شبير احمد عثمانی",
      designation: "ناظم",
      province: "شمالی پنجاب",
      contact: "",
      email: "",
      address: "سرگودھا روڈ، ہاؤس نمبر 89، سٹریٹ 2، محلہ علی ٹاؤن، بلاک مجید، فیصل آباد"
    },
    {
      name: "محترمہ شمیم بی بی",
      designation: "ناظم",
      province: "شمالی پنجاب",
      contact: "",
      email: "",
      address: "ڈیرہ احمد راجہ، ڈیرہ جڑھہ، تحصیل ساہیوال، سرگودھا"
    },
    {
      name: "مولانا قاری اعظم حسین",
      designation: "ناظم اطلاعات",
      province: "شمالی پنجاب",
      contact: "0313-4784458",
      email: "",
      address: "اچھرہ، ہاؤس نمبر 695، گلی نمبر 3، محلہ فضلیہ کالونی، لاہور"
    },
    {
      name: "محمد احمد ہزاروی",
      designation: "ہیلپر ناظم اطلاعات",
      province: "شمالی پنجاب",
      contact: "",
      email: "",
      address: "پٹنگ بالا کوٹ، ضلع مانسہرہ"
    },
    {
      name: "ربینہ پروین",
      designation: "ناظم اکاؤنٹس",
      province: "شمالی پنجاب",
      contact: "",
      email: "",
      address: "وارڈ نمبر 18، محلہ طارق آباد، تلہ گنگ، چکوال"
    },
    {
      name: "قاری رحمت اللہ لاشاری",
      designation: "سالار",
      province: "شمالی پنجاب",
      contact: "",
      email: "",
      address: "پوسٹ آفس تبی قیصرانی، لاشاری، تحصیل تونسہ، ضلع ڈیرہ غازی خان"
    },
    {
      name: "محترمہ فرزانہ بی بی",
      designation: "ہیلپر سالار",
      province: "شمالی پنجاب",
      contact: "",
      email: "",
      address: "پوسٹ آفس ٹھٹھی راجو، تحصیل ساہیوال، سرگودھا"
    },

    // Balochistan (Page 4)
    {
      name: "مولانا مفتی عبدالواحد بزئی",
      designation: "امیر",
      province: "بلوچستان",
      contact: "",
      email: "",
      address: "مہرب زئی، گھیراگ تحصیل اور ضلع کوئٹہ"
    },
    {
      name: "مولوی ندا محمد",
      designation: "نائب امیر",
      province: "بلوچستان",
      contact: "",
      email: "",
      address: "ہاؤس نمبر 123، ششد سٹریٹ، جدید آبادی چمن، قلعہ عبداللہ"
    },
    {
      name: "محترم میر حوا صاحبہ",
      designation: "نائب امیر",
      province: "بلوچستان",
      contact: "",
      email: "",
      address: "غوراسی، رخپورہ، ژوب"
    },
    {
      name: "عبدالقیوم میرزئی",
      designation: "ناظم اعلیٰ (جنرل سیکرٹری)",
      province: "بلوچستان",
      contact: "",
      email: "",
      address: "بندت یاسین زئی، قلعہ سیف اللہ"
    },
    {
      name: "قاری رحمت اللہ",
      designation: "ناظم",
      province: "بلوچستان",
      contact: "",
      email: "",
      address: "سنجاوی، تحصیل اور ضلع زیارت"
    },
    {
      name: "حاجی نعیم خان",
      designation: "ناظم",
      province: "بلوچستان",
      contact: "0333-7851264",
      email: "",
      address: "کوئٹہ"
    },
    {
      name: "محترمہ شردا صاحبہ",
      designation: "ناظم",
      province: "بلوچستان",
      contact: "",
      email: "",
      address: "نیشنل ٹاؤن، ہاؤس نمبر 10-9/5475-69، محلہ مرے، سٹریٹ ارباب کرم خان روڈ کوئٹہ"
    },
    {
      name: "حافظ محمد طاہر شاہ",
      designation: "ناظم اطلاعات",
      province: "بلوچستان",
      contact: "",
      email: "",
      address: "غوراسی، رخپورہ، ژوب"
    },
    {
      name: "حافظ در محمد",
      designation: "ہیلپر ناظم اطلاعات",
      province: "بلوچستان",
      contact: "",
      email: "",
      address: "پوسٹ آفس، بگٹی کالی، سریاب روڈ، کچی بیگٹ، کوئٹہ"
    },
    {
      name: "ڈاکٹر خدی نظر",
      designation: "ناظم اکاؤنٹس",
      province: "بلوچستان",
      contact: "",
      email: "",
      address: "محلہ عبداللہ زئی، آغبرگ، کوئٹہ"
    },

    // Sindh (Page 5)
    {
      name: "قاری عبدالمنان انور",
      designation: "امیر",
      province: "سندھ",
      contact: "",
      email: "",
      address: "جامع مسجد رحمانیہ، کشمیر روڈ، محلہ مسلم آباد سپورٹس کمپلیکس کراچی"
    },
    {
      name: "محمد اسلم شیخ",
      designation: "نائب امیر",
      province: "سندھ",
      contact: "",
      email: "",
      address: "محلہ ہیر آباد، تھامس آباد، ہاؤس نمبر 180-C، میرپور خاص"
    },
    {
      name: "عبدالواحد خان",
      designation: "نائب امیر",
      province: "سندھ",
      contact: "",
      email: "",
      address: "مدرسہ مفتاح العلوم گھاس مارکیٹ، پوسٹ آفس مارکیٹ حیدرآباد"
    },
    {
      name: "مولانا مفتی ذوالرحمان",
      designation: "نائب امیر",
      province: "سندھ",
      contact: "",
      email: "",
      address: "ہاؤس نمبر D1-55، جامعہ خلیفہ موسیٰ کالونی گلبرگ کراچی"
    },
    {
      name: "حافظ احمد علی محمد سومار المعروف محمد عثمان",
      designation: "ناظم اعلیٰ (زیر التواء)",
      province: "سندھ",
      contact: "",
      email: "",
      address: "ہاؤس نمبر 1707، سیکٹر B-3-5، نارتھ کراچی، محلہ طالب المولہ کالونی ٹنڈو آدم، سانگھڑ"
    },
    {
      name: "منور علی شاہ",
      designation: "ناظم (ڈپٹی سیکرٹری)",
      province: "سندھ",
      contact: "",
      email: "",
      address: "آزاد جمہوریہ کالونی نزد سندھی مسلم سوسائٹی، ہاؤس نمبر B69، کراچی"
    },
    {
      name: "قاری سیف الرحمان",
      designation: "ناظم (ڈپٹی سیکرٹری)",
      province: "سندھ",
      contact: "",
      email: "",
      address: "مسلم مجاہد کالونی، بالڈیا ٹاؤن کراچی"
    },
    {
      name: "حافظ ارمان احمد چوہان",
      designation: "ناظم اطلاعات",
      province: "سندھ",
      contact: "",
      email: "",
      address: "ہاؤس نمبر 164، سٹریٹ 6، محلہ نورانی بستی حیدرآباد"
    },
    {
      name: "محمد عاصم عباسی",
      designation: "ناظم اکاؤنٹس",
      province: "سندھ",
      contact: "",
      email: "",
      address: "گارڈن ویسٹ، نزد مسجد صدیق اکبر، محلہ حسین ڈی سلوا بلڈنگ کراچی"
    },

    // Khyber Pakhtunkhwa (Page 6)
    {
      name: "مولانا فقیر ہزاروی",
      designation: "سرپرست",
      province: "خیبر پختونخوا",
      contact: "",
      email: "",
      address: "نیہایہ جدید، پوسٹ آفس سعدین میرا ڈگئی، تحصیل اور ضلع بٹگرام"
    },
    {
      name: "مولانا اسرائیل",
      designation: "سرپرست",
      province: "خیبر پختونخوا",
      contact: "",
      email: "",
      address: "محلہ اڈہ، لونڈ خور، تحصیل اور ضلع تخت بھائی مردان"
    },
    {
      name: "مولانا عبدالواحد",
      designation: "صوبائی امیر",
      province: "خیبر پختونخوا",
      contact: "0300-5952381",
      email: "",
      address: "محلہ بازار خیل، درسمند، ضلع ہنگو"
    },
    {
      name: "مولانا سبز علی خان",
      designation: "نائب امیر",
      province: "خیبر پختونخوا",
      contact: "",
      email: "",
      address: "پوسٹ آفس کرک، ٹپی کرک، تحصیل اور ضلع کرک"
    },
    {
      name: "مولانا انور اللہ باچہ",
      designation: "نائب امیر",
      province: "خیبر پختونخوا",
      contact: "",
      email: "",
      address: "محلہ ملنگان، اذاخیل بالا، نوشہرہ کے پی"
    },
    {
      name: "حافظ عبدالرفیع",
      designation: "نائب امیر",
      province: "خیبر پختونخوا",
      contact: "",
      email: "",
      address: "بازار خیل، درسمند، تحصیل تل، ضلع ہنگو"
    },
    {
      name: "جیمل ایڈووکیٹ",
      designation: "نائب امیر",
      province: "خیبر پختونخوا",
      contact: "",
      email: "",
      address: "ویلیج حلمت، ضلع صوابی"
    },
    {
      name: "مولانا عبدالحئی",
      designation: "ناظم اعلیٰ (جنرل سیکرٹری)",
      province: "خیبر پختونخوا",
      contact: "",
      email: "",
      address: "سپلگا، میران شاہ، شمالی وزیرستان"
    },
    {
      name: "مولانا فدا احمد شاہ",
      designation: "ناظم (ڈپٹی سیکرٹری)",
      province: "خیبر پختونخوا",
      contact: "",
      email: "",
      address: "شاہ دیو، تحصیل اور ضلع بنوں"
    },
    {
      name: "مولانا زین العارفین",
      designation: "ناظم",
      province: "خیبر پختونخوا",
      contact: "",
      email: "",
      address: "محمود ٹاؤن نزد جامعہ اسلامیہ تحفیظ القرآن صوابی روڈ پر ہوتی مردان"
    },
    {
      name: "مولانا امامت اللہ",
      designation: "ناظم",
      province: "خیبر پختونخوا",
      contact: "",
      email: "",
      address: "نزد جامع مسجد خلفائے راشدین چیپر روڈ، پوسٹ آفس کھلا بٹ ٹاؤن شپ سکندر پور ہری پور"
    },
    {
      name: "محترمہ نور نامہ",
      designation: "ناظم",
      province: "خیبر پختونخوا",
      contact: "",
      email: "",
      address: "ویلیج پہاڑ خیل، تھل، لکی مروت"
    },
    {
      name: "مولانا محمود حقانی",
      designation: "ناظم",
      province: "خیبر پختونخوا",
      contact: "",
      email: "",
      address: "دارالعلوم اسلامیہ، شاہ عالم اڈہ، جنوبی وزیرستان"
    },
    {
      name: "محترمہ زوبیدہ بی بی",
      designation: "سیکشن اطلاعات",
      province: "خیبر پختونخوا",
      contact: "",
      email: "",
      address: "ویلیج دیبگمندڑا، لکی مروت"
    },
    {
      name: "قاضی فتح الباری",
      designation: "ہیلپر (ڈپٹی سیکشن اطلاعات)",
      province: "خیبر پختونخوا",
      contact: "",
      email: "",
      address: "نزد فتح العلوم نواں کلی، رستم، مردان"
    },
    {
      name: "مولانا محمد داؤد",
      designation: "کونٹیکٹ سیکرٹری",
      province: "خیبر پختونخوا",
      contact: "",
      email: "",
      address: "شفیع آباد، قم جدران، پوسٹ آفس پاڑا چنہ، شالوزن تنگی، اپر کرم، ضلع کرام ایجنسی"
    },
    {
      name: "مولانا اسامہ سعید",
      designation: "سالار",
      province: "خیبر پختونخوا",
      contact: "",
      email: "",
      address: "سعدیان جی ٹی روڈ، محلہ سردار گڑھی پشاور"
    }
  ], []);

  // Get unique provinces and designations for filters
  const provinces = ['تمام', ...new Set(allMembers.map(member => member.province))];
  const designations = ['تمام', ...new Set(allMembers.map(member => member.designation))];

  // Filter members based on search and filters
  const filteredMembers = useMemo(() => {
    return allMembers.filter(member => {
      const matchesSearch = 
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.address.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesProvince = selectedProvince === 'تمام' || member.province === selectedProvince;
      const matchesDesignation = selectedDesignation === 'تمام' || member.designation === selectedDesignation;
      
      return matchesSearch && matchesProvince && matchesDesignation;
    });
  }, [allMembers, searchTerm, selectedProvince, selectedDesignation]);

  // Group members by province for display
  const groupedMembers = useMemo(() => {
    const groups = {};
    filteredMembers.forEach(member => {
      if (!groups[member.province]) {
        groups[member.province] = [];
      }
      groups[member.province].push(member);
    });
    return groups;
  }, [filteredMembers]);

  return (
    <section className="py-16 bg-gray-50 urdu-font">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00582E] mb-4 urdu-h2">
            پارٹی عہدیداران
          </h2>
          <div className="w-24 h-1 bg-[#00A0E3] mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-center urdu-body leading-loose">
            جمعیت علماءِ اسلام (س) کے تمام صوبائی اور مرکزی عہدیداران کی مکمل فہرست
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Input */}
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="نام، عہدہ یا پتہ تلاش کریں..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-10 pl-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A0E3] focus:border-transparent urdu-body text-right"
              />
            </div>

            {/* Province Filter */}
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <FaFilter className="text-gray-400" />
              </div>
              <select
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
                className="w-full pr-10 pl-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A0E3] focus:border-transparent urdu-body text-right appearance-none"
              >
                {provinces.map(province => (
                  <option key={province} value={province}>{province}</option>
                ))}
              </select>
            </div>

            {/* Designation Filter */}
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <FaFilter className="text-gray-400" />
              </div>
              <select
                value={selectedDesignation}
                onChange={(e) => setSelectedDesignation(e.target.value)}
                className="w-full pr-10 pl-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A0E3] focus:border-transparent urdu-body text-right appearance-none"
              >
                {designations.map(designation => (
                  <option key={designation} value={designation}>{designation}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-right">
            <p className="text-gray-600">
              کل نتائج: <span className="font-semibold text-[#00582E]">{filteredMembers.length}</span>
            </p>
          </div>
        </div>

        {/* Members Grid */}
        <div className="space-y-8">
          {Object.keys(groupedMembers).map(province => (
            <div key={province} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#00582E] to-[#00A0E3] px-6 py-4">
                <h3 className="text-xl font-bold text-white urdu-h3 text-right">
                  {province} ({groupedMembers[province].length} عہدیداران)
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {groupedMembers[province].map((member, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 text-right border border-gray-200">
                    <h3 className="text-lg font-bold text-[#00582E] mb-2 urdu-h3">
                      {member.name}
                    </h3>
                    <p className="text-[#00A0E3] font-semibold mb-4 urdu-body text-sm">
                      {member.designation}
                    </p>
                    
                    <div className="space-y-3">
                      {member.contact && (
                        <div className="flex items-center text-gray-600 justify-end">
                          <span className="text-sm text-right urdu-body mr-2">{member.contact}</span>
                          <FaPhone className="text-[#00A0E3] flex-shrink-0" />
                        </div>
                      )}
                      {member.email && (
                        <div className="flex items-center text-gray-600 justify-end">
                          <span className="text-sm text-right urdu-body mr-2">{member.email}</span>
                          <FaEnvelope className="text-[#00A0E3] flex-shrink-0" />
                        </div>
                      )}
                      <div className="flex items-start text-gray-600 justify-end">
                        <span className="text-sm text-right urdu-body mr-2 leading-relaxed">{member.address}</span>
                        <FaMapMarkerAlt className="text-[#00A0E3] flex-shrink-0 mt-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 urdu-body text-lg">
              کوئی رزلٹ نہیں ملا۔ براہ کرم اپنی سرچ یا فلٹرز تبدیل کریں۔
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PartyMembers;