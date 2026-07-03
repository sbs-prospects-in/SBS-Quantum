import PageWrapper from '../components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { useContactForm } from '../hooks/useContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';
import Accordion from '../components/shared/Accordion';

const FAQS = [
  { 
    title: "What is your typical project timeline?", 
    content: "Timelines vary strictly based on complexity. A standard architecture overhaul takes 3-6 months. We can complete rapid MVP development in 8-12 weeks." 
  },
  { 
    title: "Do you provide ongoing support after launch?", 
    content: "Yes. We offer tailored SLAs, retainer models, and continuous integration support to guarantee your application scales post-launch." 
  },
  { 
    title: "What tech stacks do you specialize in?", 
    content: "We remain cloud-agnostic (AWS, GCP, Azure). We build frontends with React and Next.js, and backends with Node.js, Go, or Python. We pair all projects with robust CI/CD pipelines." 
  },
  { 
    title: "How do you handle data security?", 
    content: "Security is non-negotiable from day one. We adhere to SOC2 standards, mandate zero-trust architectures, and execute automated vulnerability scans on all deployments." 
  }
];

export default function Contact() {
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm();

  return (
    <PageWrapper>
      <div className="bg-white pt-32 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-text tracking-tight mb-6">
              Start a <span className="text-brand-muted">conversation.</span>
            </h1>
            <p className="text-xl text-brand-text/70 leading-relaxed">
              Tell us what you need to build. Our engineering leads review every inquiry and respond within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-16 mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-7"
            >
              <form onSubmit={handleSubmit} className="space-y-8 bg-brand-muted/5 p-8 sm:p-12 rounded-xl border border-brand-muted/20 shadow-sm relative overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-brand-muted/30 rounded-md focus:ring-2 focus:ring-brand-text focus:border-brand-text outline-none transition-all text-brand-text placeholder:text-brand-text/30"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-brand-muted/30 rounded-md focus:ring-2 focus:ring-brand-text focus:border-brand-text outline-none transition-all text-brand-text placeholder:text-brand-text/30"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="relative z-10">
                  <label htmlFor="company" className="block text-sm font-medium text-brand-text mb-2">Company Name (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-brand-muted/30 rounded-md focus:ring-2 focus:ring-brand-text focus:border-brand-text outline-none transition-all text-brand-text placeholder:text-brand-text/30"
                    placeholder="Acme Corp"
                  />
                </div>

                <div className="relative z-10">
                  <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-2">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-brand-muted/30 rounded-md focus:ring-2 focus:ring-brand-text focus:border-brand-text outline-none transition-all text-brand-text placeholder:text-brand-text/30 resize-y"
                    placeholder="Outline your technical challenge or project scope..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-text hover:bg-brand-muted text-white font-bold rounded-md transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center shadow-md active:scale-[0.98] ease-[var(--ease-out)] relative z-10"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </form>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-5 flex flex-col justify-between"
            >
              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-brand-muted/10 border border-brand-muted/20 text-brand-text mr-6">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-brand-text mb-1">Email</h3>
                    <p className="text-brand-text/70">info@sbsquantum.com</p>
                    <p className="text-brand-text/70">support@sbsquantum.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-brand-muted/10 border border-brand-muted/20 text-brand-text mr-6">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-brand-text mb-1">Phone</h3>
                    <p className="text-brand-text/70">+1 (555) 123-4567</p>
                    <p className="text-brand-text/50 text-sm mt-1 font-medium">Mon-Fri from 9am to 6pm (EST)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-brand-muted/10 border border-brand-muted/20 text-brand-text mr-6">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-brand-text mb-1">Office</h3>
                    <p className="text-brand-text/70 leading-relaxed">
                      123 Innovation Drive<br />
                      Suite 500<br />
                      Tech District, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-3xl mx-auto pt-16 border-t border-brand-muted/20"
          >
            <h2 className="text-3xl font-display font-bold text-brand-text mb-10 text-center">Frequently Asked Questions</h2>
            <Accordion items={FAQS} />
          </motion.div>

        </div>
      </div>
    </PageWrapper>
  );
}
