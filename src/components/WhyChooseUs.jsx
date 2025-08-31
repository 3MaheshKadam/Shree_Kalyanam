// "use client";
// import { useState, useEffect, useRef } from 'react';
// import { Shield, Users, Lock, Smartphone, Star, Heart, Sparkles, Crown, Gem, Check } from 'lucide-react';

// export default function WhyChooseUs() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [visibleCards, setVisibleCards] = useState(new Set());
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     setIsLoaded(true);
    
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = parseInt(entry.target.dataset.index);
//             setVisibleCards(prev => new Set([...prev, index]));
//           }
//         });
//       },
//       { threshold: 0.2, rootMargin: '50px' }
//     );

//     const cards = sectionRef.current?.querySelectorAll('[data-index]');
//     cards?.forEach(card => observer.observe(card));

//     return () => observer.disconnect();
//   }, []);

//   const features = [
//     {
//       icon: Shield,
//       title: "Verified Profiles",
//       description: "Multi-step authentication ensures every profile is genuine and trustworthy.",
//       stats: "99.8% Authenticity Rate"
//     },
//     {
//       icon: Lock,
//       title: "Privacy First",
//       description: "End-to-end encryption and GDPR compliance protect your personal information.",
//       stats: "Zero Data Breaches"
//     },
//     {
//       icon: Users,
//       title: "Smart Matching",
//       description: "AI-powered algorithm considers cultural values and personal preferences.",
//       stats: "92% Success Rate"
//     },
//     {
//       icon: Smartphone,
//       title: "Seamless Experience",
//       description: "Native mobile app with offline access and real-time notifications.",
//       stats: "4.9/5 App Rating"
//     }
//   ];

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative py-24 bg-amber-50/70 overflow-hidden"
//       aria-labelledby="why-choose-us-heading"
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-amber-100/40 blur-3xl"></div>
//         <div className="absolute bottom-32 right-16 w-80 h-80 rounded-full bg-rose-100/20 blur-3xl"></div>
        
//         {/* Subtle pattern overlay */}
//         <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjgiLz48L2c+PC9zdmc+')]"></div>
//       </div>

//       <div className="container mx-auto max-w-6xl px-4 relative z-10">
//         {/* Header */}
//         <header 
//           className={`text-center mb-16 transition-all duration-700 ease-out ${
//             isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}
//         >
//           <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 bg-white/80 backdrop-blur-sm rounded-full border border-amber-200 shadow-sm">
//             <Heart className="w-3 h-3 text-rose-600" />
//             <span className="text-xs font-medium text-rose-700 tracking-wide">WHY CHOOSE US</span>
//             <Star className="w-3 h-3 text-rose-600" />
//           </div>
          
//           <h2 
//             id="why-choose-us-heading"
//             className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight"
//           >
//             <span className="block text-slate-800">The Shree Kalyanam</span>
//             <span className="block bg-gradient-to-r from-rose-600 to-rose-700 bg-clip-text text-transparent mt-1">
//               Difference
//             </span>
//           </h2>
          
//           <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
//             Where tradition meets modern matchmaking for meaningful connections.
//           </p>
//         </header>

//         {/* Feature Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
//           {features.map((feature, index) => (
//             <article
//               key={index}
//               data-index={index}
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//               className={`group relative transition-all duration-500 ease-out ${
//                 visibleCards.has(index) 
//                   ? 'translate-y-0 opacity-100 scale-100' 
//                   : 'translate-y-8 opacity-0 scale-95'
//               }`}
//               style={{ transitionDelay: `${100 * index}ms` }}
//             >
//               {/* Card Container */}
//               <div className="relative h-full">
//                 <div className={`
//                   relative h-full p-5 rounded-xl transition-all duration-300
//                   ${hoveredCard === index ? 'translate-y-[-4px]' : ''}
//                   bg-gradient-to-b from-rose-700 to-rose-800
//                   shadow-md hover:shadow-lg
//                   border border-rose-600/30
//                   overflow-hidden
//                 `}>
                  
//                   {/* Icon Container */}
//                   <div className="relative mb-5">
//                     <div className="relative w-14 h-14">
//                       {/* Icon Background */}
//                       <div className="relative w-full h-full rounded-xl bg-white/95 flex items-center justify-center shadow-sm border border-white/20">
//                         <feature.icon className="w-6 h-6 text-rose-700 group-hover:scale-110 transition-transform duration-300" />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="relative">
//                     <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300">
//                       {feature.title}
//                     </h3>
                    
//                     <p className="text-gray-200 text-sm leading-relaxed mb-4">
//                       {feature.description}
//                     </p>

//                     {/* Stats */}
//                     <div className="flex items-center text-xs text-rose-200">
//                       <Check className="w-3 h-3 text-rose-200 mr-1" />
//                       <span>{feature.stats}</span>
//                     </div>
//                   </div>

