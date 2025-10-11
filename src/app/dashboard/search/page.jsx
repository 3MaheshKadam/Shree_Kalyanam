// "use client"
// import { useState, useEffect } from 'react';
// import { 
//   Search,
//   Filter,
//   User,
//   Heart,
//   Eye,
//   Bookmark,
//   MapPin,
//   GraduationCap,
//   Briefcase,
//   Calendar,
//   Award,
//   Star,
//   ChevronDown,
//   ChevronUp,
//   X,
//   SlidersHorizontal,
//   Grid3X3,
//   List,
//   ArrowUpDown,
//   CheckCircle,
//   Lock,
//   Camera,
//   Clock,
//   TrendingUp,
//   Settings,
//   RotateCcw,
//   Crown,
//   Sparkles
// } from 'lucide-react';

// export default function SearchProfilesPage() {
//    const [isMobile, setIsMobile] = useState(false);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [showFilters, setShowFilters] = useState(false);
//   const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortBy, setSortBy] = useState('relevance');
//   const [resultsCount, setResultsCount] = useState(247);
//   const [isLoading, setIsLoading] = useState(false);
  
//   // Filter states
//   const [filters, setFilters] = useState({
//     ageRange: [22, 35],
//     heightRange: [150, 180],
//     religion: '',
//     caste: '',
//     location: '',
//     education: '',
//     profession: '',
//     incomeRange: [0, 50],
//     lifestyle: {
//       vegetarian: false,
//       nonSmoker: false,
//       nonDrinker: false,
//       manglik: false
//     },
//     preferences: {
//       verifiedOnly: false,
//       withPhotoOnly: true,
//       activeRecently: false
//     }
//   });

//   const [expandedSections, setExpandedSections] = useState({
//     basic: true,
//     community: true,
//     location: true,
//     education: false,
//     lifestyle: false,
//     preferences: false
//   });

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   // Sample profile data
//   const sampleProfiles = [
//     {
//       id: 1,
//       name: "A***a S***a",
//       age: 25,
//       height: "5'4\"",
//       caste: "Brahmin",
//       city: "Mumbai",
//       education: "MBA",
//       profession: "Marketing Manager",
//       company: "Tech Corp",
//       verified: true,
//       premium: false,
//       lastActive: "2 hours ago",
//       compatibility: 92,
//       hasPhoto: true,
//       isBlurred: false
//     },
//     {
//       id: 2,
//       name: "P***i G***a",
//       age: 27,
//       height: "5'3\"",
//       caste: "Kshatriya",
//       city: "Delhi",
//       education: "B.Tech",
//       profession: "Software Engineer",
//       company: "IT Solutions",
//       verified: true,
//       premium: true,
//       lastActive: "1 day ago",
//       compatibility: 88,
//       hasPhoto: true,
//       isBlurred: false
//     },
//     {
//       id: 3,
//       name: "S***a P***l",
//       age: 24,
//       height: "5'2\"",
//       caste: "Vaishya",
//       city: "Bangalore",
//       education: "M.Com",
//       profession: "Chartered Accountant",
//       company: "Finance Ltd",
//       verified: false,
//       premium: false,
//       lastActive: "3 days ago",
//       compatibility: 85,
//       hasPhoto: false,
//       isBlurred: true
//     },
//     {
//       id: 4,
//       name: "R***i K***r",
//       age: 26,
//       height: "5'5\"",
//       caste: "Brahmin",
//       city: "Pune",
//       education: "MBBS",
//       profession: "Doctor",
//       company: "City Hospital",
//       verified: true,
//       premium: true,
//       lastActive: "5 hours ago",
//       compatibility: 90,
//       hasPhoto: true,
//       isBlurred: false
//     }
//   ];

//   const toggleSection = (section) => {
//     setExpandedSections(prev => ({
//       ...prev,
//       [section]: !prev[section]
//     }));
//   };
//   useEffect(() => {
//     setIsLoaded(true);
//     // Only run this on client side
//     setIsMobile(window.innerWidth < 1024);
    
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };
    
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
//   const resetFilters = () => {
//     setFilters({
//       ageRange: [22, 35],
//       heightRange: [150, 180],
//       religion: '',
//       caste: '',
//       location: '',
//       education: '',
//       profession: '',
//       incomeRange: [0, 50],
//       lifestyle: {
//         vegetarian: false,
//         nonSmoker: false,
//         nonDrinker: false,
//         manglik: false
//       },
//       preferences: {
//         verifiedOnly: false,
//         withPhotoOnly: true,
//         activeRecently: false
//       }
//     });
//   };

//   const FilterSection = ({ title, section, children }) => (
//     <div className="border-b border-gray-200 last:border-b-0">
//       <button
//         onClick={() => toggleSection(section)}
//         className="w-full flex items-center justify-between py-4 text-left"
//       >
//         <h3 className="font-semibold text-gray-900">{title}</h3>
//         {expandedSections[section] ? (
//           <ChevronUp className="w-4 h-4 text-gray-500" />
//         ) : (
//           <ChevronDown className="w-4 h-4 text-gray-500" />
//         )}
//       </button>
//       {expandedSections[section] && (
//         <div className="pb-4 space-y-4">
//           {children}
//         </div>
//       )}
//     </div>
//   );

//   const ProfileCard = ({ profile }) => (
//     <div className="bg-white rounded-xl shadow-lg border border-rose-100/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
//       <div className="relative">
//         {/* Profile Image */}
//         <div className="aspect-[4/5] bg-gradient-to-br from-rose-100 to-amber-100 flex items-center justify-center relative">
//           {profile.hasPhoto ? (
//             <div className={`w-full h-full flex items-center justify-center ${profile.isBlurred ? 'blur-md' : ''}`}>
//               <User className="w-16 h-16 text-rose-500" />
//             </div>
//           ) : (
//             <div className="text-center">
//               <Camera className="w-12 h-12 text-gray-400 mx-auto mb-2" />
//               <p className="text-sm text-gray-500">No Photo</p>
//             </div>
//           )}
          
//           {/* Overlay for locked profiles */}
//           {profile.isBlurred && (
//             <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
//               <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
//                 <Lock className="w-6 h-6 text-gray-600 mx-auto mb-1" />
//                 <p className="text-xs text-gray-600 text-center">Upgrade to view</p>
//               </div>
//             </div>
//           )}

