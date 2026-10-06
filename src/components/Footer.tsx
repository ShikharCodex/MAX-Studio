import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-7xl font-display font-medium leading-[1.1] mb-12">
              Better technology.<br/>
              <span className="text-accent-brown">Better care.</span>
            </h2>
            
            <a 
              href="http://10.38.133.108"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-background text-foreground px-8 py-4 rounded-full font-medium hover:bg-accent-green hover:text-background transition-colors"
            >
              OPEN LIVE FEEDER <ArrowRight size={18} />
            </a>
          </div>

          <div className="flex flex-col gap-8 md:text-right">
            <div>
              <h4 className="font-display font-bold text-xl tracking-wider mb-2">MAX STUDIO</h4>
              <p className="text-background/60 font-mono text-sm tracking-widest">SMART PET FEEDER</p>
            </div>
            
            <div>
              <p className="text-background/50 font-mono text-xs mb-2">TEAM</p>
              <p className="font-medium tracking-wide">
                Shikha · Siddhi · Shikhar · Kartik
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-background/40">
          <div>MAX STUDIO / PET FEEDER PROJECT / 2026</div>
          <div>Designed for Care. Engineered for Reality.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
