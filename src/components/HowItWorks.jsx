"use client";
import { useState, useEffect } from "react";
import { Shield, Heart, Star, Sparkles, Users, Crown } from "lucide-react";

export default function OurPromise() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const promises = [
    {
      icon: Shield,
      title: "Trusted & Verified",
      description: "Every profile undergoes thorough verification to maintain authenticity.",
      stat: "99.8% Verified",
      gradient: "from-rose-500 to-rose-600"
    },
    {
      icon: Heart,
      title: "Rooted in Tradition",
      description: "We celebrate cultural values while embracing modern approaches to love.",
      stat: "Sacred Values",
      gradient: "from-amber-500 to-rose-500"
    },
    {
      icon: Star,
      title: "Tailored Matchmaking",
      description: "Personalized recommendations powered by AI with genuine human understanding.",
      stat: "92% Success Rate",
      gradient: "from-amber-500 to-amber-600"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-amber-50/40 via-rose-50/20 to-amber-50/60 overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 w-64 h-64 rounded-full bg-rose-200/15 blur-3xl animate-float"></div>
        <div className="absolute bottom-16 right-16 w-80 h-80 rounded-full bg-amber-200/15 blur-3xl animate-float-delay"></div>
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, rgba(244, 63, 94, 0.3) 0%, transparent 50%), 
                                radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.3) 0%, transparent 50%)`
             }}>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        {/* Refined Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-rose-200/50 shadow-sm">
            <Sparkles className="w-4 h-4 text-rose-600" />
            <span className="text-sm font-semibold text-rose-700 tracking-wider uppercase">Our Promise</span>
            <Crown className="w-4 h-4 text-amber-600" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            <span className="text-slate-800">The Shri Kalyanam</span>
            <span className="block bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 bg-clip-text text-transparent mt-2">
              Sacred Promise
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Where ancient wisdom meets modern love, creating meaningful connections that honor both tradition and tomorrow
          </p>
        </div>

        {/* Promise Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {promises.map((promise, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              className={`group relative transition-all duration-700 transform ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              } hover:-translate-y-2`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`
                relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl 
                transition-all duration-500 border border-white/50 overflow-hidden
                ${activeCard === index ? 'ring-2 ring-rose-300/50 shadow-rose-200/20' : ''}
              `}>
                
                {/* Background Gradient Effect */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${promise.gradient} opacity-0 group-hover:opacity-5 
                  transition-opacity duration-500 rounded-3xl
                `}></div>
                
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className={`
                    w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${promise.gradient} p-4 shadow-lg
                    transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3
                  `}>
                    <promise.icon className="w-full h-full text-white" />
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -top-2 -right-2 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-rose-200/50 shadow-sm">
                    <span className="text-xs font-bold text-rose-600">{promise.stat}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center relative">
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                    {promise.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700 transition-colors">
                    {promise.description}
                  </p>
                </div>

                {/* Subtle Border Glow */}
                <div className={`
                  absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                  bg-gradient-to-br ${promise.gradient} blur-xl scale-105 -z-10
                `} style={{ filter: 'blur(20px)' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            <Users className="w-6 h-6 text-rose-500" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
          </div>
          
          <blockquote className="text-lg italic text-slate-700 font-light max-w-2xl mx-auto">
            "Where two souls unite in sacred harmony, honoring the past while embracing the future"
          </blockquote>
          
          <cite className="block text-sm text-slate-500 mt-3 font-medium not-italic">
            — The Shri Kalyanam Philosophy
          </cite>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-0.5deg); }
        }

        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(-10px); }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 10s ease-in-out infinite;
          animation-delay: 3s;
        }

        /* Reduce motion for accessibility */
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
