import React from 'react';
import { SectionWrapper } from './hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      <h2 className="text-xl font-bold text-white col-span-full">Languages</h2>
      {technologies
        .filter((tech) =>
          ['JavaScript', 'Python', 'C++', 'TypeScript', 'HTML 5', 'CSS 3', ].includes(tech.name)
        )
        .map((technology) => (
          <div
            key={technology.name}
            className="bg-gradient-to-r from-[#1D1836] to-[#2E2A5A] rounded-lg shadow-lg p-4 flex flex-col items-center text-white hover:scale-105 transition-transform duration-300"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="h-16 mb-4"
            />
            <h3 className="text-lg font-semibold">{technology.name}</h3>
          </div>
        ))}

      <h2 className="text-xl font-bold text-white col-span-full mt-6">
        Frameworks & Libraries
      </h2>
      {technologies
        .filter((tech) =>
          ['React JS', 'Redux Toolkit', 'Tailwind CSS', 'NodeJs', 'Next.js', 'NestJS', 'Bootstrap'].includes(tech.name)
        )
        .map((technology) => (
          <div
            key={technology.name}
            className="bg-gradient-to-r from-[#1D1836] to-[#2E2A5A] rounded-lg shadow-lg p-4 flex flex-col items-center text-white hover:scale-105 transition-transform duration-300"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="h-16 mb-4"
            />
            <h3 className="text-lg font-semibold">{technology.name}</h3>
          </div>
        ))}

      <h2 className="text-xl font-bold text-white col-span-full mt-6">
        Databases
      </h2>
      {technologies
        .filter((tech) =>
          ['MongoDb', 'Oracle', 'MySQL', 'PostgreSQL'].includes(tech.name)
        )
        .map((technology) => (
          <div
            key={technology.name}
            className="bg-gradient-to-r from-[#1D1836] to-[#2E2A5A] rounded-lg shadow-lg p-4 flex flex-col items-center text-white hover:scale-105 transition-transform duration-300"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="h-16 mb-4"
            />
            <h3 className="text-lg font-semibold">{technology.name}</h3>
          </div>
        ))}

      <h2 className="text-xl font-bold text-white col-span-full mt-6">Tools</h2>
      {technologies
        .filter((tech) =>
          ['figma', 'git', 'redis', 'socket.io', 'Docker'].includes(tech.name)
        )
        .map((technology) => (
          <div
            key={technology.name}
            className="bg-gradient-to-r from-[#1D1836] to-[#2E2A5A] rounded-lg shadow-lg p-4 flex flex-col items-center text-white hover:scale-105 transition-transform duration-300"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="h-16 mb-4"
            />
            <h3 className="text-lg font-semibold">{technology.name}</h3>
          </div>
        ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');