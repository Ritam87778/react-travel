import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}> {/* Replace with your image path */}
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text readability */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-center leading-tight">
          Explore the World
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 text-center max-w-3xl">
          Discover breathtaking destinations and create unforgettable memories with our curated travel experiences.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Book Now
          </button>
          <button className="bg-transparent border border-white hover:bg-white hover:text-blue-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;