import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import sample1 from "../assets/sample1.jpg";
import sample2 from "../assets/sample2.jpg";
import sample3 from "../assets/sample3.jpg";

const projects = [
  {
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: sample1,
  },
  {
    title: "Project 2",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation.",
    img: sample2,
  },
  {
    title: "Project 3",
    desc: "Duis aute irure dolor in reprehenderit in voluptate.",
    img: sample3,
  },
];

export default function OurProjects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center px-6 py-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center max-w-3xl">
        Our <span className="text-teal-400">Projects</span>
      </h2>

      <Swiper
        modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
        effect="coverflow"
        centeredSlides={true}
        spaceBetween={12}
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet bg-white/30 w-3.5 h-3.5 rounded-full",
          bulletActiveClass: "bg-teal-400 scale-110",
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
          slideShadows: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
          1280: { slidesPerView: 3 },
        }}
        className="relative w-full px-4 sm:px-6 md:px-12"
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={`${project.title}-${idx}`}>
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
              <div className="absolute bottom-6 left-6 right-6 text-white z-20">
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-base md:text-lg max-w-xl">{project.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <button
          type="button"
          className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-teal-500/80 text-white p-2 rounded-full z-20 transition"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          type="button"
          className="next-btn absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-teal-500/80 text-white p-2 rounded-full z-20 transition"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </Swiper>
    </div>
  );
}
