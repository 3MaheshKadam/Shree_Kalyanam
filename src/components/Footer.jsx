"use client"
import React from 'react';
import { Heart, Mail, MapPin, Phone, Star } from 'lucide-react';
import { 
  Facebook as LucideFacebook, 
  Twitter as LucideTwitter, 
  Instagram as LucideInstagram, 
  Linkedin as LucideLinkedin 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-rose-50/50 via-white to-purple-50/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Branding Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
                <Heart className="text-white" size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-light text-slate-800 leading-tight">Shri</span>
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent font-medium text-lg leading-tight">
                  Kalyanam
                </span>
              </div>
            </div>
            <p className="text-slate-600 font-light leading-relaxed">
              India's most trusted matrimonial platform, helping families find perfect matches 
              while honoring traditions and cultural values for meaningful lifelong partnerships.
            </p>
            
            {/* Trust Indicators */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                </div>
                <span className="text-slate-600 font-light">4.9/5 Rating</span>
              </div>
              <div className="text-sm text-slate-600 font-light">2L+ Happy Marriages • 15+ Years Experience</div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              {[
                { name: 'facebook', icon: LucideFacebook, color: 'from-blue-500 to-blue-600' },
                { name: 'twitter', icon: LucideTwitter, color: 'from-sky-500 to-sky-600' },
                { name: 'instagram', icon: LucideInstagram, color: 'from-pink-500 to-rose-500' },
                { name: 'linkedin', icon: LucideLinkedin, color: 'from-blue-600 to-blue-700' }
              ].map((social) => (
                <a 
                  key={social.name} 
                  href="#" 
                  className={`w-10 h-10 rounded-full bg-gradient-to-r ${social.color} hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-slate-800 border-b border-pink-200 pb-3">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Browse Profiles', href: '/search' },
                { name: 'Success Stories', href: '/stories' },
                { name: 'Membership Plans', href: '/pricing' },
                { name: 'Mobile App', href: '/app' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-slate-600 hover:text-pink-600 transition-colors duration-200 flex items-center group font-light"
                  >
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Policies */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-slate-800 border-b border-pink-200 pb-3">
              Support & Policies
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Safety Guidelines', href: '/safety' },
                { name: 'Help Center', href: '/help' },
                { name: 'Refund Policy', href: '/refund' }
              ].map((policy) => (
                <li key={policy.name}>
                  <a 
                    href={policy.href} 
                    className="text-slate-600 hover:text-pink-600 transition-colors duration-200 flex items-center group font-light"
                  >
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {policy.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-slate-800 border-b border-pink-200 pb-3">
              Get in Touch
            </h3>
            
            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="text-pink-600" size={16} />
                </div>
                <div>
                  <div className="text-slate-800 font-medium text-sm">Head Office</div>
                  <div className="text-slate-600 font-light text-sm">Mumbai, Maharashtra, India</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-100 to-indigo-100 border border-purple-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="text-purple-600" size={16} />
                </div>
                <div>
                  <div className="text-slate-800 font-medium text-sm">Email Support</div>
                  <a href="mailto:support@shrikalyanam.com" className="text-slate-600 hover:text-pink-600 font-light text-sm transition-colors">
                    support@shrikalyanam.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="text-rose-600" size={16} />
                </div>
                <div>
                  <div className="text-slate-800 font-medium text-sm">Customer Care</div>
                  <a href="tel:+919876543210" className="text-slate-600 hover:text-pink-600 font-light text-sm transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            {/* Customer Support Hours */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-4 border border-pink-100">
              <div className="text-slate-800 font-medium text-sm mb-1">Support Hours</div>
              <div className="text-slate-600 font-light text-sm">
                Mon-Sat: 9:00 AM - 8:00 PM IST<br />
                Sunday: 10:00 AM - 6:00 PM IST
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-pink-200 my-12"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <p className="text-slate-600 text-sm font-light">
              © {new Date().getFullYear()} Shree Kalyanam. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-slate-500 font-light">Serving 50+ million families across India</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="/sitemap" className="text-slate-500 hover:text-pink-600 text-sm transition-colors duration-200 font-light">
              Sitemap
            </a>
            <a href="/faq" className="text-slate-500 hover:text-pink-600 text-sm transition-colors duration-200 font-light">
              FAQ
            </a>
            <a href="/careers" className="text-slate-500 hover:text-pink-600 text-sm transition-colors duration-200 font-light">
              Careers
            </a>
          </div>
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-8 pt-8 border-t border-pink-100">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-green-500"></div>
              <span className="font-light">SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-500"></div>
              <span className="font-light">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-purple-500"></div>
              <span className="font-light">99.8% Verified Profiles</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-rose-500"></div>
              <span className="font-light">ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;