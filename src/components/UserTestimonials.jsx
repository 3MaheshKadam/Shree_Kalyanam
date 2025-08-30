// "use client"
// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';

// const successStories = [
//   {
//     id: 1,
//     couple: "Aarushi & Siddharth",
//     location: "Jaipur, India",
//     story: "Shree Kalyanam’s thoughtful matchmaking process respected our values and preferences, leading us to a lifelong partnership filled with love and trust.",
//     image: "/images/couple-aarushi-siddharth.jpeg",
//     married: "January 2023",
//     storyLink: "/stories/aarushi-siddharth",
//   },
//   {
//     id: 2,
//     couple: "Meera & Rohan",
//     location: "Chennai, India",
//     story: "The platform’s astrological insights and secure verification gave us confidence to connect. Shree Kalyanam made our dream of a meaningful union come true.",
//     image: "/images/couple-meera-rohan.jpeg",
//     married: "June 2022",
//     storyLink: "/stories/meera-rohan",
//   },
//   {
//     id: 3,
//     couple: "Kavya & Aditya",
//     location: "Hyderabad, India",
//     story: "With busy lives, Shree Kalyanam’s intuitive interface helped us find each other effortlessly. We’re now building a future rooted in love and tradition.",
//     image: "/images/couple-kavya-aditya.jpeg",
//     married: "March 2024",
//     storyLink: "/stories/kavya-aditya",
//   },
//   {
//     id: 4,
//     couple: "Shalini & Vikrant",
//     location: "Pune, India",
//     story: "The personalized profiles and community focus of Shree Kalyanam brought us together. We’re grateful for a platform that honors our cultural heritage.",
//     image: "/images/couple-shalini-vikrant.jpeg",
//     married: "November 2023",
//     storyLink: "/stories/shalini-vikrant",
//   },
// ];

