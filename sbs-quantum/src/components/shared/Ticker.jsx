import { motion } from 'framer-motion';

export default function Ticker({ items, speed = 40 }) {
  // Duplicate items to create infinite scroll effect
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden flex bg-brand-muted/5 py-12 border-y border-brand-muted/10 relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      
      <motion.div
        className="flex space-x-16 px-8 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed
        }}
      >
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex-shrink-0 flex items-center space-x-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            {item.icon && <item.icon size={32} className="text-brand-text" />}
            <span className="font-display font-bold text-2xl text-brand-text">{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
