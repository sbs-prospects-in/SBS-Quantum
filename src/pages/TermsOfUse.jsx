import PageWrapper from '../components/layout/PageWrapper';
import { motion } from 'framer-motion';

export default function TermsOfUse() {
  return (
    <PageWrapper>
      <div className="bg-brand-bg dark:bg-[#050505] transition-colors duration-500 pt-32 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-text dark:text-brand-accent-light mb-8">
              Terms of Use
            </h1>
            
            <div className="bg-white dark:bg-[#111111] p-8 md:p-12 rounded-3xl shadow-xl border border-brand-muted/20">
              <div className="prose prose-lg dark:prose-invert max-w-none text-brand-accent dark:text-white/80 space-y-6">
              <p className="mb-6 font-medium text-brand-muted">Last Updated: July 15, 2026</p>

              <p>Welcome to <strong>https://www.sbsquantum.com</strong>. The Website is owned, managed, and operated by <strong>SBS Quantum</strong>, having its principal place of business in Ahmedabad, Gujarat, India.</p>

              <p>By accessing, browsing, or using this Website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use, Disclaimer, and our Privacy Policy. If you do not agree with any part of these Terms, please discontinue using the Website immediately.</p>

              <h2 className="text-2xl font-bold text-brand-text dark:text-white mt-12 mb-4">1. Eligibility & Registration</h2>
              <h3 className="text-xl font-semibold mt-6 mb-2">Eligibility</h3>
              <p>By using this Website, you represent that you are at least 18 years of age and are legally competent to enter into a binding agreement under applicable Indian laws.</p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">Accuracy of Information</h3>
              <p>If you submit any enquiry, request information, register for any service, or create an account (where applicable), you agree to provide true, accurate, current, and complete information. Providing false or misleading information may result in the suspension or termination of your access.</p>

              <h3 className="text-xl font-semibold mt-6 mb-2">Account Security</h3>
              <p>Where account access is provided, you are solely responsible for maintaining the confidentiality of your login credentials, including your username, password, and any authentication codes. Any activity carried out using your account shall be deemed to have been authorized by you.</p>

              <h2 className="text-2xl font-bold text-brand-text dark:text-white mt-12 mb-4">2. Nature of Services & Disclaimer</h2>
              <h3 className="text-xl font-semibold mt-6 mb-2">Informational Purpose Only</h3>
              <p>The information, content, case studies, articles, service descriptions, blog posts, and other materials available on this Website are provided solely for general informational purposes and do not constitute professional, legal, financial, technical, or business advice.</p>

              <h3 className="text-xl font-semibold mt-6 mb-2">No Professional Advice</h3>
              <p>Unless expressly agreed upon through a written service agreement, nothing contained on this Website shall be interpreted as consulting, legal, financial, or professional advice. Users should obtain independent professional advice before making business or technology-related decisions.</p>

              <h3 className="text-xl font-semibold mt-6 mb-2">Service Availability</h3>
              <p>Descriptions of services displayed on this Website are intended for informational purposes only and do not constitute a binding offer. All services remain subject to discussion, feasibility, availability, and mutual agreement.</p>

              <h2 className="text-2xl font-bold text-brand-text dark:text-white mt-12 mb-4">3. Third-Party Links & Services</h2>
              <p>Our Website may contain links to third-party websites, software platforms, cloud providers, social media platforms, payment gateways, or other external resources for your convenience.</p>
              <p>SBS Quantum does not own, control, endorse, or guarantee the content, products, services, security, or privacy practices of any third-party websites. Your use of such websites shall be governed solely by their respective terms and privacy policies.</p>

              <h2 className="text-2xl font-bold text-brand-text dark:text-white mt-12 mb-4">4. Intellectual Property Rights</h2>
              <h3 className="text-xl font-semibold mt-6 mb-2">Ownership</h3>
              <p>All content available on this Website, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Logos</li>
                <li>Trademarks</li>
                <li>Text</li>
                <li>Graphics</li>
                <li>Images</li>
                <li>Videos</li>
                <li>Icons</li>
                <li>Website design</li>
                <li>Source code (where applicable)</li>
                <li>Software</li>
                <li>Documentation</li>
                <li>Business content</li>
              </ul>
              <p className="mt-4">is the exclusive intellectual property of SBS Quantum or its licensors and is protected under applicable intellectual property laws.</p>

              <h3 className="text-xl font-semibold mt-6 mb-2">Restrictions</h3>
              <p>You may not:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Copy</li>
                <li>Reproduce</li>
                <li>Modify</li>
                <li>Republish</li>
                <li>Distribute</li>
                <li>Sell</li>
                <li>License</li>
                <li>Reverse engineer (where applicable)</li>
                <li>Exploit any Website content for commercial purposes</li>
              </ul>
              <p className="mt-4">without obtaining our prior written consent.</p>

              <h2 className="text-2xl font-bold text-brand-text dark:text-white mt-12 mb-4">5. Limitation of Liability</h2>
              <p>To the fullest extent permitted under applicable law, SBS Quantum, its directors, employees, affiliates, partners, consultants, and representatives shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from or relating to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your access to or use of the Website.</li>
                <li>Any interruption, delay, downtime, or unavailability of the Website.</li>
                <li>Loss of data, revenue, profits, or business opportunities.</li>
                <li>Errors, inaccuracies, or omissions in Website content.</li>
                <li>Unauthorized access to or alteration of your information.</li>
                <li>Reliance upon any information published on this Website.</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-text dark:text-white mt-12 mb-4">6. Indemnification</h2>
              <p>You agree to indemnify, defend, and hold harmless SBS Quantum, its directors, employees, affiliates, partners, consultants, and representatives from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable legal fees) arising from:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your violation of these Terms of Use.</li>
                <li>Your misuse of the Website.</li>
                <li>Your infringement of any intellectual property or legal rights of another person or entity.</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-text dark:text-white mt-12 mb-4">7. Termination of Use</h2>
              <p>We reserve the right, at our sole discretion and without prior notice, to suspend, restrict, or terminate your access to the Website or any part of our services for any reason, including violation of these Terms of Use or applicable law.</p>

              <h2 className="text-2xl font-bold text-brand-text dark:text-white mt-12 mb-4">8. Governing Law & Jurisdiction</h2>
              <p>These Terms of Use shall be governed by and construed in accordance with the laws of India.</p>
              <p>Any disputes arising out of or relating to these Terms or your use of the Website shall be subject to the exclusive jurisdiction of the competent courts located in Ahmedabad, Gujarat, India.</p>

              <h2 className="text-2xl font-bold text-brand-text dark:text-white mt-12 mb-4">9. Modifications to Terms</h2>
              <p>SBS Quantum reserves the right to revise, modify, or update these Terms of Use at any time without prior notice.</p>
              <p>Any changes will become effective immediately upon being published on this page. Your continued use of the Website following such updates constitutes your acceptance of the revised Terms.</p>

              <h2 className="text-2xl font-bold text-brand-text dark:text-white mt-12 mb-4">10. Contact Information</h2>
              <p>If you have any questions, feedback, or concerns regarding these Terms of Use, please contact us:</p>
              <div className="bg-brand-muted/10 p-6 rounded-xl mt-4">
                <p className="mb-2"><strong>Company Name:</strong> SBS Quantum</p>
                <p className="mb-2"><strong>Office Address:</strong> 1003, Span Trade Centre, Paldi Rd, Near Bony Travels, Pritam Nagar, Paldi, Ahmedabad, Gujarat 380006</p>
                <p className="mb-2"><strong>Email:</strong> sbsquantum@gmail.com</p>
                <p className="mb-2"><strong>Phone:</strong> +91 90813 53523</p>
                <p className="mb-0"><strong>Website:</strong> <a href="https://www.sbsquantum.com" className="text-brand-text hover:underline">https://www.sbsquantum.com</a></p>
              </div>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
