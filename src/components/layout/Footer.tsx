import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-horizontal.svg"
              alt="FlowOptimo"
              className="h-8"
            />
            <p className="mt-4 text-sm text-gray-600">
              Streamline your vacation rental operations with intelligent
              automation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Product</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/features" className="hover:text-gray-900">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-gray-900">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} FlowOptimo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
