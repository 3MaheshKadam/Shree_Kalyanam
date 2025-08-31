"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const successStories = [
  {
    id: 1,
    couple: "Aarushi & Siddharth",
    location: "Jaipur, India",
    story: "Shree Kalyanam's thoughtful matchmaking process respected our values and preferences, leading us to a lifelong partnership filled with love and trust.",
    image: "/images/couple-3.jpeg",
    married: "January 2023",
    storyLink: "/stories/aarushi-siddharth",
  },
  {
    id: 2,
    couple: "Meera & Rohan",
    location: "Chennai, India",
    story: "The platform's astrological insights and secure verification gave us confidence to connect. Shree Kalyanam made our dream of a meaningful union come true.",
    image: "/images/couple-1.jpeg",
    married: "June 2022",
    storyLink: "/stories/meera-rohan",
  },
  {
    id: 3,
    couple: "Shalini & Vikrant",
    location: "Pune, India",
    story: "The personalized profiles and community focus of Shree Kalyanam brought us together. We're grateful for a platform that honors our cultural heritage.",
    image: "/images/couple-2.jpeg",
    married: "November 2023",
    storyLink: "/stories/shalini-vikrant",
  },
];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % successStories.length);
    }, 7000);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  // Get stories per view based on screen size
  const getStoriesPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // Mobile
      if (window.innerWidth < 1024) return 2; // Tablet
      return 3; // Desktop
    }
    return 3;
  };

  const [storiesPerView, setStoriesPerView] = useState(3);

  useEffect(() => {
    const updateStoriesPerView = () => {
      setStoriesPerView(getStoriesPerView());
    };
    
    updateStoriesPerView();
    window.addEventListener('resize', updateStoriesPerView);
    
    return () => window.removeEventListener('resize', updateStoriesPerView);
  }, []);

  return (
    <section 
      id="success-stories" 
      className="relative w-full bg-gradient-to-b from-amber-50/70 via-rose-50/40 to-white py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-rose-100/20 blur-3xl opacity-60 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-amber-100/20 blur-3xl opacity-60 animate-float-delay"></div>
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, rgba(244, 63, 94, 0.2) 0%, transparent 50%), 
                                radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.2) 0%, transparent 50%)`
             }}>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Refined Header */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-rose-200/50 shadow-sm">
            <Heart className="w-4 h-4 text-rose-600" />
            <span className="text-sm font-semibold text-rose-700 tracking-wider uppercase">
              Love Stories
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-slate-800 mb-4 leading-tight">
            <span className="text-rose-600">Forever</span> Begins Here
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Celebrate the journeys of couples united through Shree Kalyanam's trusted matrimonial platform
          </p>
        </div>

        {/* Responsive Stories Grid/Carousel */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile */}
          {!isMobile && (
            <>
              <button 
                onClick={prevStory}
                className="absolute -left-6 lg:-left-12 top-1/2 -translate-y-1/2 z-30 bg-white/90 backdrop-blur-sm rounded-full p-3 lg:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-rose-100/50"
                aria-label="Previous story"
              >
                <ChevronLeft className="text-rose-600 w-5 h-5 lg:w-6 lg:h-6" />
              </button>
              
              <button 
                onClick={nextStory}
                className="absolute -right-6 lg:-right-12 top-1/2 -translate-y-1/2 z-30 bg-white/90 backdrop-blur-sm rounded-full p-3 lg:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-rose-100/50"
                aria-label="Next story"
              >
                <ChevronRight className="text-rose-600 w-5 h-5 lg:w-6 lg:h-6" />
              </button>
            </>
          )}

          {/* Stories Grid - Fully Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {successStories.map((story, index) => (
              <div
                key={story.id}
                className={`transition-all duration-700 transform ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                } hover:-translate-y-2 group`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  display: isMobile && index !== currentIndex ? 'none' : 'block'
                }}
              >
                <article className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-rose-100/50 h-full">
                  {/* Image Section */}
                  <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                    <Image
                      width={600}
                      height={400}
                      src={story.image}
                      alt={`${story.couple} wedding photo`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={index < 2}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-serif font-bold mb-1">
                        {story.couple}
                      </h3>
                      <p className="text-rose-100 text-sm sm:text-base">
                        {story.location}
                      </p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <div className="flex items-start mb-4">
                      <Heart className="text-rose-400 w-5 h-5 sm:w-6 sm:h-6 mr-2 mt-1 flex-shrink-0" />
                    </div>
                    
                    <blockquote className="text-slate-700 text-sm sm:text-base lg:text-lg font-light italic mb-6 leading-relaxed flex-1">
                      "{story.story}"
                    </blockquote>
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pt-4 border-t border-rose-100/50">
                      <span className="text-xs sm:text-sm text-slate-500 font-medium">
                        Married in {story.married}
                      </span>
                      
                      <Link
                        href={story.storyLink}
                        className="text-rose-600 text-sm font-semibold hover:text-rose-700 transition-colors duration-300 hover:underline inline-flex items-center gap-1"
                      >
                        Read Full Story 
                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Mobile-specific dots indicator */}
          {isMobile && (
            <div className="flex justify-center mt-8 gap-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-rose-600 w-6' 
                      : 'bg-rose-300/50 hover:bg-rose-400'
                  }`}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Enhanced CTA Section */}
        <div className={`text-center mt-12 sm:mt-16 lg:mt-20 transition-all duration-1000 delay-500 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}>
          <div className="max-w-md mx-auto">
            <p className="text-slate-600 mb-6 text-sm sm:text-base">
              Ready to write your own love story?
            </p>
            
            <Link
              href="/join-now"
              className="inline-block w-full sm:w-auto px-8 py-4 sm:px-10 bg-gradient-to-r from-rose-500 to-amber-500 text-white rounded-2xl text-base sm:text-lg font-semibold hover:from-rose-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
            >
              Find Your Life Partner Today
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-0.5deg); }
        }

        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(-10px); }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 10s ease-in-out infinite;
          animation-delay: 3s;
        }

        /* Mobile touch improvements */
        @media (max-width: 767px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
