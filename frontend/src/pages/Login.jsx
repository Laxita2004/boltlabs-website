import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div className="min-h-screen bg-[#0e1a24] flex flex-col justify-center py-12 sm:px-6 lg:px-8 pt-32">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Welcome Back
        </h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          Sign in to your account
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm: w-full sm:max-w-md">
        <div className="bg-[#1F2937] py-8 px-4 shadow-xl rounded-lg sm:px-10 border border-gray-700/50">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;