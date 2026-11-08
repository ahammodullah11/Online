import React, { useState } from 'react';
import logo from '../assets/logo-text.png'
interface NavbarProps {
  onShowToast: (message: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onShowToast }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (name: string) => {
    onShowToast(`Navigated to ${name}`);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
            <img src={logo} alt="" />
          

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavClick('Home')} className="text-pink-500 font-medium text-sm">Home</button>
            <button onClick={() => handleNavClick('Technologies')} className="text-gray-600 hover:text-gray-900 text-sm">Technologies</button>
            <button onClick={() => handleNavClick('Projects')} className="text-gray-600 hover:text-gray-900 text-sm">Projects</button>
            <button onClick={() => handleNavClick('About')} className="text-gray-600 hover:text-gray-900 text-sm">About</button>
            <button onClick={() => handleNavClick('Contact')} className="text-gray-600 hover:text-gray-900 text-sm">Contact</button>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => onShowToast('Sign In clicked!')} className="text-gray-600 text-sm hover:text-gray-900">Sign In</button>
            <button onClick={() => onShowToast('Sign Up clicked!')} className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium transition">
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-4 space-y-3">
          <button onClick={() => handleNavClick('Home')} className="block w-full text-left py-2 text-pink-500 font-medium">Home</button>
          <button onClick={() => handleNavClick('Technologies')} className="block w-full text-left py-2 text-gray-600">Technologies</button>
          <button onClick={() => handleNavClick('Projects')} className="block w-full text-left py-2 text-gray-600">Projects</button>
          <button onClick={() => handleNavClick('About')} className="block w-full text-left py-2 text-gray-600">About</button>
          <button onClick={() => handleNavClick('Contact')} className="block w-full text-left py-2 text-gray-600">Contact</button>
          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <button onClick={() => { onShowToast('Sign In clicked!'); setIsOpen(false); }} className="w-full text-center py-2 text-gray-600 border rounded-lg">Sign In</button>
            <button onClick={() => { onShowToast('Sign Up clicked!'); setIsOpen(false); }} className="w-full text-center py-2 bg-pink-500 text-white rounded-lg font-medium">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
};