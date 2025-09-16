"use client"
import { useState, useEffect } from 'react';
import { Star, Download, CheckCircle, ChevronRight, Heart, Sparkles, Shield } from 'lucide-react';
import Image from 'next/image';

export default function AppDownloadSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // App features list
  const appFeatures = [
    "Real-time match notifications",
    "Secure messaging with verified profiles", 
    "Video call feature for authentic connections",
    "Advanced filters for cultural compatibility"
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-rose-50/40 via-white to-purple-50/40 py-20">
      {/* Clean Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-pink-100/30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-100/30 blur-3xl"></div>
        
        {/* Subtle heart decorations */}
        <div className="absolute top-1/4 right-1/4 text-pink-200 text-lg opacity-30">♥</div>
        <div className="absolute bottom-1/3 left-1/4 text-rose-200 text-base opacity-30">♥</div>
        <div className="absolute top-2/3 right-1/6 text-purple-200 text-sm opacity-30">♥</div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text and Download Buttons */}
          <div className={`max-w-lg transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white border border-pink-200 text-pink-700 text-sm font-medium shadow-sm">
              <Sparkles size={14} />
              <span>Mobile Experience</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-6 leading-tight">
              <span className="block font-light">Your Perfect Match</span>
              <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent font-medium mt-2">
                Just a Tap Away
              </span>
            </h2>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed font-light">
              Experience seamless matrimonial connections with our intuitive mobile app. 
              Find compatible matches, connect with verified families, and build meaningful 
              relationships—all from the comfort of your device.
            </p>
            
            {/* App features list */}
            <div className="mb-8">
              <div className="space-y-4">
                {appFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-pink-600" />
                    </div>
                    <span className="text-slate-600 font-light">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* App rating */}
            <div className="flex items-center mb-8 p-4 bg-white rounded-xl border border-pink-100 shadow-sm">
              <div className="flex mr-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    size={18} 
                    className="text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-slate-800 font-medium">4.9/5 Rating</span>
                <span className="text-slate-500 text-sm">(50,000+ reviews)</span>
              </div>
            </div>
            
            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* App Store Button */}
              <button className="px-6 py-3 bg-white rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group border border-pink-200">
                <div className="flex items-center">
                  <div className="mr-3">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-gray-900">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-600">Download on the</div>
                    <div className="text-sm font-medium text-gray-900">App Store</div>
                  </div>
                </div>
              </button>
              
              {/* Google Play Button */}
              <button className="px-6 py-3 bg-white rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group border border-pink-200">
                <div className="flex items-center">
                  <div className="mr-3">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-gray-900">
                      <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5S3 21.33 3 20.5zM16.5 12L8.92 19.6c-.7.7-1.84.7-2.54 0-.7-.7-.7-1.84 0-2.54L11.98 12 6.38 6.4c-.7-.7-.7-1.84 0-2.54.7-.7 1.84-.7 2.54 0L16.5 12z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-600">GET IT ON</div>
                    <div className="text-sm font-medium text-gray-900">Google Play</div>
                  </div>
                </div>
              </button>
            </div>

            {/* Quick stats */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
                  <Download size={14} className="text-white" />
                </div>
                <div>
                  <div className="font-medium text-slate-800">1M+</div>
                  <div className="text-slate-500 text-xs">Downloads</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                  <Heart size={14} className="text-white" />
                </div>
                <div>
                  <div className="font-medium text-slate-800">2L+</div>
                  <div className="text-slate-500 text-xs">Connections</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Phone Mockup */}
          <div className={`flex justify-center transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              {/* Main phone mockup */}
              <div className="relative z-10">
                <div className="w-64 md:w-72 bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full rounded-[2.5rem] overflow-hidden border-4 border-slate-700">
                    <Image
                      width={280}
                      height={560}
                      src="/home.jpeg" 
                      alt="Shri Kalyanam App Screenshot" 
                      className="w-full aspect-[9/17] object-cover"
                    />
                  </div>
                  <div className="flex justify-center mt-3 mb-1">
                    <div className="w-12 h-1 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Second phone (tilted in background) */}
              <div className="absolute -right-16 top-16 -z-10 hidden md:block">
                <div className="w-56 transform rotate-12 bg-gradient-to-b from-slate-700 to-slate-800 rounded-[2.5rem] p-2 opacity-60 shadow-xl">
                  <div className="w-full rounded-[2rem] overflow-hidden border-4 border-slate-600">
                    <Image
                      width={240}
                      height={480}
                      src="/home.jpeg" 
                      alt="App Screenshot" 
                      className="w-full aspect-[9/16] object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating feature indicators */}
              <div className="absolute top-16 -left-12 z-20 hidden lg:block">
                <div className="bg-white rounded-xl shadow-lg p-4 border border-pink-100 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
                      <Shield size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Verified Profiles</div>
                      <div className="text-sm font-medium text-slate-800">99.8%</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-16 -left-6 z-20 hidden lg:block">
                <div className="bg-white rounded-xl shadow-lg p-4 border border-purple-100 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                      <Heart size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Success Rate</div>
                      <div className="text-sm font-medium text-slate-800">92%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third floating element */}
              <div className="absolute top-1/2 -right-8 z-20 hidden xl:block">
                <div className="bg-white rounded-xl shadow-lg p-3 border border-rose-100 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center">
                      <Star size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Rating</div>
                      <div className="text-sm font-medium text-slate-800">4.9★</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}