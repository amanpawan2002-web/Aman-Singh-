import React from 'react';
import { Category } from '../types';
import { motion } from 'motion/react';

interface CategoryTabsProps {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
}

const categories: { id: Category; label: string }[] = [
  { id: 'flights', label: 'Flights' },
  { id: 'hotels', label: 'Hotels' },
  { id: 'experiences', label: 'Experiences' },
  { id: 'packages', label: 'Packages' },
  { id: 'restaurants', label: 'Dining' },
  { id: 'adventures', label: 'Adventures' },
];

const CategoryTabs: React.FC<CategoryTabsProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setActiveCategory(cat.id)}
          className={`relative px-8 py-3 text-sm font-bold tracking-widest uppercase rounded-2xl transition-all duration-300 ${
            activeCategory === cat.id 
              ? 'text-matte-black' 
              : 'text-white/40 hover:text-white hover:bg-white/5 border border-white/5'
          }`}
        >
          {activeCategory === cat.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-accent-gold rounded-2xl z-0"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{cat.label}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
