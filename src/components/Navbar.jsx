"use client"
import { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MatrimonialNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className={`mx-auto px-6 transition-all duration-300 ${isScrolled ? 'max-w-7xl' : 'max-w-6xl'}`}>
        <div className={`backdrop-blur-xl border border-white/20 shadow-lg rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-white/90' : 'bg-white/70'}`}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-primary/20 group-hover:border-primary transition-colors">
              <Image src="/logo.jpeg" fill className="object-cover" alt="Logo" />
            </div>
            <span className="font-serif text-xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Shree Kalyanam
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Browse Profiles', 'Success Stories', 'About Us'].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm font-medium text-secondary/80 hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm font-bold text-secondary hover:text-primary transition-colors">
              Log In
            </Link>
            <Link href="/register" className="px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <User size={16} />
              Join Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-secondary p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)} />

      <div className={`fixed top-24 right-4 z-50 w-64 bg-white rounded-2xl shadow-2xl p-6 md:hidden transition-all duration-300 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col gap-4">
          {['Home', 'Browse Profiles', 'Success Stories', 'About Us'].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-secondary font-medium hover:text-primary transition-colors py-2 border-b border-gray-50 last:border-0"
            >
              {item}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <Link href="/login" className="w-full text-center py-2.5 border border-secondary/20 rounded-xl font-bold text-secondary hover:bg-gray-50 transition-colors">
              Log In
            </Link>
            <Link href="/register" className="w-full text-center py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg hover:bg-primary/90 transition-colors">
              Join Now
            </Link>
          </div>
        </div>
      </div>

    </nav>
  );
}