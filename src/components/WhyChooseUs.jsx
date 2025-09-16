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
  const [hoveredCard, setHoveredCard] = useState(null);
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
      desc: "Multi-step verification ensures every profile is genuine and trustworthy for your peace of mind.",
      color: "pink"
    },
    {
      icon: Lock,
      title: "Privacy First",
      stat: "Zero Breaches",
      desc: "End-to-end encryption and GDPR compliance protect your personal information at all times.",
      color: "rose"
    },
    {
      icon: Users,
      title: "Smart Matching",
      stat: "92% Success Rate",
      desc: "AI-powered algorithm considers cultural values, family background, and personal preferences.",
      color: "purple"
    },
    {
      icon: Smartphone,
      title: "Seamless Experience",
      stat: "4.9★ App Rating",
      desc: "Native mobile app with offline access, real-time notifications, and intuitive design.",
      color: "indigo"
    }
  ];

  const getColorClasses = (color, type = 'bg') => {
    const colors = {
      pink: {
        bg: 'bg-pink-500',
        bgHover: 'hover:bg-pink-600',
        bgLight: 'bg-pink-50',
        text: 'text-pink-500',
        textDark: 'text-pink-700',
        border: 'border-pink-200',
        gradient: 'from-pink-500 to-rose-500'
      },
      rose: {
        bg: 'bg-rose-500',
        bgHover: 'hover:bg-rose-600',
        bgLight: 'bg-rose-50',
        text: 'text-rose-500',
        textDark: 'text-rose-700',
        border: 'border-rose-200',
        gradient: 'from-rose-500 to-pink-500'
      },
      purple: {
        bg: 'bg-purple-500',
        bgHover: 'hover:bg-purple-600',
        bgLight: 'bg-purple-50',
        text: 'text-purple-500',
        textDark: 'text-purple-700',
        border: 'border-purple-200',
        gradient: 'from-purple-500 to-indigo-500'
      },
      indigo: {
        bg: 'bg-indigo-500',
        bgHover: 'hover:bg-indigo-600',
        bgLight: 'bg-indigo-50',
        text: 'text-indigo-500',
        textDark: 'text-indigo-700',
        border: 'border-indigo-200',
        gradient: 'from-indigo-500 to-purple-500'
      }
    };
    return colors[color] || colors.pink;
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="why-choose-us-heading"
      className="relative py-20 bg-gradient-to-br from-rose-50/50 via-white to-purple-50/50 overflow-hidden"
    >
      {/* Clean Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pink-100/30 blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 rounded-full bg-purple-100/30 blur-3xl"></div>
        
        {/* Subtle heart decorations */}
        <div className="absolute top-1/4 right-1/4 text-pink-200 text-lg opacity-30">♥</div>
        <div className="absolute bottom-1/3 left-1/4 text-rose-200 text-base opacity-30">♥</div>
        <div className="absolute top-2/3 right-1/6 text-purple-200 text-sm opacity-30">♥</div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Clean Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-pink-200 shadow-sm">
            <Heart className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-slate-700">
              Why Choose Us
            </span>
            <Star className="w-4 h-4 text-pink-500" />
          </div>
          
          <h2 id="why-choose-us-heading" className="text-4xl md:text-5xl font-light leading-tight mb-6 text-slate-800">
            <span className="block font-light">The Shri</span>
            <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent font-medium">
              Kalyanam Advantage
            </span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg text-slate-600 font-light leading-relaxed">
            Experience the perfect blend of traditional values and modern technology 
            for meaningful matrimonial connections.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const colorClasses = getColorClasses(feature.color);
            return (
              <article
                key={i}
                data-index={i}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative transition-all duration-500 ease-out group ${
                  visibleCards.has(i)
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-8 opacity-0 scale-95"
                } ${hoveredCard === i ? 'transform -translate-y-2' : ''}`}
                style={{ transitionDelay: `${100 * i}ms` }}
              >
                <div className="relative h-full bg-white rounded-2xl shadow-md hover:shadow-lg border border-slate-100 overflow-hidden p-6 transition-all duration-300">
                  
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${colorClasses.bgLight} border ${colorClasses.border} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                      <feature.icon className={`${colorClasses.text} w-7 h-7`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-slate-800">
                      {feature.title}
                    </h3>
                    
                    <div className={`inline-flex items-center px-3 py-1 ${colorClasses.bgLight} ${colorClasses.border} border rounded-full`}>
                      <Check className={`w-3 h-3 ${colorClasses.text} mr-2`} />
                      <span className={`text-sm font-medium ${colorClasses.textDark}`}>
                        {feature.stat}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 font-light leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>

                  {/* Hover Effect Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${colorClasses.gradient} transform transition-transform duration-500 ease-out ${hoveredCard === i ? 'translate-x-0' : 'translate-x-[-100%]'}`}></div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Trust Signals */}
        <div className="mt-16 space-y-8">
          {/* Awards & Recognition */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-white rounded-full shadow-sm border border-pink-100">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
              </div>
              <span className="text-slate-700 font-medium">Featured in Times of India</span>
              <div className="w-px h-4 bg-slate-300"></div>
              <span className="text-slate-600 font-light">Best Matrimonial Platform 2024</span>
            </div>
          </div>

          {/* Testimonial */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-pink-100">
              <div className="flex items-center justify-center space-x-1 mb-4">
                <Gem className="w-5 h-5 text-pink-500" />
                <div className="w-12 h-px bg-pink-200"></div>
                <Gem className="w-5 h-5 text-pink-500" />
              </div>
              
              <blockquote className="text-lg text-slate-700 font-light italic leading-relaxed mb-4">
                "Shri Kalyanam made our matrimonial search stress-free and meaningful. 
                The verified profiles and cultural matching helped us find our perfect life partner."
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full border-2 border-white"></div>
                </div>
                <cite className="text-sm text-slate-600 font-medium not-italic">
                  — Radhika & Raj, Chennai
                </cite>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-pink-100">
              <div className="text-3xl font-medium bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
                2L+
              </div>
              <div className="text-sm text-slate-600 font-light">Happy Marriages</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-purple-100">
              <div className="text-3xl font-medium bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent mb-2">
                50L+
              </div>
              <div className="text-sm text-slate-600 font-light">Verified Profiles</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-rose-100">
              <div className="text-3xl font-medium bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <div className="text-sm text-slate-600 font-light">Years of Trust</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float { 
          animation: float 6s ease-in-out infinite; 
        }
        @media (prefers-reduced-motion: reduce) {
          * { 
            transition-duration: 0.01ms !important; 
            animation-duration: 0.01ms !important; 
          }
        }
      `}</style>
    </section>
  );
} 