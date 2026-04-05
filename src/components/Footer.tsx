import React from 'react';
import { Compass, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-matte-gray pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center">
              <Compass className="text-matte-black w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tighter">ZENITH</span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed mb-8">
            Crafting extraordinary journeys for over 15 years. 
            Our expertise is your gateway to the world's most 
            exclusive and authentic experiences.
          </p>
          <div className="flex gap-4">
            <SocialIcon icon={<Instagram size={18} />} />
            <SocialIcon icon={<Twitter size={18} />} />
            <SocialIcon icon={<Facebook size={18} />} />
            <SocialIcon icon={<Mail size={18} />} />
          </div>
        </div>

        <div>
          <h4 className="text-lg font-display font-bold mb-8">Destinations</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><a href="#" className="hover:text-accent-gold transition-colors">Western Europe</a></li>
            <li><a href="#" className="hover:text-accent-gold transition-colors">Southeast Asia</a></li>
            <li><a href="#" className="hover:text-accent-gold transition-colors">Mediterranean Coast</a></li>
            <li><a href="#" className="hover:text-accent-gold transition-colors">Nordic Landscapes</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-display font-bold mb-8">Services</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><a href="#" className="hover:text-accent-gold transition-colors">Bespoke Itineraries</a></li>
            <li><a href="#" className="hover:text-accent-gold transition-colors">Luxury Concierge</a></li>
            <li><a href="#" className="hover:text-accent-gold transition-colors">Group Expeditions</a></li>
            <li><a href="#" className="hover:text-accent-gold transition-colors">Corporate Retreats</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-display font-bold mb-8">Newsletter</h4>
          <p className="text-white/40 text-sm mb-6">
            Subscribe to receive expert travel tips and exclusive offers.
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm flex-1 outline-none focus:border-accent-gold transition-colors"
            />
            <button className="bg-accent-gold text-matte-black px-6 py-3 rounded-xl font-bold text-sm hover:bg-white transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-bold text-white/20">
        <p>© 2026 ZENITH TRAVEL. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent-gold hover:border-accent-gold transition-all duration-300">
    {icon}
  </a>
);

export default Footer;
