// "use client";
// import { useState, useEffect } from 'react';
// import { Heart, User, Menu, X } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function MatrimonialNavbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', href: '/' },
//     { name: 'Browse Profiles', href: '#browse-profiles' },
//     { name: 'Success Stories', href: '#success-stories' },
//     { name: 'About Us', href: '/about' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-500 ${
//       isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 py-4'
//     }`}>
//       <div className="container mx-auto px-4 flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="flex items-center space-x-3">
//           <Image 
//             src="/logo.jpeg" 
//             width={48} 
//             height={48} 
//             className="w-12 h-12 rounded-full object-cover" 
//             alt="Shree Kalyanam Logo"
//             priority
//           />
//           <span className="font-serif text-2xl font-bold text-gray-800 tracking-tight">
//             Shree<span className="text-rose-600">Kalyanam</span>
//           </span>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center space-x-10">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className="relative text-gray-700 font-medium text-base hover:text-rose-600 transition-colors duration-300 group"
//             >
//               {item.name}
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           ))}
//         </div>

//         {/* Auth Buttons - Desktop */}
//         <div className="hidden lg:flex items-center space-x-5">
//           <Link 
//             href="/login" 
//             className="px-5 py-2.5 text-rose-600 border-2 border-rose-600 rounded-full font-medium hover:bg-rose-50 transition-all duration-300"
//           >
//             Login
//           </Link>
//           {/* <Link 
//             href="/register" 
//             className="px-5 py-2.5 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full font-medium hover:from-rose-600 hover:to-rose-700 transition-all duration-300 flex items-center"
//           >
//             Register
//             <User size={16} className="ml-2" />
//           </Link> */}
//         </div>

//         {/* Mobile Menu Button */}
//         <button 
//           className="lg:hidden text-gray-700 hover:text-rose-600 transition-colors duration-200"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//         >
//           {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3, ease: 'easeInOut' }}
//             className="lg:hidden bg-white shadow-xl"
//           >
//             <div className="flex flex-col p-6 space-y-4">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="text-gray-700 py-2 text-lg font-medium hover:text-rose-600 transition-colors duration-200"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <div className="pt-4 flex flex-col space-y-3">
//                 <Link 
//                   href="/login" 
//                   className="w-full py-3 text-center text-rose-600 border-2 border-rose-600 rounded-full font-medium hover:bg-rose-50 transition-colors duration-300"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Login
//                 </Link>
           
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }
"use client";
import { useState, useEffect } from 'react';
import { Heart, User, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function MatrimonialNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Browse Profiles', href: '#browse-profiles' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-amber-50 shadow-lg py-3' : 'bg-amber-100/50 py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image 
            src="/logo.jpeg" 
            width={48} 
            height={48} 
            className="w-12 h-12 rounded-full object-cover" 
            alt="Shree Kalyanam Logo"
            priority
          />
          <span className="font-serif text-2xl font-bold text-amber-900 tracking-tight">
            Shree<span className="text-orange-600">Kalyanam</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-amber-800 font-medium text-base hover:text-orange-600 transition-colors duration-300 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Auth Buttons - Desktop */}
        <div className="hidden lg:flex items-center space-x-5">
          <Link 
            href="/login" 
            className="px-5 py-2.5 text-orange-600 border-2 border-orange-600 rounded-full font-medium hover:bg-orange-50 transition-all duration-300"
          >
            Login
          </Link>
          {/* <Link 
            href="/register" 
            className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center"
          >
            Register
            <User size={16} className="ml-2" />
          </Link> */}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-amber-800 hover:text-orange-600 transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-amber-100 shadow-xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-amber-800 py-2 text-lg font-medium hover:text-orange-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <Link 
                  href="/login" 
                  className="w-full py-3 text-center text-orange-600 border-2 border-orange-600 rounded-full font-medium hover:bg-orange-50 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
