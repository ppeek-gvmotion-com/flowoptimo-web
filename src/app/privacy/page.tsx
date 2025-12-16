import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - FlowOptimo",
  description:
    "Learn how FlowOptimo collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="mt-4 text-gray-600">Last updated: December 2024</p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                1. Introduction
              </h2>
              <p className="leading-relaxed text-gray-600">
                FlowOptimo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
                is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you use our vacation rental operations
                software and related services (collectively, the
                &quot;Service&quot;).
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                By accessing or using our Service, you agree to this Privacy
                Policy. If you do not agree with the terms of this Privacy
                Policy, please do not access the Service.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                2. Information We Collect
              </h2>

              <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
                2.1 Information You Provide
              </h3>
              <p className="leading-relaxed text-gray-600">
                We collect information you provide directly to us, including:
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
                <li>
                  Account information (name, email address, password, company
                  name)
                </li>
                <li>
                  Billing information (payment card details, billing address)
                </li>
                <li>
                  Property information (addresses, descriptions, booking
                  calendars)
                </li>
                <li>
                  Team member information (names, contact details, work
                  schedules)
                </li>
                <li>
                  Communications (support requests, feedback, survey responses)
                </li>
              </ul>

              <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
                2.2 Information Collected Automatically
              </h3>
              <p className="leading-relaxed text-gray-600">
                When you use our Service, we automatically collect certain
                information, including:
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
                <li>
                  Device information (device type, operating system, browser
                  type)
                </li>
                <li>
                  Log data (IP address, access times, pages viewed, referring
                  URL)
                </li>
                <li>
                  Location data (general geographic location based on IP
                  address)
                </li>
                <li>
                  Usage data (features used, actions taken, time spent on
                  Service)
                </li>
              </ul>

              <h3
                id="cookies"
                className="mb-3 mt-6 text-xl font-semibold text-gray-900"
              >
                2.3 Cookies and Tracking Technologies
              </h3>
              <p className="leading-relaxed text-gray-600">
                We use cookies and similar tracking technologies to collect and
                store information about your interactions with our Service.
                These include:
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
                <li>
                  <strong>Essential cookies:</strong> Required for the Service
                  to function properly
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Help us understand how
                  users interact with our Service
                </li>
                <li>
                  <strong>Preference cookies:</strong> Remember your settings
                  and preferences
                </li>
                <li>
                  <strong>Marketing cookies:</strong> Used to deliver relevant
                  advertisements (with your consent)
                </li>
              </ul>
              <p className="mt-4 leading-relaxed text-gray-600">
                You can control cookies through your browser settings. However,
                disabling certain cookies may limit your ability to use some
                features of our Service.
              </p>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                3. How We Use Your Information
              </h2>
              <p className="leading-relaxed text-gray-600">
                We use the information we collect to:
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
                <li>Provide, maintain, and improve our Service</li>
                <li>Process transactions and send related information</li>
                <li>
                  Send administrative messages, updates, and security alerts
                </li>
                <li>Respond to your comments, questions, and support requests</li>
                <li>
                  Monitor and analyze trends, usage, and activities in
                  connection with our Service
                </li>
                <li>
                  Detect, investigate, and prevent fraudulent transactions and
                  other illegal activities
                </li>
                <li>
                  Personalize and improve your experience with our Service
                </li>
                <li>
                  Send promotional communications (with your consent where
                  required)
                </li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                4. Information Sharing
              </h2>
              <p className="leading-relaxed text-gray-600">
                We may share your information in the following circumstances:
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
                <li>
                  <strong>Service providers:</strong> With third-party vendors
                  who perform services on our behalf (payment processing, data
                  hosting, customer support)
                </li>
                <li>
                  <strong>Business transfers:</strong> In connection with a
                  merger, acquisition, or sale of assets
                </li>
                <li>
                  <strong>Legal requirements:</strong> When required by law or
                  to respond to legal process
                </li>
                <li>
                  <strong>Protection of rights:</strong> To protect the rights,
                  property, and safety of FlowOptimo, our users, or others
                </li>
                <li>
                  <strong>With your consent:</strong> When you have given us
                  explicit permission to share your information
                </li>
              </ul>
              <p className="mt-4 leading-relaxed text-gray-600">
                We do not sell your personal information to third parties.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                5. Data Security
              </h2>
              <p className="leading-relaxed text-gray-600">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. These measures
                include:
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection practices</li>
                <li>Incident response procedures</li>
              </ul>
              <p className="mt-4 leading-relaxed text-gray-600">
                However, no method of transmission over the Internet or
                electronic storage is 100% secure. While we strive to protect
                your personal information, we cannot guarantee its absolute
                security.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                6. Data Retention
              </h2>
              <p className="leading-relaxed text-gray-600">
                We retain your personal information for as long as necessary to
                fulfill the purposes outlined in this Privacy Policy, unless a
                longer retention period is required or permitted by law. When
                determining the retention period, we consider:
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
                <li>The nature and sensitivity of the information</li>
                <li>The purposes for which we process the information</li>
                <li>Applicable legal, regulatory, and contractual requirements</li>
                <li>
                  Whether the purpose can be achieved through other means
                </li>
              </ul>
              <p className="mt-4 leading-relaxed text-gray-600">
                When you delete your account, we will delete or anonymize your
                personal information within 30 days, except where we are
                required to retain it for legal or legitimate business purposes.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                7. Your Rights
              </h2>
              <p className="leading-relaxed text-gray-600">
                Depending on your location, you may have certain rights
                regarding your personal information:
              </p>

              <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
                7.1 European Economic Area (EEA) Residents
              </h3>
              <p className="leading-relaxed text-gray-600">
                Under the General Data Protection Regulation (GDPR), you have
                the right to:
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
                <li>
                  <strong>Access:</strong> Request a copy of your personal data
                </li>
                <li>
                  <strong>Rectification:</strong> Request correction of
                  inaccurate data
                </li>
                <li>
                  <strong>Erasure:</strong> Request deletion of your personal
                  data
                </li>
                <li>
                  <strong>Restriction:</strong> Request limitation of processing
                </li>
                <li>
                  <strong>Portability:</strong> Receive your data in a
                  structured, machine-readable format
                </li>
                <li>
                  <strong>Object:</strong> Object to processing based on
                  legitimate interests
                </li>
                <li>
                  <strong>Withdraw consent:</strong> Withdraw consent at any
                  time where processing is based on consent
                </li>
              </ul>

              <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
                7.2 California Residents
              </h3>
              <p className="leading-relaxed text-gray-600">
                Under the California Consumer Privacy Act (CCPA), you have
                additional rights including the right to know what personal
                information we collect, the right to delete your information,
                and the right to opt-out of the sale of personal information. We
                do not sell personal information.
              </p>

              <p className="mt-4 leading-relaxed text-gray-600">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:privacy@flowoptimo.com"
                  className="text-primary-600 underline hover:text-primary-700"
                >
                  privacy@flowoptimo.com
                </a>
                .
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                8. Children&apos;s Privacy
              </h2>
              <p className="leading-relaxed text-gray-600">
                Our Service is not directed to individuals under the age of 16.
                We do not knowingly collect personal information from children
                under 16. If you become aware that a child has provided us with
                personal information, please contact us at{" "}
                <a
                  href="mailto:privacy@flowoptimo.com"
                  className="text-primary-600 underline hover:text-primary-700"
                >
                  privacy@flowoptimo.com
                </a>
                . If we become aware that we have collected personal information
                from a child under 16 without verification of parental consent,
                we will take steps to delete that information.
              </p>
            </section>

            {/* International Data Transfers */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                9. International Data Transfers
              </h2>
              <p className="leading-relaxed text-gray-600">
                Your information may be transferred to and processed in
                countries other than your country of residence. These countries
                may have data protection laws that are different from the laws
                of your country.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                When we transfer personal information from the EEA, UK, or
                Switzerland to other countries, we use appropriate safeguards
                such as Standard Contractual Clauses approved by the European
                Commission, or we rely on an adequacy decision by the European
                Commission.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                10. Changes to This Policy
              </h2>
              <p className="leading-relaxed text-gray-600">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date. For
                material changes, we will provide additional notice, such as
                adding a statement to our homepage or sending you an email
                notification.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                We encourage you to review this Privacy Policy periodically to
                stay informed about how we are protecting your information.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                11. Contact Us
              </h2>
              <p className="leading-relaxed text-gray-600">
                If you have any questions about this Privacy Policy or our
                privacy practices, please contact us at:
              </p>
              <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-6">
                <p className="font-semibold text-gray-900">FlowOptimo</p>
                <p className="mt-2 text-gray-600">
                  Email:{" "}
                  <a
                    href="mailto:privacy@flowoptimo.com"
                    className="text-primary-600 underline hover:text-primary-700"
                  >
                    privacy@flowoptimo.com
                  </a>
                </p>
                <p className="text-gray-600">
                  Website:{" "}
                  <a
                    href="https://flowoptimo.com"
                    className="text-primary-600 underline hover:text-primary-700"
                  >
                    flowoptimo.com
                  </a>
                </p>
              </div>
              <p className="mt-4 leading-relaxed text-gray-600">
                For EEA residents, you also have the right to lodge a complaint
                with your local data protection authority if you believe we have
                not complied with applicable data protection laws.
              </p>
            </section>

            {/* Back to Home */}
            <div className="mt-12 border-t border-gray-200 pt-8">
              <Link
                href="/"
                className="text-primary-600 underline hover:text-primary-700"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
