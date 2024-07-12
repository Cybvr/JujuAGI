import React from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-50 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Create an Account</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
            <input type="text" id="name" className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input type="password" id="password" className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;