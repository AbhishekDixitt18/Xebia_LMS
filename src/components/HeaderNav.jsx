import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Logo from './Logo.jsx';

export default function HeaderNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="h-20 bg-white/95 border-b border-medium-grey backdrop-blur-md sticky top-0 z-50 flex items-center justify-between px-8 md:px-16 shadow-sm">
      <Link to="/" className="flex items-center gap-3 cursor-pointer select-none">
        <Logo className="h-8" />
      </Link>

      <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-dark-grey">
        <Link 
          to="/" 
          className={`transition cursor-pointer ${currentPath === '/' ? 'text-tranquil-velvet font-bold border-b-2 border-tranquil-velvet py-1' : 'hover:text-tranquil-velvet'}`}
        >
          Home
        </Link>
        <Link 
          to="/faq" 
          className={`transition cursor-pointer ${currentPath === '/faq' ? 'text-tranquil-velvet font-bold border-b-2 border-tranquil-velvet py-1' : 'hover:text-tranquil-velvet'}`}
        >
          FAQ
        </Link>
        <Link 
          to="/contact" 
          className={`transition cursor-pointer ${currentPath === '/contact' ? 'text-tranquil-velvet font-bold border-b-2 border-tranquil-velvet py-1' : 'hover:text-tranquil-velvet'}`}
        >
          Contact Us
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <Link 
          to="/dashboard"
          className="px-5 py-2.5 bg-cta-orange hover:bg-[#E05600] text-white text-xs font-bold rounded-xl transition duration-200 shadow-md shadow-cta-orange/20 flex items-center gap-1.5 cursor-pointer text-center"
        >
          <span>Enter LMS</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}
