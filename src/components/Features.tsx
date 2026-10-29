import { motion } from 'framer-motion';
import { Activity, Disc, Heart, Camera, Droplets, CheckCircle2 } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-24 md:py-36 bg-[#090b10] text-white relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-accent-orange/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-orange/10 border border-accent-orange/30 text-accent-orange text-xs font-mono tracking-widest uppercase mb-4">
            INTEGRATED SYSTEM SUITE
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white mb-4">
            Designed for total care.
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Every mechanism is synchronized: precision nutrition, ultrasonic hydration, and 24/7 vision telemetry.
          </p>
        </div>

        {/* BENTO BOX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 auto-rows-[minmax(280px,auto)]">
          
          {/* Card 1: ESP32-CAM Optical Vision - Large 2 Cols */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
            className="md:col-span-2 rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500 bg-[#0e1219] text-white border border-accent-orange/20 hover:border-accent-orange/40 shadow-xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange/15 rounded-full blur-[80px] pointer-events-none group-hover:bg-accent-orange/25 transition-colors"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent-orange/10 border border-accent-orange/30 flex items-center justify-center text-accent-orange">
                    <Camera size={24} />
                  </div>
                  <span className="text-xs font-mono text-accent-orange bg-accent-orange/10 px-3 py-1 rounded-full border border-accent-orange/30 font-bold">
                    IP: 10.38.133.55
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-medium mb-3 text-white">
                  ESP32-CAM Vision Module
                </h3>
                <p className="text-white/70 text-base max-w-md leading-relaxed">
                  High-definition low-latency video streaming powered by the OmniVision OV2640 sensor. Includes night vision, GPIO 4 flash illumination, and snapshot logging.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-8 pt-4 border-t border-white/10 text-xs font-mono text-white/60">
                <span className="flex items-center gap-1.5 text-accent-orange"><CheckCircle2 size={13} /> 1600x1200 UXGA</span>
                <span className="flex items-center gap-1.5 text-white/80"><CheckCircle2 size={13} /> 30 FPS Stream</span>
                <span className="flex items-center gap-1.5 text-emerald-400"><CheckCircle2 size={13} /> Wi-Fi 802.11 b/g/n</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Ultrasonic Water Station */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500 bg-[#09131d] text-white border border-cyan-500/25 hover:border-cyan-500/50 shadow-xl"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/15 rounded-full blur-[70px] pointer-events-none"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Droplets size={24} />
                  </div>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 font-bold">
                    HC-SR04 + RELAY
                  </span>
                </div>

                <h3 className="text-2xl font-display font-medium mb-3 text-white">
                  Ultrasonic Hydration
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Continuous sonar depth mapping of the 3.0L water reservoir with Arduino-controlled relay pump for automatic refills.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-cyan-300 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>0.1cm Sensor Precision</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Smart Food Detection */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500 bg-[#0e1219] text-white border border-white/10 hover:border-white/20 shadow-xl"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-accent-brown/10 border border-accent-brown/30 flex items-center justify-center text-accent-brown mb-6">
                  <Activity size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-medium mb-2 text-white">Smart Food Level</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Infrared boundary sensors monitor kibble volume in real-time, preventing hopper starvation.
                </p>
              </div>
              <div className="text-xs font-mono text-accent-brown/90 mt-6 font-medium">PORT: 8080 // FEEDER</div>
            </div>
          </motion.div>

          {/* Card 4: Precision Motor Actuator */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500 bg-[#0e1219] text-white border border-white/10 hover:border-white/20 shadow-xl"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:rotate-180 transition-transform duration-700">
                  <Disc size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-medium mb-2 text-white">Gram-Level Dispenser</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Precision calibrated servo auger feeds exact portions down to single grams without jamming.
                </p>
              </div>
              <div className="text-xs font-mono text-accent-brown font-medium mt-6">ANTI-JAM AUGER</div>
            </div>
          </motion.div>

          {/* Card 5: Pet-First Acoustic Engineering */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500 bg-[#0e1219] text-white border border-white/10 hover:border-white/20 shadow-xl"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-accent-green/10 border border-accent-green/30 flex items-center justify-center text-accent-green mb-6">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-medium mb-2 text-white">Quiet Acoustic Design</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Dampened silicone chutes and whisper-quiet motors eliminate harsh rattling for fear-free feeding.
                </p>
              </div>
              <div className="text-xs font-mono text-accent-green font-medium mt-6">&lt; 32 dB NOISE LEVEL</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;
