import { ArrowRight, Camera, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-20 md:py-28 overflow-hidden border-t border-background/10">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium leading-[1.1] mb-8">
              Better technology.<br/>
              <span className="text-accent-brown">Better pet care.</span>
            </h2>
            
            {/* Quick Hardware Action Links */}
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="http://10.38.133.55"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-accent-orange text-black px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold hover:bg-accent-orange/90 transition-all shadow-md active:scale-95"
              >
                <Camera size={16} />
                <span>OPEN ESP32-CAM (10.38.133.55)</span>
                <ExternalLink size={14} />
              </a>

              <a 
                href="http://10.38.133.108"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-background text-foreground px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm font-medium hover:bg-accent-brown hover:text-white transition-all active:scale-95"
              >
                <span>OPEN FEEDER (10.38.133.108)</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:text-right">
            <div>
              <h3 className="font-display font-bold text-xl tracking-wider mb-1 text-background">MAX STUDIO</h3>
              <p className="text-background/60 font-mono text-xs tracking-widest uppercase">
                Feeder · ESP32-CAM · Ultrasonic Hydration
              </p>
            </div>
            
            <div className="font-mono text-xs text-background/60 space-y-1">
              <div>VISION NODE: <span className="text-accent-orange font-bold">10.38.133.55</span></div>
              <div>FEEDER NODE: <span className="text-white font-bold">10.38.133.108</span></div>
              <div>WATER MODULE: <span className="text-cyan-400 font-bold">HC-SR04 + RELAY</span></div>
            </div>

            <div>
              <p className="text-background/50 font-mono text-[10px] tracking-widest uppercase mb-1">ENGINEERING TEAM</p>
              <p className="font-medium text-sm tracking-wide text-background">
                Shikha · Siddhi · Shikhar · Kartik
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/15 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-background/40">
          <div>MAX STUDIO / SMART PET CARE ECOSYSTEM / 2026</div>
          <div>Designed for Care. Engineered for Reality.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
