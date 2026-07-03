import { motion } from 'framer-motion';

export default function SocialIcon({ icon: Icon, href, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ y: -3, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-500 hover:bg-[#BE8C53] hover:text-white transition-colors duration-200"
    >
      <Icon size={18} />
    </motion.a>
  );
}
