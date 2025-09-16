// "use client";
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// export default function About() {
//   const teamMembers = [
//     { name: 'Priya Sharma', role: 'Founder & CEO', image: '/team/priya.jpg' },
//     { name: 'Rahul Verma', role: 'Head of Operations', image: '/team/rahul.jpg' },
//     { name: 'Anita Desai', role: 'Community Manager', image: '/team/anita.jpg' },
//   ];

//   // Animation variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//   };

//   const staggerChildren = {
//     visible: { transition: { staggerChildren: 0.2 } }
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
//       {/* Hero Section */}
//       <section className="relative py-28 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-rose-100/20 to-pink-100/20"></div>
//         <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] opacity-5"></div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center max-w-3xl mx-auto"
//           >
//             <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-800 mb-6 leading-tight">
//               About <span className="text-rose-600">ShreeKalyanam</span>
//             </h1>
//             <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mb-8"></div>
//             <p className="text-xl text-gray-600 leading-relaxed">
//               Shree Kalyanam is your trusted partner in finding lifelong companionship. We blend tradition with modern technology to create meaningful connections rooted in trust, respect, and shared values.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerChildren}
//             className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
//           >
//             <motion.div 
//               variants={fadeInUp}
//               className="bg-white p-10 rounded-2xl shadow-lg border border-rose-100 relative overflow-hidden"
//             >
//               <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-bl-full"></div>
//               <div className="relative z-10">
//                 <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mb-6">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                   </svg>
//                 </div>
//                 <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">Our Mission</h2>
//                 <p className="text-gray-600 leading-relaxed">
//                   To empower individuals to find their perfect life partner through a secure, user-friendly, and culturally sensitive platform that celebrates love and commitment.
//                 </p>
//               </div>
//             </motion.div>
            
//             <motion.div 
//               variants={fadeInUp}
//               className="bg-white p-10 rounded-2xl shadow-lg border border-pink-100 relative overflow-hidden"
//             >
//               <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-50 rounded-tr-full"></div>
//               <div className="relative z-10">
//                 <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                   </svg>
//                 </div>
//                 <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">Our Vision</h2>
//                 <p className="text-gray-600 leading-relaxed">
//                   To be the most trusted matrimonial platform globally, fostering meaningful relationships that honor traditions while embracing modern values.
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Our Story */}
//       <section className="py-20 bg-gradient-to-r from-rose-50 to-pink-50">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="max-w-4xl mx-auto bg-white p-12 rounded-2xl shadow-lg relative overflow-hidden"
//           >
//             <div className="absolute -top-10 -left-10 w-40 h-40 bg-rose-200 rounded-full opacity-20"></div>
//             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-200 rounded-full opacity-20"></div>
            
