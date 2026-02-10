"use client"
import { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, Users, Heart, ChevronDown } from 'lucide-react';

export default function SearchMatchesWidget() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [filters, setFilters] = useState({
    ageMin: 22,
    ageMax: 30,
    gender: 'female',
    location: '',
    religion: ''
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search filters:', filters);
    // Handle search submission
  };

  return (
    <div className="relative w-full z-30 px-4 sm:px-6 lg:px-20 -mt-24 mb-16">
      <div
        className={`w-full max-w-7xl mx-auto transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        <div className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-2xl shadow-secondary/10 rounded-3xl p-6 md:p-8">

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row items-end gap-6">

              {/* Title / Label (Desktop only vertical text or icon?) - Keeping it simple for now */}
              <div className="hidden lg:flex flex-col justify-center items-center px-4 border-r border-secondary/10 h-full min-h-[60px]">
                <span className="text-secondary font-serif font-bold text-xl leading-none">Find</span>
                <span className="text-primary font-serif font-bold text-xl leading-none">Match</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-1 w-full">

                {/* Gender / Looking For */}
                <div className="relative group">
                  <label className="block text-xs font-semibold text-secondary/60 uppercase tracking-wider mb-2 ml-1">I'm looking for</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-hover:text-primary transition-colors" size={20} />
                    <select
                      name="gender"
                      value={filters.gender}
                      onChange={handleChange}
                      className="w-full pl-12 pr-10 py-4 bg-white/50 border border-secondary/10 rounded-2xl text-secondary font-medium focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none cursor-pointer hover:bg-white/80"
                    >
                      <option value="female">Woman</option>
                      <option value="male">Man</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary/40 pointer-events-none" size={16} />
                  </div>
                </div>

                {/* Age Range */}
                <div className="relative group">
                  <label className="block text-xs font-semibold text-secondary/60 uppercase tracking-wider mb-2 ml-1">Age (Years)</label>
                  <div className="flex items-center gap-2">
                    <div className="relative w-full">
                      <select
                        name="ageMin"
                        value={filters.ageMin}
                        onChange={handleChange}
                        className="w-full pl-4 pr-8 py-4 bg-white/50 border border-secondary/10 rounded-2xl text-secondary font-medium focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none cursor-pointer hover:bg-white/80 text-center"
                      >
                        {Array.from({ length: 42 }, (_, i) => i + 18).map(age => (
                          <option key={`min-${age}`} value={age}>{age}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-secondary/40 pointer-events-none" size={14} />
                    </div>
                    <span className="text-secondary/40 font-medium">-</span>
                    <div className="relative w-full">
                      <select
                        name="ageMax"
                        value={filters.ageMax}
                        onChange={handleChange}
                        className="w-full pl-4 pr-8 py-4 bg-white/50 border border-secondary/10 rounded-2xl text-secondary font-medium focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none cursor-pointer hover:bg-white/80 text-center"
                      >
                        {Array.from({ length: 42 }, (_, i) => i + 18).map(age => (
                          <option key={`max-${age}`} value={age}>{age}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-secondary/40 pointer-events-none" size={14} />
                    </div>
                  </div>
                </div>

                {/* Religion */}
                <div className="relative group">
                  <label className="block text-xs font-semibold text-secondary/60 uppercase tracking-wider mb-2 ml-1">Religion</label>
                  <div className="relative">
                    <Heart className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-hover:text-primary transition-colors" size={20} />
                    <select
                      name="religion"
                      value={filters.religion}
                      onChange={handleChange}
                      className="w-full pl-12 pr-10 py-4 bg-white/50 border border-secondary/10 rounded-2xl text-secondary font-medium focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none cursor-pointer hover:bg-white/80"
                    >
                      <option value="">Any Religion</option>
                      <option value="hindu">Hindu</option>
                      <option value="muslim">Muslim</option>
                      <option value="christian">Christian</option>
                      <option value="sikh">Sikh</option>
                      <option value="jain">Jain</option>
                      <option value="buddhist">Buddhist</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary/40 pointer-events-none" size={16} />
                  </div>
                </div>

                {/* Location */}
                <div className="relative group">
                  <label className="block text-xs font-semibold text-secondary/60 uppercase tracking-wider mb-2 ml-1">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-hover:text-primary transition-colors" size={20} />
                    <select
                      name="location"
                      value={filters.location}
                      onChange={handleChange}
                      className="w-full pl-12 pr-10 py-4 bg-white/50 border border-secondary/10 rounded-2xl text-secondary font-medium focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none cursor-pointer hover:bg-white/80"
                    >
                      <option value="">Any Location</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="delhi">Delhi</option>
                      <option value="bangalore">Bangalore</option>
                      <option value="pune">Pune</option>
                      <option value="hyderabad">Hyderabad</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary/40 pointer-events-none" size={16} />
                  </div>
                </div>

              </div>

              {/* Submit Button */}
              <div className="w-full lg:w-auto mt-4 lg:mt-0">
                <button
                  type="submit"
                  className="w-full lg:w-auto h-[58px] px-8 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 flex items-center justify-center gap-2 group"
                >
                  <Search size={22} className="group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-lg hidden lg:inline">Search</span>
                  <span className="font-bold text-lg inline lg:hidden">Find Matches</span>
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}