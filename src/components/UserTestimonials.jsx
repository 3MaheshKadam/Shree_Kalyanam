"use client"
import React, { useState, useEffect } from 'react';
import { Quote, Heart } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Vikram & Anjali",
    location: "Mumbai",
    content: "It started with a simple 'Hello' and became a lifetime of happiness. Thank you for connecting two souls destined to be together.",
    image: "/images/couple1.jpeg",
    year: "Married 2022"
  },
  {
    id: 2,
    name: "Arjun & Sneha",
    location: "Bangalore",
    content: "We belong to different states but similar values brought us close. Your detailed profiles helped us find common ground instantly.",
    image: "/images/couple2.jpeg",
    year: "Married 2023"
  },
  {
    id: 3,
    name: "Rohan & Priya",
    location: "Delhi",
    content: "The most trusted platform for serious matchmaking. Our parents were happy with the verification process.",
    image: "/images/couple3.jpeg",
    year: "Engaged 2024"
  }
];

export default function UserTestimonials() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="py-24 bg-[#FFF5F8] relative overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/heart-necklace.png')]"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">

        <div className={`text-center mb-20 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-primary">
            <Heart size={28} className="fill-current animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
            Love Stories
          </h2>
          <p className="text-secondary/60 max-w-xl mx-auto text-lg">
            Real couples, real love, and their beautiful journey to forever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-white p-4 pb-8 rounded-sm shadow-xl transition-all duration-500 hover:z-10 hover:scale-105 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} 
                       ${index === 1 ? 'md:-mt-12 md:rotate-2' : index === 0 ? 'md:rotate-[-2deg]' : 'md:rotate-1'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Polaroid Image Area */}
              <div className="bg-gray-100 p-2 mb-6 shadow-inner">
                <div className="relative h-64 w-full overflow-hidden filter sepia-[.2] group-hover:sepia-0 transition-all duration-500">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                    <p className="font-serif italic text-sm opacity-90">{item.year}</p>
                  </div>
                </div>
              </div>

              {/* Handwritten Content */}
              <div className="px-4 text-center">
                <Quote className="w-6 h-6 text-primary/20 mx-auto mb-2 rotate-180" />
                <p className="text-secondary/70 font-medium italic text-lg mb-6 leading-relaxed font-serif">
                  "{item.content}"
                </p>
                <h4 className="text-xl font-bold text-secondary font-serif">{item.name}</h4>
                <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">{item.location}</p>
              </div>

              {/* Tape Effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur-sm shadow-sm rotate-[-2deg] border border-white/40"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}