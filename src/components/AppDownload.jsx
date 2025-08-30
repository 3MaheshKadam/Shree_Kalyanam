// "use client"
// import { useState, useEffect } from 'react';
// import { Star, Download, CheckCircle, ChevronRight, Heart, Sparkles } from 'lucide-react';
// import Image from 'next/image';

// export default function AppDownloadSection() {
//   const [isLoaded, setIsLoaded] = useState(false);
  
//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   // App features list
//   const appFeatures = [
//     "Real-time match alerts",
//     "Secure messaging with verified profiles",
//     "Video verification for authenticity",
//     "Advanced filters for perfect compatibility"
//   ];

//   return (
//     <div className="relative w-full overflow-hidden bg-rose-900 py-20 lg:px-20">
//       {/* Decorative elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-rose-800/50 blur-3xl"></div>
//         <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-amber-800/30 blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content - Text and Download Buttons */}
//           <div className={`max-w-lg transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//             <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-rose-800/50 text-rose-100 text-sm font-medium">
//               <Sparkles size={14} />
//               <span>Mobile Experience</span>
//             </div>
            
//             <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 leading-tight">
//               Your Journey to Love
//               <span className="block text-amber-300 mt-2">In Your Pocket</span>
//             </h2>
            
//             <p className="text-rose-100/90 text-lg mb-8 leading-relaxed">
//               Experience seamless matchmaking with our sophisticated mobile application. 
//               Receive instant connections, explore compatible profiles, and build meaningful 
//               relationships—all from the convenience of your device.
//             </p>
            
//             {/* App features list */}
//             <div className="mb-10">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {appFeatures.map((feature, index) => (
//                   <div key={index} className="flex items-start space-x-3 text-rose-50">
//                     <div className="w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
//                       <CheckCircle size={14} className="text-amber-300" />
//                     </div>
//                     <span className="text-sm">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* App rating */}
//             <div className="flex items-center mb-8">
//               <div className="flex mr-2">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <Star 
//                     key={star} 
//                     size={18} 
//                     className="text-amber-400 fill-amber-400"
//                   />
//                 ))}
//               </div>
//               <span className="text-white font-medium">4.9/5</span>
//               <span className="text-rose-200/80 ml-2 text-sm">(10,000+ reviews)</span>
//             </div>
            
//             {/* Download buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 mb-8">
//               {/* App Store Button */}
//               <button className="px-6 py-3 bg-white rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group border border-gray-200/50">
//                 <div className="flex items-center">
//                   <div className="mr-3">
//                     <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-gray-900">
//                       <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
//                     </svg>
//                   </div>
//                   <div className="text-left">
//                     <div className="text-xs text-gray-600">Download on the</div>
//                     <div className="text-sm font-semibold text-gray-900">App Store</div>
//                   </div>
//                 </div>
//               </button>
              
//               {/* Google Play Button */}
//               <button className="px-6 py-3 bg-white rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group border border-gray-200/50">
//                 <div className="flex items-center">
//                   <div className="mr-3">
//                     <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-gray-900">
//                       <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5S3 21.33 3 20.5zM16.5 12L8.92 19.6c-.7.7-1.84.7-2.54 0-.7-.7-.7-1.84 0-2.54L11.98 12 6.38 6.4c-.7-.7-.7-1.84 0-2.54.7-.7 1.84-.7 2.54 0L16.5 12z" />
//                     </svg>
//                   </div>
//                   <div className="text-left">
//                     <div className="text-xs text-gray-600">GET IT ON</div>
//                     <div className="text-sm font-semibold text-gray-900">Google Play</div>
//                   </div>
//                 </div>
//               </button>
//             </div>
            
         
//           </div>
          
//           {/* Right Content - Phone Mockup */}
//           <div className={`flex justify-center transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//             <div className="relative">
//               {/* Main phone mockup */}
//               <div className="relative z-10">
//                 <div className="w-64 md:w-72 bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
//                   <div className="w-full rounded-[2.5rem] overflow-hidden border-8 border-gray-900">
//                     <Image
//                       width={280}
//                       height={560}
//                       src="/mobileView.png" 
//                       alt="App Screenshot" 
//                       className="w-full aspect-[9/17] object-cover"
//                     />
//                   </div>
//                   <div className="flex justify-center mt-4 mb-1">
//                     <div className="w-16 h-1 bg-gray-800 rounded-full"></div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Second phone (tilted in background) */}
//               <div className="absolute -right-20 top-20 -z-10 hidden md:block">
//                 <div className="w-64 transform -rotate-6 bg-gray-900 rounded-[3rem] p-3 opacity-70 shadow-xl">
//                   <div className="w-full rounded-[2.5rem] overflow-hidden border-8 border-gray-900">
//                     <Image
//                       width={280}
//                       height={560}
//                       src="/mobileView.png" 
//                       alt="App Screenshot" 
//                       className="w-full aspect-[9/16] object-cover"
//                     />
//                   </div>
//                 </div>
//               </div>
              
