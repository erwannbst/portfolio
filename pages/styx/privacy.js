import { NextSeo } from "next-seo";
import Head from "next/head";
import { motion } from "framer-motion";
import clsx from "clsx";

const ContentWrapper = ({ children, className, width }) => (
  <div
    style={{ maxWidth: `${width || "100%"}` }}
    className={clsx("w-full px-5 mx-auto relative", className)}
  >
    {children}
  </div>
);

export default function StyxPrivacy() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Head>
      <NextSeo
        title="Styx - Privacy Policy"
        description="Privacy Policy for Styx App"
        noindex={true}
        nofollow={true}
      />
      
      <div className="pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.35, delay: 0.2 },
          }}
        >
          <ContentWrapper width="720px" className="mt-10 md:mt-20">
            <h1 className="mb-6 text-3xl font-black md:text-4xl dark:text-white">
              Styx - Privacy Policy
            </h1>
            
            <div className="post-content prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">1. Introduction</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Welcome to Styx ("we", "our", "us"). We are committed to protecting your privacy and 
                  personal information. This Privacy Policy explains how we collect, use, disclose, and 
                  safeguard your information when you use our mobile application.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Please read this privacy policy carefully. If you do not agree with the terms of this 
                  privacy policy, please do not access the application.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold mb-3 dark:text-white">2.1 Personal Information</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li>Register for an account</li>
                  <li>Use the application</li>
                  <li>Contact us for support</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  This information may include:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Username</li>
                  <li>Profile information</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 dark:text-white">2.2 Automatically Collected Information</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  When you use our application, we may automatically collect certain information, including:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li>Device information (model, operating system, unique device identifiers)</li>
                  <li>Usage data (features accessed, time spent, interactions)</li>
                  <li>Log data (IP address, access times, error logs)</li>
                  <li>Location data (if you grant permission)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 dark:text-white">2.3 Third-Party Data</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We may receive information about you from third-party sources, such as social media 
                  platforms if you choose to link your account.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">3. How We Use Your Information</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li>Provide, operate, and maintain our application</li>
                  <li>Improve, personalize, and expand our services</li>
                  <li>Understand and analyze how you use our application</li>
                  <li>Develop new products, services, features, and functionality</li>
                  <li>Communicate with you for customer service, updates, and promotional purposes</li>
                  <li>Process your transactions</li>
                  <li>Send you push notifications (if you opt-in)</li>
                  <li>Find and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">4. How We Share Your Information</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We may share your information in the following situations:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li><strong>Service Providers:</strong> We may share your information with third-party service 
                  providers who perform services on our behalf</li>
                  <li><strong>Business Transfers:</strong> We may share or transfer your information in connection 
                  with a merger, sale, or acquisition</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or 
                  in response to valid requests by public authorities</li>
                  <li><strong>With Your Consent:</strong> We may disclose your information for any other purpose 
                  with your consent</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">5. Data Retention</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We will retain your personal information only for as long as necessary to fulfill the purposes 
                  outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. 
                  When we no longer need your personal information, we will securely delete or anonymize it.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">6. Data Security</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal 
                  information. However, no method of transmission over the internet or electronic storage is 100% 
                  secure. While we strive to use commercially acceptable means to protect your personal information, 
                  we cannot guarantee its absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">7. Your Privacy Rights</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Objection:</strong> Object to processing of your personal information</li>
                  <li><strong>Restriction:</strong> Request restriction of processing your personal information</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw your consent at any time</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  To exercise these rights, please contact us at contact@bestard.fr
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">8. Children's Privacy</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Our application is not intended for children under the age of 13. We do not knowingly collect 
                  personal information from children under 13. If you are a parent or guardian and believe your 
                  child has provided us with personal information, please contact us, and we will delete such 
                  information from our systems.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">9. Third-Party Services</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Our application may contain links to third-party websites or services. We are not responsible 
                  for the privacy practices of these third parties. We encourage you to read their privacy policies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">10. International Data Transfers</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Your information may be transferred to and maintained on computers located outside of your state, 
                  province, country, or other governmental jurisdiction where data protection laws may differ. By 
                  using our application, you consent to such transfers.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">11. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We may use cookies and similar tracking technologies to track activity on our application and 
                  store certain information. You can instruct your device to refuse all cookies or indicate when 
                  a cookie is being sent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">12. California Privacy Rights</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If you are a California resident, you have specific rights regarding access to your personal 
                  information under the California Consumer Privacy Act (CCPA). This includes the right to know 
                  what personal information we collect, use, disclose, and sell.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">13. GDPR Compliance</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If you are in the European Economic Area (EEA), we process your personal information based on:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li>Your consent</li>
                  <li>Performance of a contract with you</li>
                  <li>Compliance with legal obligations</li>
                  <li>Protection of your vital interests</li>
                  <li>Our legitimate interests</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">14. Changes to This Privacy Policy</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the "Last updated" date. You are advised to 
                  review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">15. Contact Us</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-none pl-0 text-gray-700 dark:text-gray-300">
                  <li className="mb-2"><strong>Email:</strong> contact@bestard.fr</li>
                  <li className="mb-2"><strong>Website:</strong> bestard.fr</li>
                </ul>
              </section>
            </div>
          </ContentWrapper>
        </motion.div>
      </div>
    </>
  );
}

