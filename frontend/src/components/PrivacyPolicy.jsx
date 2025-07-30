import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#0e1a24] text-white px-6 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-[#33FEBF]">Privacy Policy</h1>
        <p>**BoltLabs**</p>
        <p>Effective Date: July 27, 2025<br />Last Updated: July 27, 2025</p>

        <h2 className="text-xl font-semibold text-[#33FEBF]">1. Introduction</h2>
        <p>
          BoltLabs ("Company", "we", "our", or "us") respects your privacy and is committed to protecting your personal data...
        </p>

        <h2 className="text-xl font-semibold text-[#33FEBF]">2. Information We Collect</h2>
        <p className="font-semibold">a. Personal Information</p>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Full name</li>
          <li>Contact info (email, phone)</li>
          <li>Educational details</li>
          <li>Portfolio links (GitHub, LinkedIn)</li>
          <li>Resume, CV, application materials</li>
          <li>User-generated content</li>
        </ul>

        <p className="font-semibold">b. Technical and Usage Information</p>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Browser, OS, device</li>
          <li>IP address</li>
          <li>Pages visited</li>
          <li>Cookies, tracking tools</li>
        </ul>

        <p className="font-semibold">c. Third-Party Authentication</p>
        <p>We may receive data from services like Google, GitHub, etc.</p>

        <h2 className="text-xl font-semibold text-[#33FEBF]">3. Use of Information</h2>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Managing accounts</li>
          <li>Assigning internship roles</li>
          <li>Improving UX</li>
          <li>Providing relevant content</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#33FEBF]">4. Data Sharing</h2>
        <p>We may share info with mentors, partners, or legal authorities if required.</p>

        <h2 className="text-xl font-semibold text-[#33FEBF]">5. Data Retention</h2>
        <p>Data is retained for engagement + legal purposes. You may request deletion anytime.</p>

        <h2 className="text-xl font-semibold text-[#33FEBF]">6. Data Security</h2>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>HTTPS</li>
          <li>Role-based access</li>
          <li>Regular audits</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#33FEBF]">7. Your Rights</h2>
        <p>To access or update data, contact us at <a href="mailto:we.labsbolt@gmail.com" className="text-[#33FEBF]">we.labsbolt@gmail.com</a>.</p>

        <h2 className="text-xl font-semibold text-[#33FEBF]">8. Children’s Privacy</h2>
        <p>No data knowingly collected from kids under 13.</p>

        <h2 className="text-xl font-semibold text-[#33FEBF]">9. Changes to this Policy</h2>
        <p>Policy may be updated. Continued use implies acceptance.</p>

        <h2 className="text-xl font-semibold text-[#33FEBF]">10. Contact Us</h2>
        <p>Email: we.labsbolt@gmail.com<br />Address: SGSITS, Indore<br />Website: https://boltlabs.in</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
