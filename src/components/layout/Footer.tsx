import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary-dark">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-horizontal.svg"
              alt="FlowOptimo"
              className="h-8"
            />
            <p className="mt-4 text-sm text-gray-300">
              Streamline your vacation rental operations with intelligent
              automation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Product</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/features" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy#cookies" className="hover:text-white">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} FlowOptimo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
