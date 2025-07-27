import React from 'react';
import person from '../assets/person.jpg';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    name: 'Mr. Rishiraj Pareta',
    designation: 'Founder, Curl Fitness',
    text: "From the moment we received our logo, we knew Curl Fitness had found its identity. The branding is bold, energetic, and exactly what we envisioned. The Instagram page is growing steadily, thanks to the consistent aesthetic and engaging content",
   
  },
  {
    name: 'Mr. Sandeep Thakur',
    designation: 'Director, Nexus Polytech LLP',
    text: "We approached the team for both our logo and website, and they delivered excellence on both fronts. The visuals are sharp and professional, and the website is coming together beautifully. Highly recommended for anyone seeking brand identity solutions.",
   
  },
  {
    name: 'Mr. Mitesh karevati',
    designation: 'Founder, Maativan Homestays',
    text: "The logo design beautifully captured the essence of our retreat — earthy, authentic, and rooted. The process was smooth, professional, and exceeded expectations.",
 
  },
  {
    name: 'Mr. Yuvraj',
    designation: 'Founder, Silicon City Lands',
    text: "Our branding needed a fresh start, and the new logo did exactly that. It’s modern, clean, and speaks to the trust we want to build with our clients. We’ve received great feedback from our investors and partners alike.",
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
          <ScrollReveal key={`${testimonial.name}-${index}`} delay={index * 0.15}>
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 opacity-20 blur-xl"></div>
              
              <p className="text-white/80 text-base italic leading-relaxed mb-6">
                “{testimonial.text}”
              </p>
              <p className="text-lg font-semibold text-teal-300">– {testimonial.name}</p>
              <p className='text-sm italic text-teal-300'>{testimonial.designation}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;