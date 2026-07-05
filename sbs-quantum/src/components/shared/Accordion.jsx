import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        
        return (
          <div 
            key={index} 
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-brand-text bg-white shadow-md' : 'border-brand-muted/20 bg-brand-muted/5 hover:border-brand-muted/50'}`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            >
              <span className={`font-display font-bold text-lg transition-colors ${isOpen ? 'text-brand-text' : 'text-brand-text/80'}`}>
                {item.title}
              </span>
              <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-colors ${isOpen ? 'bg-brand-text text-brand-bg' : 'bg-brand-surface border border-brand-muted/20 text-brand-text'}`}>
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div className="px-6 pb-6 text-brand-text/70 leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
