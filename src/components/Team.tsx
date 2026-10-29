import { motion } from 'framer-motion';

const teamMembers = [
  { id: '01', name: 'SHIKHA', role: 'Senior Architecture Head, Software/Hardware' },
  { id: '02', name: 'SIDDHI', role: 'Design Architecture & UI UX Head, Software/Hardware' },
  { id: '03', name: 'SHIKHAR', role: 'Core Hardware/Software Architecture Head' },
  { id: '04', name: 'KARTIK', role: 'Presentator and Project Guide Head' },
];

const Team = () => {
  return (
    <section id="team" className="py-24 md:py-40 bg-[#08090d] text-white relative border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          <div>
            <h2 className="text-xs md:text-sm font-mono tracking-widest text-accent-orange mb-3 md:mb-4 uppercase font-bold">
              The People Behind It
            </h2>
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white">
              Engineered by
            </h3>
          </div>
          <div className="max-w-sm text-white/60 leading-relaxed font-light text-sm sm:text-base">
            A cross-functional team combining mechanical precision with modern software development to reinvent daily pet care.
          </div>
        </div>

        <div className="flex flex-col">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border-t border-white/10 py-8 md:py-14 flex flex-col lg:flex-row lg:items-center justify-between overflow-hidden cursor-crosshair gap-4 lg:gap-12"
            >
              {/* Hover effect background reveal */}
              <div className="absolute inset-0 bg-white/[0.04] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-none"></div>

              <div className="flex items-center gap-4 sm:gap-6 md:gap-12 relative z-10 w-full lg:w-auto">
                <span className="font-mono text-sm md:text-xl text-accent-orange opacity-70 group-hover:opacity-100 transition-opacity duration-300 shrink-0 font-bold">
                  {member.id}
                </span>
                <h4 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-white transition-all duration-300 ease-out group-hover:pl-2 group-hover:text-accent-orange">
                  {member.name}
                </h4>
              </div>

              <div className="relative z-10 flex items-center lg:justify-end w-full lg:w-1/2 pl-[36px] sm:pl-[48px] md:pl-[64px] lg:pl-0">
                <div className="font-mono text-xs sm:text-sm tracking-wide text-white/60 uppercase group-hover:text-white transition-colors duration-300 leading-relaxed lg:text-right">
                  {member.role}
                </div>
              </div>
            </motion.div>
          ))}
          {/* Bottom border to close the list */}
          <div className="border-t border-white/10 w-full"></div>
        </div>

        <motion.div
          className="mt-20 md:mt-32 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent-orange/10 rounded-full blur-2xl pointer-events-none"></div>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white relative z-10">
            ONE TEAM. ONE MACHINE.
          </h3>
          <p className="font-mono text-accent-orange tracking-[0.3em] mt-4 text-xs sm:text-sm md:text-base relative z-10 font-bold">
            MAX STUDIO // 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
