import React from 'react';
import { Plane, Hotel, Map, Package, Utensils, Compass, Search, User, Menu } from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism h-20 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center">
          <Compass className="text-matte-black w-6 h-6" />
        </div>
        <span className="text-2xl font-display font-bold tracking-tighter">ZENITH</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <NavLink icon={<Plane size={18} />} label="Flights" />
        <NavLink icon={<Hotel size={18} />} label="Hotels" />
        <NavLink icon={<Map size={18} />} label="Experiences" />
        <NavLink icon={<Package size={18} />} label="Packages" />
        <NavLink icon={<Utensils size={18} />} label="Dining" />
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Search size={20} />
        </button>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <User size={20} />
        </button>
        <button className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors">
          <Menu size={20} />
        </button>
      </div>
    </nav>
  );
};

const NavLink = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <a href="#" className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors group">
    <span className="group-hover:scale-110 transition-transform">{icon}</span>
    {label}
  </a>
);

export default Navbar;
