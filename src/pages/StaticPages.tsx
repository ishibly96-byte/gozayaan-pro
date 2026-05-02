import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ContentWrapper = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <main className="min-h-screen bg-[#F5F2ED] pt-12 pb-24 font-body-ui">
    <div className="max-w-4xl mx-auto px-6">
      <Link to="/" className="inline-flex items-center gap-2 text-[#008080] font-medium mb-8 hover:opacity-80 transition-opacity">
        <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        Back to Home
      </Link>
      <div className="bg-white rounded-[24px] p-8 md:p-12 shadow-sm border border-outline">
        <h1 className="font-headline-sm text-3xl md:text-4xl text-[#2D2926] mb-8">{title}</h1>
        <div className="prose prose-slate max-w-none prose-headings:text-[#2D2926] prose-a:text-[#008080]">
          {children}
        </div>
      </div>
    </div>
  </main>
);

export function AboutPage() {
  return (
    <ContentWrapper title="About GoZayaan Pro">
      <p className="text-lg text-gray-700 font-medium">GoZayaan Pro connects adventurous travelers with verified, elite local guides across Bangladesh, delivering curated and unforgettable experiences.</p>
      
      <h3>Our Mission</h3>
      <p>Our mission is to empower local experts to showcase the true essence of Bangladesh. Far beyond the standard tourist trail, we believe that understanding a country requires connecting with the people who live and breathe its culture every day.</p>
      
      <h3>Why "Pro"?</h3>
      <p>GoZayaan Pro is an exclusive tier of exactly what the name implies: professional excellence. We manually vet every single host on our platform.</p>
      <ul>
        <li><strong>Identity Verification:</strong> Every host goes through rigorous NID and background checks.</li>
        <li><strong>Skill Assessment:</strong> Guides are tested on their local knowledge, language proficiency, and emergency handling capabilities.</li>
        <li><strong>Zero Commission Edge:</strong> We believe in fair trade tourism. We charge 0% commission to our hosts for the first entire year so they can build their business and keep what they earn.</li>
      </ul>
    </ContentWrapper>
  );
}

export function SafetyPage() {
  return (
    <ContentWrapper title="Trust & Safety">
      <p className="text-lg text-gray-700 font-medium">Your peace of mind is the foundation of every great journey. At GoZayaan Pro, safety isn't an afterthought—it's woven into our infrastructure.</p>
      
      <h3>For Travelers</h3>
      <ul>
        <li><strong>Verified Professionals:</strong> You aren't meeting a stranger from the internet. You are meeting a vetted professional whose identity is registered with us.</li>
        <li><strong>Secure Booking:</strong> All payments are held in escrow until the experience is successfully completed.</li>
        <li><strong>24/7 Support:</strong> Our dedicated incident response team is available around the clock. If you feel unsafe or an experience does not deliver what was promised, our support agents will step in immediately.</li>
        <li><strong>Refund Guarantee:</strong> If a host cancels or fails to show up, you receive an immediate, 100% full refund—no questions asked.</li>
      </ul>

      <h3>For Hosts</h3>
      <ul>
        <li><strong>Traveler Verification:</strong> Travelers must create verified profiles with confirmed email addresses and phone numbers before they can book.</li>
        <li><strong>Upfront Payments:</strong> You never have to chase payments. Funds are secured at the moment of booking and disbursed to your registered bKash or Bank immediately after the tour concludes.</li>
        <li><strong>Host Protection Insurance:</strong> We provide liability coverage for up to 100,000 BDT in case of third-party property damage or bodily injury during a guided experience.</li>
      </ul>
    </ContentWrapper>
  );
}

export function TermsPage() {
  return (
    <ContentWrapper title="Terms of Service">
      <p>Last Updated: October 2023</p>
      <p>Welcome to GoZayaan Pro. These terms and conditions outline the rules and regulations for the use of GoZayaan's Website and Mobile Application.</p>
      
      <h3>1. Acceptance of Terms</h3>
      <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use GoZayaan Pro if you do not agree to all of the terms and conditions stated on this page.</p>

      <h3>2. Booking and Cancellations</h3>
      <p>When you book an experience through the Platform, you are entering into a direct contract with the Host. GoZayaan acts strictly as a technology facilitator.</p>
      <ul>
        <li><strong>Cancellations by Traveler:</strong> Full refund if canceled 48 hours prior to the experience. 50% refund if canceled within 24 hours. No-shows are non-refundable.</li>
        <li><strong>Cancellations by Host:</strong> If a host cancels, the traveler receives a 100% refund, and the host may be subject to a penalty fee or algorithmic demotion to ensure reliability.</li>
      </ul>

      <h3>3. Code of Conduct</h3>
      <p>You agree not to engage in any activity that interferes with or disrupts the Services. Both Hosts and Travelers must treat each other with respect, adhering to our non-discrimination policies.</p>
    </ContentWrapper>
  );
}

export function PrivacyPage() {
  return (
    <ContentWrapper title="Privacy Policy">
      <p>Your privacy is important to us. It is GoZayaan Pro's policy to respect your privacy regarding any information we may collect from you across our website.</p>
      
      <h3>Information We Collect</h3>
      <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
      <ul>
        <li><strong>Profile Data:</strong> Name, Email, Phone number, and profile picture.</li>
        <li><strong>Verification Data:</strong> For hosts, we securely process National ID (NID) cards. This data is encrypted and strictly used for verification via government databases, and is never sold or used for marketing.</li>
        <li><strong>Payment Data:</strong> Handled securely by our PCI-compliant payment gateways. We do not store raw credit card numbers on our servers.</li>
      </ul>

      <h3>How We Use It</h3>
      <p>We use the information we collect to operate our platform, match you with relevant experiences, process transactions, and send critical service updates via email or SMS.</p>
    </ContentWrapper>
  );
}