//           {/* Badges */}
//           <div className="absolute top-2 left-2 flex flex-col space-y-1">
//             {profile.verified && (
//               <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
//                 <CheckCircle className="w-3 h-3 mr-1" />
//                 Verified
//               </div>
//             )}
//             {profile.premium && (
//               <div className="bg-gradient-to-r from-amber-400 to-rose-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
//                 <Crown className="w-3 h-3 mr-1" />
//                 Premium
//               </div>
//             )}
//           </div>

//           {/* Compatibility Score */}
//           <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
//             <div className="flex items-center">
//               <Star className="w-3 h-3 text-yellow-500 mr-1" />
//               <span className="text-xs font-medium text-gray-700">{profile.compatibility}%</span>
//             </div>
//           </div>
//         </div>

//         {/* Profile Info */}
//         <div className="p-4">
//           <div className="flex items-center justify-between mb-2">
//             <h3 className="font-bold text-gray-900">{profile.name}</h3>
//             <div className="flex items-center space-x-1">
//               <Clock className="w-3 h-3 text-gray-400" />
//               <span className="text-xs text-gray-500">{profile.lastActive}</span>
//             </div>
//           </div>
          
//           <div className="space-y-1 text-sm text-gray-600 mb-3">
//             <div className="flex items-center">
//               <Calendar className="w-3 h-3 mr-1" />
//               <span>{profile.age} years • {profile.height}</span>
//             </div>
//             <div className="flex items-center">
//               <MapPin className="w-3 h-3 mr-1" />
//               <span>{profile.city} • {profile.caste}</span>
//             </div>
//             <div className="flex items-center">
//               <GraduationCap className="w-3 h-3 mr-1" />
//               <span>{profile.education}</span>
//             </div>
//             <div className="flex items-center">
//               <Briefcase className="w-3 h-3 mr-1" />
//               <span>{profile.profession}</span>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex space-x-2">
//             <button className="flex-1 bg-rose-50 text-rose-600 py-2 px-3 rounded-lg text-sm font-medium hover:bg-rose-100 transition-colors flex items-center justify-center">
//               <Heart className="w-4 h-4 mr-1" />
//               Interest
//             </button>
//             <button className="flex-1 bg-gray-50 text-gray-600 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
//               View Profile
//             </button>
//             <button className="bg-gray-50 text-gray-600 p-2 rounded-lg hover:bg-gray-100 transition-colors">
//               <Bookmark className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-rose-50/50 via-white to-amber-50/30">
//       <div className="max-w-7xl mx-auto p-6">
        
//         {/* Header Section */}
//         <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
//           <div className="bg-gradient-to-r from-rose-500 to-rose-600 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden mb-6">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
//             <div className="relative z-10">
//               <h1 className="text-2xl font-bold mb-2">Find Your Perfect Match</h1>
//               <p className="text-rose-100">Discover profiles that align with your preferences</p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-6">
          
//           {/* Filter Sidebar */}
//           <div className={`lg:w-80 transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            
//             {/* Mobile Filter Toggle */}
//             <div className="lg:hidden mb-4">
//               <button
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="w-full bg-white rounded-xl p-4 shadow-lg border border-rose-100/50 flex items-center justify-between"
//               >
//                 <div className="flex items-center">
//                   <Filter className="w-5 h-5 text-rose-500 mr-2" />
//                   <span className="font-semibold text-gray-900">Filters</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
//               </button>
//             </div>

//             {/* Filter Panel */}
//           <div className={`bg-white rounded-xl shadow-lg border border-rose-100/50 ${showFilters || !isMobile ? 'block' : 'hidden'} lg:block`}>
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-6">
//                   <h2 className="text-xl font-bold text-gray-900">Filters</h2>
//                   <button
//                     onClick={resetFilters}
//                     className="flex items-center text-rose-600 hover:text-rose-700 text-sm font-medium"
//                   >
//                     <RotateCcw className="w-4 h-4 mr-1" />
//                     Reset
//                   </button>
//                 </div>

//                 <div className="space-y-0">
                  
//                   {/* Basic Filters */}
//                   <FilterSection title="Basic Details" section="basic">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Age Range</label>
//                       <div className="flex items-center space-x-2">
//                         <input
//                           type="range"
//                           min="18"
//                           max="60"
//                           value={filters.ageRange[0]}
//                           className="flex-1"
//                           onChange={(e) => setFilters(prev => ({
//                             ...prev,
//                             ageRange: [parseInt(e.target.value), prev.ageRange[1]]
//                           }))}
//                         />
//                         <span className="text-sm text-gray-600 min-w-[60px]">
//                           {filters.ageRange[0]} - {filters.ageRange[1]} years
//                         </span>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Height Range</label>
//                       <div className="flex space-x-2">
//                         <select className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-sm">
//                           <option>4'6" - 5'0"</option>
//                           <option>5'0" - 5'6"</option>
//                           <option>5'6" - 6'0"</option>
//                           <option>6'0" - 6'6"</option>
//                         </select>
//                       </div>
//                     </div>
//                   </FilterSection>

//                   {/* Community Filters */}
//                   <FilterSection title="Community" section="community">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Religion</label>
//                       <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-sm">
//                         <option value="">Any Religion</option>
//                         <option>Hindu</option>
//                         <option>Muslim</option>
//                         <option>Christian</option>
//                         <option>Sikh</option>
//                         <option>Buddhist</option>
//                         <option>Jain</option>
//                       </select>
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Caste</label>
//                       <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-sm">
//                         <option value="">Any Caste</option>
//                         <option>Brahmin</option>
//                         <option>Kshatriya</option>
//                         <option>Vaishya</option>
//                         <option>Shudra</option>
//                       </select>
//                     </div>
//                   </FilterSection>

//                   {/* Location Filters */}
//                   <FilterSection title="Location" section="location">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
//                       <input
//                         type="text"
//                         placeholder="Enter city name"
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-sm"
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
//                       <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-sm">
//                         <option value="">Any State</option>
//                         <option>Maharashtra</option>
//                         <option>Delhi</option>
//                         <option>Karnataka</option>
//                         <option>Gujarat</option>
//                         <option>Tamil Nadu</option>
//                       </select>
//                     </div>
//                   </FilterSection>

