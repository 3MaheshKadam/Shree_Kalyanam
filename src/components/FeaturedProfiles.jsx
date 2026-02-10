"use client"
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Briefcase, Heart, Sparkles, UserCheck, Ruler, Languages } from 'lucide-react';
import Image from 'next/image';

export default function FeaturedProfiles() {
  const [isLoaded, setIsLoaded] = useState(false);
  const carouselRef = useRef(null);

  const profiles = [
    {
      id: 1,
      name: "Aditi Rao",
      age: "26 yrs",
      height: "5'5\"",
      city: "Bangalore",
      profession: "Product Designer",
      image: "/people/people1.png",
      religion: "Hindu, Brahmin",
      tongue: "Kannada",
      match: "98%"
    },
    {
      id: 2,
      name: "Karthik Mehta",
      age: "29 yrs",
      height: "5'11\"",
      city: "Mumbai",
      profession: "Investment Banker",
      image: "/people/people4.png",
      religion: "Hindu, Vaishya",
      tongue: "Gujarati",
      match: "94%"
    },
    {
      id: 3,
      name: "Sanya Kapoor",
      age: "27 yrs",
      height: "5'6\"",
      city: "Delhi",
      profession: "Architect",
      image: "/people/people2.png",
      religion: "Hindu, Punjabi",
      tongue: "Hindi",
      match: "91%"
    },
    {
      id: 4,
      name: "Rahul Singh",
      age: "30 yrs",
      height: "6'0\"",
      city: "Chandigarh",
      profession: "Software Engineer",
      image: "/people/vikram.jpg",
      religion: "Sikh, Jat",
      tongue: "Punjabi",
      match: "89%"
    },
    {
      id: 5,
      name: "Meera Nair",
      age: "28 yrs",
      height: "5'4\"",
      city: "Kochi",
      profession: "Doctor",
      image: "/people/people3.png",
      religion: "Hindu, Nair",
      tongue: "Malayalam",
      match: "96%"
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">

        {/* Header */}
        <div className={`flex flex-col md:flex-row justify-between items-end mb-16 gap-6 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Premium Matches</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary">
              Featured <span className="text-primary italic">Profiles</span>
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button onClick={scrollLeft} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:border-primary hover:text-primary transition-all duration-300 shadow-sm">
              <ChevronLeft size={24} />
            </button>
            <button onClick={scrollRight} className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-secondary transition-all duration-300">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 py-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {profiles.map((profile, index) => (
            <div
              key={profile.id}
              className={`flex-shrink-0 w-80 md:w-[22rem] snap-center group relative transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:-translate-y-2">

                {/* Image Section */}
                <div className="relative h-[24rem] w-full overflow-hidden">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    width={400}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Match Score Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-green-600 shadow-sm flex items-center gap-1">
                    <Sparkles size={14} className="fill-green-600" />
                    {profile.match} Match
                  </div>

                  {/* Gradient Overlay for Text Visibility if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 relative">
                  {/* Floating Like Button */}
                  <button className="absolute -top-6 right-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-300 hover:text-primary transition-colors duration-300 z-10 border border-gray-50">
                    <Heart size={24} className="fill-current" />
                  </button>

                  <div className="flex items-center gap-2 text-primary font-medium text-xs uppercase tracking-wider mb-2">
                    <UserCheck size={14} />
                    Verified Profile
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-secondary mb-1">
                    {profile.name}
                  </h3>

                  <div className="flex flex-wrap gap-y-2 text-secondary/70 text-sm mb-6">
                    <span className="flex items-center gap-1 mr-4">
                      {profile.age}, {profile.height}
                    </span>
                    <span className="flex items-center gap-1 w-full mt-1">
                      <MapPin size={14} className="text-primary/60" />
                      {profile.city}
                    </span>
                    <span className="flex items-center gap-1 w-full mt-1">
                      <Briefcase size={14} className="text-primary/60" />
                      {profile.profession}
                    </span>
                    <span className="flex items-center gap-1 w-full mt-1">
                      <Languages size={14} className="text-primary/60" />
                      {profile.tongue}, {profile.religion}
                    </span>
                  </div>

                  <button className="w-full py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300">
                    Connect Now
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
