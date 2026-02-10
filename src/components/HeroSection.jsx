"use client"
import { useState, useEffect } from 'react';
import { ArrowRight, Heart, Search, Sparkles, Gem, MessageCircle, ShieldCheck, Lock, Users } from 'lucide-react';
import Image from 'next/image';

export default function MatrimonialHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-[90vh] w-full flex items-center bg-bg-light overflow-hidden pt-20 pb-20">

      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-secondary/10 to-primary/10 blur-[80px]" />
        {/* Dynamic Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Content Column */}
          <div className={`lg:col-span-6 flex flex-col space-y-8 text-center lg:text-left transition-all duration-1000 transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>



            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-secondary leading-[1.1]">
              Find Your <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#b5179e] to-secondary">
                Perfect Match
                {/* Decorative Underline */}
                <svg className="absolute w-full h-4 -bottom-2 left-0 text-primary opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.00025 6.99997C25.7509 2.15575 102.49 2.48835 200.001 6.99997" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-secondary/70 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Where tradition meets technology. Join millions of happy couples who found their soulmate through our verified and secure matchmaking service.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
                Create Free Profile
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-secondary border border-secondary/20 rounded-full font-medium text-lg hover:bg-secondary/5 transition-all duration-300 flex items-center justify-center gap-2">
                <Search size={20} />
                Browse Matches
              </button>
            </div>

            {/* Key Trust Indicators */}
            <div className="pt-10 flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start opacity-80">
              <div className="flex items-center gap-2 text-secondary font-medium">
                <div className="p-2 bg-white rounded-full shadow-sm text-primary">
                  <ShieldCheck size={18} />
                </div>
                <span>100% Verified</span>
              </div>
              <div className="flex items-center gap-2 text-secondary font-medium">
                <div className="p-2 bg-white rounded-full shadow-sm text-primary">
                  <Lock size={18} />
                </div>
                <span>Highly Secure</span>
              </div>
              <div className="flex items-center gap-2 text-secondary font-medium">
                <div className="p-2 bg-white rounded-full shadow-sm text-primary">
                  <Users size={18} />
                </div>
                <span>Best Matches</span>
              </div>
            </div>


          </div>

          {/* Right Visual Column - Masonry/Collage Style */}
          <div className={`lg:col-span-6 relative h-[600px] w-full flex items-center justify-center perspective-1000 transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            {/* Decorative Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-secondary/10 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-dashed border-primary/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

            {/* Main Image (Center) */}
            <div className="relative z-20 w-72 h-96 rounded-[100px] overflow-hidden border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-500">
              <img src="/images/HeroImage.png" alt="Happy Couple" className="w-full h-full object-cover" />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Card 1 (Top Right) */}
            <div className="absolute top-10 right-10 md:right-20 z-10 animate-float-slow">
              <div className="w-48 h-64 rounded-[40px] overflow-hidden border-4 border-white shadow-xl rotate-6 hover:rotate-0 transition-transform duration-300">
                <img src="/people/people2.png" alt="Bride" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Floating Card 2 (Bottom Left) */}
            <div className="absolute bottom-10 left-10 md:left-20 z-30 animate-float-delayed">
              <div className="w-44 h-56 rounded-[40px] overflow-hidden border-4 border-white shadow-xl -rotate-6 hover:rotate-0 transition-transform duration-300">
                <img src="/people/rohan.jpg" alt="Groom" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Floating Badge (Glassmorphism) */}
            <div className="absolute top-1/2 -right-4 z-40 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg animate-pulse-slow max-w-[150px]">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Gem size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Just Engaged</p>
                  <p className="font-bold text-secondary text-sm">Priya & Rahul</p>
                </div>
              </div>
            </div>

            {/* Floating Heart Bubble */}
            <div className="absolute bottom-32 right-12 z-40 bg-white p-3 rounded-full shadow-lg animate-bounce lg:block hidden">
              <Heart className="text-primary fill-primary" size={24} />
            </div>

            {/* Floating Message Bubble */}
            <div className="absolute top-24 left-12 z-40 bg-white p-3 rounded-full shadow-lg animate-bounce lg:block hidden" style={{ animationDuration: '3s' }}>
              <MessageCircle className="text-blue-500 fill-blue-50" size={24} />
            </div>



          </div>
        </div>
      </div>
    </div>
  );
}
