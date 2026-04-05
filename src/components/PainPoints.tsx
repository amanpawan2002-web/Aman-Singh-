import React from 'react';
import { ShieldCheck, Clock, Zap, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

const PainPoints = () => {
  const points = [
    {
      icon: <ShieldCheck className="text-accent-gold" size={32} />,
      title: "No Hidden Costs",
      description: "Tired of surprise fees at checkout? Our prices are all-inclusive, showing you the real cost from the start."
    },
    {
      icon: <Clock className="text-accent-gold" size={32} />,
      title: "Expertly Vetted",
      description: "We don't just list everything. Every hotel and experience is personally vetted by our agents with 15+ years of experience."
    },
    {
      icon: <Zap className="text-accent-gold" size={32} />,
      title: "Unified Booking",
      description: "Stop juggling 10 tabs. Book your flight, hotel, and local dinner in one seamless, beautiful interface."
    },
    {
      icon: <HeartHandshake className="text-accent-gold" size={32} />,
      title: "24/7 Agent Support",
      description: "Travel with peace of mind. Our human agents are just a message away if anything goes wrong during your trip."
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-matte-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-accent-gold text-xs font-bold tracking-widest uppercase mb-4 block">Why Zenith?</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Travel Without The <span className="italic text-accent-gold">Friction</span>.</h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            We've spent 15 years listening to travellers. We've built Zenith to solve the 
            most common frustrations of modern travel planning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-matte-gray border border-white/5 hover:border-accent-gold/30 transition-all duration-500 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-4">{point.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-light">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
