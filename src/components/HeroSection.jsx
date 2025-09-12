
// "use client";
// import Image from 'next/image';
// import React, { useState, useEffect } from 'react';
// // import { Image } from 'next/image';
// const HeroSection = () => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   return (
//     <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-rose-50 via-rose-100 to-amber-50 overflow-hidden">
//       {/* Subtle Decorative Background */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-64 h-64 bg-rose-200 rounded-full opacity-30 blur-3xl -translate-x-1/2 translate-y-1/4"></div>
//         <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-200 rounded-full opacity-30 blur-3xl translate-x-1/4 -translate-y-1/4"></div>
//       </div>

//       <div className="mt-8 container mx-auto px-4  sm:px-10 lg:px-8 py-16 flex flex-col lg:flex-row items-center justify-between">
//         {/* Left Content */}
//         <div className={`lg:w-1/2 flex flex-col space-y-6 max-w-2xl transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-800 leading-tight">
//             Shri Kalyanam
//             <span className="block bg-gradient-to-r from-rose-600 to-amber-500 bg-clip-text text-transparent">
//               Where Hearts Unite
//             </span>
//           </h1>
//           <p className="text-lg sm:text-xl text-gray-600 font-light max-w-md">
//             Embark on a sacred journey to find your life partner. Shri Kalyanam connects souls with love, trust, and tradition.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <a
//               href="/register"
//               className="relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-rose-500 to-amber-500 text-white font-semibold rounded-full overflow-hidden group"
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
//               <span className="relative flex items-center space-x-2">
//                 <span>Find Your Match</span>
//                 <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
//                 </svg>
//               </span>
//             </a>
//             <a
//               href="/search"
//               className="px-8 py-3 bg-white text-rose-600 font-semibold rounded-full border border-rose-200 hover:bg-rose-50 hover:border-rose-400 transition-all duration-300"
//             >
//               Explore Profiles
//             </a>
//           </div>
         
//         </div>

//         {/* Right Content - Image */}
//         <div className={`lg:w-1/2  flex justify-center transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="relative w-full max-w-md mt-4 ">
//             <div className="absolute -inset-4 bg-gradient-to-r from-rose-400/40 to-amber-400/40 rounded-3xl blur-lg opacity-50"></div>
//             <Image
//                     src="/home.jpeg"
//                     alt="Happy Couple"
//                     width={800}
//                     height={800}
//                     className="w-full h-full object-cover rounded-2xl"
//                   />
//             <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center">
//               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS for Animations */}
//       <style jsx>{`
//         @keyframes shimmer {
//           0% { background-position: -1000px 0; }
//           100% { background-position: 1000px 0; }
//         }
//         .group:hover .bg-gradient-to-r {
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
//           background-size: 1000px 100%;
//           animation: shimmer 2s infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection; 


"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
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

  const imageHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const buttonHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-rose-50/80 via-white to-amber-50/70 overflow-hidden">
      {/* Enhanced Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-rose-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 translate-y-1/4"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-200 rounded-full opacity-15 blur-3xl translate-x-1/4"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-200 rounded-full opacity-20 blur-3xl translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-rose-300 rounded-full opacity-10 blur-2xl"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-rose-400 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-1/3 right-20 w-8 h-8 bg-amber-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-20 w-10 h-10 bg-pink-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <motion.div 
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={staggerChildren}
          className="lg:w-1/2 flex flex-col space-y-8 max-w-2xl"
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-rose-100 self-start mb-4"
          >
            <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-rose-600">Where traditions meet modern connections</span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-800 leading-tight"
          >
            Shri Kalyanam
            <span className="block bg-gradient-to-r from-rose-600 to-amber-500 bg-clip-text text-transparent mt-2">
              Where Hearts Unite
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-600 font-light max-w-lg leading-relaxed"
          >
            Embark on a sacred journey to find your life partner. Shri Kalyanam connects souls with love, trust, and tradition.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <motion.a
              href="/register"
              className="relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-500 to-amber-500 text-white font-semibold rounded-full overflow-hidden group shadow-lg hover:shadow-rose-200/50 transition-all duration-300"
              whileHover="hover"
              initial="rest"
              variants={buttonHover}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative flex items-center space-x-2">
                <span>Find Your Match</span>
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </span>
            </motion.a>

            <motion.a
              href="/search"
              className="px-8 py-4 bg-white text-rose-600 font-semibold rounded-full border border-rose-100 hover:bg-rose-50 hover:border-rose-300 hover:shadow-lg transition-all duration-300 shadow-sm"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Profiles
            </motion.a>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="flex items-center space-x-6 mt-8 text-sm text-gray-500"
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-rose-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <span>Secure & Verified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <span>Thousands of Matches</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:w-1/2 flex justify-center mt-12 lg:mt-0"
        >
          <motion.div 
            className="relative w-full max-w-md"
            whileHover="hover"
            initial="rest"
            variants={imageHover}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-400/20 to-amber-400/20 rounded-3xl blur-xl opacity-70"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>
              <Image
                src="/home.jpeg"
                alt="Happy Couple"
                width={800}
                height={800}
                className="w-full h-full object-cover transform transition-transform duration-700"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-rose-600 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-rose-300 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 bg-rose-400 rounded-full"
          />
        </div>
      </motion.div>

      {/* Custom styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

