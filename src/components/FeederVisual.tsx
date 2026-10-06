import { motion } from 'framer-motion';

const FeederVisual = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Floating abstract tech circles behind */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[130%] aspect-square rounded-full border-[0.5px] border-foreground/5 border-dashed pointer-events-none"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[100%] aspect-square rounded-full border-[0.5px] border-foreground/10 pointer-events-none"
      />

      {/* Main Container - Scaling perfectly because labels are inside SVG */}
      <div className="relative w-full h-full z-10">
        {/* Expanded viewBox to fit text labels natively inside the SVG */}
        <svg viewBox="-80 0 560 600" className="w-full h-full drop-shadow-2xl overflow-visible">
          <defs>
            <linearGradient id="premium-glass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#f3f4f6" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="premium-body" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2c2c2c" />
              <stop offset="100%" stopColor="#111111" />
            </linearGradient>
            <linearGradient id="accent-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a38c6d" />
              <stop offset="100%" stopColor="#8b7355" />
            </linearGradient>
            <filter id="premium-glow">
              <feGaussianBlur stdDeviation="6" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="shadow">
              <feDropShadow dx="0" dy="20" stdDeviation="25" floodOpacity="0.15" />
            </filter>
          </defs>

          {/* Device Shadow */}
          <ellipse cx="200" cy="500" rx="120" ry="15" fill="#000" opacity="0.15" filter="blur(10px)" />

          {/* Base Platform */}
          <motion.path
            d="M 110 460 L 290 460 C 310 460, 320 470, 320 480 C 320 490, 310 500, 290 500 L 110 500 C 90 500, 80 490, 80 480 C 80 470, 90 460, 110 460 Z"
            fill="url(#premium-body)"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          />

          {/* Bowl */}
          <motion.path
            d="M 130 460 L 270 460 C 275 480, 250 490, 200 490 C 150 490, 125 480, 130 460 Z"
            fill="url(#accent-gold)"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          />

          {/* Main Tower / Body */}
          <motion.rect
            x="145"
            y="220"
            width="110"
            height="240"
            rx="16"
            fill="url(#premium-body)"
            filter="url(#shadow)"
            initial={{ opacity: 0, height: 0, y: 460 }}
            animate={{ opacity: 1, height: 240, y: 220 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Control Interface */}
          <motion.rect
            x="170"
            y="320"
            width="60"
            height="30"
            rx="8"
            fill="#000000"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          />
          <motion.circle
            cx="200"
            cy="335"
            r="3"
            fill="#4f6c58"
            filter="url(#premium-glow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.4, 1] }}
            transition={{ duration: 2.5, delay: 1.6, repeat: Infinity }}
          />

          {/* High-End Glass Reservoir */}
          <motion.path
            d="M 130 90 L 270 90 C 280 90, 285 100, 280 110 L 245 230 C 240 240, 230 250, 200 250 C 170 250, 160 240, 155 230 L 120 110 C 115 100, 120 90, 130 90 Z"
            fill="url(#premium-glass)"
            stroke="#ffffff"
            strokeWidth="1.5"
            filter="url(#shadow)"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
          />

          {/* Animated Food Level Indicator */}
          <motion.path
            d="M 143 140 L 257 140 L 242 225 C 238 232, 220 240, 200 240 C 180 240, 162 232, 158 225 Z"
            fill="#d97d54"
            opacity="0.8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 1.2, delay: 1.3 }}
          />

          {/* Glass Highlights */}
          <path d="M 140 100 L 160 220" stroke="#ffffff" strokeWidth="2" opacity="0.6" fill="none" strokeLinecap="round"/>
          <path d="M 260 100 L 240 220" stroke="#ffffff" strokeWidth="1" opacity="0.3" fill="none" strokeLinecap="round"/>

          {/* Servo Motor Internals */}
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          >
            {/* Servo Body */}
            <rect x="225" y="260" width="30" height="40" rx="4" fill="#2a2a2a" filter="url(#shadow)" />
            <rect x="220" y="265" width="5" height="10" rx="2" fill="#d97d54" />
            {/* Gear mechanism */}
            <circle cx="240" cy="280" r="14" fill="#111" stroke="#333" strokeWidth="2" />
            <circle cx="240" cy="280" r="4" fill="#a38c6d" />
            <path d="M 240 266 L 240 270 M 240 290 L 240 294 M 226 280 L 230 280 M 250 280 L 254 280" stroke="#a38c6d" strokeWidth="2" strokeLinecap="round" />
          </motion.g>

          {/* PERFECTLY RESPONSIVE SVG TEXT CALLOUTS */}
          <g className="font-mono text-[14px] fill-foreground/80 tracking-widest uppercase font-bold">
            
            {/* FOOD RESERVOIR */}
            <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.8, duration: 0.8 }} x1="160" y1="150" x2="0" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.8 }} cx="160" cy="150" r="3" fill="currentColor" opacity="0.8"/>
            <motion.text initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.6 }} x="0" y="90" textAnchor="middle">FOOD RESERVOIR</motion.text>

            {/* SERVO MOTOR */}
            <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.0, duration: 0.8 }} x1="240" y1="280" x2="420" y2="240" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.0 }} cx="240" cy="280" r="3" fill="currentColor" opacity="0.8"/>
            <motion.text initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.8 }} x="420" y="230" textAnchor="middle">SERVO MOTOR</motion.text>

            {/* MICROCONTROLLER */}
            <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.2, duration: 0.8 }} x1="170" y1="335" x2="-20" y2="335" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.2 }} cx="170" cy="335" r="3" fill="currentColor" opacity="0.8"/>
            <motion.text initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.0 }} x="-20" y="325" textAnchor="middle">MICROCONTROLLER</motion.text>

            {/* DISPENSER */}
            <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.4, duration: 0.8 }} x1="230" y1="460" x2="420" y2="460" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.4 }} cx="230" cy="460" r="3" fill="currentColor" opacity="0.8"/>
            <motion.text initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.2 }} x="420" y="450" textAnchor="middle">DISPENSER</motion.text>

          </g>
        </svg>
      </div>
    </div>
  );
};

export default FeederVisual;
