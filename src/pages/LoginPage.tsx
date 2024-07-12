import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full bg-gray-100 pt-20 pb-20">
      <div className="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-6 pb-6">
          <img src="/src/logoblack.png" alt="Logo" className="h-12 w-auto" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-2 pb-8">Welcome Back!</h1>
        <button className="w-full px-4 py-2 mb-4 text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Continue with Google
        </button>
        <button className="w-full px-4 py-2 mb-4 text-white bg-gray-700 rounded-md hover:bg-gray-800">
          Continue with Facebook
        </button>
        <div className="flex items-center justify-center mb-6">
          <hr className="w-full border-gray-300" />
          <span className="mx-4 text-gray-500">Or</span>
          <hr className="w-full border-gray-300" />
        </div>
        <form>
          <div className="mb-4">
            <div className="relative">
              <label htmlFor="email" className="absolute text-gray-700 font-semibold text-sm top-2 left-2">
                Email
              </label>
              <input type="email" id="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-600 focus:border-blue-600 pl-10" />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <label htmlFor="password" className="absolute text-gray-700 font-semibold text-sm top-2 left-2">
                Password
              </label>
              <input type="password" id="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-600 focus:border-blue-600 pl-10" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-600">Remember me</label>
            </div>
            <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
          </div>
          <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Sign in
          </button>
        </form>
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-gray-600 text-sm">I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a></label>
          </div>
        </div>
        <p className="text-gray-600 text-center mt-6">
          Already have an account? <a href="#" className="text-blue-600 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;