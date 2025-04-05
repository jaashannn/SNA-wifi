import React from 'react';
import { Wifi, Menu, X } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Wifi className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold">SNA</span>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#plans" className="text-gray-700 hover:text-blue-600">Plans</a>
            <a href="#reviews" className="text-gray-700 hover:text-blue-600">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600">Home</a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">About</a>
            <a href="#plans" className="block py-2 text-gray-700 hover:text-blue-600">Plans</a>
            <a href="#reviews" className="block py-2 text-gray-700 hover:text-blue-600">Reviews</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;