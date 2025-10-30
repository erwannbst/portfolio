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

export default function StyxTerms() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Head>
      <NextSeo
        title="Styx - Terms and Conditions"
        description="Terms and Conditions for Styx App"
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
              Styx - Terms and Conditions
            </h1>

            <div className="post-content prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  By accessing and using Styx ("the App"), you accept and agree
                  to be bound by the terms and provision of this agreement. If
                  you do not agree to these terms, please do not use the App.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  2. Use License
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Permission is granted to temporarily download one copy of Styx
                  for personal, non-commercial transitory viewing only. This is
                  the grant of a license, not a transfer of title, and under
                  this license you may not:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li>Modify or copy the App materials</li>
                  <li>
                    Use the materials for any commercial purpose or for any
                    public display
                  </li>
                  <li>
                    Attempt to reverse engineer any software contained in the
                    App
                  </li>
                  <li>
                    Remove any copyright or other proprietary notations from the
                    materials
                  </li>
                  <li>
                    Transfer the materials to another person or "mirror" the
                    materials on any other server
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  3. User Accounts
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  When you create an account with us, you must provide
                  information that is accurate, complete, and current at all
                  times. Failure to do so constitutes a breach of the Terms,
                  which may result in immediate termination of your account.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  You are responsible for safeguarding the password that you use
                  to access the App and for any activities or actions under your
                  password.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  4. Privacy Policy
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Your use of the App is also governed by our Privacy Policy. We
                  are committed to protecting your personal information and your
                  right to privacy. Please review our Privacy Policy to
                  understand our practices.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  5. User Content
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Users may post, upload, or submit content through the App. You
                  retain all rights to any content you submit, post or display
                  on or through the App. By posting content, you grant us a
                  worldwide, non-exclusive, royalty-free license to use,
                  reproduce, modify, and display such content solely for the
                  purpose of operating and providing the App.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  6. Prohibited Uses
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  You may not use the App:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                  <li>
                    In any way that violates any applicable national or
                    international law or regulation
                  </li>
                  <li>
                    To transmit, or procure the sending of, any advertising or
                    promotional material
                  </li>
                  <li>
                    To impersonate or attempt to impersonate the company,
                    another user, or any other person or entity
                  </li>
                  <li>In any way that infringes upon the rights of others</li>
                  <li>
                    To engage in any other conduct that restricts or inhibits
                    anyone's use or enjoyment of the App
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  7. Disclaimer
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The materials within the App are provided on an 'as is' basis.
                  We make no warranties, expressed or implied, and hereby
                  disclaim and negate all other warranties including, without
                  limitation, implied warranties or conditions of
                  merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation
                  of rights.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  8. Limitations of Liability
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  In no event shall Styx or its suppliers be liable for any
                  damages (including, without limitation, damages for loss of
                  data or profit, or due to business interruption) arising out
                  of the use or inability to use the App, even if we or our
                  authorized representative has been notified orally or in
                  writing of the possibility of such damage.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  9. Termination
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We may terminate or suspend your account and bar access to the
                  App immediately, without prior notice or liability, under our
                  sole discretion, for any reason whatsoever and without
                  limitation, including but not limited to a breach of the
                  Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  10. Changes to Terms
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We reserve the right to modify or replace these Terms at any
                  time at our sole discretion. If a revision is material, we
                  will provide at least 30 days notice prior to any new terms
                  taking effect. What constitutes a material change will be
                  determined at our sole discretion.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  11. Governing Law
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  These Terms shall be governed and construed in accordance with
                  the laws of France, without regard to its conflict of law
                  provisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  12. Contact Information
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If you have any questions about these Terms, please contact us
                  at:
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Email: contact@bestard.fr
                </p>
              </section>
            </div>
          </ContentWrapper>
        </motion.div>
      </div>
    </>
  );
}
