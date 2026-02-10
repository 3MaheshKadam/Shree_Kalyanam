"use client"
import { useState, useEffect } from 'react';
import { Star, Download, CheckCircle2, Phone, ShieldCheck, Heart } from 'lucide-react';
import Image from 'next/image';

export default function AppDownloadSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">

        <div className={`bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-[3rem] p-8 lg:p-16 overflow-hidden shadow-2xl relative transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>

          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

          {/* Floating Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full blur-[100px]" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

            {/* Left Content */}
            <div className="text-white">
              <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6 inline-block">
                Download Our App
              </span>

              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
                Find Your Soulmate <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Anytime, Anywhere</span>
              </h2>

              <p className="text-white/70 text-lg mb-8 leading-relaxed max-w-md">
                Experience the best of matchmaking with our official mobile app.
                Get real-time notifications, chat securely, and find your perfect match on the go.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { icon: ShieldCheck, text: "100% Verified Profiles" },
                  { icon: Phone, text: "Secure Video Calling" },
                  { icon: Heart, text: "Chat on the Go" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-white/10 text-primary">
                      <item.icon size={18} />
                    </div>
                    <span className="text-white/90 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 group">
                  <img src="/assets/apple-logo.svg" alt="Apple" className="w-6 h-6" onError={(e) => e.target.style.display = 'none'} />
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Download on the</p>
                    <p className="text-sm font-bold">App Store</p>
                  </div>
                </button>

                <button className="flex items-center gap-3 px-6 py-3 bg-white/10 text-white border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                  <img src="/assets/play-store.svg" alt="Play Store" className="w-6 h-6" onError={(e) => e.target.style.display = 'none'} />
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/50">Get it on</p>
                    <p className="text-sm font-bold">Google Play</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative z-10 w-[280px] lg:w-[320px] rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-700 bg-gray-900">
                <Image
                  src="/final.jpg"
                  alt="App Screen"
                  width={400}
                  height={800}
                  className="w-full h-full object-cover"
                />

                {/* Notch & UI Elements Overlay */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-1/2 -right-4 lg:-right-12 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl z-20 animate-pulse-slow">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 text-green-400 rounded-full">
                    <Download size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold">1 Million+</p>
                    <p className="text-white/50 text-xs">Downloads</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}