//                   {/* Education & Profession */}
//                   <FilterSection title="Education & Profession" section="education">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
//                       <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-sm">
//                         <option value="">Any Education</option>
//                         <option>Bachelor's</option>
//                         <option>Master's</option>
//                         <option>PhD</option>
//                         <option>Professional Degree</option>
//                       </select>
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Profession</label>
//                       <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-sm">
//                         <option value="">Any Profession</option>
//                         <option>Software Engineer</option>
//                         <option>Doctor</option>
//                         <option>Teacher</option>
//                         <option>Business</option>
//                         <option>Government Job</option>
//                       </select>
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Income Range (Lakhs/year)</label>
//                       <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-sm">
//                         <option value="">Any Income</option>
//                         <option>0-5 Lakhs</option>
//                         <option>5-10 Lakhs</option>
//                         <option>10-20 Lakhs</option>
//                         <option>20+ Lakhs</option>
//                       </select>
//                     </div>
//                   </FilterSection>

//                   {/* Lifestyle */}
//                   <FilterSection title="Lifestyle" section="lifestyle">
//                     <div className="space-y-3">
//                       <label className="flex items-center">
//                         <input
//                           type="checkbox"
//                           checked={filters.lifestyle.vegetarian}
//                           onChange={(e) => setFilters(prev => ({
//                             ...prev,
//                             lifestyle: { ...prev.lifestyle, vegetarian: e.target.checked }
//                           }))}
//                           className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
//                         />
//                         <span className="ml-2 text-sm text-gray-700">Vegetarian only</span>
//                       </label>
                      
//                       <label className="flex items-center">
//                         <input
//                           type="checkbox"
//                           checked={filters.lifestyle.nonSmoker}
//                           onChange={(e) => setFilters(prev => ({
//                             ...prev,
//                             lifestyle: { ...prev.lifestyle, nonSmoker: e.target.checked }
//                           }))}
//                           className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
//                         />
//                         <span className="ml-2 text-sm text-gray-700">Non-smoker</span>
//                       </label>
                      
//                       <label className="flex items-center">
//                         <input
//                           type="checkbox"
//                           checked={filters.lifestyle.nonDrinker}
//                           onChange={(e) => setFilters(prev => ({
//                             ...prev,
//                             lifestyle: { ...prev.lifestyle, nonDrinker: e.target.checked }
//                           }))}
//                           className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
//                         />
//                         <span className="ml-2 text-sm text-gray-700">Non-drinker</span>
//                       </label>
                      
//                       <label className="flex items-center">
//                         <input
//                           type="checkbox"
//                           checked={filters.lifestyle.manglik}
//                           onChange={(e) => setFilters(prev => ({
//                             ...prev,
//                             lifestyle: { ...prev.lifestyle, manglik: e.target.checked }
//                           }))}
//                           className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
//                         />
//                         <span className="ml-2 text-sm text-gray-700">Manglik only</span>
//                       </label>
//                     </div>
//                   </FilterSection>

//                   {/* Preferences */}
//                   <FilterSection title="Preferences" section="preferences">
//                     <div className="space-y-3">
//                       <label className="flex items-center">
//                         <input
//                           type="checkbox"
//                           checked={filters.preferences.verifiedOnly}
//                           onChange={(e) => setFilters(prev => ({
//                             ...prev,
//                             preferences: { ...prev.preferences, verifiedOnly: e.target.checked }
//                           }))}
//                           className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
//                         />
//                         <span className="ml-2 text-sm text-gray-700">Verified profiles only</span>
//                       </label>
                      
//                       <label className="flex items-center">
//                         <input
//                           type="checkbox"
//                           checked={filters.preferences.withPhotoOnly}
//                           onChange={(e) => setFilters(prev => ({
//                             ...prev,
//                             preferences: { ...prev.preferences, withPhotoOnly: e.target.checked }
//                           }))}
//                           className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
//                         />
//                         <span className="ml-2 text-sm text-gray-700">With photos only</span>
//                       </label>
                      
//                       <label className="flex items-center">
//                         <input
//                           type="checkbox"
//                           checked={filters.preferences.activeRecently}
//                           onChange={(e) => setFilters(prev => ({
//                             ...prev,
//                             preferences: { ...prev.preferences, activeRecently: e.target.checked }
//                           }))}
//                           className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
//                         />
//                         <span className="ml-2 text-sm text-gray-700">Active in last 30 days</span>
//                       </label>
//                     </div>
//                   </FilterSection>
//                 </div>

//                 {/* Apply Filters Button */}
//                 <div className="mt-6 pt-6 border-t border-gray-200">
//                   <button className="w-full bg-gradient-to-r from-rose-500 to-rose-600 text-white py-3 rounded-lg font-medium hover:from-rose-600 hover:to-rose-700 transition-all duration-300">
//                     Apply Filters
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Search Results */}
//           <div className={`flex-1 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            
//             {/* Search Bar & Controls */}
//             <div className="bg-white rounded-xl shadow-lg border border-rose-100/50 p-4 mb-6">
//               <div className="flex flex-col md:flex-row gap-4">
                
//                 {/* Search Input */}
//                 <div className="flex-1 relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                   <input
//                     type="text"
//                     placeholder="Search by name, caste, city..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
//                   />
//                 </div>

//                 {/* Sort & View Controls */}
//                 <div className="flex space-x-3">
//                   <select
//                     value={sortBy}
//                     onChange={(e) => setSortBy(e.target.value)}
//                     className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
//                   >
//                     <option value="relevance">Sort by Relevance</option>
//                     <option value="newest">Newest First</option>
//                     <option value="age_low">Age: Low to High</option>
//                     <option value="age_high">Age: High to Low</option>
//                     <option value="recently_active">Recently Active</option>
//                   </select>
                  
