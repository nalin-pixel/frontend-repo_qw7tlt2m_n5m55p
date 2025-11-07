import PolicySEO from '../../components/PolicySEO';
import { PageHeader, Section, ContactCard, PolicyFooterLinks } from '../../components/LegalContent';
import Breadcrumbs from '../../components/Breadcrumbs';

export function PrivacyPolicy() {
  const faqs = [
    { q: 'Do you sell my data?', a: 'No. We never sell personal data. We use minimal analytics to improve performance and stability.' },
    { q: 'Do you store my files?', a: 'Most tools process files in your browser. For server tasks, files are auto-deleted after processing unless you ask us to keep them.' },
    { q: 'How can I delete my data?', a: 'Email support@aimediatools.example with your request. We will respond within 30 days as required by GDPR/CCPA.' },
  ];

  return (
    <div className="py-10">
      <PolicySEO
        title="Privacy Policy for AI Media Tools"
        description="Learn how AI Media Tools collects and uses information. GDPR and CCPA friendly. Privacy-first with browser-based processing."
        path="/privacy"
        faqs={faqs}
        type="WebPage"
      />
      <Breadcrumbs items={[{ label: 'Legal', href: '/privacy' }, { label: 'Privacy Policy' }]} />
      <div className="mx-auto grid max-w-5xl gap-6 px-6">
        <PageHeader title="Privacy Policy" updated="2025-01-01" description="We respect your privacy. This page explains what we collect, why, and how you can control it." />

        <Section title="Summary" icon={null}>
          <ul>
            <li>We collect minimal data to run the site and improve reliability.</li>
            <li>Most processing happens in your browser. When servers are used, files are temporary.</li>
            <li>You control cookies and analytics opt-outs.</li>
          </ul>
        </Section>

        <Section title="Data we process" icon={null} id="data">
          <p>
            We may process: usage analytics (pages viewed, device type), technical logs (IP truncated, error codes), and content you upload to use a tool. We do not build
            personal profiles or sell data. If a feature requires uploads, we keep files only as long as needed to provide the service and then delete them.
          </p>
        </Section>

        <Section title="Cookies" icon={null} id="cookies">
          <p>We use essential cookies for preferences and security. Analytics and advertising cookies help us understand performance and keep the service free. You can control cookies in your browser settings.</p>
        </Section>

        <Section title="Your rights (GDPR/CCPA)" icon={null} id="rights">
          <ul>
            <li>Access: request a copy of your data.</li>
            <li>Correction: ask us to fix inaccurate information.</li>
            <li>Deletion: request deletion of personal data we hold.</li>
            <li>Opt-out: disable non-essential cookies and analytics.</li>
          </ul>
        </Section>

        <Section title="Contact" icon={null}>
          <ContactCard />
        </Section>

        <PolicyFooterLinks />
      </div>
    </div>
  );
}

export function TermsConditions() {
  return (
    <div className="py-10">
      <PolicySEO
        title="Terms of Use – AI Media Tools"
        description="Read the terms for using AI Media Tools. Clear usage rules, IP rights, disclaimers, and limitations of liability."
        path="/terms"
        type="WebPage"
      />
      <Breadcrumbs items={[{ label: 'Legal', href: '/terms' }, { label: 'Terms of Use' }]} />
      <div className="mx-auto grid max-w-5xl gap-6 px-6">
        <PageHeader title="Terms & Conditions" updated="2025-01-01" description="Please read these terms carefully before using our website and tools." />

        <Section title="Purpose of the website">
          <p>AI Media Tools provides online utilities for image, video, and media workflows. Some features run in your browser; others may use secure servers to complete processing.</p>
        </Section>
        <Section title="User obligations">
          <ul>
            <li>Use the tools lawfully and responsibly.</li>
            <li>Do not upload content you do not have rights to share.</li>
            <li>Do not attempt to disrupt the service or access data that is not yours.</li>
          </ul>
        </Section>
        <Section title="Intellectual property">
          <p>The website design, text, and brand assets are owned by AI Media Tools. You retain rights to your own uploads and outputs.</p>
        </Section>
        <Section title="Third‑party tools & links">
          <p>We may link to third‑party sites or embed services (e.g., analytics, ads). We are not responsible for their content or privacy practices.</p>
        </Section>
        <Section title="Limitation of liability">
          <p>We provide the service “as is”. To the maximum extent allowed by law, we are not liable for any indirect, incidental, or consequential damages.</p>
        </Section>
        <PolicyFooterLinks />
      </div>
    </div>
  );
}

