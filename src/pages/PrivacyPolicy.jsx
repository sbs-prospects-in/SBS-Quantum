import PageWrapper from '../components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <PageWrapper>
      <div className="bg-brand-bg dark:bg-[#050505] transition-colors duration-500 pt-32 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center text-brand-muted hover:text-brand-text transition-colors mb-8 group font-medium">
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-text dark:text-brand-accent-light mb-8">
              Privacy Policy
            </h1>
            
            <div className="bg-white dark:bg-[#111111] p-8 md:p-12 rounded-3xl shadow-xl border border-brand-muted/20">
              <div className="prose prose-lg dark:prose-invert max-w-none text-brand-accent dark:text-white/80 space-y-6">
              <p className="mb-6 font-medium text-brand-muted">Effective Date: July 15, 2026</p>
              
              <p>At <strong>SBS Quantum</strong>, we are committed to protecting your privacy and safeguarding the personal information you share with us through our website <strong>https://www.sbsquantum.com</strong>.</p>
              
              <p>By accessing or using our Website, you acknowledge that you have read, understood, and agree to the collection, use, and disclosure of your information in accordance with this Privacy Policy.</p>

              <h2 className="text-2xl font-bold text-brand-text dark:text-white mt-12 mb-4">1. Information We Collect</h2>
              <p>We may collect the following categories of information:</p>

              <h3 className="text-xl font-semibold mt-6 mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Mobile Number</li>
                <li>Company Name</li>
                <li>Job Title (where applicable)</li>
                <li>Business Address (where applicable)</li>
                <li>Any information voluntarily submitted through contact forms, enquiries, or consultations</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2">Technical Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP Address</li>
                <li>Browser Type and Version</li>
                <li>Device Information</li>
                <li>Operating System</li>
                <li>Website Usage Data</li>
                <li>Cookies and Analytics Data</li>
              </ul>
              
              <p className="mt-4">We collect only the information reasonably necessary to provide our services, respond to enquiries, improve our Website, and comply with applicable legal obligations.</p>

              <h2 className="text-2xl font-bold text-brand-text dark:text-white mt-12 mb-4">2. How We Use Your Information</h2>
              <p>Your information may be used to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Respond to your enquiries and service requests.</li>
                <li>Communicate regarding our products and services.</li>
                <li>Schedule consultations or business meetings.</li>
                <li>Improve our Website, services, and customer experience.</li>
                <li>Send important updates, newsletters, or promotional communications where permitted by law.</li>
                <li>Maintain Website security and prevent fraudulent activities.</li>
                <li>Comply with applicable legal and regulatory requirements.</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-text dark:text-white mt-12 mb-4">3. Information Sharing</h2>
              <p>We value your privacy and do not sell, rent, or trade your personal information.</p>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Authorized employees and representatives of SBS Quantum.</li>
                <li>Trusted technology and cloud service providers.</li>
                <li>Marketing and communication service providers.</li>
                <li>Professional advisors, auditors, or legal consultants.</li>
                <li>Government authorities or regulatory bodies where required by law.</li>
              </ul>
              <p className="mt-4">Such disclosures are limited to the extent necessary for providing our services or complying with applicable legal obligations.</p>

              <h2 className="text-2xl font-bold text-brand-text dark:text-white mt-12 mb-4">4. Data Security</h2>
              <p>SBS Quantum implements appropriate administrative, technical, and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, misuse, or destruction.</p>
              <p>Our Website uses Secure Socket Layer (SSL) encryption and follows industry-standard security practices to help protect information transmitted over the internet.</p>
              <p>However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.</p>

              <h2 className="text-2xl font-bold text-brand-text dark:text-white mt-12 mb-4">5. User Responsibilities</h2>
              <p>If certain areas of the Website require account access, you are responsible for maintaining the confidentiality of your login credentials.</p>
              <p>We recommend that users:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use strong and unique passwords.</li>
                <li>Change passwords periodically.</li>
                <li>Never share login credentials.</li>
                <li>Log out after using shared or public devices.</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-text dark:text-white mt-12 mb-4">6. Cookies and Website Analytics</h2>
              <p>Our Website may use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Improve Website performance.</li>
                <li>Remember user preferences.</li>
                <li>Analyze visitor behavior.</li>
                <li>Enhance user experience.</li>
                <li>Measure Website traffic and engagement.</li>
              </ul>
              <p className="mt-4">You may disable cookies through your browser settings; however, certain Website features may not function properly.</p>

              <h2 className="text-2xl font-bold text-brand-text dark:text-white mt-12 mb-4">7. Third-Party Links</h2>
              <p>Our Website may contain links to third-party websites for informational or convenience purposes.</p>
              <p>SBS Quantum does not control and is not responsible for the privacy practices, content, or security of such third-party websites. Users should review the respective privacy policies before providing any personal information.</p>

              <h2 className="text-2xl font-bold text-brand-text dark:text-white mt-12 mb-4">8. Legal Disclosure</h2>
              <p>We may disclose your information when required to do so by applicable law, court order, governmental authority, or regulatory agency, or when necessary to protect our legal rights and interests.</p>

              <h2 className="text-2xl font-bold text-brand-text dark:text-white mt-12 mb-4">9. Data Retention</h2>
              <p>We retain personal information only for as long as necessary to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide our services.</li>
                <li>Respond to enquiries.</li>
                <li>Maintain business records.</li>
                <li>Comply with legal and regulatory obligations.</li>
                <li>Resolve disputes and enforce our agreements.</li>
              </ul>
              <p className="mt-4">After the applicable retention period, personal information will be securely deleted or anonymized where appropriate.</p>

              <h2 className="text-2xl font-bold text-brand-text dark:text-white mt-12 mb-4">10. Your Rights</h2>
              <p>Subject to applicable laws, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Request access to your personal information.</li>
                <li>Correct inaccurate or incomplete information.</li>
                <li>Update your personal details.</li>
                <li>Withdraw consent where legally permissible.</li>
                <li>Request deletion of your information, subject to legal or contractual obligations.</li>
              </ul>
              <p className="mt-4">To exercise these rights, please contact us using the details provided below.</p>

              <h2 className="text-2xl font-bold text-brand-text dark:text-white mt-12 mb-4">11. Changes to this Privacy Policy</h2>
              <p>SBS Quantum reserves the right to modify or update this Privacy Policy at any time.</p>
              <p>Any revisions will be published on this page along with the updated Effective Date. Continued use of the Website following such changes constitutes your acceptance of the revised Privacy Policy.</p>

              <h2 className="text-2xl font-bold text-brand-text dark:text-white mt-12 mb-4">12. Contact Us</h2>
              <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact:</p>
              <div className="bg-brand-muted/10 p-6 rounded-xl mt-4">
                <p className="mb-2"><strong>Company Name:</strong> SBS Quantum</p>
                <p className="mb-2"><strong>Website:</strong> <a href="https://www.sbsquantum.com" className="text-brand-text hover:underline">https://www.sbsquantum.com</a></p>
                <p className="mb-2"><strong>Email:</strong> sbsquantum@gmail.com</p>
                <p className="mb-2"><strong>Phone:</strong> +91 90813 53523</p>
                <p className="mb-0"><strong>Address:</strong> 1003, Span Trade Centre, Paldi Rd, Near Bony Travels, Pritam Nagar, Paldi, Ahmedabad, Gujarat 380006</p>
              </div>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
