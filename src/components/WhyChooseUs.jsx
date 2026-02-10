"use client"
import { useState, useEffect } from 'react';
import { Shield, Users, Lock, Smartphone, HeartHandshake, Sparkles, CheckCircle2, Fingerprint, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative py-24 w-full bg-[#FFF8FA] overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">

        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-secondary/10 shadow-sm mb-6">
            <Sparkles size={14} className="text-primary" />
            <span className="uppercase tracking-widest text-[10px] font-bold text-secondary/70">Why Choose Us</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6 leading-tight">
            Designed for <span className="relative inline-block text-primary">Serious Relationships
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7509 2.15575 102.49 2.48835 200.001 6.99997" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
            </span>
          </h2>

          <p className="text-lg text-secondary/60 font-light leading-relaxed">
            We prioritize safety, privacy, and compatibility to ensure your journey to marriage is smooth and secure.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

          {/* Card 1: Large Feature (Span 2) */}
          <div className={`col-span-1 md:col-span-2 bg-gradient-to-br from-[#FFF5F8] to-white border border-primary/10 rounded-[2.5rem] p-10 relative overflow-hidden group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[100px] transition-transform duration-700 group-hover:scale-110" />

            <div className="relative z-10 flex flex-col items-start h-full justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary mb-6">
                  <Shield size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-secondary mb-4">100% Verified Profiles</h3>
                <p className="text-secondary/60 text-lg leading-relaxed max-w-md">
                  We strictly verify every profile with government ID and phone number to ensure a zero-tolerance policy against fake profiles.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <div className="px-4 py-2 bg-white rounded-full text-sm font-medium text-secondary/80 shadow-sm border border-secondary/5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  Phone Verified
                </div>
                <div className="px-4 py-2 bg-white rounded-full text-sm font-medium text-secondary/80 shadow-sm border border-secondary/5 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  ID Verified
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Vertical Feature (Span 1) */}
          <div className={`col-span-1 md:row-span-2 bg-gradient-to-b from-[#F3F0FF] to-white border border-purple-100 rounded-[2.5rem] p-10 relative overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-500 delay-100 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-60 transition-transform duration-700 group-hover:scale-125" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-purple-600 mb-6">
                <Smartphone size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-secondary mb-4">Designed for Mobile</h3>
              <p className="text-secondary/60 text-lg leading-relaxed mb-auto">
                Experience our seamless, intuitive app designed to help you connect on the go. Chat, browse, and interact effortlessly.
              </p>

              <div className="mt-10 relative h-64 w-full bg-white rounded-t-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] p-4 border border-purple-50">
                {/* Mock UI Elements */}
                <div className="w-full h-2 bg-purple-100 rounded-full mb-3" />
                <div className="w-2/3 h-2 bg-purple-50 rounded-full mb-6" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-purple-50 rounded-xl h-24 w-full" />
                  <div className="bg-purple-50 rounded-xl h-24 w-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Feature (Span 1) */}
          <div className={`col-span-1 bg-gradient-to-br from-[#FFF8E1] to-white border border-orange-100 rounded-[2.5rem] p-10 relative overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-500 delay-200 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-orange-500 mb-6">
                <Lock size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-secondary mb-3">Total Privacy</h3>
              <p className="text-secondary/60 font-light text-sm leading-relaxed">
                You are in control. Decide who sees your photos and contact details. Zero spam, complete peace of mind.
              </p>
            </div>
          </div>

          {/* Card 4: Feature (Span 1) */}
          <div className={`col-span-1 bg-gradient-to-br from-[#ECFDF5] to-white border border-green-100 rounded-[2.5rem] p-10 relative overflow-hidden group hover:shadow-2xl hover:shadow-green-500/5 transition-all duration-500 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-green-600 mb-6">
                <Users size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-secondary mb-3">Community Match</h3>
              <p className="text-secondary/60 font-light text-sm leading-relaxed">
                Our algorithms connect you with families that share your culture, values, and lifestyle preferences.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
