import { motion } from 'framer-motion';
import { Activity, Disc, Wifi, Zap, Eye, Heart } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-[#faf9f8]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-xs md:text-sm font-mono tracking-widest text-accent-brown mb-4">CAPABILITIES</h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-display font-medium tracking-tight">Designed for control.</h3>
        </div>

        {/* BENTO BOX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 sm:gap-6 lg:gap-8 auto-rows-[minmax(280px,auto)]">
          
          {/* Main Feature - Spans 2 columns */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="md:col-span-2 glass-panel rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 min-h-[300px] md:min-h-[auto]"
          >
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-accent-orange/10 rounded-full blur-[60px] sm:blur-[80px] group-hover:bg-accent-orange/20 transition-colors duration-500"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="mb-12 md:mb-0">
                <Activity size={32} className="text-accent-brown mb-4 sm:mb-6" />
                <h4 className="text-xl sm:text-2xl md:text-3xl font-display font-medium mb-2 sm:mb-3">Smart Food Detection</h4>
                <p className="text-foreground/60 text-base sm:text-lg max-w-sm">Advanced sensors monitor the exact amount of food remaining in real-time.</p>
              </div>
              
              {/* Abstract Visual - Hidden on very small screens or placed nicely */}
              <div className="absolute bottom-[-10%] right-[-10%] w-[50%] md:w-[60%] aspect-square border-[1px] border-accent-brown/20 rounded-full flex items-center justify-center pointer-events-none opacity-50 sm:opacity-100">
                <div className="w-[70%] aspect-square border-[1px] border-accent-brown/40 rounded-full animate-[spin_20s_linear_infinite]"></div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 bg-foreground text-background min-h-[280px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-foreground to-black"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <Wifi size={32} className="text-accent-green mb-4 sm:mb-6" />
                <h4 className="text-xl sm:text-2xl font-display font-medium mb-2 sm:mb-3">Live Control</h4>
                <p className="text-background/70 text-sm sm:text-base">Interact securely with the feeder from the web interface.</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-accent-green/30 flex items-center justify-center mt-6">
                <div className="w-2 h-2 rounded-full bg-accent-green animate-ping"></div>
              </div>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 min-h-[280px]"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <Disc size={32} className="text-foreground mb-4 sm:mb-6 group-hover:rotate-180 transition-transform duration-1000" />
                <h4 className="text-xl sm:text-2xl font-display font-medium mb-2 sm:mb-3">Auto Dispensing</h4>
                <p className="text-foreground/60 text-sm sm:text-base">Motorized hardware mechanism releases the exact required amount.</p>
              </div>
            </div>
          </motion.div>

          {/* Feature 4 - Spans 2 columns */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 glass-panel rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500"
          >
             <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-accent-green/10 rounded-full blur-[60px] sm:blur-[80px] group-hover:bg-accent-green/20 transition-colors duration-500 pointer-events-none"></div>
            <div className="relative z-10 h-full flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
              <div className="max-w-md">
                <Heart size={32} className="text-accent-green mb-4 sm:mb-6" />
                <h4 className="text-xl sm:text-2xl md:text-3xl font-display font-medium mb-2 sm:mb-3">Pet-First Design</h4>
                <p className="text-foreground/60 text-sm sm:text-lg">Every acoustic detail, material choice, and dispensing speed is designed around practical, stress-free everyday pet care.</p>
              </div>
              <div className="flex gap-3 sm:gap-4 mt-4 md:mt-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white shadow-sm flex items-center justify-center border border-black/5">
                  <Eye size={20} className="text-foreground/40 sm:w-6 sm:h-6" />
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white shadow-sm flex items-center justify-center border border-black/5">
                  <Zap size={20} className="text-foreground/40 sm:w-6 sm:h-6" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;
