"use client"
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Briefcase, Heart, Star, Eye, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function FeaturedProfiles() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [likedProfiles, setLikedProfiles] = useState(new Set());
  const [viewedProfiles, setViewedProfiles] = useState(new Set());
  const carouselRef = useRef(null);
  
  const profiles = [
    {
      name: "Priya Sharma",
      age: 28,
      city: "Mumbai",
      profession: "Software Engineer",
      photo: "/people/priya.jpg",
      verified: true,
      online: true,
      matchPercentage: 92
    },
    {
      name: "Arjun Mehta",
      age: 31,
      city: "Delhi",
      profession: "Marketing Director",
      photo: "/people/arjun.jpg",
      verified: true,
      online: false,
      matchPercentage: 88
    },
    {
      name: "Ananya Reddy",
      age: 27,
      city: "Bangalore",
      profession: "Doctor",
      photo: "/people/ananya.jpg",
      verified: true,
      online: true,
      matchPercentage: 95
    },
    {
      name: "Vikram Singh",
      age: 30,
      city: "Chennai",
      profession: "Architect",
      photo: "/people/vikram.jpg",
      verified: false,
      online: true,
      matchPercentage: 85
    },
    {
      name: "Neha Gupta",
      age: 29,
      city: "Kolkata",
      profession: "Fashion Designer",
      photo: "/people/neha.jpg",
      verified: true,
      online: false,
      matchPercentage: 90
    },
    {
      name: "Rohan Kapoor",
      age: 32,
      city: "Pune",
      profession: "Investment Banker",
      photo: "/people/rohan.jpg",
      verified: true,
      online: true,
      matchPercentage: 87
    }
  ];

  const cardsPerView = 4;
  const maxStartIndex = Math.max(0, profiles.length - cardsPerView);

  useEffect(() => {
    setIsLoaded(true);
    
    // Auto-advance every 6 seconds
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
    <section id='browse-profiles' className="relative py-18 mt-8  w-full overflow-hidden bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50">
      {/* Rich Burgundy & Golden Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl animate-float-x" 
             style={{ background: 'radial-gradient(circle, rgba(139,8,54,0.15) 0%, rgba(139,8,54,0.05) 70%)' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float-y"
             style={{ background: 'radial-gradient(circle, rgba(255,193,7,0.15) 0%, rgba(255,193,7,0.05) 70%)' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-2xl animate-rotate-slow"
             style={{ background: 'radial-gradient(circle, rgba(139,8,54,0.08) 0%, rgba(255,193,7,0.08) 100%)' }}></div>
        
        {/* Elegant pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(139,8,54,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,8,54,0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header with Burgundy & Gold Theme */}
        <header className={`text-center mb-20 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          
          
          <h2 className="text-6xl lg:text-7xl font-serif font-light mb-6 leading-tight">
            <span className="text-gray-800 px-4">Featured</span>
            {/* <br /> */}
            <span className="font-bold bg-gradient-to-r from-[#8b0836] to-[#a91447] bg-clip-text text-transparent">
              Profiles
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Connect with verified members who share your vision of meaningful relationships
          </p>
        </header>

        <div className="relative">
          {/* Navigation Buttons with Theme Colors */}
          <button 
            onClick={scrollLeft}
            disabled={currentStartIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 group bg-gradient-to-r from-white to-gray-50 backdrop-blur-xl rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-500 md:-left-12 hover:scale-110 border border-white/60 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous profiles"
          >
            <ChevronLeft size={28} style={{ color: '#8b0836' }} className="group-hover:scale-110 transition-transform duration-300" />
          </button>
          
          <button 
            onClick={scrollRight}
            disabled={currentStartIndex >= maxStartIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 group bg-gradient-to-r from-white to-gray-50 backdrop-blur-xl rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-500 md:-right-12 hover:scale-110 border border-white/60 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next profiles"
          >
            <ChevronRight size={28} style={{ color: '#8b0836' }} className="group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* 4 Cards Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 px-4">
            {getVisibleProfiles().map((profile, index) => {
              const actualIndex = currentStartIndex + index;
              return (
                <article 
                  key={actualIndex}
                  onMouseEnter={() => setHoveredCard(actualIndex)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group transition-all duration-700 transform ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  } hover:-translate-y-4 hover:rotate-1`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  {/* Card Container with Burgundy & Gold Theme */}
                  <div className={`
                    relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden 
                    shadow-lg hover:shadow-2xl transition-all duration-500 
                    border border-white/60 hover:border-white/80
                    ${hoveredCard === actualIndex ? 'ring-2 ring-amber-300/60' : ''}
                    group-hover:bg-white/95
                    transform-gpu
                  `}
                  style={{
                    boxShadow: hoveredCard === actualIndex 
                      ? '0 25px 50px rgba(139,8,54,0.15), 0 0 0 1px rgba(255,193,7,0.2)' 
                      : '0 10px 25px rgba(0,0,0,0.1)'
                  }}
                  >
                    
                    {/* Status Indicators with Theme Colors */}
                    <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                      {profile.verified && (
                        <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-[#8b0836] to-[#a91447] text-white text-xs font-medium rounded-full shadow-lg animate-fade-in">
                          <Star className="w-3 h-3" fill="currentColor" />
                          Verified
                        </div>
                      )}
                      
                      {profile.online && (
                        <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-medium rounded-full shadow-lg">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          Online
                        </div>
                      )}
                    </div>

                    {/* Match Percentage with Golden Theme */}
                    <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-[#ffc107] to-[#ff9800] text-white text-sm font-bold rounded-full shadow-lg">
                      {profile.matchPercentage}% Match
                    </div>

                    {/* Profile Image with Enhanced Effects */}
                    <div className="relative h-80 overflow-hidden group-hover:scale-105 transition-transform duration-700">
                      <Image
                        width={1920}
                        height={1080} 
                        src={profile.photo} 
                        alt={`${profile.name}'s profile`}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          hoveredCard === actualIndex ? 'scale-110 rotate-2' : ''
                        }`}
                      />
                      
                      {/* Themed Gradient Overlay */}
                      <div className={`
                        absolute inset-0 transition-opacity duration-500
                        ${hoveredCard === actualIndex 
                          ? 'bg-gradient-to-t from-[#8b0836]/80 via-transparent to-[#ffc107]/20 opacity-90' 
                          : 'bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70'
                        }
                      `}></div>
                      
                      {/* Floating Action Buttons with Theme Colors */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <button 
                          onClick={(e) => toggleLike(actualIndex, e)}
                          className={`p-4 rounded-full backdrop-blur-xl transition-all duration-300 transform hover:scale-110 ${
                            likedProfiles.has(actualIndex) 
                              ? 'text-white shadow-lg animate-bounce-once' 
                              : 'bg-white/30 text-white hover:bg-white/50'
                          }`}
                          style={{
                            backgroundColor: likedProfiles.has(actualIndex) ? '#8b0836' : undefined,
                            boxShadow: likedProfiles.has(actualIndex) ? '0 8px 25px rgba(139,8,54,0.4)' : undefined
                          }}
                        >
                          <Heart size={24} fill={likedProfiles.has(actualIndex) ? 'currentColor' : 'none'} />
                        </button>
                        
                        <button 
                          onClick={() => handleViewProfile(actualIndex)}
                          className="p-4 bg-white/30 backdrop-blur-xl text-white rounded-full hover:bg-white/50 transition-all duration-300 transform hover:scale-110"
                        >
                          <Eye size={24} />
                        </button>
                      </div>
                      
                      {/* Name Overlay with Slide Animation */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-2xl font-serif font-bold mb-1 drop-shadow-lg">{profile.name}, {profile.age}</h3>
                      </div>
                    </div>
                    
                    {/* Profile Details with Theme Colors */}
                    <div className="p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 transition-colors duration-300"
                               style={{ backgroundColor: 'rgba(139,8,54,0.1)' }}>
                            <MapPin size={14} style={{ color: '#8b0836' }} />
                          </div>
                          <span className="font-medium">{profile.city}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 transition-colors duration-300"
                               style={{ backgroundColor: 'rgba(255,193,7,0.1)' }}>
                            <Briefcase size={14} style={{ color: '#ffc107' }} />
                          </div>
                          <span className="font-medium">{profile.profession}</span>
                        </div>
                      </div>
                      
                      {/* Action Button with Solid Burgundy Color */}
                      <button 
                        onClick={() => handleViewProfile(actualIndex)}
                        className={`
                          w-full py-3 px-6 rounded-2xl font-semibold transition-all duration-500 
                          transform hover:-translate-y-1 relative overflow-hidden group/btn
                          text-white shadow-lg hover:shadow-xl
                          ${viewedProfiles.has(actualIndex) ? 'opacity-75' : ''}
                        `}
                        style={{
                          backgroundColor: '#8b0836',
                          boxShadow: '0 4px 15px rgba(139,8,54,0.3)'
                        }}
                        onMouseEnter={(e) => {
                          if (!viewedProfiles.has(actualIndex)) {
                            e.target.style.backgroundColor = '#a91447';
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 8px 25px rgba(139,8,54,0.4)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = '#8b0836';
                          e.target.style.transform = 'translateY(0px)';
                          e.target.style.boxShadow = '0 4px 15px rgba(139,8,54,0.3)';
                        }}
                      >
                        <span className="relative z-10">
                          {viewedProfiles.has(actualIndex) ? 'Profile Viewed' : 'View Profile'}
                        </span>
                        <div className="absolute inset-0 bg-white/20 transform translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                      </button>
                    </div>
                    
                    {/* Card Border Glow Effect with Theme Colors */}
                    <div className={`
                      absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl scale-105
                    `}
                    style={{
                      background: 'linear-gradient(135deg, rgba(139,8,54,0.2) 0%, rgba(255,193,7,0.2) 100%)'
                    }}></div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Enhanced Progress Indicator with Theme Colors */}
        <div className="flex justify-center items-center mt-16 space-x-4">
          <div className="text-sm text-gray-600 font-medium">
            {currentStartIndex + 1}-{Math.min(currentStartIndex + cardsPerView, profiles.length)} of {profiles.length}
          </div>
          
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(profiles.length / cardsPerView) }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentStartIndex(i * cardsPerView <= maxStartIndex ? i * cardsPerView : maxStartIndex)}
                className={`transition-all duration-300 ${
                  Math.floor(currentStartIndex / cardsPerView) === i
                    ? 'w-8 h-3 rounded-full shadow-lg'
                    : 'w-3 h-3 rounded-full hover:scale-125'
                }`}
                style={{
                  background: Math.floor(currentStartIndex / cardsPerView) === i
                    ? 'linear-gradient(135deg, #8b0836 0%, #ffc107 100%)'
                    : '#d1d5db'
                }}
                onMouseEnter={(e) => {
                  if (Math.floor(currentStartIndex / cardsPerView) !== i) {
                    e.target.style.backgroundColor = '#ffc107';
                  }
                }}
                onMouseLeave={(e) => {
                  if (Math.floor(currentStartIndex / cardsPerView) !== i) {
                    e.target.style.backgroundColor = '#d1d5db';
                  }
                }}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-x {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          33% { transform: translateX(-20px) translateY(-10px); }
          66% { transform: translateX(15px) translateY(10px); }
        }

        @keyframes float-y {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(-15px) translateY(-20px); }
        }

        @keyframes rotate-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fade-in {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes bounce-once {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .animate-float-x {
          animation: float-x 25s ease-in-out infinite;
        }

        .animate-float-y {
          animation: float-y 20s ease-in-out infinite;
        }

        .animate-rotate-slow {
          animation: rotate-slow 30s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-bounce-once {
          animation: bounce-once 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
