import Link from "next/link";

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: August 7, 2026
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <p>
            Welcome to ADBUTHVERSE. These Terms of Service govern your access
            to and use of our website, careers platform, and related services.
            By accessing or using our website, you agree to be bound by these
            Terms.
          </p>

          <p>
            If you do not agree with these Terms, please do not use our
            website or services.
          </p>

          <h2>1. About Our Services</h2>

          <p>
            ADBUTHVERSE provides information about our company, career
            opportunities, job openings, and related services through our
            website.
          </p>

          <p>
            Job listings, descriptions, requirements, and other employment
            information provided through the website may be updated, changed,
            or removed at any time.
          </p>

          <h2>2. Use of the Website</h2>

          <p>
            You agree to use our website only for lawful purposes and in a way
            that does not interfere with the operation, security, or
            availability of the website.
          </p>

          <p>You must not:</p>

          <ul>
            <li>Use the website for unlawful or fraudulent purposes</li>
            <li>
              Attempt to gain unauthorized access to our systems or accounts
            </li>
            <li>Interfere with or disrupt the website or its infrastructure</li>
            <li>
              Submit false, misleading, or fraudulent information
            </li>
            <li>
              Upload malicious software, code, or other harmful material
            </li>
            <li>
              Attempt to access information or functionality that you are not
              authorized to access
            </li>
            <li>
              Use automated systems to abuse, scrape, or overload the website
              without authorization
            </li>
          </ul>

          <h2>3. Job Applications</h2>

          <p>
            When submitting a job application through our careers platform, you
            agree that the information you provide is accurate and
            sufficiently complete to the best of your knowledge.
          </p>

          <p>
            Providing false, misleading, or fraudulent information may result
            in your application being rejected or, where applicable, affect an
            employment relationship.
          </p>

          <p>
            Submission of an application does not guarantee an interview,
            employment, or any particular outcome. All hiring decisions remain
            at the discretion of ADBUTHVERSE and are subject to applicable
            employment laws and requirements.
          </p>

          <h2>4. Intellectual Property</h2>

          <p>
            Unless otherwise stated, the content and materials available on
            this website, including text, graphics, logos, designs, software,
            branding, and other materials, are owned by or licensed to
            ADBUTHVERSE and are protected by applicable intellectual property
            laws.
          </p>

          <p>
            You may access and use website content for personal and legitimate
            purposes. You may not reproduce, modify, distribute, sell, or
            commercially exploit our content without prior written permission.
          </p>

          <h2>5. Third-Party Services and Links</h2>

          <p>
            Our website may contain links to third-party websites or services.
            These third-party services are not controlled by ADBUTHVERSE, and
            we are not responsible for their content, availability, security,
            or privacy practices.
          </p>

          <p>
            Your use of third-party websites or services is subject to their
            respective terms and policies.
          </p>

          <h2>6. Website Availability</h2>

          <p>
            We make reasonable efforts to keep our website available and
            functioning properly. However, we do not guarantee that the website
            will always be available, uninterrupted, secure, or free from
            errors.
          </p>

          <p>
            We may temporarily suspend, modify, or discontinue any part of the
            website without prior notice where reasonably necessary.
          </p>

          <h2>7. Disclaimer</h2>

          <p>
            The website and its content are provided on an “as available” and
            “as is” basis to the extent permitted by applicable law.
          </p>

          <p>
            While we aim to provide accurate and current information, we do not
            guarantee that all information on the website will always be
            complete, accurate, current, or error-free.
          </p>

          <h2>8. Limitation of Liability</h2>

          <p>
            To the maximum extent permitted by applicable law, ADBUTHVERSE
            shall not be liable for indirect, incidental, consequential,
            special, or other damages arising from or related to your use of
            the website or inability to access the website.
          </p>

          <p>
            Nothing in these Terms is intended to exclude or limit liability
            that cannot legally be excluded or limited under applicable law.
          </p>

          <h2>9. Indemnification</h2>

          <p>
            To the extent permitted by applicable law, you agree to be
            responsible for losses, claims, liabilities, or expenses arising
            from your unlawful use of the website or violation of these Terms.
          </p>

          <h2>10. Changes to These Terms</h2>

          <p>
            We may update these Terms of Service from time to time. Changes
            will become effective when the updated Terms are published on this
            page, unless otherwise stated.
          </p>

          <p>
            Your continued use of the website after changes are published
            constitutes your acceptance of the updated Terms, to the extent
            permitted by applicable law.
          </p>

          <h2>11. Governing Law</h2>

          <p>
            These Terms shall be governed by and interpreted in accordance with
            the applicable laws of India, unless otherwise required by
            applicable law.
          </p>

          <h2>12. Contact Us</h2>

          <p>
            If you have questions regarding these Terms of Service, please
            contact ADBUTHVERSE through the contact information provided on our
            website.
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