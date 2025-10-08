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
    image: "/home.jpeg",
    married: "January 2023",
    storyLink: "/stories/aarushi-siddharth",
    tradition: "Hindu",
    profession: "Software Engineers"
  },
  {
    id: 2,
    couple: "Meera & Rohan",
    location: "Chennai, India", 
    story: "The platform's family verification and cultural matching gave us confidence to connect. Shree Kalyanam made our dream of a meaningful union come true.",
    image: "/home.jpeg",
    married: "June 2022",
    storyLink: "/stories/meera-rohan",
    tradition: "South Indian",
    profession: "Doctor & Engineer"
  },
  {
    id: 3,
    couple: "Shalini & Vikrant",
    location: "Pune, India",
    story: "The personalized profiles and family focus of Shree Kalyanam brought us together. We're grateful for a platform that honors our cultural heritage.",
    image: "/home.jpeg",
    married: "November 2023",
    storyLink: "/stories/shalini-vikrant",
    tradition: "Marathi",
    profession: "CA & Teacher"
  },
];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % successStories.length);
    }, 8000);
    
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

  const getStoriesPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
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
      className="relative w-full bg-gradient-to-b from-rose-50/40 via-white to-purple-50/40 py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Clean Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-pink-100/20 blur-3xl opacity-60 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-purple-100/20 blur-3xl opacity-60 animate-float-delay"></div>
        
        {/* Subtle heart decorations */}
        <div className="absolute top-1/4 right-1/4 text-pink-200 text-lg opacity-30">♥</div>
        <div className="absolute bottom-1/3 left-1/4 text-rose-200 text-base opacity-30">♥</div>
        <div className="absolute top-2/3 right-1/6 text-purple-200 text-sm opacity-30">♥</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Clean Header */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-pink-200 shadow-sm">
            <Heart className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-slate-700">
              Success Stories
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-slate-800 mb-6 leading-tight">
            <span className="block font-light">Where</span>
            <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent font-medium">
              Forever Begins
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Celebrate the beautiful journeys of couples who found their perfect match through Shree Kalyanam's trusted matrimonial platform
          </p>
        </div>

        {/* Responsive Stories Grid */}
        <div className="relative">
          {/* Clean Navigation Buttons */}
          {!isMobile && (
            <>
              <button 
                onClick={prevStory}
                className="absolute -left-6 lg:-left-12 top-1/2 -translate-y-1/2 z-30 bg-white rounded-full p-3 lg:p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-pink-200"
                aria-label="Previous story"
              >
                <ChevronLeft className="text-pink-500 w-5 h-5 lg:w-6 lg:h-6" />
              </button>
              
              <button 
                onClick={nextStory}
                className="absolute -right-6 lg:-right-12 top-1/2 -translate-y-1/2 z-30 bg-white rounded-full p-3 lg:p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-pink-200"
                aria-label="Next story"
              >
                <ChevronRight className="text-pink-500 w-5 h-5 lg:w-6 lg:h-6" />
              </button>
            </>
          )}

          {/* Stories Grid */}
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
                <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 border border-pink-100 h-full">
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
                    
                    {/* Tradition Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-pink-200">
                      <span className="text-xs font-medium text-slate-700">{story.tradition}</span>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-medium mb-1">
                        {story.couple}
                      </h3>
                      <p className="text-pink-100 text-sm sm:text-base font-light">
                        {story.location}
                      </p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    {/* Professional info */}
                    <div className="flex items-center mb-4 p-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg border border-pink-100">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mr-3">
                        <Heart className="text-white w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-light">Professions</div>
                        <div className="text-sm text-slate-700 font-medium">{story.profession}</div>
                      </div>
                    </div>
                    
                    <blockquote className="text-slate-700 text-sm sm:text-base font-light italic mb-6 leading-relaxed flex-1">
                      "{story.story}"
                    </blockquote>
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pt-4 border-t border-pink-100">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500"></div>
                        <span className="text-xs sm:text-sm text-slate-500 font-light">
                          Married {story.married}
                        </span>
                      </div>
                      
                      <Link
                        href={story.storyLink}
                        className="text-pink-600 text-sm font-medium hover:text-pink-700 transition-colors duration-300 hover:underline inline-flex items-center gap-1"
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

          {/* Mobile dots indicator */}
          {isMobile && (
            <div className="flex justify-center mt-8 gap-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-pink-600 w-6' 
                      : 'bg-pink-300/50 hover:bg-pink-400'
                  }`}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-pink-100">
            <div className="text-3xl font-medium bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
              2L+
            </div>
            <div className="text-sm text-slate-600 font-light">Happy Marriages</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-purple-100">
            <div className="text-3xl font-medium bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent mb-2">
              95%
            </div>
            <div className="text-sm text-slate-600 font-light">Success Rate</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-rose-100">
            <div className="text-3xl font-medium bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-sm text-slate-600 font-light">Years Experience</div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-500 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}>
          <div className="max-w-lg mx-auto bg-white rounded-2xl p-8 shadow-sm border border-pink-100">
            <div className="flex items-center justify-center space-x-1 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
              <Heart className="w-5 h-5 text-pink-500" />
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
            </div>
            
            <p className="text-slate-600 mb-6 text-sm sm:text-base font-light">
              Ready to write your own beautiful love story?
            </p>
            
            <Link
              href="/join-now"
              className="inline-block w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full text-base font-medium hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform"
            >
              Begin Your Journey Today
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(-8px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
          animation-delay: 2s;
        }

        @media (max-width: 767px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

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