//                   <div className="flex border border-gray-300 rounded-lg overflow-hidden">
//                     <button
//                       onClick={() => setViewMode('grid')}
//                       className={`p-3 ${viewMode === 'grid' ? 'bg-rose-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
//                     >
//                       <Grid3X3 className="w-5 h-5" />
//                     </button>
//                     <button
//                       onClick={() => setViewMode('list')}
//                       className={`p-3 ${viewMode === 'list' ? 'bg-rose-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
//                     >
//                       <List className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Results Count */}
//               <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
//                 <div className="flex items-center text-sm text-gray-600">
//                   <TrendingUp className="w-4 h-4 mr-1" />
//                   <span>{resultsCount} profiles found</span>
//                 </div>
//                 <div className="flex items-center text-sm text-rose-600">
//                   <Sparkles className="w-4 h-4 mr-1" />
//                   <span>Upgrade to see more matches</span>
//                 </div>
//               </div>
//             </div>

//             {/* Results Grid */}
//             <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
//               {sampleProfiles.map((profile) => (
//                 <ProfileCard key={profile.id} profile={profile} />
//               ))}
//             </div>

//             {/* Load More Button */}
//             <div className="text-center mt-8">
//               <button
//                 onClick={() => setIsLoading(true)}
//                 disabled={isLoading}
//                 className="bg-white border border-rose-300 text-rose-600 px-8 py-3 rounded-lg font-medium hover:bg-rose-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isLoading ? 'Loading...' : 'Load More Profiles'}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client"
import { useState, useEffect } from 'react';
import { User, Heart, Eye, CheckCircle, Edit3, Crown, Camera, MapPin, Calendar, Award, Star, Gift, Sparkles, Settings, EyeOff, UserCheck, Upload, Briefcase, GraduationCap, Home, Users, Search, Clock, Bell, Shield, ChevronRight, Plus, X, AlertCircle, ToggleLeft, ToggleRight, XCircle, Phone } from 'lucide-react';
import { useSession } from '@/context/SessionContext';
import { CldUploadWidget } from 'next-cloudinary';
import DynamicProfileForm from '@/components/DynamicProfileForm';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

