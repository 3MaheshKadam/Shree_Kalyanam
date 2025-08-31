
"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
// import { Image } from 'next/image';
const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-rose-50 via-rose-100 to-amber-50 overflow-hidden">
      {/* Subtle Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-rose-200 rounded-full opacity-30 blur-3xl -translate-x-1/2 translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-200 rounded-full opacity-30 blur-3xl translate-x-1/4 -translate-y-1/4"></div>
      </div>

      <div className="mt-8 container mx-auto px-4  sm:px-10 lg:px-8 py-16 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className={`lg:w-1/2 flex flex-col space-y-6 max-w-2xl transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-800 leading-tight">
            Shri Kalyanam
            <span className="block bg-gradient-to-r from-rose-600 to-amber-500 bg-clip-text text-transparent">
              Where Hearts Unite
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 font-light max-w-md">
            Embark on a sacred journey to find your life partner. Shri Kalyanam connects souls with love, trust, and tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/register"
              className="relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-rose-500 to-amber-500 text-white font-semibold rounded-full overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative flex items-center space-x-2">
                <span>Find Your Match</span>
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </span>
            </a>
            <a
              href="/search"
              className="px-8 py-3 bg-white text-rose-600 font-semibold rounded-full border border-rose-200 hover:bg-rose-50 hover:border-rose-400 transition-all duration-300"
            >
              Explore Profiles
            </a>
          </div>
         
        </div>

        {/* Right Content - Image */}
        <div className={`lg:w-1/2  flex justify-center transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative w-full max-w-md mt-4 ">
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-400/40 to-amber-400/40 rounded-3xl blur-lg opacity-50"></div>
            <Image
                    src="/home.jpeg"
                    alt="Happy Couple"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover rounded-2xl"
                  />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .group:hover .bg-gradient-to-r {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection; 
