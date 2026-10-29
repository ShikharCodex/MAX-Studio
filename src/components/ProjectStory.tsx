import { motion } from 'framer-motion';

const ProjectStory = () => {
  return (
    <section id="story" className="py-28 md:py-40 bg-[#08090d] text-white relative z-10 overflow-hidden border-t border-white/5">
      {/* Decorative large paw abstract */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute -right-[20%] top-1/2 -translate-y-1/2 text-[40vw] text-white/[0.02] font-display font-bold leading-none select-none pointer-events-none"
      >
        M.
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-orange/10 border border-accent-orange/20 text-accent-orange text-xs font-mono tracking-widest uppercase mb-6">
              THE MISSION
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-8 sm:mb-12 tracking-tight text-white">
              Because daily care shouldn't <br className="hidden md:block" />
              be <span className="text-accent-orange italic">complicated.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-lg sm:text-2xl md:text-3xl text-white/75 leading-relaxed font-light max-w-4xl mx-auto">
              Traditional pet routines demand constant manual vigilance. 
              <span className="text-white font-medium"> MAX STUDIO </span> 
              unifies precise gram-level kibble dispensing, automated ultrasonic water depth regulation, and instant low-latency optical surveillance into one harmonious system.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectStory;
