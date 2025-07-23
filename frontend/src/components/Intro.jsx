import boltlabsVideo from "../assets/boltlabs.mp4";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();
  return (
    <div className="top-[0px] relative w-full min-h-screen overflow-hidden">
      {/* 🔹 Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-left scale-[1.6] md:scale-100 transition-transform duration-700 ease-in-out z-0"
        title="Promotional video for BoltLabs"
      >
        <source src={boltlabsVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Overlay */}
      <div className="absolute inset-0 z-10">
        <div className="block md:hidden w-full h-full bg-black/60" />
        <div className="hidden md:block w-full h-full bg-gradient-to-r from-black via-black/60 to-transparent" />
      </div>

      {/* 🔹 Content Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center min-h-screen px-6 md:px-16">
        {/* Left Text Section */}
        <div className="z-20 space-y-6 text-white text-center md:text-left max-w-2xl mx-auto md:mx-0">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Your{" "}
            <span className="text-transparent pr-2 bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 italic">
              Digital {" "}
            </span>
            <span className="text-transparent pr-2 bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 italic">
              Partner
            </span>{" "}
            in{" "}
            <span className="text-transparent pr-2 bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 italic">
              Growth
            </span>
            .
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Providing powerful tech and creative solutions tailored for small businesses.
            From stunning websites and mobile apps to strategic media marketing and
            reliable tech support — we help you grow online without the overwhelm.
            Whether you're launching or scaling, we bring big-agency expertise with a
            personal touch, so you can focus on what matters: your business.
          </p>
          <div>
            <button className="mt-4 px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-400 transition text-white text-sm font-semibold shadow-lg" onClick={() => navigate('/login')}>
              Let's Grow Together
            </button>
          </div>
        </div>

        {/* Right half is left intentionally empty so the video shows */}
        <div className="hidden md:block" />
      </div>
    </div>
  );
}
