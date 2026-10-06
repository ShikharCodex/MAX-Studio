import { motion } from 'framer-motion';

const ProjectStory = () => {
  return (
    <section id="story" className="py-32 md:py-48 bg-background relative z-10 overflow-hidden">
      {/* Decorative large paw abstract */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute -right-[20%] top-1/2 -translate-y-1/2 text-[40vw] text-accent-brown/5 font-display font-bold leading-none select-none pointer-events-none"
      >
        M.
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.1] mb-12 tracking-tight">
              Because feeding shouldn't <br className="hidden md:block" />
              be <span className="text-accent-brown italic">complicated.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xl md:text-3xl text-foreground/60 leading-relaxed font-light max-w-4xl mx-auto">
              Traditional feeding requires manual effort and fixed routines. 
              <span className="text-foreground font-medium"> MAX STUDIO </span> 
              is an intelligent, beautifully engineered system that automates pet feeding while 
              providing absolute control through a seamless digital interface.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectStory;
