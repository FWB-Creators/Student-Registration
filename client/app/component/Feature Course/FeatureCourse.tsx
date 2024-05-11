import React from 'react';
import Image from 'next/image';

const DisciplineCard = ({ sector, name, icon }) => (
  <div className="flex w-full">
    <div className="border-gray-500 bg-white p-6 rounded-3xl hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 flex items-center w-full mb-6">
      <div>
        <div className="ml-6">
          <p className="text-black opacity-90 text-[15px]">
            {sector}
          </p>
        </div>
        <div className="ml-6">
          <p className="text-black opacity-90 text-[15px]">
            {name}
          </p>
        </div>
      </div>
      <div className="ml-auto">
        <Image
          src={icon}
          alt="icon"
          width={110}
          height={110}
          className="mx-auto"
        />
      </div>
    </div>
  </div>
);

const FeatureCourse = () => {
  const disciplines = [
    { name: 'COMPUTER ENGINEERING', sector1 :'CPE-INTER', sector2 :'CHE-REGULAR', icon: '/static/Laptop.png' },
    { name: 'MECHANICAL ENGINEERING', sector1 :'MCE-INTER', sector2 :'MCE-REGULAR', icon: '/static/Gear.png' },
    { name: 'CIVIL ENGINEERING', sector1 :'CVE-INTER', sector2 :'CHE-REGULAR', icon: '/static/Blueprint.png' },
    { name: 'CHEMICAL ENGINEERING', sector1 :'CHE-INTER', sector2 :'CHE-REGULAR', icon: '/static/Chemical.png' },
  ];

  return (
    <div className="py-6 pb-16 bg-gray-50">
      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-[1.4rem]">
        {disciplines.map((discipline, index) => (
          <DisciplineCard key={index} sector={discipline.sector1} name={discipline.name} icon={discipline.icon} />
        ))}
      </div>
      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-[1.4rem]">
        {disciplines.map((discipline, index) => (
          <DisciplineCard key={index} sector={discipline.sector2} name={discipline.name} icon={discipline.icon} />
        ))}
      </div>
    </div>
  );
};

export default FeatureCourse;