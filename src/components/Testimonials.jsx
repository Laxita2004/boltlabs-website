import React from 'react';
import person from '../assets/person.jpg';

const testimonials = [
  {
    name: 'Alexander',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: person
  },
  {
    name: 'Alexander',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: person
  },
  {
    name: 'Alexander',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: person
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-4">
      <h2 className="text-3xl font-semibold text-center text-teal-400 mb-10 underline underline-offset-8">Testimonials</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-teal-700 text-white rounded-lg p-6 flex flex-col items-center shadow-lg w-full md:w-1/3">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mb-4 border-4 border-white"
            />
            <p className="text-sm mb-4 text-center">"{testimonial.text}"</p>
            <p className="font-bold">– {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
