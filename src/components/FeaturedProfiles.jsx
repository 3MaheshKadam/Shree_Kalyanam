"use client";
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Briefcase, Heart, Star, Eye, Shield } from 'lucide-react';
import Image from 'next/image';

export default function FeaturedProfiles() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [likedProfiles, setLikedProfiles] = useState(new Set());
  const [viewedProfiles, setViewedProfiles] = useState(new Set());
  
  const profiles = [
    {
      name: "Priya Sharma",
      age: 28,
      city: "Mumbai",
      profession: "Software Engineer",
      photo: "/home.jpeg",
      verified: true,
      online: true,
      matchPercentage: 92,
      education: "B.Tech, IIT Delhi",
      family: "Nuclear Family"
    },
    {
      name: "Arjun Mehta",
      age: 31,
      city: "Delhi",
      profession: "Marketing Director",
      photo: "/home.jpeg",
      verified: true,
      online: false,
      matchPercentage: 88,
      education: "MBA, Delhi University",
      family: "Joint Family"
    },
    {
      name: "Ananya Reddy",
      age: 27,
      city: "Bangalore",
      profession: "Doctor",
      photo: "/home.jpeg",
      verified: true,
      online: true,
      matchPercentage: 95,
      education: "MBBS, AIIMS",
      family: "Nuclear Family"
    },
    {
      name: "Vikram Singh",
      age: 30,
      city: "Chennai",
      profession: "Architect",
      photo: "/home.jpeg",
      verified: true,
      online: true,
      matchPercentage: 85,
      education: "B.Arch, Anna University",
      family: "Nuclear Family"
    },
    {
      name: "Neha Gupta",
      age: 29,
      city: "Kolkata",
      profession: "Fashion Designer",
      photo: "/home.jpeg",
      verified: true,
      online: false,
      matchPercentage: 90,
      education: "Fashion Design, NIFT",
      family: "Joint Family"
    },
    {
      name: "Rohan Kapoor",
      age: 32,
      city: "Pune",
      profession: "Investment Banker",
      photo: "/home.jpeg",
      verified: true,
      online: true,
      matchPercentage: 87,
      education: "CA, ICAI",
      family: "Nuclear Family"
    }
  ];

  const cardsPerView = 4;
  const maxStartIndex = Math.max(0, profiles.length - cardsPerView);

  useEffect(() => {
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setCurrentStartIndex(prev => (prev >= maxStartIndex ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, [maxStartIndex]);

  const scrollLeft = () => {
    setCurrentStartIndex(prev => (prev <= 0 ? maxStartIndex : prev - 1));
  };

  const scrollRight = () => {
    setCurrentStartIndex(prev => (prev >= maxStartIndex ? 0 : prev + 1));
  };

  const toggleLike = (index, e) => {
    e.stopPropagation();
    setLikedProfiles(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleViewProfile = (index) => {
    setViewedProfiles(prev => new Set([...prev, index]));
  };

  const getVisibleProfiles = () => {
    return profiles.slice(currentStartIndex, currentStartIndex + cardsPerView);
  };

  return (
    <section id='browse-profiles' className="relative py-20 bg-gradient-to-br from-rose-50/50 via-white to-purple-50/50 overflow-hidden">
      {/* Clean Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-pink-100/30 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-16 w-80 h-80 rounded-full bg-purple-100/30 blur-3xl animate-float-delay"></div>
        
        {/* Subtle heart decorations */}
        <div className="absolute top-1/4 right-1/4 text-pink-200 text-xl opacity-40">♥</div>
        <div className="absolute bottom-1/3 left-1/4 text-rose-200 text-lg opacity-40">♥</div>
        <div className="absolute top-2/3 right-1/6 text-purple-200 text-base opacity-40">♥</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Clean Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-pink-200 shadow-sm">
            <Heart className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-slate-700">Featured Profiles</span>
            <Star className="w-4 h-4 text-pink-500" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-slate-800 leading-tight">
            <span className="block font-light">Meet Your</span>
            <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent font-medium">
              Perfect Match
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            Discover verified profiles of amazing individuals ready for meaningful connections and lifelong partnerships
          </p>
        </div>

        <div className="relative">
          {/* Clean Navigation Buttons */}
          <button 
            onClick={scrollLeft}
            disabled={currentStartIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 md:-left-6 hover:scale-105 border border-pink-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} className="text-pink-500" />
          </button>
          
          <button 
            onClick={scrollRight}
            disabled={currentStartIndex >= maxStartIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 md:-right-6 hover:scale-105 border border-pink-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} className="text-pink-500" />
          </button>

          {/* Profile Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getVisibleProfiles().map((profile, index) => {
              const actualIndex = currentStartIndex + index;
              return (
                <div 
                  key={actualIndex}
                  onMouseEnter={() => setHoveredCard(actualIndex)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group transition-all duration-700 transform ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  } hover:-translate-y-2`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`
                    relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg 
                    transition-all duration-500 border border-pink-100
                    ${hoveredCard === actualIndex ? 'ring-2 ring-pink-300/50 shadow-pink-200/20' : ''}
                  `}>
                    
                    {/* Status Badges */}
                    <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
                      {profile.verified && (
                        <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-medium rounded-full shadow-sm">
                          <Shield className="w-3 h-3" />
                          Verified
                        </div>
                      )}
                      
                      {profile.online && (
                        <div className="flex items-center gap-1 px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full shadow-sm">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          Online
                        </div>
                      )}
                    </div>

                    {/* Match Percentage */}
                    <div className="absolute top-3 right-3 z-20 px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-medium rounded-full shadow-sm">
                      {profile.matchPercentage}% Match
                    </div>

                    {/* Profile Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        width={400}
                        height={400}
                        src={profile.photo}
                        alt={`${profile.name}'s profile`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Action Buttons */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                        <button 
                          onClick={(e) => toggleLike(actualIndex, e)}
                          className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
                            likedProfiles.has(actualIndex) 
                              ? 'bg-pink-500 text-white scale-110' 
                              : 'bg-white/20 text-white hover:bg-white/30'
                          }`}
                        >
                          <Heart size={18} fill={likedProfiles.has(actualIndex) ? 'currentColor' : 'none'} />
                        </button>
                        
                        <button 
                          onClick={() => handleViewProfile(actualIndex)}
                          className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300"
                        >
                          <Eye size={18} />
                        </button>
                      </div>
                    </div>
                    
                    {/* Profile Info */}
                    <div className="p-5">
                      <h3 className="text-xl font-medium text-slate-800 mb-2">
                        {profile.name}, {profile.age}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-slate-600">
                          <MapPin size={14} className="mr-2 text-pink-500" />
                          <span className="text-sm font-light">{profile.city}</span>
                        </div>
                        
                        <div className="flex items-center text-slate-600">
                          <Briefcase size={14} className="mr-2 text-purple-500" />
                          <span className="text-sm font-light">{profile.profession}</span>
                        </div>
                        
                        <div className="flex items-center text-slate-600">
                          <svg className="w-3.5 h-3.5 mr-2 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                          </svg>
                          <span className="text-sm font-light">{profile.education}</span>
                        </div>

                        <div className="flex items-center text-slate-600">
                          <svg className="w-3.5 h-3.5 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 2h6v4H7V6zm8 8v2h1v-2h-1zm-2-2h2v2h-2v-2zm2-4h2v2h-2V8z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-light">{profile.family}</span>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleViewProfile(actualIndex)}
                          className={`
                            flex-1 py-2.5 px-4 rounded-xl font-medium text-sm transition-all duration-300 
                            ${viewedProfiles.has(actualIndex) 
                              ? 'bg-slate-100 text-slate-500 cursor-default' 
                              : 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 hover:shadow-md hover:-translate-y-0.5'
                            }
                          `}
                        >
                          {viewedProfiles.has(actualIndex) ? 'Profile Viewed' : 'View Profile'}
                        </button>
                        
                        <button 
                          onClick={(e) => toggleLike(actualIndex, e)}
                          className={`p-2.5 rounded-xl transition-all duration-300 ${
                            likedProfiles.has(actualIndex)
                              ? 'bg-pink-500 text-white'
                              : 'bg-pink-50 text-pink-500 hover:bg-pink-100 border border-pink-200'
                          }`}
                        >
                          <Heart size={16} fill={likedProfiles.has(actualIndex) ? 'currentColor' : 'none'} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clean Progress Indicator */}
        <div className="flex justify-center items-center mt-12 gap-4">
          <div className="text-sm text-slate-500 font-light">
            {currentStartIndex + 1}-{Math.min(currentStartIndex + cardsPerView, profiles.length)} of {profiles.length} profiles
          </div>
          
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(profiles.length / cardsPerView) }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentStartIndex(i * cardsPerView <= maxStartIndex ? i * cardsPerView : maxStartIndex)}
                className={`transition-all duration-300 rounded-full ${
                  Math.floor(currentStartIndex / cardsPerView) === i
                    ? 'w-8 h-3 bg-gradient-to-r from-pink-500 to-purple-500'
                    : 'w-3 h-3 bg-slate-300 hover:bg-pink-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-medium rounded-full hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
            View All Profiles
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-10px) translateX(-5px); }
          66% { transform: translateY(-5px) translateX(5px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}