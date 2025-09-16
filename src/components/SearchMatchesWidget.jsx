"use client";
import { useState, useEffect } from "react";
import { Search, MapPin, Calendar, Users, Heart } from "lucide-react";

export default function SearchMatchesWidget() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [filters, setFilters] = useState({
    ageMin: 25,
    ageMax: 35,
    gender: "",
    location: "",
    religion: "",
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search filters:", filters);
    // Handle search submission
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-6 bg-white/80 backdrop-blur-md shadow-lg rounded-2xl border border-pink-100 overflow-hidden relative z-20">
      <div className="relative py-3 md:py-4 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl font-normal text-slate-800">
          <span className="font-light">Shri</span>{" "}
          <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent font-medium">
            Kalyanam
          </span>
        </h2>
      </div>
      
      <div
        className={`p-2 sm:p-4 md:p-6 transition-all duration-1000 transform ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-br from-pink-50/50 to-purple-50/50 rounded-xl p-4 sm:p-6 w-full border border-pink-100/50">
          <div className="w-full">
            <div className="flex flex-col md:flex-row md:items-center md:flex-wrap gap-4 md:gap-6 w-full">
              
              {/* Heading */}
              <h3 className="text-slate-700 font-normal text-base sm:text-lg md:text-xl flex items-center mb-4 md:mb-0 md:mr-6 md:pr-6 border-b md:border-b-0 md:border-r border-pink-200 whitespace-nowrap">
                <Heart className="text-pink-500 mr-2 sm:mr-3" size={18} />
                <span>Find Your</span>
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent ml-1 font-medium">
                  Perfect Match
                </span>
              </h3>

              {/* Filter Grid */}
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-3 w-full min-w-0">
                
                {/* Age Range Filter */}
                <div className="relative col-span-2 lg:col-span-1 min-w-0">
                  <div className="absolute left-3 top-3 text-pink-500">
                    <Calendar size={18} />
                  </div>
                  <div className="flex items-center w-full">
                    <select
                      name="ageMin"
                      value={filters.ageMin}
                      onChange={handleChange}
                      className="pl-10 py-2.5 px-2 rounded-l-lg border border-r-0 border-pink-200 text-slate-700 text-sm sm:text-base focus:ring-2 focus:ring-pink-400 focus:outline-none w-full bg-white transition-all duration-200 h-11 hover:bg-pink-50/30"
                    >
                      {Array.from({ length: 30 }, (_, i) => i + 18).map(
                        (age) => (
                          <option key={`min-${age}`} value={age}>
                            {age}
                          </option>
                        )
                      )}
                    </select>
                    <span className="bg-white py-2.5 px-2 border-t border-b border-pink-200 text-pink-500 text-xs sm:text-sm whitespace-nowrap h-11 flex items-center justify-center font-light">
                      to
                    </span>
                    <select
                      name="ageMax"
                      value={filters.ageMax}
                      onChange={handleChange}
                      className="px-2 pl-2 bg-white py-2.5 rounded-r-lg border border-l-0 border-pink-200 text-slate-700 text-sm sm:text-base focus:ring-2 focus:ring-pink-400 focus:outline-none w-full transition-all duration-200 h-11 hover:bg-pink-50/30"
                    >
                      {Array.from({ length: 42 }, (_, i) => i + 18).map(
                        (age) => (
                          <option key={`max-${age}`} value={age}>
                            {age}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>

                {/* Gender Filter */}
                <div className="relative min-w-0">
                  <div className="absolute left-3 top-3 text-pink-500">
                    <Users size={18} />
                  </div>
                  <select
                    name="gender"
                    value={filters.gender}
                    onChange={handleChange}
                    className="pl-10 py-2 pr-4 bg-white rounded-lg border border-pink-200 text-slate-700 w-full text-sm sm:text-base focus:ring-2 focus:ring-pink-400 focus:outline-none appearance-none hover:bg-pink-50/30 transition-all duration-200"
                  >
                    <option value="">Gender</option>
                    <option value="female">Bride</option>
                    <option value="male">Groom</option>
                  </select>
                </div>

                {/* Location Filter */}
                <div className="relative min-w-0">
                  <div className="absolute left-3 top-3 text-pink-500">
                    <MapPin size={18} />
                  </div>
                  <select
                    name="location"
                    value={filters.location}
                    onChange={handleChange}
                    className="pl-10 py-2 pr-4 bg-white rounded-lg border border-pink-200 text-slate-700 w-full text-sm sm:text-base focus:ring-2 focus:ring-pink-400 focus:outline-none appearance-none hover:bg-pink-50/30 transition-all duration-200"
                  >
                    <option value="">Location</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="chennai">Chennai</option>
                    <option value="kolkata">Kolkata</option>
                    <option value="pune">Pune</option>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="international">International</option>
                  </select>
                </div>

                {/* Religion/Caste Filter */}
                <div className="relative min-w-0">
                  <div className="absolute left-3 top-3 text-pink-500">
                    <Heart size={18} />
                  </div>
                  <select
                    name="religion"
                    value={filters.religion}
                    onChange={handleChange}
                    className="pl-10 py-2 pr-4 bg-white rounded-lg border border-pink-200 text-slate-700 w-full text-sm sm:text-base focus:ring-2 focus:ring-pink-400 focus:outline-none appearance-none hover:bg-pink-50/30 transition-all duration-200"
                  >
                    <option value="">Religion</option>
                    <option value="hindu">Hindu</option>
                    <option value="muslim">Muslim</option>
                    <option value="christian">Christian</option>
                    <option value="sikh">Sikh</option>
                    <option value="jain">Jain</option>
                    <option value="buddhist">Buddhist</option>
                    <option value="parsi">Parsi</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Search Button */}
                <div className="min-w-0 col-span-1 lg:col-span-1 flex items-end">
                  <button
                    onClick={handleSubmit}
                    className="flex-1 w-full px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-lg hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-md hover:shadow-pink-500/25 hover:scale-105 transform flex items-center justify-center whitespace-nowrap font-medium text-sm sm:text-base"
                  >
                    <Search size={18} className="mr-2" />
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Search Tags */}
        <div className="mt-6 pt-4 border-t border-pink-100">
          <div className="flex items-center space-x-2 mb-3">
            <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c1.1045695 0 2 .8954305 2 2v1M7 7c0 1.1045695.8954305 2 2 2h9m-9-2c-1.1045695 0-2-.8954305-2-2s.8954305-2 2-2m9 2c1.1045695 0 2 .8954305 2 2v9c0 1.1045695-.8954305 2-2 2H9c-1.1045695 0-2-.8954305-2-2v-9c0-1.1045695.8954305-2 2-2h9z" />
            </svg>
            <span className="text-sm font-medium text-slate-600">Popular Searches:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1 bg-white border border-pink-200 text-pink-700 rounded-full text-sm hover:bg-pink-50 hover:border-pink-300 transition-all duration-200 font-light">
              Age 25-30 • Delhi
            </button>
            <button className="px-3 py-1 bg-white border border-purple-200 text-purple-700 rounded-full text-sm hover:bg-purple-50 hover:border-purple-300 transition-all duration-200 font-light">
              Working Professional
            </button>
            <button className="px-3 py-1 bg-white border border-rose-200 text-rose-700 rounded-full text-sm hover:bg-rose-50 hover:border-rose-300 transition-all duration-200 font-light">
              Same Caste
            </button>
            <button className="px-3 py-1 bg-white border border-indigo-200 text-indigo-700 rounded-full text-sm hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200 font-light">
              MBA Graduate
            </button>
            <button className="px-3 py-1 bg-white border border-pink-200 text-pink-700 rounded-full text-sm hover:bg-pink-50 hover:border-pink-300 transition-all duration-200 font-light">
              Nuclear Family
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-glow:hover {
          box-shadow: 0 8px 25px rgba(236, 72, 153, 0.2);
        }
      `}</style>
    </div>
  );
}