//                   {/* Bottom Accent */}
//                   <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden rounded-b-xl">
//                     <div className={`h-full bg-rose-500 transform transition-transform duration-500 ease-out ${hoveredCard === index ? 'translate-x-0' : 'translate-x-[-100%]'}`}></div>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Footer */}
//         <footer 
//           className={`text-center mt-14 transition-all duration-700 delay-500 ${
//             isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
//           }`}
//         >
//           <div className="inline-flex flex-col items-center">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-8 h-px bg-rose-300/50"></div>
//               <Gem className="w-4 h-4 text-rose-600" />
//               <div className="w-8 h-px bg-rose-300/50"></div>
//             </div>
            
//             <blockquote className="text-base text-slate-700 italic">
//               "Where traditions meet modern matchmaking"
//             </blockquote>
            
//             <cite className="block text-xs text-slate-500 mt-2 not-italic">
//               — The Shree Kalyanam Promise
//             </cite>
//           </div>
//         </footer>
//       </div>

//       {/* Floating decorative elements */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {[...Array(6)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${5 + Math.random() * 5}s`
//             }}
//           >
//             <div className="w-1.5 h-1.5 bg-amber-300/40 rounded-full"></div>
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           33% { transform: translateY(-8px) rotate(1deg); }
//           66% { transform: translateY(4px) rotate(-1deg); }
//         }

//         .animate-float {
//           animation: float 8s ease-in-out infinite;
//         }

//         /* Reduce motion for accessibility */
//         @media (prefers-reduced-motion: reduce) {
//           * {
//             transition-duration: 0.01ms !important;
//             animation-duration: 0.01ms !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }
"use client";
import { useState, useEffect, useRef } from "react";
import {
  Shield,
  Lock,
  Users,
  Smartphone,
  Heart,
  Star,
  Gem,
  Check
} from "lucide-react";

export default function WhyChooseUs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: "50px" }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Verified Profiles",
      stat: "99.8% Authentic",
      desc: "Manual and digital checks for safety."
    },
    {
      icon: Lock,
      title: "Data Privacy",
      stat: "Zero Breaches",
      desc: "Your info stays protected, always."
    },
    {
      icon: Users,
      title: "Smart Matching",
      stat: "92% Success",
      desc: "AI meets tradition for meaningful matches."
    },
    {
      icon: Smartphone,
      title: "Mobile & Instant",
      stat: "4.9★ App Rating",
      desc: "Match anywhere, anytime, any device."
    }
  ];

  return (
    <section
      ref={sectionRef}
      aria-labelledby="why-choose-us-heading"
      className="relative py-20 bg-amber-50/70 overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-amber-100/40 blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 rounded-full bg-rose-100/20 blur-3xl"></div>
      </div>
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-1 bg-white/80 backdrop-blur-sm rounded-full border border-amber-200 shadow-sm">
            <Heart className="w-3 h-3 text-rose-600" />
            <span className="text-xs font-bold text-rose-700 tracking-wider uppercase">
              Why Choose Us
            </span>
            <Star className="w-3 h-3 text-rose-600" />
          </div>
          <h2 id="why-choose-us-heading" className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-2">
            Experience The Shri Kalyanam <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">Advantage</span>
          </h2>
          <p className="max-w-xl mx-auto text-base text-slate-600">
            Why more modern Indians trust us for verified, meaningful matrimonial connections.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <article
              key={i}
              data-index={i}
              className={`relative transition-all duration-500 ease-out group bg-gradient-to-b from-rose-700 to-rose-800 rounded-2xl shadow-md border border-rose-700/20 overflow-hidden p-6 flex flex-col items-center ${
                visibleCards.has(i)
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-7 opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${100 * i}ms` }}
            >
              <div className="bg-white/90 rounded-xl p-4 shadow flex items-center justify-center mb-4 border border-white/50">
                <feature.icon className="text-rose-700 w-7 h-7" />
              </div>
              <h3 className="mt-1 mb-2 text-white text-lg font-semibold text-center">
                {feature.title}
              </h3>
              <div className="flex items-center text-xs text-rose-200 font-medium mb-2">
                <Check className="w-3 h-3 mr-1" /> {feature.stat}
              </div>
              <p className="text-rose-100/90 text-sm text-center">{feature.desc}</p>
            </article>
          ))}
        </div>

        {/* Trust Signal & Testimonial */}
        <div className="max-w-xl mx-auto mt-12 text-center">
          <div className="inline-block bg-white px-4 py-1.5 rounded-full shadow text-rose-600 font-semibold border border-rose-100/40">
            Featured in Times of India ★★★★★
          </div>
          <blockquote className="mt-4 px-2 text-slate-700 italic text-base">
            "Verified profiles and human support made our search easy and anxiety-free!"
          </blockquote>
          <cite className="block text-xs text-slate-500 mt-1 not-italic">
            — Radhika & Raj, Chennai
          </cite>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          33% { transform: translateY(-8px); }
          66% { transform: translateY(4px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          * { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
        }
      `}</style>
    </section>
  );
}