//               {/* Floating feature indicators */}
//               <div className="absolute top-20 -left-16 z-20 hidden lg:block">
//                 <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg flex items-center space-x-3 transform -rotate-6">
//                   <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
//                     <Download size={16} className="text-rose-600" />
//                   </div>
//                   <div>
//                     <div className="text-xs text-gray-500">Downloads</div>
//                     <div className="text-sm font-semibold">1M+</div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="absolute bottom-20 -left-8 z-20 hidden lg:block">
//                 <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg flex items-center space-x-3 transform rotate-3">
//                   <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
//                     <Heart size={16} className="text-amber-600" />
//                   </div>
//                   <div>
//                     <div className="text-xs text-gray-500">Success Stories</div>
//                     <div className="text-sm font-semibold">50K+</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client"
import { useState, useEffect } from 'react';
import { Star, Download, CheckCircle, ChevronRight, Heart, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function AppDownloadSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // App features list
  const appFeatures = [
    "Real-time match alerts",
    "Secure messaging with verified profiles",
    "Video verification for authenticity",
    "Advanced filters for perfect compatibility"
  ];

  return (
    <div className="relative w-full overflow-hidden bg-amber-100 py-20 lg:px-20">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-amber-200/50 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-orange-200/30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text and Download Buttons */}
          <div className={`max-w-lg transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-amber-200/70 text-amber-800 text-sm font-medium">
              <Sparkles size={14} />
              <span>Mobile Experience</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-6 leading-tight">
              Your Journey to Love
              <span className="block text-orange-600 mt-2">In Your Pocket</span>
            </h2>
            
            <p className="text-amber-800/90 text-lg mb-8 leading-relaxed">
              Experience seamless matchmaking with our sophisticated mobile application. 
              Receive instant connections, explore compatible profiles, and build meaningful 
              relationships—all from the convenience of your device.
            </p>
            
            {/* App features list */}
            <div className="mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {appFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 text-amber-900">
                    <div className="w-6 h-6 rounded-full bg-orange-300/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-orange-600" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* App rating */}
            <div className="flex items-center mb-8">
              <div className="flex mr-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    size={18} 
                    className="text-orange-500 fill-orange-500"
                  />
                ))}
              </div>
              <span className="text-amber-900 font-medium">4.9/5</span>
              <span className="text-amber-700/80 ml-2 text-sm">(10,000+ reviews)</span>
            </div>
            
            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* App Store Button */}
              <button className="px-6 py-3 bg-white rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group border border-amber-200/50">
                <div className="flex items-center">
                  <div className="mr-3">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-gray-900">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-600">Download on the</div>
                    <div className="text-sm font-semibold text-gray-900">App Store</div>
                  </div>
                </div>
              </button>
              
              {/* Google Play Button */}
              <button className="px-6 py-3 bg-white rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group border border-amber-200/50">
                <div className="flex items-center">
                  <div className="mr-3">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-gray-900">
                      <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5S3 21.33 3 20.5zM16.5 12L8.92 19.6c-.7.7-1.84.7-2.54 0-.7-.7-.7-1.84 0-2.54L11.98 12 6.38 6.4c-.7-.7-.7-1.84 0-2.54.7-.7 1.84-.7 2.54 0L16.5 12z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-600">GET IT ON</div>
                    <div className="text-sm font-semibold text-gray-900">Google Play</div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          
          {/* Right Content - Phone Mockup */}
          <div className={`flex justify-center transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              {/* Main phone mockup */}
              <div className="relative z-10">
                <div className="w-64 md:w-72 bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full rounded-[2.5rem] overflow-hidden border-8 border-gray-900">
                    <Image
                      width={280}
                      height={560}
                      src="/mobileView.png" 
                      alt="App Screenshot" 
                      className="w-full aspect-[9/17] object-cover"
                    />
                  </div>
                  <div className="flex justify-center mt-4 mb-1">
                    <div className="w-16 h-1 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Second phone (tilted in background) */}
              <div className="absolute -right-20 top-20 -z-10 hidden md:block">
                <div className="w-64 transform -rotate-6 bg-gray-900 rounded-[3rem] p-3 opacity-70 shadow-xl">
                  <div className="w-full rounded-[2.5rem] overflow-hidden border-8 border-gray-900">
                    <Image
                      width={280}
                      height={560}
                      src="/mobileView.png" 
                      alt="App Screenshot" 
                      className="w-full aspect-[9/16] object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating feature indicators */}
              <div className="absolute top-20 -left-16 z-20 hidden lg:block">
                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg flex items-center space-x-3 transform -rotate-6">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Download size={16} className="text-amber-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Downloads</div>
                    <div className="text-sm font-semibold">1M+</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-20 -left-8 z-20 hidden lg:block">
                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg flex items-center space-x-3 transform rotate-3">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Heart size={16} className="text-orange-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Success Stories</div>
                    <div className="text-sm font-semibold">50K+</div>
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
