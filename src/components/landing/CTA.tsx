import Link from "next/link";

import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="bg-primary-dark py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to Streamline Your Operations?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          Join hundreds of vacation rental managers who save 10+ hours per week
          with FlowOptimo.
        </p>
        <div className="mt-8">
          <Link href="/pricing">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary-dark hover:bg-gray-100"
            >
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