//sample
export default function MyProfilePage() {
  const { user } = useSession();
  const [profileCompletion, setProfileCompletion] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('basic');
  const [isVisible, setIsVisible] = useState(true);
  const [updatedSurname, setUpdatedSurname] = useState('');
  const [filteredSurname, setFilteredSurname] = useState('');
  const [showCompletionUpdate, setShowCompletionUpdate] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState('Unverified');
  const [showFormFillChoice, setShowFormFillChoice] = useState(false);
  const [dontAskAgain, setDontAskAgain] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

 
  const [photos, setPhotos] = useState([
    { id: 1, url: user?.profilePhoto || null, isPrimary: true },
    { id: 2, url: null, isPrimary: false },
    { id: 3, url: null, isPrimary: false },
    { id: 4, url: null, isPrimary: false },
  ]);
  
console.log("User Data", user)
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      await fetchUserData();
      setIsLoaded(true);
    };
    
    loadData();
  }, []);

  useEffect(() => {
    if (user?.user?.id) {
      setFormData(prev => ({
        ...prev,
        userId: user.user.id,
        
      }));
    }
  }, [user]);

 useEffect(() => {
    const checkPreferences = async () => {
      try {
        const response = await fetch('/api/users/me', {
          cache: 'no-store'
        });
        const userData = await response.json();
        console.log(userData);
        
        // Show popup ONLY if both fields are false/unset
        const shouldShow = !userData?.profileSetup?.willAdminFill && 
                         !userData?.profileSetup?.dontAskAgain;
        
        setShowFormFillChoice(shouldShow);
      } catch (error) {
        console.error("Error checking preferences:", error);
        setShowFormFillChoice(true); // Default to show if error
      } finally {
        setIsLoading(false);
      }
    };

    checkPreferences();
  }, []);

 const handleFormFillChoice = async (willAdminFill) => {
  try {
    if (!user?.id) {
      throw new Error("User ID is missing");
    }

    // Add loading state
    setIsLoading(true);

    const response = await fetch('/api/users/setup', {  
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: user.id,
        willAdminFill,
        dontAskAgain: dontAskAgain 
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to save preference');
    }

    const data = await response.json();

    // Update local state
    setFormData(prev => ({
      ...prev,
      profileSetup: {
        willAdminFill,
        dontAskAgain: willAdminFill ? true : dontAskAgain
      }
    }));

    setShowFormFillChoice(false);
    
    // Show success message from backend
    alert(data.message);

  } catch (error) {
    console.error("Error saving preference:", error);
    alert(`Error: ${error.message}`);
  } finally {
    setIsLoading(false);
  }
};


const calculateCompletion = (section) => {
    if (!formData) return 0; 
    const fields = {
      basic: ['name', 'dob', 'height', 'gender', 'maritalStatus', 'motherTongue', 'currentCity', 'weight', 'email', 'permanentAddress', 'wearsLens', 'bloodGroup', 'complexion'],
      religious: ['religion', 'caste', 'subCaste', 'gothra'],
      education: ['education', 'fieldOfStudy', 'college', 'occupation', 'company', 'income'],
      relative: ['fatherName', 'parentResidenceCity', 'mother', 'brothers', 'marriedBrothers', 'sisters', 'marriedSisters', 'nativeDistrict', 'nativeCity', 'familyWealth', 'relativeSurname', 'parentOccupation', 'mamaSurname',],
      horoscope: ['rashi', 'nakshira', 'charan', 'gan', 'nadi', 'mangal', 'birthPlace', 'birthTime', 'gotraDevak'],
      expectations: ['expectedCaste', 'preferredCity', 'expectedAgeDifference', 'expectedEducation', 'divorcee', 'expectedHeight', 'expectedIncome',]
    };
  

    if (!fields[section]) return 0;
    
    const sectionFields = fields[section];
    const filledFields = sectionFields.filter(field => {
      const value = formData[field];
      return value !== null && value !== undefined && value !== '';
    }).length;

    return Math.round((filledFields / sectionFields.length) * 100);
  };
  useEffect(() => {
  if (formData && Object.keys(formData).length > 0) {
    const sections = getProfileSections(formData);
    const totalCompletion = sections.reduce(
      (sum, section) => sum + section.completion, 
      0
    ) / sections.length;
    
    setProfileCompletion(Math.round(totalCompletion));
  }
}, [formData]); // Recalculate when formData changes
  const getProfileSections = (formData) => {
    return [
      { 
        id: 'basic', 
        label: 'Basic Information', 
        icon: User,
        completion: calculateCompletion('basic',formData)
      },
      { 
        id: 'religious', 
        label: 'Religious & Community', 
        icon: Star,
        completion: calculateCompletion('religious',formData) 
      },
      { 
        id: 'education', 
        label: 'Education & Profession', 
        icon: GraduationCap,
        completion: calculateCompletion('education',formData) 
      },
       { 
        id: 'relative', 
        label: 'Relative Info', 
        icon: Users,
        completion: calculateCompletion('relative',formData) 
      },
      { 
        id: 'horoscope', 
        label: 'Horoscope Info', 
        icon: Sparkles,
        completion: calculateCompletion('horoscope',formData) 
      },
      { 
        id: 'expectations', 
        label: 'Expectations', 
        icon: Heart,
        completion: calculateCompletion('expectations',formData) 
      },
    ];
  };

  const recentActivity = [
    { type: "view", message: "12 people viewed your profile today", time: "2 hours ago", icon: Eye },
    { type: "match", message: "3 new matches found", time: "5 hours ago", icon: Star },
    { type: "interest", message: "2 new interests received", time: "1 day ago", icon: Heart },
  ];

  const fetchUserData = async () => {
    try {
      const response = await fetch('/api/users/me');
      if (!response.ok) throw new Error('Network error');
      const data = await response.json();
      console.log("User Data: profile", data);
      setProfileCompletion(data.profileCompletion || 0);
      setVerificationStatus(data.verificationStatus || 'Unverified');
     

      const InitailFormData = {
        name: data.name || '',
        dob: data.dob || '',
        height: data.height || '',
        gender: data.gender || '',
        maritalStatus: data.maritalStatus || '',
        motherTongue: data.motherTongue || '',
        currentCity: data.currentCity || '',
        religion: data.religion || '',
        caste: data.caste || '',
        subCaste: data.subCaste || '',
        gothra: data.gothra || '',
        education: data.education || '',
        fieldOfStudy: data.fieldOfStudy || '',
        college: data.college || '',
        occupation: data.occupation || '',
        company: data.company || '',
        income: data.income || '',
        weight: data.weight || '',
        email: data.email || '',
        wearsLens: data.wearsLens || false,
        bloodGroup: data.bloodGroup || '',
        complexion: data.complexion || '',
        permanentAddress: data.permanentAddress || '',
        userId: user?.user?.id || '',
        verificationStatus: data?.verificationStatus || 'Unverified',
        profilePhoto:data?.profilePhoto || "",
         // Relative Info
        fatherName: data.fatherName || '',
        parentResidenceCity: data.parentResidenceCity || '',
        mother: data.mother || '',
        brothers: data.brothers || 0,
        marriedBrothers: data.marriedBrothers || 0,
        sisters: data.sisters || 0,
        marriedSisters: data.marriedSisters || 0,
        nativeDistrict: data.nativeDistrict || '',
        nativeCity: data.nativeCity || '',
        familyWealth: data.familyWealth || '',
        relativeSurname: data.relativeSurname || [],
        parentOccupation: data.parentOccupation || '',
        mamaSurname: data.mamaSurname || '',
        // Horoscope Info
        rashi: data.rashi || '',
        nakshira: data.nakshira || '',
        charan: data.charan || '',
        gan: data.gan || '',
        nadi: data.nadi || '',
        mangal: data.mangal || false,
        birthPlace: data.birthPlace || '',
        birthTime: data.birthTime || '',
        gotraDevak: data.gotraDevak || '',
        
        // Expectations
        expectedCaste: data.expectedCaste || '',
        preferredCity: data.preferredCity || '',
        expectedAgeDifference: data.expectedAgeDifference || '',
        expectedEducation: data.expectedEducation || '',
        divorcee: data.divorcee || false,
        expectedHeight: data.expectedHeight || '',
        expectedIncome: data.expectedIncome || '',

        // Profile Setup  
        profileSetup: {
          willAdminFill: data?.profileSetup?.willAdminFill || false,
          dontAskAgain: data?.profileSetup?.dontAskAgain || false
        }
      };
      setFormData(InitailFormData)
      // Calculate initial profile completion
      const sections = getProfileSections(InitailFormData);
      const totalCompletion = sections.reduce(
        (sum, section) => sum + section.completion, 
        0
      ) / sections.length;
      
      setProfileCompletion(Math.round(totalCompletion));
      setIsLoaded(true);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleProfileUpdate = async () => {


    const prevCompletion = profileCompletion;
    setIsSaving(true);

    try {
      const response = await fetch('/api/users/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          userId: user?.user?.id || user?.id
        }),
      });
      if (!response.ok) throw new Error('Failed to update profile');
      const result = await response.json();
      
      // Calculate new completion percentages
      const updatedSections = getProfileSections(formData);
      const totalCompletion = updatedSections.reduce(
        (sum, section) => sum + section.completion, 
        0
      ) / updatedSections.length;
      
      setProfileCompletion(Math.round(totalCompletion));
      
      // Show completion update notification if increased
      if (Math.round(totalCompletion) > prevCompletion) {
        setShowCompletionUpdate(true);
        setTimeout(() => setShowCompletionUpdate(false), 1000);
      }
      // If profile completion reaches 100% after save, automatically trigger verification
      if (Math.round(totalCompletion) === 100 && prevCompletion < 100 && verificationStatus === 'Unverified') {
        await handleVerificationSubmit();
      }
      
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleVerificationSubmit = async () => {
    try {
      const response = await fetch('/api/users/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user?.user?.id,
          verificationStatus: 'Pending',
          createdAt: new Date(),
        }),
      });

      if (!response.ok) throw new Error('Failed to submit verification');
      
      const result = await response.json();
      setVerificationStatus(true);
    } catch (error) {
      console.error("Error submitting verification:", error);
    }
  };

