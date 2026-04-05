import React from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=2000" 
          alt="European Landscape"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-matte-black/20 via-matte-black/60 to-matte-black" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-accent-gold/20 text-accent-gold border border-accent-gold/30 rounded-full">
            15 Years of Expert Curation
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[1.1] tracking-tight">
            Journeys That <br />
            <span className="text-accent-gold italic">Define</span> You.
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            From the cobblestone streets of Europe to the hidden islands of SE Asia, 
            we design experiences that transcend the ordinary.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-4xl mx-auto glass-morphism rounded-2xl p-2 flex flex-col md:flex-row items-center gap-2"
        >
          <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-white/10">
            <MapPin className="text-accent-gold" size={20} />
            <input 
              type="text" 
              placeholder="Where to next?" 
              className="bg-transparent border-none outline-none text-white placeholder:text-white/30 w-full text-sm"
            />
          </div>
          <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-white/10">
            <Calendar className="text-accent-gold" size={20} />
            <input 
              type="text" 
              placeholder="When?" 
              className="bg-transparent border-none outline-none text-white placeholder:text-white/30 w-full text-sm"
            />
          </div>
          <div className="flex-1 w-full flex items-center gap-3 px-4 py-3">
            <Users className="text-accent-gold" size={20} />
            <input 
              type="text" 
              placeholder="How many?" 
              className="bg-transparent border-none outline-none text-white placeholder:text-white/30 w-full text-sm"
            />
          </div>
          <button className="w-full md:w-auto px-8 py-4 bg-accent-gold text-matte-black font-bold rounded-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-2">
            <Search size={18} />
            Explore
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
