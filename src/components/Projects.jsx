import React, { useState, useEffect } from 'react';
import a1 from '../assets/a1.png';
import a2 from '../assets/a2.png';
import a3 from '../assets/a3.png';
import { FaArrowUp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Todoist',
      description: 'A personal task management platform built with Node.Js, MongoDB, React.Js and Tailwind CSS, showcasing authenticated CRUD operations.',
      image: a1,
    },
    {
      id: 2,
      title: 'Unifyed',
      description: 'A full-stack chat application integrated with Socket.IO, featuring user authentication, real-time conversations and database support for message backup.',
      image: a2,
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with React and Tailwind CSS, showcasing my skills and projects.',
      image: a3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleScroll = () => {
    setShowScrollToTop(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="projects" className="projects py-20 px-4 md:px-16 lg:px-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-sky-700 mb-20">
        Projects
      </h2>

      {/* Image Carousel */}
      <div className="carousel-container relative flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="absolute  top-1/2 left-4 md:left-8 bg-gray-500 text-white rounded-full p-2 hover:bg-purple-800 transform -translate-y-1/2"
        >
          <FaChevronLeft size={20} />
        </button>

        <div className="carousel-item text-center">
          <img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            className="w-full h-64 md:h-96 object-contain rounded-lg"
          />
          <div className="p-4">
            <h3 className="text-2xl py-2 font-bold">{projects[currentIndex].title}</h3>
            <p className="italic">{projects[currentIndex].description}</p>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 md:right-8 bg-gray-500 text-white rounded-full p-2 hover:bg-purple-800 transform -translate-y-1/2"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Scroll */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-orange-300 text-white p-3 rounded-full shadow-lg hover:bg-purple-500"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Projects;