// export default function SuccessStories() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     setIsLoaded(true);
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % successStories.length);
//     }, 8000); // Auto-scroll every 8 seconds
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollTo({
//         left: currentIndex * (scrollRef.current.offsetWidth / 3),
//         behavior: 'smooth',
//       });
//     }
//   }, [currentIndex]);

//   const nextStory = () => {
//     setCurrentIndex((prev) => (prev + 1) % successStories.length);
//   };

//   const prevStory = () => {
//     setCurrentIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
//   };

//   return (
//     <div className="relative w-full bg-gradient-to-b from-amber-50 via-rose-50 to-white py-16 sm:py-16 lg:py-24 overflow-hidden">
//       {/* Decorative Background */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-rose-100/30 blur-3xl opacity-40"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-amber-100/30 blur-3xl opacity-40"></div>
//         <div className="absolute inset-0 bg-[url('/images/mandala-pattern.png')] bg-repeat bg-[length:300px_300px] opacity-5"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Header */}
//         <div className={`text-center mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'}`}>
//           <span className="inline-block px-5 py-2 rounded-full bg-rose-100/80 text-rose-700 text-sm sm:text-base font-semibold tracking-wide">
//             Shree Kalyanam Love Stories
//           </span>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-3 sm:mb-4 font-serif">
//             <span className="text-rose-600">Forever</span> Begins Here
//           </h2>
//           <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             Celebrate the journeys of couples united through Shree Kalyanam’s trusted matrimonial platform.
//           </p>
//         </div>

//         {/* Horizontal Scroll Carousel */}
//         <div className="relative max-w-7xl mx-auto overflow-visible">
//           <div
//             ref={scrollRef}
//             className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
//             style={{ scrollSnapType: 'x mandatory' }}
//           >
//             {successStories.map((story, index) => (
//               <div
//                 key={story.id}
//                 className={`w-[calc(100%/3)] flex-shrink-0 snap-start px-2 sm:px-3 transition-all duration-500 ease-in-out ${
//                   Math.abs(index - currentIndex) <= 1
//                     ? 'opacity-100 translate-x-0'
//                     : 'opacity-50 translate-x-4'
//                 }`}
//               >
//                 <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-rose-100/50 hover:shadow-2xl transition-all duration-300 h-full">
//                   {/* Image */}
//                   <div className="relative h-64 sm:h-72">
//                     <Image
//                       width={1280}
//                       height={720}
//                       src={story.image}
//                       alt={story.couple}
//                       className="w-full h-full object-cover"
//                       priority
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                     <div className="absolute bottom-0 left-0 p-4 sm:p-6">
//                       <h3 className="text-white text-lg sm:text-xl font-bold font-serif">{story.couple}</h3>
//                       <p className="text-rose-100 text-sm">{story.location}</p>
//                     </div>
//                   </div>
//                   {/* Content */}
//                   <div className="p-5 sm:p-6">
//                     <Heart className="text-rose-400 w-6 h-6 mb-3" />
//                     <p className="text-gray-700 text-base sm:text-lg font-light italic mb-4 leading-relaxed">
//                       "{story.story}"
//                     </p>
//                     <div className="flex justify-between items-center border-t border-rose-100/50 pt-3">
//                       <span className="text-sm text-gray-500">Married in {story.married}</span>
//                       <Link
//                         href={story.storyLink}
//                         className="text-rose-600 text-sm font-medium hover:text-rose-700 transition-colors"
//                       >
//                         Read Full Story →
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Arrows */}
//           <button
//             onClick={prevStory}
//             className="absolute -left-4 sm:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-rose-100 transition-all duration-300 z-20"
//             aria-label="Previous story"
//           >
//             <ChevronLeft className="text-rose-600 w-5 h-5 sm:w-6 sm:h-6" />
//           </button>
//           <button
//             onClick={nextStory}
//             className="absolute -right-4 sm:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-rose-100 transition-all duration-300 z-20"
//             aria-label="Next story"
//           >
//             <ChevronRight className="text-rose-600 w-5 h-5 sm:w-6 sm:h-6" />
//           </button>

//           {/* Dots Indicator */}
//           <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
//             {successStories.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
//                   index === currentIndex ? 'bg-rose-600 w-5 sm:w-6' : 'bg-rose-300/50 hover:bg-rose-400'
//                 }`}
//                 aria-label={`Go to story ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center mt-10 sm:mt-12 lg:mt-16">
//           <Link
//             href="/join-now"
//             className="inline-block px-8 py-3 sm:px-10 sm:py-4 bg-rose-600 text-white rounded-full text-base sm:text-lg font-semibold hover:bg-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl"
//           >
//             Find Your Life Partner Today
//           </Link>
//         </div>
//       </div>

//       {/* Hide Scrollbar CSS */}
//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// }
"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const successStories = [
  {
    id: 1,
    couple: "Aarushi & Siddharth",
    location: "Jaipur, India",
    story: "Shree Kalyanam’s thoughtful matchmaking process respected our values and preferences, leading us to a lifelong partnership filled with love and trust.",
    image: "/images/couple-3.jpeg",
    married: "January 2023",
    storyLink: "/stories/aarushi-siddharth",
  },
  {
    id: 2,
    couple: "Meera & Rohan",
    location: "Chennai, India",
    story: "The platform’s astrological insights and secure verification gave us confidence to connect. Shree Kalyanam made our dream of a meaningful union come true.",
    image: "/images/couple-1.jpeg",
    married: "June 2022",
    storyLink: "/stories/meera-rohan",
  },
  // {
  //   id: 3,
  //   couple: "Kavya & Aditya",
  //   location: "Hyderabad, India",
  //   story: "With busy lives, Shree Kalyanam’s intuitive interface helped us find each other effortlessly. We’re now building a future rooted in love and tradition.",
  //   image: "/images/couple-kavya-aditya.jpeg",
  //   married: "March 2024",
  //   storyLink: "/stories/kavya-aditya",
  // },
  {
    id: 4,
    couple: "Shalini & Vikrant",
    location: "Pune, India",
    story: "The personalized profiles and community focus of Shree Kalyanam brought us together. We’re grateful for a platform that honors our cultural heritage.",
    image: "/images/couple-2.jpeg",
    married: "November 2023",
    storyLink: "/stories/shalini-vikrant",
  },
];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % successStories.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: currentIndex * (scrollRef.current.offsetWidth / 3),
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  return (
    <div id='success-stories' className="relative w-full bg-gradient-to-b from-amber-50 via-rose-50 to-white py-8 sm:py-16 lg:py-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-rose-100/30 blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-amber-100/30 blur-3xl opacity-40"></div>
        <div className="absolute inset-0 bg-[url('/images/mandala-pattern.png')] bg-repeat bg-[length:300px_300px] opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'}`}>
          <span className="inline-block px-5 py-2 rounded-full bg-rose-100/80 text-rose-700 text-sm sm:text-base font-semibold tracking-wide">
            Shree Kalyanam Love Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-3 sm:mb-4 font-serif">
            <span className="text-rose-600">Forever</span> Begins Here
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Celebrate the journeys of couples united through Shree Kalyanam’s trusted matrimonial platform.
          </p>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div className="relative max-w-7xl mx-auto overflow-visible">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {successStories.map((story, index) => (
              <div
                key={story.id}
                className={`w-[calc(100%/3)] flex-shrink-0 snap-start px-2 sm:px-3 transition-all duration-500 ease-in-out ${
                  Math.abs(index - currentIndex) <= 1
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-50 translate-x-4'
                }`}
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-rose-100/50 hover:shadow-xl transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="relative h-64 sm:h-72">
                    <Image
                      width={1280}
                      height={720}
                      src={story.image}
                      alt={story.couple}
                      className="w-full h-full object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                      <h3 className="text-white text-lg sm:text-xl font-bold font-serif">{story.couple}</h3>
                      <p className="text-rose-100 text-sm">{story.location}</p>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <Heart className="text-rose-400 w-6 h-6 mb-3" />
                    <p className="text-gray-700 text-base sm:text-lg font-light italic mb-4 leading-relaxed">
                      "{story.story}"
                    </p>
                    <div className="flex justify-between items-center border-t border-rose-100/50 pt-3">
                      <span className="text-sm text-gray-500">Married in {story.married}</span>
                      <Link
                        href={story.storyLink}
                        className="text-rose-600 text-sm font-medium hover:text-rose-700 transition-colors"
                      >
                        Read Full Story →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevStory}
            className="absolute -left-4 sm:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-rose-100 transition-all duration-300 z-20"
            aria-label="Previous story"
          >
            <ChevronLeft className="text-rose-600 w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextStory}
            className="absolute -right-4 sm:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-rose-100 transition-all duration-300 z-20"
            aria-label="Next story"
          >
            <ChevronRight className="text-rose-600 w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-rose-600 w-5 sm:w-6' : 'bg-rose-300/50 hover:bg-rose-400'
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <Link
            href="/join-now"
            className="inline-block px-8 py-3 sm:px-10 sm:py-4 bg-rose-600 text-white rounded-full text-base sm:text-lg font-semibold hover:bg-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Find Your Life Partner Today
          </Link>
        </div>
      </div>

      {/* Hide Scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}