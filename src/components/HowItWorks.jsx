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
      title: "Verified & Trusted",
      description: "Every profile undergoes thorough verification with family background checks to ensure authenticity and trustworthiness.",
      stat: "99.8% Verified",
      gradient: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    },
    {
      icon: Heart,
      title: "Cultural Values",
      description: "We honor traditional Indian values while embracing modern approaches to finding your perfect life partner.",
      stat: "Sacred Bonds",
      gradient: "from-rose-500 to-purple-500",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200"
    },
    {
      icon: Star,
      title: "Personalized Matching",
      description: "AI-powered compatibility analysis combined with personal consultation to find matches that truly align with your preferences.",
      stat: "92% Success",
      gradient: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-rose-50/40 via-white to-purple-50/40 overflow-hidden">
      {/* Clean Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 w-64 h-64 rounded-full bg-pink-100/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-16 right-16 w-80 h-80 rounded-full bg-purple-100/20 blur-3xl animate-float-delay"></div>
        
        {/* Subtle heart decorations */}
        <div className="absolute top-1/4 right-1/4 text-pink-200 text-xl opacity-30">♥</div>
        <div className="absolute bottom-1/3 left-1/4 text-rose-200 text-lg opacity-30">♥</div>
        <div className="absolute top-2/3 right-1/6 text-purple-200 text-base opacity-30">♥</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        {/* Clean Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-pink-200 shadow-sm">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-slate-700">Our Promise</span>
            <Crown className="w-4 h-4 text-purple-500" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight text-slate-800">
            <span className="block font-light">The Shri</span>
            <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent font-medium mt-2">
              Kalyanam Promise
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Where sacred traditions meet modern technology, creating meaningful connections 
            that honor both cultural values and personal aspirations
          </p>
        </div>

        {/* Promise Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                relative bg-white rounded-2xl p-8 shadow-md hover:shadow-lg 
                transition-all duration-500 border border-slate-100 overflow-hidden
                ${activeCard === index ? 'ring-2 ring-pink-300/50 shadow-pink-200/20' : ''}
              `}>
                
                {/* Subtle Background Gradient */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${promise.gradient} opacity-0 group-hover:opacity-5 
                  transition-opacity duration-500 rounded-2xl
                `}></div>
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`
                    w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${promise.gradient} p-4 shadow-sm
                    transform transition-transform duration-500 group-hover:scale-110
                  `}>
                    <promise.icon className="w-full h-full text-white" />
                  </div>
                  
                  {/* Badge */}
                  <div className={`
                    absolute -top-2 -right-6 px-3 py-1 ${promise.bgColor} ${promise.borderColor} border
                    rounded-full shadow-sm
                  `}>
                    <span className="text-xs font-medium text-slate-700">{promise.stat}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center relative space-y-4">
                  <h3 className="text-xl font-medium text-slate-800 group-hover:text-slate-900 transition-colors">
                    {promise.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed font-light group-hover:text-slate-700 transition-colors">
                    {promise.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className={`
                  absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${promise.gradient} 
                  transform transition-transform duration-500 
                  ${activeCard === index ? 'scale-x-100' : 'scale-x-0'}
                `}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 space-y-8">
          {/* Statistics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-pink-100">
              <div className="text-3xl font-medium bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <div className="text-sm text-slate-600 font-light">Years of Excellence</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-purple-100">
              <div className="text-3xl font-medium bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent mb-2">
                2L+
              </div>
              <div className="text-sm text-slate-600 font-light">Success Stories</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-rose-100">
              <div className="text-3xl font-medium bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-2">
                50L+
              </div>
              <div className="text-sm text-slate-600 font-light">Trusted Families</div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className={`text-center transition-all duration-1000 delay-700 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-pink-100">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
                <Users className="w-5 h-5 text-pink-500" />
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
              </div>
              
              <blockquote className="text-lg italic text-slate-700 font-light leading-relaxed mb-4">
                "Where two hearts unite in sacred harmony, honoring the wisdom of tradition 
                while embracing the promise of tomorrow"
              </blockquote>
              
              <cite className="text-sm text-slate-500 font-medium not-italic">
                — The Shree Kalyanam Philosophy
              </cite>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-medium rounded-full hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
              Begin Your Journey
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(-8px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
          animation-delay: 2s;
        }

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