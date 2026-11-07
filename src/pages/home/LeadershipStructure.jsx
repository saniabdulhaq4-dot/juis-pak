// components/LeadershipStructure.js
import React from 'react';

const LeadershipStructure = () => {
  const currentLeader = {
    name: "مولانا عبدالحق ساجد",
    title: "موجودہ امیر",
    relation: "مولانا حامد الحق حقانیؒ کے فرزند",
    image: "/api/placeholder/400/400",
    description: "اپنے شہید والد کے بعد جمعیت علماءِ اسلام (س) کی قیادت سنبھالی اور پارٹی کو نئی بلندیوں تک پہنچانے کے لیے پرعزم ہیں۔"
  };

  const formerLeaders = [
    {
      name: "مولانا حامد الحق حقانیؒ",
      title: "سابق امیر (شہید)",
      period: "2018 - 2022",
      relation: "مولانا سمیع الحقؒ کے فرزند",
      image: "/api/placeholder/300/300",
      shahadat: "2022",
      description: "اپنے والد مولانا سمیع الحقؒ کے بعد پارٹی کی قیادت سنبھالی اور 2022 میں شہادت پائی۔"
    },
    {
      name: "مولانا سمیع الحقؒ",
      title: "بانی اور سابق امیر (شہید)", 
      period: "1980 - 2018",
      relation: "بانی",
      image: "/api/placeholder/300/300",
      shahadat: "2018",
      description: "جمعیت علماءِ اسلام (س) کے بانی اور پہلے امیر جنہوں نے 2018 میں شہادت پائی۔"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 urdu-font">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00582E] mb-4 urdu-h2">
            قیادت کا تسلسل
          </h2>
          <div className="w-24 h-1 bg-[#00A0E3] mx-auto"></div>
        </div>

        {/* Current Leader */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#00582E] mb-8 text-center urdu-h3">
            موجودہ قیادت
          </h3>
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src={currentLeader.image}
                  alt={currentLeader.name}
                  className="w-48 h-48 rounded-full object-cover border-4 border-[#00582E] shadow-lg"
                />
              </div>
              <div className="text-right flex-1">
                <h4 className="text-2xl font-bold text-[#00582E] urdu-h3">
                  {currentLeader.name}
                </h4>
                <p className="text-xl text-[#00A0E3] font-semibold urdu-body mt-2">
                  {currentLeader.title}
                </p>
                <p className="text-gray-600 urdu-body mt-2">
                  {currentLeader.relation}
                </p>
                <p className="text-gray-700 mt-4 urdu-body leading-relaxed">
                  {currentLeader.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Former Leaders */}
        <div>
          <h3 className="text-2xl font-bold text-[#00582E] mb-8 text-center urdu-h3">
            سابق قیادت
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {formerLeaders.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center mb-4">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-red-500 mx-auto shadow-lg"
                  />
                </div>
                <div className="text-right">
                  <h4 className="text-xl font-bold text-[#00582E] urdu-h3">
                    {leader.name}
                  </h4>
                  <p className="text-[#00A0E3] font-semibold urdu-body">
                    {leader.title}
                  </p>
                  <p className="text-gray-600 urdu-body text-sm mt-1">
                    {leader.period}
                  </p>
                  <p className="text-red-600 font-semibold urdu-body mt-2">
                    شہادت: {leader.shahadat}
                  </p>
                  <p className="text-gray-700 mt-3 urdu-body text-sm leading-relaxed">
                    {leader.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipStructure;