"use client"
import React, { useState, useEffect } from 'react';
import { Lotus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {ArrowRight } from 'lucide-react'
const spiritualInsights = [
  {
    id: 1,
    title: "The Sacred Bond of Matrimony",
    theme: "Spiritual Foundations",
    description: 
    "Journey beyond the physical union to discover the spiritual harmony of marriage through sacred Vedic wisdom.",
    image: "/blogImages/one.jpeg",
    reflectionTime: "4 min reflection",
    date: "June 10, 2024",
  },
  {
    id: 2,
    title: "Meditation for Marital Harmony",
    theme: "Inner Peace",
    description: "Learn how mindfulness and meditation can nurture love and understanding in your relationship.",
    image: "/blogImages/two.jpeg",
    reflectionTime: "6 min reflection",
    date: "May 25, 2024",
  },
  {
    id: 3,
    title: "Astrological Alignment in Marriage",
    theme: "Cosmic Guidance",
    description: "Understand how planetary influences shape compatibility and spiritual connection in matrimony.",
    image: "/blogImages/three.jpeg",
    reflectionTime: "5 min reflection",
    date: "April 18, 2024",
  },
];

export default function SpiritualWisdom() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-b from-amber-50 via-rose-100 to-white py-16 lg:py-24 overflow-hidden">
      {/* Decorative Elements with Spiritual Motifs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-rose-200/30 blur-2xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-amber-200/30 blur-2xl opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/images/lotus-pattern.png')] bg-repeat bg-[length:250px_250px] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 lg:mb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-rose-100/80 text-rose-700 text-sm font-semibold tracking-wide">
            Spiritual Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mt-4 mb-4 font-serif">
            <span className="text-red-600">Divine</span> Wisdom for Life
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Embrace spiritual practices and traditions to enrich your matrimonial journey with Shree Kalyanam.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {spiritualInsights.map((insight) => (
            <div
              key={insight.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-amber-100/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  width={400}
                  height={224}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent"></div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-amber-700 text-xs font-medium">
                  {insight.theme}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 font-serif">
                  {insight.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                  {insight.description}
                </p>
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <span>{insight.date}</span>
                  <span className="mx-2">•</span>
                  <span>{insight.reflectionTime}</span>
                </div>
                <Link
                  href={`/spiritual/${insight.id}`}
                  className="inline-flex items-center text-rose-600 hover:text-rose-700 font-medium transition-colors duration-300"
                >
                  Explore Insight
                  <ArrowRight size={16} className="ml-1 transform hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 lg:mt-16 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            href="/spiritual-journey"
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-rose-500 text-white rounded-lg hover:from-amber-600 hover:to-rose-600 transition-all duration-300 shadow-md hover:shadow-lg font-sans"
          >
            Begin Your Spiritual Journey
          </Link>
        </div>
      </div>
    </div>
  );
}