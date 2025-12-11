import Link from "next/link";

import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Automate Your{" "}
              <span className="text-primary-600">Vacation Rental</span>{" "}
              Operations
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              FlowOptimo streamlines cleaner scheduling, route optimization, and
              guest communication. Save hours every week with intelligent
              automation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/pricing">
                <Button size="lg">Start Free Trial</Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg">
                  See Features
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              14-day free trial. No credit card required.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-xl bg-gray-100 shadow-2xl aspect-[4/3] flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-dashboard.png"
                alt="FlowOptimo Dashboard"
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
