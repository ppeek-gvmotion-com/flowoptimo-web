import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - FlowOptimo",
  description:
    "Read the terms and conditions governing your use of FlowOptimo vacation rental operations software.",
};

export default function TermsOfServicePage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              Terms of Service
            </h1>
            <p className="mt-4 text-gray-600">Last updated: December 2024</p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Introduction & Acceptance */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                1. Introduction & Acceptance
              </h2>
              <p className="leading-relaxed text-gray-600">
                Welcome to FlowOptimo. These Terms of Service (&quot;Terms&quot;)
                govern your access to and use of the FlowOptimo website,
                applications, and services (collectively, the
                &quot;Service&quot;) provided by FlowOptimo (&quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;).
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                By accessing or using our Service, you agree to be bound by
                these Terms. If you disagree with any part of these Terms, you
                may not access the Service. If you are using the Service on
                behalf of an organization, you represent and warrant that you
                have the authority to bind that organization to these Terms.
              </p>
            </section>

            {/* Description of Service */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                2. Description of Service
              </h2>
              <p className="leading-relaxed text-gray-600">
                FlowOptimo provides vacation rental operations software that
                helps property managers streamline their operations. Our Service
                includes:
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
                <li>Property and booking management</li>
                <li>Cleaner scheduling and task management</li>
                <li>Smart dispatch and auto-scheduling</li>
                <li>Route optimization for cleaning teams</li>
                <li>WhatsApp and communication integrations</li>
                <li>Owner portal and reporting</li>
                <li>SES compliance tools (where applicable)</li>
              </ul>
              <p className="mt-4 leading-relaxed text-gray-600">
                We reserve the right to modify, suspend, or discontinue any
                aspect of the Service at any time, with or without notice.
              </p>
            </section>

            {/* User Accounts */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                3. User Accounts
              </h2>
              <p className="leading-relaxed text-gray-600">
                To access certain features of the Service, you must create an
                account. When creating an account, you agree to:
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
                <li>
                  Provide accurate, current, and complete information during
                  registration
                </li>
                <li>
                  Maintain and promptly update your account information to keep
                  it accurate
                </li>
                <li>
                  Maintain the security and confidentiality of your login
                  credentials
                </li>
                <li>
                  Accept responsibility for all activities that occur under your
                  account
                </li>
                <li>
                  Notify us immediately of any unauthorized use of your account
                </li>
              </ul>
              <p className="mt-4 leading-relaxed text-gray-600">
                We reserve the right to suspend or terminate accounts that
                violate these Terms or that we reasonably believe may pose a
                security risk.
              </p>
            </section>

            {/* Subscription & Billing */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                4. Subscription & Billing
              </h2>

              <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
                4.1 Subscription Plans
              </h3>
              <p className="leading-relaxed text-gray-600">
                FlowOptimo offers various subscription plans with different
                features and pricing. Plan details, including pricing per
                property and included features, are available on our{" "}
                <Link
                  href="/pricing"
                  className="text-primary-600 underline hover:text-primary-700"
                >
                  pricing page
                </Link>
                .
              </p>

              <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
                4.2 Free Trial
              </h3>
              <p className="leading-relaxed text-gray-600">
                We may offer a free trial period for new users. At the end of
                the trial period, your account will automatically convert to a
                paid subscription unless you cancel before the trial ends. No
                credit card is required to start the trial.
              </p>

              <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
                4.3 Billing
              </h3>
              <p className="leading-relaxed text-gray-600">
                Subscriptions are billed in advance on a monthly or annual basis
                depending on your selected plan. You authorize us to charge your
                designated payment method for all applicable fees. All fees are
                quoted in Euros (€) unless otherwise specified.
              </p>

              <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
                4.4 Price Changes
              </h3>
              <p className="leading-relaxed text-gray-600">
                We may modify our pricing at any time. Price changes will not
                apply to your current billing period but will take effect in the
                following billing period. We will provide at least 30 days&apos;
                notice of any price increases.
              </p>

              <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
                4.5 Refunds
              </h3>
              <p className="leading-relaxed text-gray-600">
                Subscription fees are non-refundable except where required by
                law. If you cancel your subscription, you will continue to have
                access to the Service until the end of your current billing
                period.
              </p>
            </section>

            {/* Acceptable Use Policy */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                5. Acceptable Use Policy
              </h2>
              <p className="leading-relaxed text-gray-600">
                You agree not to use the Service to:
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
                <li>
                  Violate any applicable laws, regulations, or third-party
                  rights
                </li>
                <li>
                  Upload or transmit viruses, malware, or other malicious code
                </li>
                <li>
                  Attempt to gain unauthorized access to the Service or related
                  systems
                </li>
                <li>
                  Interfere with or disrupt the integrity or performance of the
                  Service
                </li>
                <li>
                  Collect or harvest user data without authorization
                </li>
                <li>
                  Use the Service for any fraudulent or deceptive purposes
                </li>
                <li>
                  Reverse engineer, decompile, or disassemble any part of the
                  Service
                </li>
                <li>
                  Resell, sublicense, or redistribute the Service without our
                  written consent
                </li>
                <li>
                  Send spam or unsolicited communications through the Service
                </li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                6. Intellectual Property
              </h2>
              <p className="leading-relaxed text-gray-600">
                The Service and its original content (excluding content provided
                by users), features, and functionality are and will remain the
                exclusive property of FlowOptimo and its licensors. The Service
                is protected by copyright, trademark, and other intellectual
                property laws.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Our trademarks and trade dress may not be used in connection
                with any product or service without our prior written consent.
                You are granted a limited, non-exclusive, non-transferable
                license to access and use the Service for its intended purpose,
                subject to these Terms.
              </p>
            </section>

            {/* User Content */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                7. User Content
              </h2>
              <p className="leading-relaxed text-gray-600">
                You retain ownership of any content, data, or information you
                submit to the Service (&quot;User Content&quot;). By submitting
                User Content, you grant us a worldwide, non-exclusive,
                royalty-free license to use, process, store, and display your
                User Content solely as necessary to provide the Service to you.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                You represent and warrant that you have all necessary rights to
                submit your User Content and that such content does not violate
                any third-party rights or applicable laws.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                8. Third-Party Services
              </h2>
              <p className="leading-relaxed text-gray-600">
                The Service may integrate with or contain links to third-party
                services, including but not limited to:
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
                <li>WhatsApp Business API for messaging</li>
                <li>Payment processors for billing</li>
                <li>Mapping services for route optimization</li>
                <li>Calendar and booking platform integrations</li>
              </ul>
              <p className="mt-4 leading-relaxed text-gray-600">
                Your use of third-party services is subject to their respective
                terms and privacy policies. We are not responsible for the
                content, policies, or practices of any third-party services.
              </p>
            </section>

            {/* Disclaimers */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                9. Disclaimers
              </h2>
              <p className="leading-relaxed text-gray-600">
                THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS
                AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                AND NON-INFRINGEMENT.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                We do not warrant that the Service will be uninterrupted,
                error-free, or completely secure. We do not guarantee any
                specific results from use of the Service, including but not
                limited to time savings, cost reductions, or operational
                improvements.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                10. Limitation of Liability
              </h2>
              <p className="leading-relaxed text-gray-600">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL
                FLOWOPTIMO, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS,
                SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT
                LIMITATION LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER
                INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
                <li>Your access to or use of (or inability to use) the Service</li>
                <li>Any conduct or content of any third party on the Service</li>
                <li>Any content obtained from the Service</li>
                <li>
                  Unauthorized access, use, or alteration of your transmissions
                  or content
                </li>
              </ul>
              <p className="mt-4 leading-relaxed text-gray-600">
                Our total liability to you for any claims arising out of or
                relating to these Terms or the Service shall not exceed the
                amount you paid to us in the twelve (12) months preceding the
                claim.
              </p>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                11. Indemnification
              </h2>
              <p className="leading-relaxed text-gray-600">
                You agree to defend, indemnify, and hold harmless FlowOptimo and
                its officers, directors, employees, contractors, agents,
                licensors, and suppliers from and against any claims,
                liabilities, damages, judgments, awards, losses, costs,
                expenses, or fees (including reasonable attorneys&apos; fees)
                arising out of or relating to your violation of these Terms or
                your use of the Service.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                12. Termination
              </h2>
              <p className="leading-relaxed text-gray-600">
                You may terminate your account at any time by contacting us or
                through your account settings. We may terminate or suspend your
                account immediately, without prior notice or liability, for any
                reason, including if you breach these Terms.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Upon termination:
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
                <li>
                  Your right to use the Service will immediately cease
                </li>
                <li>
                  You may request export of your data within 30 days of
                  termination
                </li>
                <li>
                  We may delete your account and data after 30 days
                </li>
                <li>
                  Provisions that by their nature should survive termination
                  will survive
                </li>
              </ul>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                13. Governing Law
              </h2>
              <p className="leading-relaxed text-gray-600">
                These Terms shall be governed by and construed in accordance
                with the laws of Spain, without regard to its conflict of law
                provisions. Any legal action or proceeding arising out of or
                relating to these Terms shall be brought exclusively in the
                courts located in Barcelona, Spain, and you consent to the
                personal jurisdiction of such courts.
              </p>
            </section>

            {/* Dispute Resolution */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                14. Dispute Resolution
              </h2>
              <p className="leading-relaxed text-gray-600">
                Before initiating any legal action, you agree to first contact
                us and attempt to resolve the dispute informally. We will
                attempt to resolve the dispute through good-faith negotiations
                within 30 days.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                If informal resolution is not successful, either party may
                pursue formal legal remedies as provided in these Terms.
                European Union consumers may also be entitled to use the Online
                Dispute Resolution platform provided by the European Commission.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                15. Changes to Terms
              </h2>
              <p className="leading-relaxed text-gray-600">
                We reserve the right to modify these Terms at any time. We will
                notify you of any changes by posting the new Terms on this page
                and updating the &quot;Last updated&quot; date. For material
                changes, we will provide additional notice, such as sending an
                email or displaying a prominent notice within the Service.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Your continued use of the Service after any changes to these
                Terms constitutes your acceptance of the revised Terms. If you
                do not agree to the new Terms, you must stop using the Service.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                16. Contact Information
              </h2>
              <p className="leading-relaxed text-gray-600">
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-6">
                <p className="font-semibold text-gray-900">FlowOptimo</p>
                <p className="mt-2 text-gray-600">
                  Email:{" "}
                  <a
                    href="mailto:legal@flowoptimo.com"
                    className="text-primary-600 underline hover:text-primary-700"
                  >
                    legal@flowoptimo.com
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