const handlePhotoUploadSuccess = (result, photoId) => {
  const url = result.info.secure_url;
  
  // Update photos state
  setPhotos(prevPhotos => 
    prevPhotos.map(photo =>
      photo.id === photoId
        ? { ...photo, url }
        : photo
    )
  );
  
  // If this is the primary photo (id=1), update formData
  if (photoId === 1) {
    setFormData(prev => ({
      ...prev,
      profilePhoto: url
    }));
  }
};

  const handleMakePrimary = (photoId) => {
    setPhotos(photos.map(photo => ({
      ...photo,
      isPrimary: photo.id === photoId
    })));
  };

  function VerificationBadge({ status }) {
    const statusConfig = {
      Unverified: {
        bg: 'bg-gray-100',
        text: 'text-gray-800',
        icon: null,
        label: 'Unverified'
      },
      Pending: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-800',
        icon: <Clock className="w-3 h-3 mr-1" />,
        label: 'Pending Verification'
      },
      Verified: {
        bg: 'bg-green-100',
        text: 'text-green-800',
        icon: <Shield className="w-3 h-3 mr-1" />,
        label: 'Verified Profile'
      },
      Rejected: {
        bg: 'bg-red-100',
        text: 'text-red-800',
        icon: <XCircle className="w-3 h-3 mr-1" />,
        label: 'Verification Rejected'
      }
    };
  
    const config = statusConfig[status] || statusConfig.Unverified;

    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
        {config.icon}
        {config.label}
      </span>
    );
  }
 function formatDateToYYYYMMDD(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
 console.log(formData)

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text"
                    value={formData?.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder='Enter your full name'
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Date of Birth</label>
                  <input
                   type="date"
                   value={formatDateToYYYYMMDD(formData?.dob)}
                   onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                   className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
                   />

                </div>
               <div>
                 <label className="block text-sm font-medium text-slate-700 mb-2">Height</label>
                 <select
                  value={formData.height}
                  onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                 className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
                 >
                 <option value="">Select Height</option>
                   {Array.from({ length: 24 }, (_, i) => {
                   // Starting from 4'6" (138cm) to 6'5" (196cm)
                     const feet = 4 + Math.floor((i + 6) / 12);
                      const inches = (i + 6) % 12;
                      const cm = Math.round((feet * 30.48) + (inches * 2.54));
                      return (
                          <option 
                             key={i} 
                              value={`${feet}'${inches}" (${cm} cm)`}
                           >
                           {feet}'{inches}" ({cm} cm)
                            </option>
                            );
                        })}
                  </select>
                 </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">weight</label>
                  <input 
                    type="text"
                    value={formData?.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    placeholder="Enter your weight"
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Gender</label>
                  <select
                    value={formData?.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
                  >
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Blood Group</label>
                <select
                  value={formData?.bloodGroup}
                  onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Complexion</label>
                <input
                  type="text"
                  value={formData?.complexion}
                  onChange={(e) => setFormData({ ...formData, complexion: e.target.value })}
                  placeholder="E.g. Fair, Wheatish, etc."
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
                />
              </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Marital Status</label>
                  <select
                    value={formData?.maritalStatus}
                    onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value })}
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
                  >
                    <option value="">Select Status</option>
                    <option>Unmarried</option>
                    <option>Divorced</option>
                    <option>Widowed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Mother Tongue</label>
                  <select
                    value={formData?.motherTongue}
                    onChange={(e) => setFormData({ ...formData, motherTongue: e.target.value })}
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
                  >
                    <option value="">Select language</option>
                    <option>Hindi</option>
                    <option>English</option>
                    <option>Marathi</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Current City</label>
                  <input 
                    type="text"
                    value={formData?.currentCity}
                    onChange={(e) => setFormData({ ...formData, currentCity: e.target.value })}
                    placeholder="Enter your city"
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                       <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email"
                  value={formData?.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
                />
                </div>
                 <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Permanent Address</label>
                  <input 
                    type="text"
                    value={formData?.permanentAddress}
                    onChange={(e) => setFormData({ ...formData, permanentAddress: e.target.value })}
                    placeholder='Enter your permanent address'
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Wears Lens</label>
                <select
                  value={formData?.wearsLens ? 'Yes' : 'No'}
                  onChange={(e) => setFormData({ ...formData, wearsLens: e.target.value === 'Yes' })}
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
              </div>
            </div>
          </div>
        );

      case 'religious':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Religion</label>
                  <select
                    value={formData?.religion}
                    onChange={(e) => setFormData({ ...formData, religion: e.target.value })}
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
                  >
                    <option value="">Select Religion</option>
                    <option>Hindu</option>
                    <option>Muslim</option>
                    <option>Christian</option>
                    <option>Sikh</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Caste</label>
                  <input 
                    type="text"
                    value={formData?.caste}
                    onChange={(e) => setFormData({ ...formData, caste: e.target.value })}
                    placeholder="Enter your caste" 
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Sub-caste</label>
                  <input
                    type="text"
                    value={formData?.subCaste || ""}
                    onChange={(e) => setFormData({ ...formData, subCaste: e.target.value })}
                    placeholder="Enter your sub-caste"
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Gothra</label>
                  <input 
                    type="text"
                    value={formData?.gothra}
                    onChange={(e) => setFormData({ ...formData, gothra: e.target.value })}
                    placeholder="Enter your gothra" 
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Highest Education</label>
                  <select
                    value={formData?.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
                  >
                    <option value="">Select Degree</option>
                    <option>Bachelor's Degree</option>
                    <option>Master's Degree</option>
                    <option>PhD</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Field of Study</label>
                  <input 
                    type="text"
                    value={formData?.fieldOfStudy}
                    onChange={(e) => setFormData({ ...formData, fieldOfStudy: e.target.value })}
                    placeholder='Enter your study field'
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">College/University</label>
                  <input 
                    type="text"
                    value={formData?.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    placeholder='Enter your college name'
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Occupation</label>
                  <input 
                    type="text"
                    value={formData?.occupation}
                    onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                    placeholder='Enter your occupation'
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                  <input 
                    type="text"
                    value={formData?.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder='Enter your company name'
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Annual Income</label>
                  <select
                    value={formData?.income}
                    onChange={(e) => setFormData({ ...formData, income: e.target.value })}
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
                  >
                    <option value="">Select Income</option>
                    <option>₹5-10 Lakhs</option>
                    <option>₹10-15 Lakhs</option>
                    <option>₹15-20 Lakhs</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      case 'photos':
        return (
          <div className="space-y-6">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 mr-2" />
                <div>
                  <p className="text-sm text-amber-800 font-medium">Add more photos to increase profile visibility</p>
                  <p className="text-xs text-amber-700 mt-1">Profiles with 3+ photos get 5x more interest!</p>
                </div>
              </div>
            </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {photos.map((photo) => (
    <div key={photo.id} className="relative">
      <CldUploadWidget
        uploadPreset="shreekalyanam"
        options={{
          multiple: false,
          sources: ['local'],
          maxFiles: 1
        }}
        onSuccess={(result) => handlePhotoUploadSuccess(result, photo.id)}
      >
        {({ open }) => (
          <div>
            <div 
              className="aspect-[4/5] bg-orange-50 rounded-lg border-2 border-dashed border-orange-200 flex items-center justify-center relative overflow-hidden cursor-pointer"
              onClick={() => open()}
            >
              {photo.url ? (
                <img 
                  src={photo.url} 
                  alt={`Photo ${photo.id}`} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <Camera className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <p className="text-xs text-orange-500">Add Photo</p>
                </div>
              )}
              {photo.isPrimary && photo.url && (
                <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                  Primary
                </div>
              )}
            </div>
            <div className="mt-2 space-y-1">
              <button
                onClick={() => open()}
                className="w-full bg-orange-50 text-orange-600 py-1 px-2 rounded text-xs font-medium hover:bg-orange-100 transition-colors"
              >
                {photo.url ? 'Change' : 'Upload'}
              </button>
              {photo.url && !photo.isPrimary && (
                <button
                  onClick={() => handleMakePrimary(photo.id)}
                  className="w-full bg-rose-50 text-rose-600 py-1 px-2 rounded text-xs font-medium hover:bg-rose-100 transition-colors"
                >
                  Make Primary
                </button>
              )}
            </div>
          </div>
        )}
      </CldUploadWidget>
    </div>
  ))}
</div>
          </div>
        );
case 'relative':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Father's Name</label>
                  <input 
                    type="text"
                    value={formData.fatherName}
                    onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                    placeholder="Enter father's name"
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Mother's Name</label>
                  <input 
                    type="text"
                    value={formData.mother}
                    onChange={(e) => setFormData({ ...formData, mother: e.target.value })}
                    placeholder="Enter mother's name"
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Number of Brothers</label>
                  <input 
                    type="number"
                    value={formData.brothers}
                    onChange={(e) => setFormData({ ...formData, brothers: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Married Brothers</label>
                  <input 
                    type="number"
                    value={formData.marriedBrothers}
                    onChange={(e) => setFormData({ ...formData, marriedBrothers: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Number of Sisters</label>
                  <input 
                    type="number"
                    value={formData.sisters}
                    onChange={(e) => setFormData({ ...formData, sisters: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Married Sisters</label>
                  <input 
                    type="number"
                    value={formData.marriedSisters}
                    onChange={(e) => setFormData({ ...formData, marriedSisters: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                 {/* Relative Surnames Section */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Relative Surnames</label>
            {formData.relativeSurname?.map((surname, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <input
                  type="text"
                  value={surname}
                  onChange={(e) => {
                    const updatedSurnames = [...formData.relativeSurname];
                    updatedSurnames[index] = e.target.value;
                    setFormData({
                      ...formData,
                      relativeSurname: updatedSurnames
                    });
                  }}
                  placeholder="Enter surname"
                  className="flex-1 px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
                />
                <button
                  type="button"
                  onClick={() => {
                    const filteredSurnames = formData.relativeSurname.filter((_, i) => i !== index);
                    setFormData({
                      ...formData,
                      relativeSurname: filteredSurnames
                    });
                  }}
                  className="p-2 text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                setFormData({
                  ...formData,
                  relativeSurname: [...(formData.relativeSurname || []), ""]
                });
              }}
              className="mt-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-rose-600 text-white rounded-lg hover:from-rose-500 hover:to-rose-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Add Surname
            </button>
          </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Native District</label>
                  <input 
                    type="text"
                    value={formData.nativeDistrict}
                    onChange={(e) => setFormData({ ...formData, nativeDistrict: e.target.value })}
                    placeholder="Enter native district"
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Native City</label>
                  <input 
                    type="text"
                    value={formData.nativeCity}
                    onChange={(e) => setFormData({ ...formData, nativeCity: e.target.value })}
                    placeholder="Enter native city"
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Family Wealth</label>
                  <input 
                    type="text"
                    value={formData.familyWealth}
                    onChange={(e) => setFormData({ ...formData, familyWealth: e.target.value })}
                    placeholder="Enter family wealth details"
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Parent Occupation</label>
                  <input 
                    type="text"
                    value={formData.parentOccupation}
                    onChange={(e) => setFormData({ ...formData, parentOccupation: e.target.value })}
                    placeholder="Enter parent occupation"
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Parent Residence City</label>
                  <input 
                    type="text"
                    value={formData.parentResidenceCity}
                    onChange={(e) => setFormData({ ...formData, parentResidenceCity: e.target.value })}
                    placeholder="Enter parent residence city"
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Mama Surname</label>
                  <input 
                    type="text"
                    value={formData.mamaSurname}
                    onChange={(e) => setFormData({ ...formData, mamaSurname: e.target.value })}
                    placeholder="Enter mama surname"
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                
              </div>
            </div>
          </div>
        );

      case 'horoscope':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Rashi</label>
                  <input 
                    type="text"
                    value={formData.rashi}
                    onChange={(e) => setFormData({ ...formData, rashi: e.target.value })}
                    placeholder="Enter your rashi"
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nakshira</label>
                  <input 
                    type="text"
                    value={formData.nakshira}
                    onChange={(e) => setFormData({ ...formData, nakshira: e.target.value })}
                    placeholder="Enter your nakshira"
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Charan</label>
                  <input 
                    type="text"
                    value={formData.charan}
                    onChange={(e) => setFormData({ ...formData, charan: e.target.value })}
                    placeholder="Enter your charan"
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Gan</label>
                  <input 
                    type="text"
                    value={formData.gan}
                    onChange={(e) => setFormData({ ...formData, gan: e.target.value })}
                    placeholder="Enter your gan"
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                 <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Gotra/Devak</label>
                  <input 
                    type="text"
                    value={formData.gotraDevak}
                    onChange={(e) => setFormData({ ...formData, gotraDevak: e.target.value })}
                    placeholder="Enter gotra/devak"
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nadi</label>
                  <input 
                    type="text"
                    value={formData.nadi}
                    onChange={(e) => setFormData({ ...formData, nadi: e.target.value })}
                    placeholder="Enter your nadi"
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Mangal</label>
                  <select
                    value={formData.mangal ? 'Yes' : 'No'}
                    onChange={(e) => setFormData({ ...formData, mangal: e.target.value === 'Yes' })}
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Birth Place</label>
                  <input 
                    type="text"
                    value={formData.birthPlace}
                    onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                    placeholder="Enter birth place"
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Birth Time</label>
                  <input 
                    type="text"
                    value={formData.birthTime}
                    onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                    placeholder="Enter birth time"
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
               
              </div>
            </div>
          </div>
        );
        case 'expectations':
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Expected Caste</label>
            <input 
              type="text"
              value={formData.expectedCaste}
              onChange={(e) => setFormData({ ...formData, expectedCaste: e.target.value })}
              placeholder="Enter expected caste"
              className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Preferred City</label>
            <input 
              type="text"
              value={formData.preferredCity}
              onChange={(e) => setFormData({ ...formData, preferredCity: e.target.value })}
              placeholder="Enter preferred city"
              className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Expected Age Difference</label>
            <select
              value={formData.expectedAgeDifference}
              onChange={(e) => setFormData({ ...formData, expectedAgeDifference: e.target.value })}
              className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
            >
              <option value="">Select age difference</option>
              <option>±1 year</option>
              <option>±2 years</option>
              <option>±3 years</option>
              <option>±5 years</option>
            </select>
          </div>
            <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Expected Income</label>
            <select
              value={formData.expectedIncome}
              onChange={(e) => setFormData({ ...formData, expectedIncome: e.target.value })}
              className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
            >
              <option value="">Select income range</option>
              <option>₹5-10 Lakhs</option>
              <option>₹10-15 Lakhs</option>
              <option>₹15-20 Lakhs</option>
            </select>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Expected Education</label>
            <select
              value={formData.expectedEducation}
              onChange={(e) => setFormData({ ...formData, expectedEducation: e.target.value })}
              className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
            >
              <option value="">Select education level</option>
              <option>Bachelor's Degree</option>
              <option>Master's Degree</option>
              <option>PhD</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Accept Divorcee</label>
            <select
              value={formData.divorcee ? 'Yes' : 'No'}
              onChange={(e) => setFormData({ ...formData, divorcee: e.target.value === 'Yes' })}
              className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Expected Height</label>
            <select
              value={formData.expectedHeight}
              onChange={(e) => setFormData({ ...formData, expectedHeight: e.target.value })}
              className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
            >
              <option value="">Select height range</option>
              <option>5'0" - 5'5"</option>
              <option>5'5" - 5'10"</option>
              <option>5'10" - 6'0"</option>
            </select>
          </div>
          <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Gotra/Devak</label>
                  <input 
                    type="text"
                    value={formData.gotraDevak}
                    onChange={(e) => setFormData({ ...formData, gotraDevak: e.target.value })}
                    placeholder="Expected gotra"
                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50" 
                  />
                </div>
        </div>
      </div>
    </div>
  );
      default:
        return (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-lg font-medium text-slate-800 mb-2">Coming Soon</h3>
            <p className="text-slate-600">This section is under development</p>
          </div>
        );
    }
  };
  
  return (
      !isLoaded ?<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
       <div className="text-center">
        {/* Simple Spinner */}
        <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin mx-auto mb-4"></div>
        
        {/* Loading Text */}
        <p className="text-slate-600 text-lg">Loading...</p>
      </div>
    </div> : <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Profile Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-orange-500 to-rose-600 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">My Profile</h1>
              <p className="text-rose-100">Complete your profile to find better matches</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
                Completion: {profileCompletion}%
              </div>
              <VerificationBadge status={verificationStatus} />
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar: Sections */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 space-y-4"
          >
            {getProfileSections(formData).map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                  activeTab === section.id 
                    ? 'bg-orange-500 text-white shadow-md' 
                    : 'bg-white border border-orange-50 hover:bg-orange-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <section.icon className={`w-5 h-5 ${activeTab === section.id ? 'text-white' : 'text-orange-500'}`} />
                    <span className="font-medium">{section.label}</span>
                  </div>
                  <div className={`text-sm ${activeTab === section.id ? 'text-white/80' : 'text-orange-600'}`}>
                    {section.completion}% Complete
                  </div>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Right Content: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-lg border border-orange-50"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">{getProfileSections(formData).find(s => s.id === activeTab)?.label}</h2>
            {renderTabContent()}
            <div className="mt-8 flex justify-end">
              <button 
                onClick={handleProfileUpdate}
                disabled={isSaving}
                className="bg-gradient-to-r from-orange-500 to-rose-600 text-white px-6 py-3 rounded-lg font-medium hover:from-rose-500 hover:to-rose-600 transition-colors disabled:opacity-50"
              >
                {isSaving ? (
                  <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                ) : (
                  'Save Changes'
                )}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Form Fill Choice Modal */}
        <AnimatePresence>
          {showFormFillChoice && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-xl"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-4">Profile Setup Preference</h3>
                <p className="text-slate-600 mb-6">
                  Would you like our admin team to fill out your profile details for you?
                </p>
                <div className="space-y-4">
                  <button
                    onClick={() => handleFormFillChoice(true)}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-orange-500 to-rose-600 text-white py-3 rounded-lg font-medium hover:from-rose-500 hover:to-rose-600 transition-colors"
                  >
                    Yes, let admin fill it
                  </button>
                  <button
                    onClick={() => handleFormFillChoice(false)}
                    disabled={isLoading}
                    className="w-full bg-white border border-orange-200 text-orange-600 py-3 rounded-lg font-medium hover:bg-orange-50 transition-colors"
                  >
                    No, I'll fill it myself
                  </button>
                  <label className="flex items-center space-x-2 text-sm text-slate-600">
                    <input
                      type="checkbox"
                      checked={dontAskAgain}
                      onChange={(e) => setDontAskAgain(e.target.checked)}
                      className="rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                    />
                    <span>Don't ask again</span>
                  </label>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}