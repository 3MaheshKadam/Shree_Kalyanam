"use client";
import { useState, useEffect } from 'react';
import { Heart, User, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-pink-100' 
        : 'bg-white/80 backdrop-blur-sm py-4 border-b border-pink-50'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo with Image */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-pink-200 shadow-md group-hover:shadow-lg transition-shadow duration-300">
              <Image 
                src="/logo.jpeg" 
                width={48} 
                height={48} 
                className="w-full h-full object-cover" 
                alt="Shri Kalyanam Logo"
                priority
              />
            </div>
            {/* Verification badge */}
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center border-2 border-white">
              <Heart className="w-2 h-2 text-white" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-light text-xl text-slate-800 tracking-tight leading-tight">
              Shri
            </span>
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent font-medium text-xl leading-tight">
              Kalyanam
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-slate-700 font-medium text-base hover:text-pink-600 transition-colors duration-300 group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          ))}
        </div>

        {/* Auth Buttons - Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link 
            href="/login" 
            className="px-6 py-2.5 text-slate-700 border border-pink-200 rounded-full font-medium hover:bg-pink-50 hover:border-pink-300 hover:text-pink-700 transition-all duration-300"
          >
            Login
          </Link>
          <Link 
            href="/register" 
            className="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full font-medium hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 flex items-center"
          >
            Register
            <Heart size={16} className="ml-2" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-slate-700 hover:text-pink-600 transition-colors duration-200 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-pink-100 shadow-lg">
          <div className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-700 py-3 text-lg font-medium hover:text-pink-600 transition-colors duration-200 border-b border-pink-50 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Auth Buttons */}
            <div className="pt-4 flex flex-col space-y-3">
              <Link 
                href="/login" 
                className="w-full py-3 text-center text-slate-700 border border-pink-200 rounded-full font-medium hover:bg-pink-50 hover:border-pink-300 hover:text-pink-700 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                href="/register" 
                className="w-full py-3 text-center bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full font-medium hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-md flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
                <Heart size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </nav>
  );
}