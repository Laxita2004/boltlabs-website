import React from 'react';
import person from '../assets/person.jpg';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    name: 'Alexander',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: person,
  },
  {
    name: 'Alexander',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: person,
  },
  {
    name: 'Alexander',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: person,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 px-6 md:px-16 font-sans">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-20">
        <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
          What Our Clients Say
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <ScrollReveal key={index} delay={index * 0.15}>
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 opacity-20 blur-xl"></div>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full border-4 border-teal-400 shadow-md mb-4"
              />
              <p className="text-white/80 text-base italic leading-relaxed mb-6">
                “{testimonial.text}”
              </p>
              <p className="text-lg font-semibold text-teal-300">– {testimonial.name}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
