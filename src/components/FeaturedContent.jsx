import React from 'react';

const TravelCardSection = () => {
  const travelCards = [
    {
      image: './assets/img01.jpg', // Replace with your image paths
      title: 'Bali Paradise',
      description: 'Experience the stunning beaches and vibrant culture of Bali.',
      link: '/bali',
    },
    {
      image: './assets/img02.jpg',
      title: 'Kyoto Gardens',
      description: 'Explore the serene beauty of traditional Japanese gardens in Kyoto.',
      link: '/kyoto',
    },
    {
      image: './assets/img03.jpg',
      title: 'Swiss Alps Adventure',
      description: 'Embark on an unforgettable adventure in the majestic Swiss Alps.',
      link: '/alps',
    },
    {
        image: './assets/img04.jpg',
        title: 'Swiss Alps Adventure',
        description: 'Embark on an unforgettable adventure in the majestic Swiss Alps.',
        link: '/alps',
      },
    // ... more cards
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Responsive grid */}
          {travelCards.map((card, index) => (
            <a key={index} href={card.link} className="block relative h-0 pb-[100%] rounded-lg overflow-hidden shadow-md transition duration-300 hover:scale-105"> {/* Square aspect ratio */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50 flex flex-col justify-end p-4"> {/* Overlay */}
                <h3 className="text-white font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-200 text-sm">{card.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelCardSection;