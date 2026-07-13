import { motion } from 'framer-motion';

const generatePath = (rx, ry, points = 100) => {
  const x = [];
  const y = [];
  // Ensure the loop ends exactly where it starts by going from 0 to exactly 2PI
  for (let i = 0; i <= points; i++) {
    const angle = (i / points) * Math.PI * 2;
    x.push(rx * Math.cos(angle));
    y.push(ry * Math.sin(angle));
  }
  return { x, y };
};

export default function AtomLoader() {
  const path1 = generatePath(35, 95);
  const path2 = generatePath(35, 95);
  const path3 = generatePath(35, 95);

  return (
    <div className="w-full max-w-md lg:max-w-xl mx-auto aspect-square flex items-center justify-center relative">
      {/* Glow effect behind the atom */}
      <div className="absolute inset-0 bg-[#BE8C53] opacity-20 blur-[100px] rounded-full mix-blend-screen" />

      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible relative z-10 drop-shadow-2xl">
        <defs>
          <radialGradient id="nucleusGrad" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#Dbba95">
              <animate attributeName="stop-color" values="#Dbba95;#BE8C53;#Dbba95" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="40%" stopColor="#BE8C53">
              <animate attributeName="stop-color" values="#BE8C53;#463B26;#BE8C53" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#463B26">
              <animate attributeName="stop-color" values="#463B26;#1a150e;#463B26" dur="4s" repeatCount="indefinite" />
            </stop>
          </radialGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Nucleus */}
        <motion.circle
          cx="100"
          cy="100"
          r="14"
          fill="url(#nucleusGrad)"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orbit 1 */}
        <g transform="translate(100, 100) rotate(0)">
          <ellipse cx="0" cy="0" rx="35" ry="95" fill="none" stroke="#463B26" strokeWidth="2" strokeOpacity="0.6" />
          <motion.circle
            r="4"
            fill="#463B26"
            filter="url(#glow)"
            animate={{
              x: path1.x,
              y: path1.y
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </g>

        {/* Orbit 2 */}
        <g transform="translate(100, 100) rotate(60)">
          <ellipse cx="0" cy="0" rx="35" ry="95" fill="none" stroke="#463B26" strokeWidth="2" strokeOpacity="0.6" />
          <motion.circle
            r="4"
            fill="#463B26"
            filter="url(#glow)"
            animate={{
              x: path2.x,
              y: path2.y
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: -1 }}
          />
        </g>

        {/* Orbit 3 */}
        <g transform="translate(100, 100) rotate(120)">
          <ellipse cx="0" cy="0" rx="35" ry="95" fill="none" stroke="#463B26" strokeWidth="2" strokeOpacity="0.6" />
          <motion.circle
            r="4"
            fill="#463B26"
            filter="url(#glow)"
            animate={{
              x: path3.x,
              y: path3.y
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: -2 }}
          />
        </g>
      </svg>
    </div>
  );
}
