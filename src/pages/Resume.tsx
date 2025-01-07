// src/pages/Resume.tsx
import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold">Resume</h2>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Education</h3>
        <ul className="list-disc ml-6">
          <li>BS in Computer Science - University X (2021)</li>
        </ul>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Experience</h3>
        <ul className="list-disc ml-6">
          <li>Front-End Developer - Company Y (2022-Present)</li>
          <li>Junior Developer - Company Z (2021-2022)</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
