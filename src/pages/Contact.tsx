// src/pages/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p className="mt-4">You can reach me at:</p>
      <ul className="mt-2">
        <li>Email: gsn@example.com</li>
        <li>LinkedIn: <a href="https://linkedin.com/in/gsn" className="text-blue-500">linkedin.com/in/gsn</a></li>
      </ul>
    </div>
  );
};

export default Contact;
