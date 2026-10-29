import { ArrowRight, Camera, ExternalLink, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050608] text-white py-20 md:py-28 overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.1] mb-8 text-white">
              Better technology.<br/>
              <span className="text-accent-orange">Better pet care.</span>
            </h2>
            
            {/* Quick Hardware Action Links */}
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="http://10.38.133.55"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-accent-orange text-black px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold hover:bg-orange-400 transition-all shadow-md active:scale-95"
              >
                <Camera size={16} />
                <span>OPEN ESP32-CAM (10.38.133.55)</span>
                <ExternalLink size={14} />
              </a>

              <a 
                href="http://10.38.133.108"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold hover:bg-zinc-200 transition-all active:scale-95"
              >
                <span>OPEN FEEDER (10.38.133.108)</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:text-right">
            <div>
              <h3 className="font-display font-bold text-xl tracking-wider mb-1 text-white">MAX STUDIO</h3>
              <p className="text-white/60 font-mono text-xs tracking-widest uppercase">
                Feeder · ESP32-CAM · Ultrasonic Hydration
              </p>
            </div>
            
            <div className="font-mono text-xs text-white/60 space-y-1">
              <div>VISION NODE: <span className="text-accent-orange font-bold">10.38.133.55</span></div>
              <div>FEEDER NODE: <span className="text-white font-bold">10.38.133.108</span></div>
              <div>WATER MODULE: <span className="text-cyan-400 font-bold">HC-SR04 + RELAY</span></div>
            </div>

            {/* Mentor Credit */}
            <div className="pt-2 border-t border-white/10">
              <div className="inline-flex items-center gap-1.5 text-accent-orange font-mono text-[10px] tracking-widest uppercase mb-1 font-bold">
                <Award size={12} />
                <span>PROJECT MENTOR & GUIDE</span>
              </div>
              <p className="font-semibold text-sm tracking-wide text-white">
                Akanksha Tripathi Ma'am
              </p>
            </div>

            {/* Student Engineers */}
            <div>
              <p className="text-white/50 font-mono text-[10px] tracking-widest uppercase mb-1">ENGINEERING TEAM</p>
              <p className="font-medium text-sm tracking-wide text-white/90">
                Shikha · Siddhi · Shikhar · Kartik
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-white/40">
          <div>MAX STUDIO / SMART PET CARE ECOSYSTEM / 2026</div>
          <div>Under the Guidance of Akanksha Tripathi Ma'am</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