//             <div className="relative z-10">
//               <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6 text-center">Our Story</h2>
//               <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mb-10"></div>
//               <p className="text-lg text-gray-600 leading-relaxed text-center">
//                 Founded in 2020, Shree Kalyanam was born from a passion to simplify the journey of finding a life partner. Our founders, inspired by the beauty of meaningful relationships, set out to create a platform that bridges traditional values with modern convenience. Today, we are proud to have helped thousands of individuals find love and build lasting bonds.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Our Team */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center max-w-2xl mx-auto mb-16"
//           >
//             <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">Meet Our Team</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mb-6"></div>
//             <p className="text-gray-600">
//               Dedicated professionals committed to helping you find your perfect match
//             </p>
//           </motion.div>
          
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerChildren}
//             className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
//           >
//             {teamMembers.map((member, index) => (
//               <motion.div
//                 key={member.name}
//                 variants={fadeInUp}
//                 className="bg-white p-6 rounded-2xl shadow-md text-center group hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="relative mx-auto w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-rose-100 transition-all duration-300">
//                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rose-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//                   <Image
//                     src={member.image}
//                     fill
//                     className="object-cover group-hover:scale-105 transition-transform duration-300"
//                     alt={`${member.name} - ${member.role}`}
//                   />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
//                 <p className="text-rose-600 font-medium mb-4">{member.role}</p>
//                 <div className="flex justify-center space-x-4">
//                   <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors duration-300">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
//                     </svg>
//                   </a>
//                   <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors duration-300">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                     </svg>
//                   </a>
//                   <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors duration-300">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
//                     </svg>
//                   </a>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center max-w-3xl mx-auto"
//           >
//             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Begin Your Journey Today</h2>
//             <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
//               Start your journey to find your perfect match with a platform that cares about your happiness.
//             </p>
//             <Link
//               href="/register"
//               className="inline-block px-8 py-4 bg-white text-rose-600 rounded-full font-medium hover:bg-rose-50 transition-all duration-300 shadow-lg hover:shadow-xl"
//             >
//               Create Your Profile
//             </Link>
//             <p className="mt-6 text-rose-100 text-sm">
//               Already have an account?{' '}
//               <Link href="/login" className="text-white font-medium hover:underline">
//                 Sign in
//               </Link>
//             </p>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  const teamMembers = [
    { name: 'Priya Sharma', role: 'Founder & CEO', image: '/team/priya.jpg' },
    { name: 'Rahul Verma', role: 'Head of Operations', image: '/team/rahul.jpg' },
    { name: 'Anita Desai', role: 'Community Manager', image: '/team/anita.jpg' },
  ];

  // Enhanced animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 1,
        ease: "easeOut"
      } 
    }
  };

  const staggerChildren = {
    visible: { 
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      } 
    }
  };

  const imageHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const cardHover = {
    rest: { y: 0 },
    hover: { 
      y: -10,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50/30 via-white to-rose-50/20">
      {/* Enhanced Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100/30 via-pink-100/20 to-amber-100/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-3 h-3 bg-rose-400 rounded-full mr-3"></div>
              <span className="text-rose-600 font-medium tracking-wider text-sm uppercase">About Us</span>
              <div className="w-3 h-3 bg-rose-400 rounded-full ml-3"></div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-800 mb-6 leading-tight">
              About <span className="text-rose-600 relative">
                ShreeKalyanam
                <svg className="absolute -bottom-4 left-0 w-full" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0 6 C 50 6 150 4 200 6" stroke="currentColor" strokeWidth="2" fill="none" className="opacity-50" />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Shree Kalyanam is your trusted partner in finding lifelong companionship. We blend tradition with modern technology to create meaningful connections rooted in trust, respect, and shared values.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
          >
            <motion.div 
              variants={fadeInUp}
              className="relative group"
              whileHover="hover"
              initial="rest"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
              <div className="relative bg-white p-10 rounded-2xl shadow-sm border border-rose-100/50 overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-40 h-40 bg-rose-50 rounded-bl-full -mr-20 -mt-20"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-rose-200 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">Our Mission</h2>
                  <p className="text-gray-600 leading-relaxed">
                    To empower individuals to find their perfect life partner through a secure, user-friendly, and culturally sensitive platform that celebrates love and commitment.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="relative group"
              whileHover="hover"
              initial="rest"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
              <div className="relative bg-white p-10 rounded-2xl shadow-sm border border-pink-100/50 overflow-hidden h-full">
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-50 rounded-tr-full -ml-20 -mb-20"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">Our Vision</h2>
                  <p className="text-gray-600 leading-relaxed">
                    To be the most trusted matrimonial platform globally, fostering meaningful relationships that honor traditions while embracing modern values.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Our Story */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/40 to-pink-50/40"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-rose-200 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full opacity-10 translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-sm border border-white relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-rose-200/30 rounded-full"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-200/30 rounded-full"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-px bg-rose-300 mr-4"></div>
                  <h2 className="text-3xl font-serif font-bold text-gray-800 text-center">Our Story</h2>
                  <div className="w-16 h-px bg-rose-300 ml-4"></div>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
                  Founded in 2020, Shree Kalyanam was born from a passion to simplify the journey of finding a life partner. Our founders, inspired by the beauty of meaningful relationships, set out to create a platform that bridges traditional values with modern convenience. Today, we are proud to have helped thousands of individuals find love and build lasting bonds.
                </p>
                
                <div className="flex justify-center mt-10">
                  <div className="grid grid-cols-3 gap-6 max-w-md">
                    {[5, 2, 3].map((year, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="text-center"
                      >
                        <div className="text-3xl font-serif font-bold text-rose-600">{year}+</div>
                        <div className="text-sm text-gray-500 mt-1">Years</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Our Team */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-rose-400 rounded-full mr-3"></div>
              <span className="text-rose-600 font-medium tracking-wider text-sm uppercase">Our Team</span>
              <div className="w-3 h-3 bg-rose-400 rounded-full ml-3"></div>
            </div>
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Dedicated professionals committed to helping you find your perfect match
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="group relative"
                whileHover="hover"
                initial="rest"
              >
                <motion.div 
                  variants={cardHover}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center relative overflow-hidden h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rose-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <motion.div 
                      variants={imageHover}
                      className="relative mx-auto w-44 h-44 mb-8 rounded-full overflow-hidden border-4 border-white shadow-lg"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rose-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Image
                        src={member.image}
                        fill
                        className="object-cover"
                        alt={`${member.name} - ${member.role}`}
                      />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-rose-600 font-medium mb-6">{member.role}</p>
                    <div className="flex justify-center space-x-5">
                      {['facebook', 'twitter', 'github'].map((social, i) => (
                        <motion.a 
                          key={i}
                          href="#" 
                          className="text-gray-400 hover:text-rose-500 transition-colors duration-300"
                          whileHover={{ y: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            {social === 'facebook' && (
                              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            )}
                            {social === 'twitter' && (
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            )}
                            {social === 'github' && (
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            )}
                          </svg>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-white.svg')] opacity-10"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-500/20 rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Begin Your Journey Today</h2>
            <p className="text-lg mb-10 text-rose-100 max-w-xl mx-auto">
              Start your journey to find your perfect match with a platform that cares about your happiness.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/register"
                className="inline-block px-8 py-4 bg-white text-rose-600 rounded-full font-medium hover:bg-rose-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Create Your Profile
              </Link>
            </motion.div>
            <p className="mt-8 text-rose-100 text-sm">
              Already have an account?{' '}
              <Link href="/login" className="text-white font-medium hover:underline underline-offset-2">
                Sign in
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}