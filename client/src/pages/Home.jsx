import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <h1 className="text-5xl font-bold mb-4">AI Learning Platform</h1>
            <p className="text-lg mb-6 text-center px-4">
                Learn cutting-edge AI technologies with our curated courses. 
                Join now to enhance your skills and stay ahead in the tech world.
            </p>
            <div className="flex space-x-4">
                <Link to="/register" className="bg-white text-blue-600 px-6 py-3 rounded font-medium shadow hover:bg-gray-100">
                    Get Started
                </Link>
                <Link to="/login" className="bg-blue-700 px-6 py-3 rounded font-medium hover:bg-blue-800">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Home;
