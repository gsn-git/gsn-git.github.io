import React from 'react';
import userImage from '../assets/gsn.jpg';

function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-center">About Me</h2>
      <div className="flex flex-col items-center mt-4">
        <img src={userImage} alt="User" className="w-32 h-32 rounded-full mt-4" />
        <div className="mt-4 max-w-2xl">
          <p className="text-lg mt-4 bullet-icon">
            Experienced and versatile Full Stack Technology Architect with overall 20+ years of experience in IT industry including last 9 years of experiene in front end technologies. Proven track record of leading and delivering multiple medium to large scale projects from inception through to successful production deployments.
          </p>
          <p className="text-lg mt-4 bullet-icon">
            Skilled in boh individual contribution and team management with extensive experience in project and resource planning, as well as overseing client deliverables. Possesses compressive expertise across all phases of the software development life cycle, including requirements analysis, design, development, testing, and implementation.
          </p>
          <p className="text-lg mt-4 bullet-icon">
            Front-end developer with a passion for creating beautiful, interactive websites. Specializes in React, TypeScript, and modern CSS frameworks like Tailwind.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;