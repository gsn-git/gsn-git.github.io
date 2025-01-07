import React from 'react';
import myImage from '../assets/gsn-03.jpg'; // Adjust the path as necessary

function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-center">About Me</h2>
      <div className="flex flex-col items-center mt-4">
        <img src={myImage} alt="User" className="w-48 h-48  rounded-full mt-4" />
        <div className="mt-4 max-w-2xl">
          <p className="text-lg mt-4 bullet-icon">
            I believe in consistent learning rather than starving for knowledge. My approach to growth combines continual learning with my day-to-day work, always seeking to improve and stay updated in both my personal and professional life.
          </p>
          <p className="text-lg mt-4 bullet-icon">
            Outside of my work, I have a strong interest in world affairs, space exploration, and the latest in movies and TV. Planning and staying organized are also key aspects of my approach to both work and personal life.
          </p>
          <p className="text-lg mt-4 bullet-icon">
            Though I'm present on social media platforms, I tend to remain more of a passive participant rather than highly active.
          </p>
          <p className="text-lg mt-4 bullet-icon">
            Technologically, I love keeping up with the latest trends, new inventions, and tech-related updates, especially those related to my mobile, and the technologies I'm currently working with. I enjoy diving into the details, understanding how things work, and staying at the cutting edge of tech innovation.
          </p>
        </div>       
      </div>
    </div>
  );
}

export default About;