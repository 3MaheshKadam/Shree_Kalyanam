"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  User, 
  Search, 
  Heart, 
  UserPlus, 
  Settings,
  Sparkles,
  Crown,
  X,
  Star
} from 'lucide-react';

// Configuration
const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/dashboard/profile/me", label: "My Profile", icon: User },
  { href: "/dashboard/matches", label: "Matches", icon: Heart },
  { href: "/dashboard/interests", label: "Interests", icon: UserPlus },
  { href: "/dashboard/subscription", label: "Subscription", icon: Crown },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

const QUICK_ACTIONS = [
  { 
    href: "/search", 
    label: "Advanced Search", 
    icon: Search, 
    colorScheme: "red" 
  },
  { 
    href: "/dashboard/premium-features", 
    label: "Premium Features", 
    icon: Star, 
    colorScheme: "emerald" 
  },
];

// Utility function for color schemes
const getColorClasses = (scheme, type = 'hover') => {
  const schemes = {
    red: {
      hover: 'hover:from-red-50 hover:to-orange-50 hover:text-red-600 hover:border-red-100/50',
      icon: 'text-red-500',
      iconBg: 'border-red-100/50'
    },
    emerald: {
      hover: 'hover:from-emerald-50 hover:to-teal-50 hover:text-emerald-600 hover:border-emerald-100/50',
      icon: 'text-emerald-500',
      iconBg: 'border-emerald-100/50'
    }
  };
  return schemes[scheme]?.[type] || '';
};

// Sub-components
const Logo = () => (
  <div className="flex items-center space-x-4">

    <div>
      <h1 className="font-bold text-2xl bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
        Shree Kalyanam
      </h1>
    
    </div>
  </div>
);

const SectionHeader = ({ label, gradientFrom = "orange-500", gradientTo = "red-500" }) => (
  <div className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-3 px-3 flex items-center">
    <div className={`w-1.5 h-5 bg-gradient-to-b from-${gradientFrom} to-${gradientTo} rounded-full mr-3 shadow-md`}></div>
    {label}
  </div>
);

const NavLink = ({ href, label, icon: Icon, isActive, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className={`
      group flex items-center justify-between px-5 py-3.5 rounded-xl 
      transition-all duration-200 relative
      active:scale-[0.98]
      ${isActive
        ? "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white shadow-xl shadow-red-500/25"
        : "text-slate-700 hover:bg-white/80 hover:shadow-lg border border-transparent hover:border-orange-200/50"
      }
    `}
  >
    <div className="flex items-center space-x-3">
      <div className={`
        p-2.5 rounded-lg transition-all duration-200
        ${isActive 
          ? "bg-white/25 backdrop-blur-sm" 
          : "bg-gradient-to-br from-orange-50 to-red-50 group-hover:from-orange-100 group-hover:to-red-100"
        }
      `}>
        <Icon className={`
          w-5 h-5 transition-all duration-200
          ${isActive ? "text-white" : "text-orange-600 group-hover:text-red-600"}
        `} />
      </div>
      
      <span className={`
        font-semibold text-sm transition-all duration-200
        ${isActive ? "text-white" : "text-slate-700 group-hover:text-slate-900"}
      `}>
        {label}
      </span>
    </div>
    
    {isActive ? (
      <div className="flex items-center gap-1">
        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
        <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-pulse delay-100"></div>
        <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse delay-200"></div>
      </div>
    ) : (
      <svg className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
      </svg>
    )}
  </Link>
);

const QuickActionLink = ({ href, label, icon: Icon, colorScheme, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className={`
      flex items-center justify-between px-5 py-3 rounded-xl 
      text-slate-700 transition-all duration-200 
      group border border-slate-200/50 hover:border-${colorScheme}-300
      hover:bg-gradient-to-r active:scale-[0.98]
      ${colorScheme === 'red' ? 'hover:from-red-50 hover:to-orange-50' : 'hover:from-emerald-50 hover:to-teal-50'}
    `}
  >
    <div className="flex items-center space-x-3">
      <div className={`
        p-2 rounded-lg bg-white border-2
        transition-all duration-200 group-hover:scale-110
        ${colorScheme === 'red' ? 'border-red-200 group-hover:border-red-400' : 'border-emerald-200 group-hover:border-emerald-400'}
      `}>
        <Icon className={`w-4 h-4 ${getColorClasses(colorScheme, 'icon')} transition-all duration-200`} />
      </div>
      
      <span className={`
        font-medium text-sm
        ${colorScheme === 'red' ? 'group-hover:text-red-600' : 'group-hover:text-emerald-600'}
      `}>
        {label}
      </span>
    </div>

    <div className={`
      w-6 h-6 rounded-full border-2 flex items-center justify-center
      transition-all duration-200 group-hover:rotate-90
      ${colorScheme === 'red' ? 'border-red-300 text-red-500' : 'border-emerald-300 text-emerald-500'}
    `}>
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
      </svg>
    </div>
  </Link>
);

const DecorativeBlobs = () => (
  <>
    <div className="absolute top-32 -right-10 w-32 h-32 bg-gradient-to-br from-orange-300 to-red-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
    <div className="absolute bottom-32 -left-10 w-24 h-24 bg-gradient-to-br from-pink-300 to-red-300 rounded-full blur-2xl opacity-25 animate-pulse delay-700"></div>
    <div className="absolute top-1/2 -right-5 w-20 h-20 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full blur-2xl opacity-20 animate-pulse delay-500"></div>
  </>
);

// Main Component
export default function Sidebar({ mobileOpen = false, setMobileOpen }) {
  const pathname = usePathname();
  
  const closeSidebar = () => setMobileOpen?.(false);
  
  const isLinkActive = (href, exact = false) => {
    return exact ? pathname === href : pathname.startsWith(href);
  };

  return (
    <>
      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-30 w-80 h-screen
        bg-gradient-to-br from-orange-50/80 via-white to-red-50/60
        shadow-2xl border-r border-orange-200/40 backdrop-blur-xl
        flex flex-col overflow-hidden 
        transition-all duration-300 ease-in-out
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        
        {/* Mobile Close Button */}
        <button 
          onClick={closeSidebar}
          className="lg:hidden absolute top-5 right-5 p-2.5 rounded-xl bg-white/90 text-orange-600 hover:bg-orange-100 shadow-lg transition-all duration-200 backdrop-blur-sm z-50 border border-orange-200"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Header */}
        <div className="p-6 border-b border-orange-200/50 bg-white/60 backdrop-blur-md">
          <Logo />
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-5 space-y-2.5">
          <SectionHeader label="Main Menu" />
          
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              isActive={isLinkActive(item.href, item.exact)}
              onClick={closeSidebar}
            />
          ))}

          {/* Quick Actions */}
          <div className="mt-8 pt-6 border-t border-orange-200/50">
            <SectionHeader 
              label="Quick Actions" 
              gradientFrom="red-500" 
              gradientTo="pink-500" 
            />
            
            {QUICK_ACTIONS.map((action) => (
              <QuickActionLink
                key={action.href}
                href={action.href}
                label={action.label}
                icon={action.icon}
                colorScheme={action.colorScheme}
                onClick={closeSidebar}
              />
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-5 border-t border-orange-200/50 bg-gradient-to-r from-orange-50/50 to-red-50/50 backdrop-blur-md">
          <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
            <Sparkles className="w-3 h-3 text-orange-500" />
            <span>Made with <span className="text-red-500 font-semibold">♥</span> for your journey</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <DecorativeBlobs />
      </aside>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div 
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20 lg:hidden"
        />
      )}
    </>
  );
}