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
    /* Container fills width, max width constrained for readability, centered horizontally */
    <div className="w-full max-w-7xl mx-auto p-2 sm:p-4 md:p-6 bg-amber-100/50 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden relative z-20">
      <div className="relative py-2 md:py-4 text-center md:text-left text-2xl sm:text-3xl font-semibold text-amber-800">
        2Soules 1 Love
      </div>
      <div
        className={`p-2 sm:p-4 md:p-6 transition-all duration-1000 transform ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="bg-amber-50/30 rounded-xl p-2 sm:p-4 w-full">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col md:flex-row md:items-center md:flex-wrap gap-4 md:gap-6 w-full">
              {/* Heading */}
              <h3 className="text-gray-800 font-serif text-base sm:text-lg md:text-xl flex items-center mb-4 md:mb-0 md:mr-6 md:pr-6 border-b md:border-b-0 md:border-r border-amber-200 luxury-text whitespace-nowrap">
                <Heart className="text-rose-500 mr-2 sm:mr-3" size={18} />
                <span>Discover Your</span>
                <span className="bg-gradient-to-r from-rose-500 to-amber-600 bg-clip-text text-transparent ml-1">
                  Ideal Match
                </span>
              </h3>

              {/* Filter Grid with flexible columns */}
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-3 w-full min-w-0">
                {/* Age Range Filter */}
                <div className="relative col-span-2 lg:col-span-1 min-w-0">
                  <div className="absolute left-3 top-3 text-amber-600">
                    <Calendar size={18} />
                  </div>
                  <div className="flex items-center w-full">
                    <select
                      name="ageMin"
                      value={filters.ageMin}
                      onChange={handleChange}
                      className="pl-10 py-2.5 px-2 rounded-l-lg border border-r-0 border-amber-200 text-amber-700 text-sm sm:text-base font-sans focus:ring-2 focus:ring-rose-400 focus:outline-none w-full bg-white transition-all duration-200 h-11"
                    >
                      {Array.from({ length: 30 }, (_, i) => i + 18).map(
                        (age) => (
                          <option key={`min-${age}`} value={age}>
                            {age}
                          </option>
                        )
                      )}
                    </select>
                    <span className="bg-white py-2.5 px-2 border-t border-b border-amber-200 text-amber-500 text-xs sm:text-sm whitespace-nowrap h-11 flex items-center justify-center">
                      to
                    </span>
                    <select
                      name="ageMax"
                      value={filters.ageMax}
                      onChange={handleChange}
                      className="px-2 pl-2 bg-white py-2.5 rounded-r-lg border border-l-0 border-amber-200 text-amber-700 text-sm sm:text-base font-sans focus:ring-2 focus:ring-rose-400 focus:outline-none w-full transition-all duration-200 h-11"
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
                  <div className="absolute left-3 top-3 text-amber-600">
                    <Users size={18} />
                  </div>
                  <select
                    name="gender"
                    value={filters.gender}
                    onChange={handleChange}
                    className="pl-10 py-2 pr-4 bg-white rounded-lg border border-amber-200 text-amber-700 w-full text-sm sm:text-base font-sans focus:ring-2 focus:ring-rose-400 focus:outline-none appearance-none hover:bg-rose-50/20 transition-all duration-200"
                  >
                    <option value="">Gender</option>
                    <option value="female">Bride</option>
                    <option value="male">Groom</option>
                  </select>
                </div>

                {/* Location Filter */}
                <div className="relative min-w-0">
                  <div className="absolute left-3 top-3 text-amber-600">
                    <MapPin size={18} />
                  </div>
                  <select
                    name="location"
                    value={filters.location}
                    onChange={handleChange}
                    className="pl-10 py-2 pr-4 bg-white rounded-lg border border-amber-200 text-amber-700 w-full text-sm sm:text-base font-sans focus:ring-2 focus:ring-rose-400 focus:outline-none appearance-none hover:bg-rose-50/20 transition-all duration-200"
                  >
                    <option value="">Location</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="chennai">Chennai</option>
                    <option value="kolkata">Kolkata</option>
                    <option value="international">International</option>
                  </select>
                </div>

                {/* Religion/Caste Filter */}
                <div className="relative min-w-0">
                  <div className="absolute left-3 top-3 text-amber-600">
                    <Heart size={18} />
                  </div>
                  <select
                    name="religion"
                    value={filters.religion}
                    onChange={handleChange}
                    className="pl-10 py-2 pr-4 bg-white rounded-lg border border-amber-200 text-amber-700 w-full text-sm sm:text-base font-sans focus:ring-2 focus:ring-rose-400 focus:outline-none appearance-none hover:bg-rose-50/20 transition-all duration-200"
                  >
                    <option value="">Religion</option>
                    <option value="hindu">Hindu</option>
                    <option value="muslim">Muslim</option>
                    <option value="christian">Christian</option>
                    <option value="sikh">Sikh</option>
                    <option value="jain">Jain</option>
                    <option value="buddhist">Buddhist</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Search Button */}
                <div className="min-w-0 col-span-1 lg:col-span-1 flex items-end">
                  <button
                    type="submit"
                    className="flex-1 w-full px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-rose-500 to-amber-600 text-white rounded-lg hover:from-rose-600 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-lg hover-glow hover:scale-105 transform flex items-center justify-center whitespace-nowrap font-medium text-sm sm:text-base"
                  >
                    <Search size={18} className="mr-2" />
                    <span>Find</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <style jsx>{`
        .luxury-text {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        .hover-glow:hover {
          box-shadow: 0 10px 25px rgba(244, 63, 94, 0.3);
        }
      `}</style>
    </div>
  );
}
