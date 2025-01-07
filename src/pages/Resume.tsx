// src/pages/Resume.tsx
import React from 'react';
import userImage from '../assets/gsn.jpg';

const Resume: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-4xl font-bold text-center mb-8">Resume</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="text-center mb-6">
        <img src={userImage} alt="User" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h3 className="text-2xl font-semibold">Gopal Singh Negi</h3>
          <p className="text-lg">gopalxy@gmail.com</p>
          <p className="text-lg">Contact: +91 9560 469 129</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold border-b pb-2">Experience Summary</h3>
          <p className="mt-4">
            Experienced Full Stack Developer with a strong background in front-end and back-end technologies. Proven ability to lead projects from inception to completion, delivering high-quality software solutions. Skilled in React, TypeScript, Node.js, and modern CSS frameworks like Tailwind.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold border-b pb-2">Education</h3>
          <ul className="list-disc ml-6 mt-4">
            <li>Master of Computer Application - "HNB Garhwal University" (2004)</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold border-b pb-2">Companies Worked</h3>
          <ul className="list-disc ml-6 mt-4">
            <li>SE, SSE, TL, Associate Manager, Manager - Accenture Services Pvt. Ltd. (2008-Present)</li>
            <li>Software Developer - Powersolve India (2007-2008)</li>
            <li>Assistant Software Engineer - Tata Consultancy Services (2006-2007)</li>
            <li>Software Developer - Omnie Solutions (2004-2006)</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold border-b pb-2">Relevent Experience</h3>
          <ul className="list-disc ml-6 mt-4">
            <li className='mb-6'>As a Technology Architect and Subject Matter Expert (SME) in front-end development, specializing in React and Remix, I have been instrumental in supporting a major telecom company. My role involves managing multiple lines of business, ensuring seamless delivery of solutions, and providing accurate estimates for new features. This includes designing scalable, efficient, and user-centric front-end architectures, collaborating with cross-functional teams, and ensuring alignment with overall business goals.</li>
            <li className='mb-6'>An expert in implementing enterprise-level security practices using OpenID Connect (OIDC) for secure authentication and OpenTelemetry (OTEL) for observability and monitoring. I specialize in designing and integrating robust security frameworks that ensure seamless, scalable, and compliant access control across applications. By leveraging OIDC for Single Sign-On (SSO) and OTEL for tracing, metrics, and logging, I help teams enhance both security and system observability while maintaining high levels of performance and compliance.</li>
            <li className='mb-6'>Designed and implemented responsive Single Page Applications (SPAs) using React, Node, Express, Remix, and Tailwind CSS, focusing on delivering fast, user-friendly experiences across devices. Utilized lazy loading and various performance optimization techniques, including code splitting, efficient asset loading, and caching strategies, to achieve optimal performance. These efforts resulted in consistently high Lighthouse performance scores, ensuring excellent page load times and a seamless user experience.</li>
            <li className='mb-6'>Collaborated closely with cross-functional teams and stakeholders, ensuring clear and consistent communication to align on both technical and product objectives. This facilitated the smooth execution of projects, addressing concerns and ensuring that all parties were on the same page regarding project scope, timelines, and deliverables.</li>
            <li className='mb-6'>Skilled in both individual contribution and team management, with extensive experience in project and resource planning, as well as overseeing client deliverables. Possesses comprehensive expertise across all phases of the software development life cycle, including requirements analysis, design, development, testing, and implementation.</li>
            <li className='mb-6'>Gained over 1.5 years of client-facing experience with a major regulatory authority for banks in the European Union, working from Frankfurt, Germany. In this role, I served as the development lead, managing onshore-offshore coordination, acting as the SME for a key functionality, and contributing as a front-end developer.</li>
            <li className='mb-6'>Proficient in maintaining comprehensive documentation and fostering knowledge-sharing practices related to development processes, system architecture, and API usage, ensuring seamless collaboration and efficient knowledge transfer across teams.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
