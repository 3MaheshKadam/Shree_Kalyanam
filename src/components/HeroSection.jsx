// "use client";
// import { useState, useEffect } from "react";
// import { Heart, Star, Sparkles, Crown } from "lucide-react";
// export default function MatrimonialHero() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   const handleMouseMove = (e) => {
//     setMousePosition({
//       x: (e.clientX / window.innerWidth) * 100,
//       y: (e.clientY / window.innerHeight) * 100,
//     });
//   };

//   return (
//     <div 
//       className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 via-rose-50/50 to-amber-50/30"
//       onMouseMove={handleMouseMove}
//     >
//       {/* Animated background with floating particles */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-rose-100/20 via-transparent to-amber-100/20"></div>
        
//         {/* Floating particles */}
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute animate-float opacity-30"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${3 + Math.random() * 4}s`
//             }}
//           >
//             <div className="w-2 h-2 bg-rose-300 rounded-full blur-sm"></div>
//           </div>
//         ))}
        
//         {/* Parallax background elements */}
//         <div 
//           className="absolute inset-0 opacity-20"
//           style={{
//             transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
//           }}
//         >
//           <div className="absolute top-20 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-rose-200 to-amber-200 opacity-40 blur-xl"></div>
//           <div className="absolute bottom-32 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-amber-200 to-rose-200 opacity-30 blur-xl"></div>
//         </div>
//       </div>

//       <div className="container mx-auto max-w-7xl h-full px-6 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center gap-16">
//           {/* Left Content */}
//           <div
//             className={`flex flex-col space-y-8 max-w-2xl transition-all duration-1200 transform ${
//               isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
//             }`}
//           >
        

//             {/* Main heading with gradient text */}
//             <h1 className="text-5xl lg:text-6xl font-serif font-bold leading-tight tracking-tight">
//               <span className="block text-gray-800">Two Soules</span>
//               <span className="block bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 bg-clip-text text-transparent">
//                 One Destiny !
//               </span>
//               {/* <span className="block text-gray-800">Begin</span> */}
//             </h1>

//             {/* Elegant description */}
//             <p className="text-xl text-gray-600 leading-relaxed max-w-lg font-light">
//               Discover your perfect life partner through our curated community of hearts seeking eternal companionship.
//             </p>

//             {/* Enhanced CTA buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-6">
//               <button className="group relative px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
//                 <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                 <div className="relative flex items-center justify-center space-x-3">
//                   <span className="font-medium text-lg">Start Your Journey</span>
//                   <Heart size={20} className="transform group-hover:scale-110 transition-transform duration-200" />
//                 </div>
//               </button>

//               <button className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full border-2 border-rose-200 hover:border-rose-400 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
//                 <span className="font-medium text-lg group-hover:text-rose-600 transition-colors duration-200">Explore Profiles</span>
//               </button>
//             </div>

//             {/* Social proof with enhanced styling */}
         
//           </div>

//           {/* Right Content - Enhanced Image Gallery */}
//           <div
//             className={`relative h-full flex items-center justify-center transition-all duration-1200 delay-300 transform ${
//               isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
//             }`}
//           >
//             {/* <div className="relative w-full aspect-square rounded-3xl"> */}
//             <div className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px] aspect-square rounded-3xl mx-auto">

//               {/* Main image with glassmorphism effect */}
//               <div className="relative group">
//                 <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 to-amber-400 rounded-3xl blur-lg opacity-60 group-hover:opacity-80 transition duration-500"></div>
//                 <div className="relative w-full aspect-square rounded-3xl overflow-hidden backdrop-blur-sm bg-white/10 border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-700">
//                   <div className="w-full h-full bg-gradient-to-br from-rose-200/50 to-amber-200/50 flex items-center justify-center">
//                     <div className="text-center space-y-4">
//                       <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-rose-400 to-amber-400 flex items-center justify-center shadow-xl">
//                         <Heart size={48} className="text-white" />
//                       </div>
//                       <div className="text-gray-700 font-serif text-2xl">Beautiful Couple</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating success cards */}
//               <div
//                 className={`absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/50 transform -rotate-3 hover:rotate-0 transition-all duration-500 ${
//                   isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
//                 }`}
//                 style={{ animationDelay: "800ms" }}
//               >
//                 <div className="flex items-center space-x-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full flex items-center justify-center">
//                     <Heart size={20} className="text-white" />
//                   </div>
//                   <div>
//                     <div className="font-bold text-2xl text-gray-800 font-serif">12,500+</div>
//                     <div className="text-sm text-gray-600 font-medium">Success Stories</div>
//                   </div>
//                 </div>
//               </div>

//               <div
//                 className={`absolute -top-8 -right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/50 transform rotate-3 hover:rotate-0 transition-all duration-500 ${
//                   isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
//                 }`}
//                 style={{ animationDelay: "1000ms" }}
//               >
//                 <div className="flex items-center space-x-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center">
//                     <Crown size={20} className="text-white" />
//                   </div>
//                   <div>
//                     <div className="font-bold text-2xl text-gray-800 font-serif">98.5%</div>
//                     <div className="text-sm text-gray-600 font-medium">Match Quality</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Decorative mandala elements */}
//               <div className="absolute -z-10 bottom-20 -left-16 w-32 h-32 rounded-full border-2 border-rose-200/50 opacity-60">
//                 <div className="w-full h-full rounded-full border-2 border-rose-300/30 animate-spin-slow"></div>
//               </div>
//               <div className="absolute -z-10 top-20 -right-16 w-28 h-28 rounded-full border-2 border-amber-200/50 opacity-60">
//                 <div className="w-full h-full rounded-full border-2 border-amber-300/30 animate-spin-slow-reverse"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Elegant quote section */}
//       <div
//         className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center transition-all duration-1000 delay-1000 ${
//           isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
//         }`}
//       >
     
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           33% { transform: translateY(-10px) rotate(1deg); }
//           66% { transform: translateY(5px) rotate(-1deg); }
//         }
        
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
        
