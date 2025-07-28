// src/components/PrivacyPolicy.tsx
"use client";
import NavSection from "@/components/sections/NavSection";
import FooterSection from "@/components/sections/FooterSection";
const PrivacyPolicy = () => {
  return (
    <div className="w-full h-full flex bg-[#020b1a] justify-center flex-col items-center">
      <NavSection />
      
     <div className="bg-[#020b1a] text-white min-h-screen px-6 py-12 md:px-20 lg:px-32 mt-20"> 
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At Learn AI, we are committed to protecting your personal information and your right to privacy. This policy explains how we collect, use, and safeguard your data.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address, phone number, and usage data when you register or use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use your information to provide and improve our services, personalize your experience, and communicate with you about updates, offers, or support.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Security</h2>
      <p className="mb-4">
        We implement strict security measures to protect your data from unauthorized access or disclosure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell or rent your personal data. We may only share it with trusted partners to help operate our services, under strict confidentiality agreements.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Cookies</h2>
      <p className="mb-4">
        Our website may use cookies to enhance your browsing experience and analyze site traffic.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, update, or delete your personal information. You may also unsubscribe from our communications at any time.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us at: <br />
        <strong>Email:</strong> infodreameducation.com
      </p>
      
    </div>
    <FooterSection />
     </div>
     
  );
};

export default PrivacyPolicy;
