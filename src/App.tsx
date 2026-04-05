import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryTabs from './components/CategoryTabs';
import TravelCard from './components/TravelCard';
import PainPoints from './components/PainPoints';
import Footer from './components/Footer';
import { travelItems } from './data/mockData';
import { Category } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, ChevronRight } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('hotels');
  const [priceFilter, setPriceFilter] = useState<'all' | 'economical' | 'medium' | 'expensive'>('all');

  const filteredItems = useMemo(() => {
    return travelItems.filter(item => {
      const categoryMatch = item.category === activeCategory;
      const priceMatch = priceFilter === 'all' || item.priceRange === priceFilter;
      return categoryMatch && priceMatch;
    });
  }, [activeCategory, priceFilter]);

  return (
    <div className="min-h-screen bg-matte-black selection:bg-accent-gold selection:text-matte-black">
      <Navbar />
      
      <main>
        <Hero />

        <PainPoints />

        {/* Explore Section */}
        <section className="py-32 px-6 md:px-12 bg-matte-black">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <span className="text-accent-gold text-xs font-bold tracking-widest uppercase mb-4 block">Our Curated Selection</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                  Discover Your Next <br />
                  <span className="text-accent-gold italic">Masterpiece</span> Journey.
                </h2>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-6 py-3 bg-matte-gray border border-white/5 rounded-2xl">
                  <Filter size={16} className="text-accent-gold" />
                  <select 
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value as any)}
                    className="bg-transparent text-sm font-bold uppercase tracking-wider outline-none cursor-pointer"
                  >
                    <option value="all" className="bg-matte-gray">All Price Ranges</option>
                    <option value="economical" className="bg-matte-gray">Economical</option>
                    <option value="medium" className="bg-matte-gray">Medium Range</option>
                    <option value="expensive" className="bg-matte-gray">Luxury / Expensive</option>
                  </select>
                </div>
              </div>
            </div>

            <CategoryTabs 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px]">
              <AnimatePresence mode="popLayout">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                    >
                      <TravelCard item={item} />
                    </motion.div>
                  ))
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full flex flex-col items-center justify-center py-32 text-center"
                  >
                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                      <Filter size={32} className="text-white/20" />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2">No results found</h3>
                    <p className="text-white/40">Try adjusting your filters or exploring another category.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-24 text-center">
              <button className="group inline-flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold tracking-widest uppercase text-xs hover:bg-white hover:text-matte-black transition-all duration-500">
                View All Curated {activeCategory}
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Testimonial / Quote Section */}
        <section className="py-32 px-6 md:px-12 bg-matte-gray relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-gold rounded-full blur-[120px]" />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="text-accent-gold text-5xl font-serif italic mb-8 block">"</span>
            <blockquote className="text-3xl md:text-4xl font-display font-medium leading-relaxed mb-12">
              The world is a book, and those who do not travel read only one page. 
              We are here to help you write your own <span className="text-accent-gold italic">epic</span>.
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-accent-gold">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
                  alt="Lead Agent" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-bold tracking-widest uppercase text-xs">Alexander Zenith</p>
              <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Founder & Lead Agent (15 Years Exp.)</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

