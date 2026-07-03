import PageWrapper from '../components/layout/PageWrapper';
import { motion } from 'framer-motion';
import Accordion from '../components/shared/Accordion';

const INTERVIEW_PROCESS = [
  {
    title: '1. The Alignment Call',
    content: 'A 30-minute conversation with our technical recruiter. We discuss your background, our current technical challenges, and ensure our compensation bands align with your expectations.'
  },
  {
    title: '2. The Technical Deep Dive',
    content: 'A 90-minute system design or architecture session with two senior engineers. No leetcode tricks or whiteboard coding. We review a complex system you built previously or architect a hypothetical system relevant to our stack.'
  },
  {
    title: '3. The Cultural Fit',
    content: 'A 45-minute meeting with a founding partner. We evaluate how you handle disagreement, scope creep, and architectural trade-offs.'
  },
  {
    title: '4. The Offer',
    content: 'We make decisions within 48 hours of the final interview. If we extend an offer, we provide a detailed breakdown of salary, equity, and benefits without exploding deadlines.'
  }
];

export default function Career() {
  const jobs = [
    { title: 'Senior Frontend Engineer', type: 'Full-time', location: 'Remote (US/EU)' },
    { title: 'Backend Infrastructure Engineer', type: 'Full-time', location: 'New York, NY' },
    { title: 'Principal UI/UX Designer', type: 'Full-time', location: 'Remote (US)' },
    { title: 'DevOps & Site Reliability Engineer', type: 'Full-time', location: 'London, UK' }
  ];

  return (
    <PageWrapper>
      <div className="bg-white pt-32 pb-32 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="max-w-3xl mb-24"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-text tracking-tight mb-6">
              Build the <span className="text-brand-muted">future.</span>
            </h1>
            <p className="text-xl text-brand-text/70 leading-relaxed">
              We hire engineers who care about the final product as much as the codebase. If you want to build enterprise software that respects the user's time and attention, join us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-display font-bold text-brand-text mb-8">Open Positions</h2>
              <div className="space-y-6">
                {jobs.map((job, index) => (
                  <motion.div 
                    key={job.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: index * 0.1 }}
                    className="group p-8 rounded-3xl bg-brand-muted/5 border border-brand-muted/20 flex flex-col md:flex-row md:items-center justify-between hover:border-brand-text hover:bg-brand-muted/10 transition-all duration-500 shadow-sm hover:shadow-md"
                  >
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-display font-bold text-brand-text mb-4 group-hover:text-brand-text transition-colors duration-300">{job.title}</h3>
                      <div className="flex space-x-4 text-sm font-medium">
                        <span className="bg-white text-brand-text px-4 py-1.5 rounded-full border border-brand-muted/30">{job.type}</span>
                        <span className="bg-white text-brand-text px-4 py-1.5 rounded-full border border-brand-muted/30">{job.location}</span>
                      </div>
                    </div>
                    <button className="mt-8 md:mt-0 px-8 py-4 rounded-full text-sm font-bold bg-brand-text hover:bg-brand-muted text-white transition-colors duration-300 active:scale-[0.97] ease-[var(--ease-out)] relative z-10 shadow-sm">
                      Apply Now
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="sticky top-32"
              >
                <h2 className="text-3xl font-display font-bold text-brand-text mb-8">How We Hire</h2>
                <p className="text-brand-text/70 mb-8 leading-relaxed">
                  We respect your time. Our interview process is deterministic, transparent, and designed to evaluate how you actually work, not how well you memorize algorithms.
                </p>
                <Accordion items={INTERVIEW_PROCESS} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
