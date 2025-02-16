import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Responsive grid */}
          <div className="md:order-1"> {/* Image on the left on larger screens */}
            <img
              src="/assets/img01.jpg" // Replace with your image path
              alt="About Us"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are a team of passionate travelers dedicated to creating unforgettable travel experiences. Our mission is to inspire and empower people to explore the world, discover new cultures, and create lasting memories. We believe that travel has the power to transform lives, and we are committed to making travel accessible and enjoyable for everyone.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
             From meticulously planned itineraries to 24/7 support, we handle every detail of your trip, allowing you to relax and focus on enjoying the journey. Whether you're seeking adventure, relaxation, or cultural immersion, we have the perfect travel experience for you.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Expertly Curated Trips</li>
              <li>Personalized Service</li>
              <li>Unwavering Support</li>
              <li>Exceptional Value</li>
            </ul>
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;