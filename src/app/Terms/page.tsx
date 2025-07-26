"use client";
import Head from "next/head";
 
import NavSection from "@/components/sections/NavSection";
import FooterSection from "@/components/sections/FooterSection";

export default function TermsPage() {
  return (
    <>
    <div className="w-full h-full flex bg-[#020617] justify-center flex-col items-center">
          <NavSection />
          
      <Head>
        <title>Terms & Conditions | AI Learn</title>
      </Head>

      <main className="bg-[#020617] text-white min-h-screen px-6 py-10 md:px-20 lg:px-40 mt-20">
         <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms & Conditions</h1>


        <section className="space-y-6 text-gray-300">
          <p>
            Welcome to <strong>AI Learn</strong>. By accessing this website and using our
            services, you agree to comply with and be bound by the following Terms and Conditions.
            Please review them carefully before proceeding.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">1. Acceptance of Terms</h2>
          <p>
            By using the AI Learn platform, you acknowledge that you have read, understood, and agree
            to these terms. If you do not agree with any part of these terms, please do not use the platform.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">2. Use of the Website</h2>
          <p>
            You agree to use AI Learn only for lawful, educational, and personal development purposes.
            Any misuse or unauthorized use of the platform is strictly prohibited.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">3. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, images, and software, is the
            property of AI Learn and protected by copyright laws. You may not copy, modify, distribute,
            or use any content without prior written consent.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">4. User Accounts</h2>
          <p>
            When creating an account, you must provide accurate and complete information.
            You are responsible for safeguarding your account credentials and for any activity under your account.
            We reserve the right to suspend or terminate accounts that violate our policies.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">5. Limitation of Liability</h2>
          <p>
            AI Learn will not be held liable for any direct, indirect, incidental, or consequential
            damages arising from your use of or inability to use our services. Use the platform at your own risk.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">6. Modifications to Terms</h2>
          <p>
            We may update these Terms & Conditions from time to time. Continued use of the platform after
            changes are made constitutes acceptance of the revised terms. We recommend reviewing this page regularly.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">7. Contact Us</h2>
          <p>
            If you have any questions, concerns, or require further clarification, please{" "}
            <a href="/contact" className="text-primary underline">
              contact us
            </a>
            .
          </p>
        </section>
      </main>
      <FooterSection />
      </div>
    </>
  );
}
