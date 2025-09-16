// "use client"
// import React, { useState, useEffect } from 'react';
// import { Lotus } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';
// import {ArrowRight } from 'lucide-react'
// const spiritualInsights = [
//   {
//     id: 1,
//     title: "The Sacred Bond of Matrimony",
//     theme: "Spiritual Foundations",
//     description: 
//     "Journey beyond the physical union to discover the spiritual harmony of marriage through sacred Vedic wisdom.",
//     image: "/blogImages/one.jpeg",
//     reflectionTime: "4 min reflection",
//     date: "June 10, 2024",
//   },
//   {
//     id: 2,
//     title: "Meditation for Marital Harmony",
//     theme: "Inner Peace",
//     description: "Learn how mindfulness and meditation can nurture love and understanding in your relationship.",
//     image: "/blogImages/two.jpeg",
//     reflectionTime: "6 min reflection",
//     date: "May 25, 2024",
//   },
//   {
//     id: 3,
//     title: "Astrological Alignment in Marriage",
//     theme: "Cosmic Guidance",
//     description: "Understand how planetary influences shape compatibility and spiritual connection in matrimony.",
//     image: "/blogImages/three.jpeg",
//     reflectionTime: "5 min reflection",
//     date: "April 18, 2024",
//   },
// ];

// export default function SpiritualWisdom() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   return (
//     <div className="relative w-full bg-gradient-to-b from-amber-50 via-rose-100 to-white py-16 lg:py-24 overflow-hidden">
//       {/* Decorative Elements with Spiritual Motifs */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-rose-200/30 blur-2xl opacity-50"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-amber-200/30 blur-2xl opacity-50"></div>
//         <div className="absolute inset-0 bg-[url('/images/lotus-pattern.png')] bg-repeat bg-[length:250px_250px] opacity-10"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className={`text-center mb-12 lg:mb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
//           <span className="inline-block px-4 py-2 rounded-full bg-rose-100/80 text-rose-700 text-sm font-semibold tracking-wide">
//             Spiritual Guidance
//           </span>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mt-4 mb-4 font-serif">
//             <span className="text-red-600">Divine</span> Wisdom for Life
//           </h2>
//           <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
//             Embrace spiritual practices and traditions to enrich your matrimonial journey with Shree Kalyanam.
//           </p>
//         </div>

//         <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           {spiritualInsights.map((insight) => (
//             <div
//               key={insight.id}
//               className="bg-white rounded-xl shadow-md overflow-hidden border border-amber-100/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
//             >
//               <div className="relative h-56 overflow-hidden">
//                 <Image
//                   src={insight.image}
//                   alt={insight.title}
//                   width={400}
//                   height={224}
//                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent"></div>
//                 <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-amber-700 text-xs font-medium">
//                   {insight.theme}
//                 </span>
//               </div>
//               <div className="p-5">
//                 <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 font-serif">
//                   {insight.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
//                   {insight.description}
//                 </p>
//                 <div className="flex items-center text-xs text-gray-500 mb-3">
//                   <span>{insight.date}</span>
//                   <span className="mx-2">•</span>
//                   <span>{insight.reflectionTime}</span>
//                 </div>
//                 <Link
//                   href={`/spiritual/${insight.id}`}
//                   className="inline-flex items-center text-rose-600 hover:text-rose-700 font-medium transition-colors duration-300"
//                 >
//                   Explore Insight
//                   <ArrowRight size={16} className="ml-1 transform hover:translate-x-1 transition-transform duration-200" />
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className={`text-center mt-12 lg:mt-16 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           <Link
//             href="/spiritual-journey"
//             className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-rose-500 text-white rounded-lg hover:from-amber-600 hover:to-rose-600 transition-all duration-300 shadow-md hover:shadow-lg font-sans"
//           >
//             Begin Your Spiritual Journey
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Import icons individually to avoid barrel import issues
import { ArrowRight } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Sparkles } from 'lucide-react';

// Create a custom Lotus icon component to replace the problematic import
const Lotus = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 10c2 0 11-4 11-4" />
    <path d="M12 10c-2 0-11-4-11-4" />
    <path d="M12 10c0-2 4-11 4-11" />
    <path d="M12 10c0 2 4 11 4 11" />
    <path d="M12 10c-2 0-11 4-11 4" />
    <path d="M12 10c2 0 11 4 11 4" />
    <path d="M12 10c0 2-4 11-4 11" />
    <path d="M12 10c0-2-4-11-4-11" />
  </svg>
);

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

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    }
  };

  const staggerChildren = {
    visible: { 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };

  const cardHover = {
    rest: { y: 0 },
    hover: { 
      y: -8,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const imageHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-amber-50/40 via-rose-100/30 to-white py-20 lg:py-28 overflow-hidden">
      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-rose-200/20 blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-amber-200/20 blur-3xl opacity-60"></div>
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-amber-300/10 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-rose-300/10 rounded-full"></div>
        <div className="absolute inset-0 bg-[url('/images/lotus-pattern.png')] bg-repeat bg-[length:300px_300px] opacity-[0.03]"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-rose-400 rounded-full opacity-20 animate-float">
        <Sparkles size={12} className="text-rose-500" />
      </div>
      <div className="absolute top-1/3 right-20 w-8 h-8 bg-amber-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <Sparkles size={14} className="text-amber-500" />
      </div>
      <div className="absolute bottom-1/4 left-20 w-10 h-10 bg-pink-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}>
        <Sparkles size={16} className="text-pink-500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.span 
            className="inline-flex items-center px-4 py-2 rounded-full bg-rose-100/80 text-rose-700 text-sm font-medium tracking-wide mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Lotus size={16} className="mr-2" />
            Spiritual Guidance
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mt-4 mb-6 font-serif">
            <span className="text-rose-600">Divine</span> Wisdom for Life
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Embrace spiritual practices and traditions to enrich your matrimonial journey with Shree Kalyanam.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {spiritualInsights.map((insight) => (
            <motion.div
              key={insight.id}
              variants={fadeInUp}
              whileHover="hover"
              initial="rest"
              className="group"
            >
              <motion.div 
                variants={cardHover}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm overflow-hidden border border-rose-100/50 hover:shadow-xl transition-all duration-300 h-full"
              >
                <motion.div 
                  variants={imageHover}
                  className="relative h-60 overflow-hidden"
                >
                  {/* Placeholder for the image */}
                  <div className="w-full h-full bg-gradient-to-br from-rose-100 to-amber-100 flex items-center justify-center">
                    <Lotus size={48} className="text-rose-300 opacity-50" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 text-amber-700 text-xs font-medium backdrop-blur-sm">
                    {insight.theme}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center text-xs">
                      <Clock size={12} className="mr-1" />
                      {insight.reflectionTime}
                    </div>
                    <div className="flex items-center text-xs">
                      <Calendar size={12} className="mr-1" />
                      {insight.date}
                    </div>
                  </div>
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif group-hover:text-rose-700 transition-colors duration-300">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {insight.description}
                  </p>
                  <Link
                    href={`/spiritual/${insight.id}`}
                    className="inline-flex items-center text-rose-600 hover:text-rose-700 font-medium transition-colors duration-300 group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Explore Insight
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 lg:mt-20"
        >
          <Link
            href="/spiritual-journey"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-rose-500 to-amber-500 text-white rounded-xl hover:from-rose-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl font-medium group"
          >
            Begin Your Spiritual Journey
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>

      {/* Custom styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}