export function DisclaimerPage() {
  const faqs = [
    { q: 'Are results guaranteed?', a: 'No. Output quality varies by input and settings. Always review results before using them publicly.' },
    { q: 'Can I use the tools commercially?', a: 'Yes, generally. Ensure you own the rights to the input and resulting output and comply with local laws.' },
  ];
  return (
    <div className="py-10">
      <PolicySEO
        title="Disclaimer – AI Media Tools"
        description="Friendly disclaimer: our tools are for creative and educational use. Accuracy is not guaranteed. Use at your own discretion."
        path="/disclaimer"
        type="WebPage"
        faqs={faqs}
      />
      <Breadcrumbs items={[{ label: 'Legal', href: '/disclaimer' }, { label: 'Disclaimer' }]} />
      <div className="mx-auto grid max-w-5xl gap-6 px-6">
        <PageHeader title="Disclaimer" updated="2025-01-01" description="Our tools are for creative and educational use only. Please use your best judgment." />
        <Section title="No warranties"><p>We do not guarantee accuracy, availability, or suitability for a particular purpose.</p></Section>
        <Section title="Use at your own discretion"><p>You are responsible for how you use outputs. Verify results, especially for professional work.</p></Section>
        <Section title="No legal or financial liability"><p>AI Media Tools is not liable for any losses or claims arising from the use of the service.</p></Section>
        <PolicyFooterLinks />
      </div>
    </div>
  );
}

export function CookiePolicy() {
  const faqs = [
    { q: 'Can I opt out of cookies?', a: 'Yes. You can disable cookies in your browser and use the cookie banner to reject non-essential cookies.' },
    { q: 'What cookies are used?', a: 'Essential cookies for security and preferences, analytics cookies to improve the site, and advertising cookies to keep tools free.' },
  ];
  return (
    <div className="py-10">
      <PolicySEO
        title="Cookie Policy – AI Media Tools"
        description="Learn how we use essential, analytics, and advertising cookies. Control your preferences anytime."
        path="/cookie"
        type="WebPage"
        faqs={faqs}
      />
      <Breadcrumbs items={[{ label: 'Legal', href: '/cookie' }, { label: 'Cookie Policy' }]} />
      <div className="mx-auto grid max-w-5xl gap-6 px-6">
        <PageHeader title="Cookie Policy" updated="2025-01-01" description="We use cookies to run the site, improve performance, and support free access with ads." />
        <Section title="Types of cookies">
          <ul>
            <li><strong>Essential</strong>: login state, preferences, security.</li>
            <li><strong>Analytics</strong>: aggregate usage and performance metrics.</li>
            <li><strong>Advertising</strong>: ad personalization and frequency capping.</li>
          </ul>
        </Section>
        <Section title="Your controls">
          <p>Use your browser settings to clear or block cookies. You can also opt out of personalized ads via Google Ad Settings.</p>
        </Section>
        <Section title="Cookie banner text">
          <p>“We use cookies to provide essential features and to analyze our traffic. By clicking Accept, you agree to our Cookie Policy.”</p>
        </Section>
        <PolicyFooterLinks />
      </div>
    </div>
  );
}

export function DMCA() {
  return (
    <div className="py-10">
      <PolicySEO
        title="DMCA Policy – AI Media Tools"
        description="Report copyright infringement. Learn how to submit a valid DMCA takedown notice to AI Media Tools."
        path="/dmca"
        type="WebPage"
      />
      <Breadcrumbs items={[{ label: 'Legal', href: '/dmca' }, { label: 'DMCA' }]} />
      <div className="mx-auto grid max-w-5xl gap-6 px-6">
        <PageHeader title="DMCA Policy" updated="2025-01-01" description="If you believe your copyright is infringed, follow the steps below." />
        <Section title="How to file a notice">
          <ol className="list-decimal pl-5">
            <li>Identify the copyrighted work.</li>
            <li>Identify the infringing material with URLs.</li>
            <li>Provide your contact information.</li>
            <li>Add a good-faith statement and perjury statement.</li>
            <li>Include an electronic or physical signature.</li>
            <li>Send to: compliance@aimediatools.example</li>
          </ol>
        </Section>
        <Section title="Counter notice">
          <p>If you believe material was removed in error, send a counter‑notice with details and consent to jurisdiction as required by the DMCA.</p>
        </Section>
        <PolicyFooterLinks />
      </div>
    </div>
  );
}

export function RefundPolicy() {
  return (
    <div className="py-10">
      <PolicySEO
        title="Refund Policy – AI Media Tools"
        description="We value your satisfaction. Learn about eligibility and how to request a refund for premium features."
        path="/refund"
        type="WebPage"
      />
      <Breadcrumbs items={[{ label: 'Legal', href: '/refund' }, { label: 'Refund Policy' }]} />
      <div className="mx-auto grid max-w-5xl gap-6 px-6">
        <PageHeader title="Refund Policy" updated="2025-01-01" description="Transparent, fair, and human. If something goes wrong, we’ll make it right." />
        <Section title="Eligibility">
          <ul>
            <li>Within 14 days of purchase for unused credits or failed renders.</li>
            <li>No refunds for abuse, chargeback fraud, or policy violations.</li>
          </ul>
        </Section>
        <Section title="How to request">
          <ol className="list-decimal pl-5">
            <li>Email receipts and issue details to support@aimediatools.example.</li>
            <li>Allow 3–5 business days for review.</li>
            <li>Approved refunds return to your original payment method.</li>
          </ol>
        </Section>
        <PolicyFooterLinks />
      </div>
    </div>
  );
}
