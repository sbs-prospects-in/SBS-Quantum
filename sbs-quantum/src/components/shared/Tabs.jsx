import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex space-x-2 border-b border-brand-muted/20 pb-4 mb-8 overflow-x-auto hide-scrollbar">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(index)}
            className={`relative px-6 py-3 text-sm font-semibold transition-colors whitespace-nowrap ${
              activeTab === index ? 'text-brand-text' : 'text-brand-text/50 hover:text-brand-text/80'
            }`}
          >
            {tab.label}
            {activeTab === index && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute bottom-[-17px] left-0 right-0 h-0.5 bg-brand-text"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {tabs[activeTab].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
