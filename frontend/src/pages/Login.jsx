import LoginForm from '../components/LoginForm';
import logo from '../assets/logo.png';
import bgVideo from '../assets/boltlabs1.mp4'; 

const Login = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-2]"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-[-1]" />

      {/* Centered Login Card */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <img src={logo} alt="Firm Logo" className="w-36 mb-6" />

        <div className="bg-[#1F2937]/90 border border-gray-700/50 backdrop-blur-md shadow-2xl rounded-xl px-6 py-8 sm:px-10 w-full max-w-md">
          <h2 className="text-3xl font-extrabold text-white text-center mb-2">Welcome Back</h2>
          <p className="text-sm text-gray-400 text-center mb-6">Sign in to your account</p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
