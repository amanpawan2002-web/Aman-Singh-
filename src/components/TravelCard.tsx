import React from 'react';
import { Star, MapPin, Info } from 'lucide-react';
import { TravelItem } from '../types';
import { motion } from 'motion/react';

interface TravelCardProps {
  item: TravelItem;
}

const TravelCard: React.FC<TravelCardProps> = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="matte-card rounded-3xl overflow-hidden group flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-matte-black/60 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider rounded-full border border-white/10">
            {item.category}
          </span>
          <span className={`px-3 py-1 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider rounded-full border border-white/10 ${
            item.priceRange === 'expensive' ? 'bg-accent-gold/80 text-matte-black' : 
            item.priceRange === 'medium' ? 'bg-accent-blue/80 text-white' : 
            'bg-green-500/80 text-white'
          }`}>
            {item.priceRange}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-matte-black/60 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 flex items-center gap-1">
          <Star size={12} className="text-accent-gold fill-accent-gold" />
          <span className="text-xs font-bold">{item.rating}</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-1 text-white/40 text-[10px] uppercase font-bold tracking-widest mb-2">
          <MapPin size={10} />
          {item.location}
        </div>
        <h3 className="text-xl font-display font-bold mb-3 group-hover:text-accent-gold transition-colors">
          {item.title}
        </h3>
        <p className="text-white/50 text-sm font-light line-clamp-2 mb-6 leading-relaxed">
          {item.description}
        </p>

        {item.expertTip && (
          <div className="mb-6 p-3 bg-accent-gold/5 border-l-2 border-accent-gold rounded-r-lg flex gap-3">
            <Info size={16} className="text-accent-gold shrink-0 mt-0.5" />
            <p className="text-[11px] text-accent-gold/80 italic leading-snug">
              <span className="font-bold not-italic block mb-0.5">Agent's Tip:</span>
              {item.expertTip}
            </p>
          </div>
        )}

        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
          <div>
            <span className="text-white/40 text-[10px] uppercase font-bold block">Starting from</span>
            <span className="text-2xl font-display font-bold">${item.price}</span>
          </div>
          <button className="px-6 py-2.5 bg-white text-matte-black text-xs font-bold rounded-xl hover:bg-accent-gold transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TravelCard;