//         @keyframes spin-slow-reverse {
//           from { transform: rotate(360deg); }
//           to { transform: rotate(0deg); }
//         }
        
//         @keyframes ripple {
//           0% { transform: scale(0); opacity: 0.3; }
//           100% { transform: scale(4); opacity: 0; }
//         }
        
//         @keyframes shimmer {
//           0% { background-position: -1000px 0; }
//           100% { background-position: 1000px 0; }
//         }
        
//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }
        
//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }
        
//         .animate-spin-slow-reverse {
//           animation: spin-slow-reverse 25s linear infinite;
//         }
        
//         .animate-ripple {
//           animation: ripple 0.8s ease-out;
//         }
        
//         .animate-shimmer {
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
//           background-size: 1000px 100%;
//           animation: shimmer 2s infinite;
//         }
        
//         /* Custom gradient borders */
//         .gradient-border {
//           position: relative;
//           background: linear-gradient(45deg, #f43f5e, #f59e0b);
//           padding: 2px;
//           border-radius: 1rem;
//         }
        
//         .gradient-border-inner {
//           background: white;
//           border-radius: 0.875rem;
//         }
        
//         /* Glassmorphism effect */
//         .glass {
//           background: rgba(255, 255, 255, 0.15);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//         }
        
//         /* Luxury text shadow */
//         .luxury-text {
//           text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//         }
        
//         /* Hover glow effect */
//         .hover-glow:hover {
//           box-shadow: 0 20px 60px rgba(244, 63, 94, 0.3);
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { Heart, Star, Sparkles, Crown } from "lucide-react";
import Image from "next/image";
// import home from "../../public/images/"
export default function MatrimonialHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  };

  return (
    <div 
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 via-rose-50/50 to-amber-50/30"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background with floating particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/20 via-transparent to-amber-100/20"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-2 h-2 bg-rose-300 rounded-full blur-sm"></div>
          </div>
        ))}
        
        {/* Parallax background elements */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        >
          <div className="absolute top-20 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-rose-200 to-amber-200 opacity-40 blur-xl"></div>
          <div className="absolute bottom-32 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-amber-200 to-rose-200 opacity-30 blur-xl"></div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl h-full px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center gap-16">
          {/* Left Content */}
          <div
            className={`flex flex-col space-y-8 max-w-2xl transition-all duration-1200 transform ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
        

            {/* Main heading with gradient text */}
            <h1 className="text-5xl lg:text-6xl font-serif font-bold leading-tight tracking-tight">
              <span className="block text-gray-800">Two Soules</span>
              <span className="block bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                One Destiny !
              </span>
              {/* <span className="block text-gray-800">Begin</span> */}
            </h1>

            {/* Elegant description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg font-light">
              Discover your perfect life partner through our curated community of hearts seeking eternal companionship.
            </p>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="relative flex items-center justify-center space-x-3">
                  <span className="font-medium text-lg">Start Your Journey</span>
                  <Heart size={20} className="transform group-hover:scale-110 transition-transform duration-200" />
                </div>
              </button>

              <button className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full border-2 border-rose-200 hover:border-rose-400 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <span className="font-medium text-lg group-hover:text-rose-600 transition-colors duration-200">Explore Profiles</span>
              </button>
            </div>

            {/* Social proof with enhanced styling */}
         
          </div>

          {/* Right Content - Enhanced Image Gallery */}
          <div
            className={`relative h-full flex items-center justify-center transition-all duration-1200 delay-300 transform ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <div className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px] aspect-square rounded-3xl mx-auto">

              {/* Main image with glassmorphism effect */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 to-amber-400 rounded-3xl blur-lg opacity-60 group-hover:opacity-80 transition duration-500"></div>
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden backdrop-blur-sm bg-white/10 border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-700">
                 <Image
                    src="/home.jpeg"
                    alt="Happy Couple"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

             
                  <div className="absolute -bottom-8 -left-8  w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full flex items-center justify-center">
                    <Heart size={20} className="text-white" />
                  </div>
              {/* </div> */}

              {/* Decorative mandala elements */}
              <div className="absolute -z-10 bottom-20 -left-16 w-32 h-32 rounded-full border-2 border-rose-200/50 opacity-60">
                <div className="w-full h-full rounded-full border-2 border-rose-300/30 animate-spin-slow"></div>
              </div>
              <div className="absolute -z-10 top-20 -right-16 w-28 h-28 rounded-full border-2 border-amber-200/50 opacity-60">
                <div className="w-full h-full rounded-full border-2 border-amber-300/30 animate-spin-slow-reverse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant quote section */}
      <div
        className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center transition-all duration-1000 delay-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
     
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes ripple {
          0% { transform: scale(0); opacity: 0.3; }
          100% { transform: scale(4); opacity: 0; }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
        
        .animate-ripple {
          animation: ripple 0.8s ease-out;
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
        
        /* Custom gradient borders */
        .gradient-border {
          position: relative;
          background: linear-gradient(45deg, #f43f5e, #f59e0b);
          padding: 2px;
          border-radius: 1rem;
        }
        
        .gradient-border-inner {
          background: white;
          border-radius: 0.875rem;
        }
        
        /* Glassmorphism effect */
        .glass {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        /* Luxury text shadow */
        .luxury-text {
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        /* Hover glow effect */
        .hover-glow:hover {
          box-shadow: 0 20px 60px rgba(244, 63, 94, 0.3);
        }
      `}</style>
    </div>
  );
}