import React from 'react';
import Slider from 'react-slick'; // Import react-slick

// Import slick CSS files (if not already included in your project)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Amazing travel experience! The team went above and beyond to make our trip unforgettable. Highly recommend!",
      author: "John Doe",
      location: "New York",
      image: "/assets/testimonial.jpg" //Optional: Path to testimonial author's image
    },
    {
      quote: "I've never had a better vacation. The service was exceptional, and the destinations were breathtaking. Thank you!",
      author: "Jane Smith",
      location: "London",
      image: "/assets/testimonial.jpg" 
    },
    {
      quote: "The trip exceeded all my expectations. The planning was flawless, and the support was outstanding.",
      author: "David Lee",
      location: "Sydney",
      image: "/assets/testimonial.jpg" 
    },
     // ... more testimonials
  ];

  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Loop the carousel
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Autoplay the carousel
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
    responsive: [ // Responsive settings
      {
        breakpoint: 640, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <Slider {...settings}> {/* Use the Slider component */}
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4"> {/* Add padding for spacing */}
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-lg text-gray-700 leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex flex-col items-center">
                  {testimonial.image && (
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="rounded-full h-16 w-16 mb-2 object-cover"
                    />
                  )}
                  <h3 className="font-semibold">{testimonial.author}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;