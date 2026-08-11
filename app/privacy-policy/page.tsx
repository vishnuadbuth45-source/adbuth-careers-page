import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
        <div className="mb-12">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            ← Back to Home
          </Link>

          <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: August 7, 2026
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <p>
            At ADBUTHVERSE, we respect your privacy and are committed to
            protecting the personal information you share with us. This Privacy
            Policy explains how we collect, use, store, and protect your
            information when you visit our website, use our services, or apply
            for opportunities through our careers platform.
          </p>

          <h2>1. Information We Collect</h2>

          <p>
            We may collect information that you voluntarily provide to us,
            including when you contact us, submit an application, or interact
            with our website.
          </p>

          <p>This information may include:</p>

          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Resume or CV</li>
            <li>Professional experience and qualifications</li>
            <li>Education and other information included in your application</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <p>
            We may also automatically collect limited technical information,
            such as your browser type, device information, IP address, and
            general website usage information.
          </p>

          <h2>2. How We Use Your Information</h2>

          <p>
            We use the information we collect for legitimate business
            purposes, including:
          </p>

          <ul>
            <li>Processing and evaluating job applications</li>
            <li>Communicating with applicants and users</li>
            <li>Responding to inquiries and requests</li>
            <li>Improving our website and services</li>
            <li>Maintaining the security and integrity of our platform</li>
            <li>Complying with applicable legal obligations</li>
          </ul>

          <h2>3. Careers and Job Applications</h2>

          <p>
            If you submit an application through our careers platform, the
            information you provide may be reviewed by authorized members of
            our team for recruitment and hiring purposes.
          </p>

          <p>
            Your application information may be retained for a reasonable
            period of time so that we can consider you for current or future
            opportunities, subject to applicable laws and our internal
            practices.
          </p>

          <h2>4. Information Sharing</h2>

          <p>
            We do not sell or rent your personal information. We may share
            information with trusted service providers who assist us in
            operating our website, processing applications, storing data, or
            providing other business services.
          </p>

          <p>
            We may also disclose information where required by law, legal
            process, or when reasonably necessary to protect our rights,
            property, users, or the security of our services.
          </p>

          <h2>5. Data Security</h2>

          <p>
            We take reasonable technical and organizational measures to
            protect personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>

          <p>
            However, no method of transmission or storage over the internet
            can be guaranteed to be completely secure. While we work to protect
            your information, we cannot guarantee absolute security.
          </p>

          <h2>6. Cookies and Similar Technologies</h2>

          <p>
            Our website may use cookies or similar technologies where necessary
            to provide functionality, improve performance, understand website
            usage, and enhance the user experience.
          </p>

          <p>
            You may be able to control cookies through your browser settings.
            Disabling certain cookies may affect some functionality of the
            website.
          </p>

          <h2>7. Third-Party Services</h2>

          <p>
            Our website may rely on third-party services for hosting, data
            storage, analytics, authentication, communications, or other
            functionality. These providers may process information according
            to their own privacy policies and applicable laws.
          </p>

          <h2>8. Your Rights</h2>

          <p>
            Depending on applicable law, you may have rights relating to your
            personal information, including the right to request access,
            correction, deletion, or other appropriate handling of your
            information.
          </p>

          <p>
            If you would like to make a privacy-related request, please contact
            us using the contact information provided below.
          </p>

          <h2>9. Children&apos;;s Privacy</h2>

          <p>
            Our services are not intended to knowingly collect personal
            information from children in circumstances where such collection
            is prohibited by applicable law.
          </p>

          <h2>10. Changes to This Privacy Policy</h2>

          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our services, practices, or legal requirements. Any
            updated version will be published on this page with a revised
            “Last updated” date.
          </p>

          <h2>11. Contact Us</h2>

          <p>
            If you have questions, concerns, or requests regarding this Privacy
            Policy or the handling of your personal information, please contact
            us through the contact information provided on our website.
          </p>

          <p>
            <strong>Company:</strong> ADBUTHVERSE
          </p>

          <p>
            <strong>Website:</strong> ADBUTHVERSE Careers
          </p>
        </div>
      </div>
    </main>
  );
}