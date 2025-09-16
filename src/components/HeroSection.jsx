"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    { name: "Priya & Arjun", text: "Found our perfect match through Shri Kalyanam" },
    { name: "Meera & Dev", text: "Our families are now connected forever" },
    { name: "Sania & Rahul", text: "Beautiful journey from profiles to wedding" }
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-rose-50 via-white to-purple-50 overflow-hidden">
      {/* Clean Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle romantic shapes */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-pink-100/30 to-rose-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-100/30 to-indigo-100/30 rounded-full blur-3xl"></div>
        
        {/* Minimal decorative elements */}
        <div className="absolute top-20 right-1/4 text-pink-200 text-xl opacity-60">♥</div>
        <div className="absolute bottom-40 left-1/3 text-rose-200 text-lg opacity-60">♥</div>
        <div className="absolute top-1/2 right-1/6 text-purple-200 text-base opacity-60">♥</div>
        
        {/* Simple circles */}
        <div className="absolute top-32 left-20 w-12 h-12 border border-pink-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-32 right-16 w-8 h-8 border border-purple-200 rounded-full opacity-20"></div>
        <div className="absolute top-2/3 left-10 w-6 h-6 bg-rose-200 rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between relative z-10">
        
        {/* Left Content - Clean & Professional */}
        <div className={`lg:w-1/2 space-y-8 transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          
          

          {/* Clean Brand Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-normal text-slate-800 leading-tight flex gap-2">
              <span className="block font-light">Shri </span>
              <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent font-medium">
               Kalyanam
              </span>
            </h1>
            <div className="flex items-center space-x-4">
              <div className="h-0.5 w-20 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"></div>
              <p className="text-lg text-slate-600 font-normal">Where Hearts Find Home</p>
            </div>
          </div>
          
          <p className="text-lg text-slate-600 max-w-xl leading-relaxed font-light">
            Begin your journey to find your life partner with India's most comprehensive 
            matrimonial service. Connect with compatible matches from verified families 
            and create your perfect love story.
          </p>

          {/* Clean Stats Cards */}
          <div className="grid grid-cols-3 gap-4 py-6">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-pink-50 text-center hover:shadow-md transition-shadow duration-300">
              <div className="text-2xl font-medium bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">2L+</div>
              <div className="text-sm text-slate-600 font-normal mt-1">Happy Couples</div>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-purple-50 text-center hover:shadow-md transition-shadow duration-300">
              <div className="text-2xl font-medium bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">50L+</div>
              <div className="text-sm text-slate-600 font-normal mt-1">Verified Profiles</div>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-rose-50 text-center hover:shadow-md transition-shadow duration-300">
              <div className="text-2xl font-medium bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">15+</div>
              <div className="text-sm text-slate-600 font-normal mt-1">Years of Trust</div>
            </div>
          </div>

          {/* Professional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/register"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-medium rounded-full shadow-lg hover:shadow-pink-500/20 transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-full"></span>
              <span className="relative flex items-center space-x-3">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span>Find Your Soulmate</span>
              </span>
            </a>
            
            <a
              href="/search"
              className="px-8 py-4 bg-white text-slate-700 font-medium rounded-full border border-pink-200 hover:bg-pink-50 hover:border-pink-300 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Browse Matches
            </a>
          </div>

          {/* Simple Search Filters */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-pink-50">
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="font-medium text-slate-700">Quick Partner Search</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm font-normal">Age 25-30</span>
              <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-normal">Same Caste</span>
              <span className="px-3 py-1 bg-rose-50 text-rose-700 rounded-full text-sm font-normal">Working Professional</span>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-normal">Same City</span>
            </div>
          </div>
        </div>

        {/* Right Content - Clean Profile Card */}
        <div className={`lg:w-1/2 flex justify-center mt-12 lg:mt-0 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative">
            
            {/* Clean Profile Card */}
            <div className="relative w-80 h-[520px] bg-white rounded-2xl shadow-lg border border-pink-100 overflow-hidden">
              
              {/* Simple Header */}
              <div className="bg-gradient-to-r from-pink-400 via-rose-500 to-purple-500 h-28 relative">
                <div className="absolute -bottom-14 left-6">
                  <div className="w-28 h-28 rounded-xl overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src="/home.jpeg"
                      alt="Matrimonial Profile"
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Simple Verification Badge */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-2">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-white font-normal">Verified</span>
                </div>
              </div>
              
              {/* Profile Content */}
              <div className="pt-18 p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-medium text-slate-800">Ananya Sharma</h3>
                      <p className="text-slate-600 font-light">25 years • 5'4"</p>
                    </div>
                    <div className="bg-gradient-to-r from-pink-50 to-rose-50 px-3 py-1 rounded-lg border border-pink-100">
                      <div className="flex items-center space-x-1">
                        <span className="text-lg">⭐</span>
                        <span className="text-sm font-medium text-slate-700">Premium</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-slate-600 flex items-center space-x-2">
                      <span>🎓</span>
                      <span>Education</span>
                    </p>
                    <p className="text-sm text-slate-600 flex items-center space-x-2">
                      <span>💼</span>
                      <span>Designation</span>
                    </p>
                    <p className="text-sm text-slate-600 flex items-center space-x-2">
                      <span>🏠</span>
                      <span>Place </span>
                    </p>
                    <p className="text-sm text-slate-600 flex items-center space-x-2">
                      <span>👨‍👩‍👧‍👦</span>
                      <span>Members</span>
                    </p>
                  </div>
                </div>

                {/* Simple Hobbies */}
                <div className="pt-4 border-t border-pink-100">
                  <p className="text-xs text-slate-500 mb-2 font-normal">Interests & Hobbies</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-xs font-light">Reading</span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-light">Travel</span>
                    <span className="px-3 py-1 bg-rose-50 text-rose-700 rounded-full text-xs font-light">Cooking</span>
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-light">Music</span>
                  </div>
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <button className="flex-1 bg-gradient-to-r from-pink-500 to-rose-600 text-white py-3 rounded-xl font-medium text-sm hover:scale-105 transition-transform duration-200 shadow-md flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <span>Send Interest</span>
                  </button>
                  <button className="w-12 h-12 bg-pink-50 text-pink-600 rounded-xl border border-pink-200 flex items-center justify-center hover:bg-pink-100 transition-colors duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Clean Floating Elements */}
            <div className="absolute -top-4 -left-4 w-32 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl shadow-lg flex items-center justify-center animate-float">
              <div className="text-center text-white">
                <div className="text-base font-medium">92%</div>
                <div className="text-xs opacity-90 font-light">Match Score</div>
              </div>
            </div>


            {/* Simple Success Story Card */}

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .delay-1000 { animation-delay: 1s; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
};

export default HeroSection;