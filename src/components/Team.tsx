import { motion } from 'framer-motion';

const teamMembers = [
  { id: '01', name: 'SHIKHA', role: 'Senior Architecture Head, Software/Hardware' },
  { id: '02', name: 'SIDDHI', role: 'Design Architecture & UI UX Head, Software/Hardware' },
  { id: '03', name: 'SHIKHAR', role: 'Core Hardware/Software Architecture Head' },
  { id: '04', name: 'KARTIK', role: 'Presentator and Project Guide Head' },
];
const Team = () => {
  return (
    <section id="team" className="py-24 md:py-48 bg-background relative border-t border-foreground/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          <div>
            <h2 className="text-xs md:text-sm font-mono tracking-widest text-accent-brown mb-3 md:mb-4 uppercase">The People Behind It</h2>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-display font-medium tracking-tight">Engineered by</h3>
          </div>
          <div className="max-w-sm text-foreground/60 leading-relaxed font-light text-sm sm:text-base">
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
              className="group relative border-t border-foreground/10 py-10 md:py-16 flex flex-col lg:flex-row lg:items-center justify-between overflow-hidden cursor-crosshair gap-6 lg:gap-12"
            >
              {/* Hover effect background reveal */}
              <div className="absolute inset-0 bg-foreground/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"></div>

              <div className="flex items-center gap-4 sm:gap-6 md:gap-12 relative z-10 w-full lg:w-auto">
                <span className="font-mono text-sm md:text-xl text-accent-brown opacity-50 group-hover:opacity-100 transition-opacity duration-500 shrink-0">{member.id}</span>
                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-display font-medium tracking-tight text-foreground transition-all duration-700 ease-out group-hover:pl-2 md:group-hover:pl-4 group-hover:text-accent-brown break-words">
                  {member.name}
                </h3>
              </div>

              <div className="relative z-10 flex items-center lg:justify-end w-full lg:w-1/3 pl-[40px] sm:pl-[50px] md:pl-[70px] lg:pl-0">
                <div className="font-mono text-xs sm:text-sm tracking-wide md:tracking-widest text-foreground/60 uppercase group-hover:text-foreground transition-colors duration-500 leading-relaxed lg:text-right">
                  {member.role}
                </div>
              </div>
            </motion.div>
          ))}
          {/* Bottom border to close the list */}
          <div className="border-t border-foreground/10 w-full"></div>
        </div>

        <motion.div
          className="mt-24 md:mt-40 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-accent-brown/10 rounded-full blur-xl md:blur-2xl pointer-events-none"></div>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-medium text-foreground relative z-10">
            ONE TEAM. ONE MACHINE.
          </h3>
          <p className="font-mono text-accent-brown tracking-[0.2em] sm:tracking-[0.4em] mt-6 md:mt-8 text-xs sm:text-sm md:text-base relative z-10">MAX STUDIO</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
